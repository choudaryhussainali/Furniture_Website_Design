import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { GeminiLiveService } from '../services/geminiLiveService';
import { ConciergeState } from '../types';

interface VoiceContextType {
  isActive: boolean;
  state: ConciergeState;
  toggleConcierge: () => void;
  navigateTo: (path: string) => void; // Exposed for manual navigation to inform system? Not strictly needed for this demo.
}

const VoiceContext = createContext<VoiceContextType | undefined>(undefined);

export const VoiceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isActive, setIsActive] = useState(false);
  const [state, setState] = useState<ConciergeState>(ConciergeState.DISCONNECTED);
  const serviceRef = useRef<GeminiLiveService | null>(null);
  
  // Need to use HashRouter's navigate, so we'll need to pass a callback or use a ref from App
  // For simplicity, we'll use window.location.hash for navigation triggering if outside router context
  // or pass a callback via a setter.
  const [pendingNavigation, setPendingNavigation] = useState<string | null>(null);

  useEffect(() => {
    if (pendingNavigation) {
       window.location.hash = pendingNavigation;
       setPendingNavigation(null);
    }
  }, [pendingNavigation]);

  const toggleConcierge = async () => {
    if (isActive) {
      // Shutdown
      serviceRef.current?.disconnect();
      serviceRef.current = null;
      setIsActive(false);
      setState(ConciergeState.DISCONNECTED);
    } else {
      // Startup
      if (!process.env.API_KEY) {
        alert('API Key is missing. Concierge cannot start.');
        return;
      }
      
      setIsActive(true);
      setState(ConciergeState.IDLE); // Brief idle before connect

      const service = new GeminiLiveService(process.env.API_KEY);
      serviceRef.current = service;

      service.onStateChange = (newStateStr) => {
        // Map string to enum
        const newState = newStateStr as ConciergeState;
        setState(newState);
      };

      service.onNavigate = (path) => {
        setPendingNavigation(path);
      };

      await service.connect();
    }
  };

  return (
    <VoiceContext.Provider value={{ isActive, state, toggleConcierge, navigateTo: (p) => setPendingNavigation(p) }}>
      {children}
    </VoiceContext.Provider>
  );
};

export const useVoice = () => {
  const context = useContext(VoiceContext);
  if (!context) throw new Error('useVoice must be used within VoiceProvider');
  return context;
};