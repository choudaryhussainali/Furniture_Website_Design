import React from 'react';
import { useVoice } from '../contexts/VoiceContext';
import { Mic, MicOff, Radio } from 'lucide-react';

const VoiceOrb: React.FC = () => {
  const { isActive, toggleConcierge, state } = useVoice();

  return (
    <div className="fixed bottom-8 right-8 z-40 flex flex-col items-end gap-4">
       {/* Status Label */}
      {isActive && (
        <div className="bg-stone-900/90 backdrop-blur text-stone-100 px-4 py-2 rounded-lg text-sm font-sans tracking-wide shadow-xl animate-slide-up">
           {state === 'LISTENING' && "Listening..."}
           {state === 'SPEAKING' && "Speaking..."}
           {state === 'IDLE' && "Ready"}
           {state === 'THINKING' && "Thinking..."}
        </div>
      )}

      {/* Main Button */}
      <button
        onClick={toggleConcierge}
        className={`relative group flex items-center justify-center w-16 h-16 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 ${
          isActive ? 'bg-stone-900 text-gold-400' : 'bg-gold-500 text-stone-900'
        }`}
        aria-label="Toggle Concierge"
      >
        {/* Pulse Effect when Active */}
        {isActive && (
            <span className="absolute inset-0 rounded-full bg-gold-400/30 animate-ping"></span>
        )}
        
        {isActive ? (
             state === 'SPEAKING' ? <Radio className="w-6 h-6 animate-pulse" /> : <Mic className="w-6 h-6" />
        ) : (
             <MicOff className="w-6 h-6" />
        )}
      </button>
    </div>
  );
};

export default VoiceOrb;