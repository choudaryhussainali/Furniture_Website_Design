import { GoogleGenAI, LiveSession, FunctionDeclaration, Type } from "@google/genai";
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
  private session: LiveSession | null = null;
  private audioContext: AudioContext | null = null;
  private inputSource: MediaStreamAudioSourceNode | null = null;
  private processor: ScriptProcessorNode | null = null;
  private nextStartTime: number = 0;
  
  public onNavigate: ((path: string) => void) | null = null;
  public onStateChange: ((state: string) => void) | null = null;

  constructor(apiKey: string) {
    this.ai = new GoogleGenAI({ apiKey });
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
      this.session = await this.ai.live.connect({
        model: 'gemini-2.5-flash-native-audio-preview-12-2025',
        config: {
          responseModalities: ['AUDIO'], // Use string literal to match type expectation if enum fails
          systemInstruction: SYSTEM_INSTRUCTION,
          tools: [{ functionDeclarations: [navigateTool] }],
        },
      });

      // Handle Input (Microphone -> Gemini)
      // Note: ScriptProcessor is deprecated but widely supported for this quick implementation.
      // AudioWorklet is better for prod but requires separate file serving.
      const inputContext = new AudioContext({ sampleRate: 16000 });
      this.inputSource = inputContext.createMediaStreamSource(stream);
      this.processor = inputContext.createScriptProcessor(4096, 1, 1);

      this.processor.onaudioprocess = async (e) => {
        const inputData = e.inputBuffer.getChannelData(0);
        const int16Data = float32ToInt16(inputData);
        const base64Data = arrayBufferToBase64(int16Data.buffer);

        if (this.session) {
          try {
              await this.session.sendRealtimeInput({
                media: {
                  mimeType: 'audio/pcm;rate=16000',
                  data: base64Data
                }
              });
          } catch(err) {
              console.error("Error sending audio input", err);
          }
        }
      };

      this.inputSource.connect(this.processor);
      this.processor.connect(inputContext.destination);

      // Handle Output (Gemini -> Speaker)
      this.listenToResponse();
      
    } catch (error) {
      console.error('Connection failed:', error);
      this.notifyState('DISCONNECTED');
    }
  }

  private async listenToResponse() {
    if (!this.session) return;

    for await (const message of this.session.receive()) {
      // 1. Handle Audio
      const audioData = message.serverContent?.modelTurn?.parts?.[0]?.inlineData?.data;
      if (audioData) {
        this.notifyState('SPEAKING');
        await this.playAudioChunk(audioData);
      } else {
          // If no audio and not tool call, we might be thinking or listening
          // But effectively we are idle from audio perspective briefly
          // this.notifyState('IDLE');
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
            await this.session.sendToolResponse({
                functionResponses: [{
                    id: call.id,
                    name: call.name,
                    response: { result: 'Navigated successfully' }
                }]
            });
          }
        }
      }

      // 3. Handle Interruption
      if (message.serverContent?.interrupted) {
        this.nextStartTime = 0; // Reset audio queue
        this.notifyState('LISTENING');
      }
      
      // 4. Turn complete
      if (message.serverContent?.turnComplete) {
         this.notifyState('IDLE');
      }
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
    const startTime = Math.max(now, this.nextStartTime);
    source.start(startTime);
    
    // Update next start time
    this.nextStartTime = startTime + audioBuffer.duration;
    
    source.onended = () => {
        // Could check if queue empty to set state to IDLE/LISTENING
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
    if (this.processor) this.processor.disconnect();
    if (this.inputSource) this.inputSource.disconnect();
    if (this.session) {
        // No explicit close method in session object typically, handled by connection drop
        // But we stop sending.
        this.session = null;
    }
    if (this.audioContext) {
      this.audioContext.close();
      this.audioContext = null;
    }
    this.notifyState('DISCONNECTED');
  }
}