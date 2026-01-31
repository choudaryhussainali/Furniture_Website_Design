import React, { createContext, useContext } from 'react';

// Simplified context for compatibility
const VoiceContext = createContext<any>(undefined);

export const VoiceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <VoiceContext.Provider value={{ isActive: false, state: 'DISCONNECTED', toggleConcierge: () => {}, navigateTo: () => {} }}>
      {children}
    </VoiceContext.Provider>
  );
};

export const useVoice = () => {
  return useContext(VoiceContext);
};