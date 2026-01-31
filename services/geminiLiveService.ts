import { GoogleGenAI, LiveSession, FunctionDeclaration, Type, Modality, LiveServerMessage } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';
import { base64ToUint8Array, float32ToInt16, arrayBufferToBase64 } from '../utils/audio';

// Tool Definition for Navigation
const navigateTool: FunctionDeclaration = {
  name: 'navigate',
  parameters: {
    type: Type.OBJECT,
    description: 'Navigate the user to a specific page on the website.',
    properties: {
      path: {
        type: Type.STRING,
        description: 'The path to navigate to (e.g., /, /collections, /builder).',
      },
    },
    required: ['path'],
  },
};

export class GeminiLiveService {
  private ai: GoogleGenAI;
  private sessionPromise: Promise<LiveSession> | null = null;
  private audioContext: AudioContext | null = null;
  private inputSource: MediaStreamAudioSourceNode | null = null;
  private processor: ScriptProcessorNode | null = null;
  private nextStartTime: number = 0;
  private scheduledSources: Set<AudioBufferSourceNode> = new Set();
  
  public onNavigate: ((path: string) => void) | null = null;
  public onStateChange: ((state: string) => void) | null = null;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  async connect() {
    try {
      this.notifyState('LISTENING'); // Initial connection state
      
      // Setup Audio Context
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      
      // Get Microphone Stream
      const stream = await navigator.mediaDevices.getUserMedia({ audio: {
        sampleRate: 16000,
        channelCount: 1,
        echoCancellation: true
      }});

      // Connect to Gemini Live
      this.sessionPromise = this.ai.live.connect({
        model: 'gemini-2.5-flash-native-audio-preview-12-2025',
        callbacks: {
            onopen: () => {
                this.notifyState('LISTENING');
            },
            onmessage: async (message: LiveServerMessage) => {
                await this.handleMessage(message);
            },
            onclose: (e) => {
                console.log("Session closed", e);
                this.notifyState('DISCONNECTED');
            },
            onerror: (e) => {
                console.error("Session error", e);
                this.notifyState('DISCONNECTED');
            }
        },
        config: {
          responseModalities: [Modality.AUDIO], 
          systemInstruction: SYSTEM_INSTRUCTION,
          tools: [{ functionDeclarations: [navigateTool] }],
        },
      });

      // Handle Input (Microphone -> Gemini)
      const inputContext = new AudioContext({ sampleRate: 16000 });
      this.inputSource = inputContext.createMediaStreamSource(stream);
      this.processor = inputContext.createScriptProcessor(4096, 1, 1);

      this.processor.onaudioprocess = (e) => {
        const inputData = e.inputBuffer.getChannelData(0);
        const int16Data = float32ToInt16(inputData);
        const base64Data = arrayBufferToBase64(int16Data.buffer);

        if (this.sessionPromise) {
          this.sessionPromise.then((session) => {
              session.sendRealtimeInput({
                media: {
                  mimeType: 'audio/pcm;rate=16000',
                  data: base64Data
                }
              });
          }).catch(err => {
              console.error("Error sending input", err);
          });
        }
      };

      this.inputSource.connect(this.processor);
      this.processor.connect(inputContext.destination);
      
    } catch (error) {
      console.error('Connection failed:', error);
      this.notifyState('DISCONNECTED');
    }
  }

  private async handleMessage(message: LiveServerMessage) {
      // 1. Handle Audio
      const audioData = message.serverContent?.modelTurn?.parts?.[0]?.inlineData?.data;
      if (audioData) {
        this.notifyState('SPEAKING');
        await this.playAudioChunk(audioData);
      }

      // 2. Handle Tool Calls (Navigation)
      const toolCall = message.toolCall;
      if (toolCall) {
        for (const call of toolCall.functionCalls) {
          if (call.name === 'navigate') {
            const path = (call.args as any).path;
            if (this.onNavigate) {
              this.onNavigate(path);
            }
             // Send success response back to model
            if (this.sessionPromise) {
                const session = await this.sessionPromise;
                await session.sendToolResponse({
                    functionResponses: [{
                        id: call.id,
                        name: call.name,
                        response: { result: 'Navigated successfully' }
                    }]
                });
            }
          }
        }
      }

      // 3. Handle Interruption
      if (message.serverContent?.interrupted) {
        this.stopAllAudio();
        this.nextStartTime = 0; // Reset audio queue
        this.notifyState('LISTENING');
      }
      
      // 4. Turn complete
      if (message.serverContent?.turnComplete) {
         this.notifyState('IDLE');
      }
  }

  private stopAllAudio() {
      for (const source of this.scheduledSources) {
          try {
              source.stop();
          } catch(e) {
              // ignore
          }
      }
      this.scheduledSources.clear();
      // Reset timing to now to avoid large delays if we resume
      if (this.audioContext) {
          this.nextStartTime = this.audioContext.currentTime;
      }
  }

  private async playAudioChunk(base64Data: string) {
    if (!this.audioContext) return;

    const uint8Array = base64ToUint8Array(base64Data);
    const audioBuffer = await this.decodeAudioData(uint8Array);
    
    const source = this.audioContext.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(this.audioContext.destination);

    const now = this.audioContext.currentTime;
    // Schedule play
    // Ensure we don't schedule in the past
    this.nextStartTime = Math.max(now, this.nextStartTime);

    source.start(this.nextStartTime);
    
    // Update next start time
    this.nextStartTime = this.nextStartTime + audioBuffer.duration;
    
    this.scheduledSources.add(source);
    source.onended = () => {
        this.scheduledSources.delete(source);
    };
  }

  private async decodeAudioData(data: Uint8Array): Promise<AudioBuffer> {
      if (!this.audioContext) throw new Error("No Audio Context");
      
      // Raw PCM to AudioBuffer
      // 24kHz, 1 channel, 16-bit
      const int16 = new Int16Array(data.buffer);
      const float32 = new Float32Array(int16.length);
      for(let i=0; i<int16.length; i++) {
          float32[i] = int16[i] / 32768.0;
      }

      const buffer = this.audioContext.createBuffer(1, float32.length, 24000);
      buffer.copyToChannel(float32, 0);
      return buffer;
  }

  private notifyState(state: string) {
    if (this.onStateChange) {
      this.onStateChange(state);
    }
  }

  disconnect() {
    if (this.processor) {
        this.processor.disconnect();
        this.processor = null;
    }
    if (this.inputSource) {
        this.inputSource.disconnect();
        this.inputSource = null;
    }
    if (this.sessionPromise) {
        this.sessionPromise.then(session => {
            (session as any).close?.();
        });
        this.sessionPromise = null;
    }
    
    this.stopAllAudio();
    
    if (this.audioContext) {
      this.audioContext.close();
      this.audioContext = null;
    }
    this.notifyState('DISCONNECTED');
  }
}