import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onComplete, 800); // Wait for fade out
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-stone-900 transition-opacity duration-700 ${show ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="text-center">
        <h1 className="font-serif text-4xl md:text-6xl text-stone-100 tracking-widest animate-fade-in">
          D'COZY HOME
        </h1>
        <p className="mt-4 text-gold-400 font-sans text-sm tracking-[0.3em] uppercase opacity-0 animate-[fadeIn_1s_ease-out_1s_forwards]">
          Comfort Meets Craftsmanship
        </p>
      </div>
    </div>
  );
};

export default Preloader;