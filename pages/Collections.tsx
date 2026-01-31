import React from 'react';
import { COLLECTIONS } from '../constants';
import { ArrowRight } from 'lucide-react';

const Collections: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="font-serif text-5xl md:text-6xl text-stone-900 mb-6">Our Collections</h1>
        <p className="text-stone-600 max-w-2xl text-lg mb-16">
            Timeless designs curated for the modern connoisseur. Browse our exclusive lines created in collaboration with world-renowned designers.
        </p>

        <div className="space-y-24">
            {COLLECTIONS.map((col, idx) => (
                <div key={col.id} className={`flex flex-col md:flex-row gap-12 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="w-full md:w-1/2 aspect-video overflow-hidden">
                        <img src={col.image} alt={col.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="w-full md:w-1/2 space-y-6">
                        <span className="text-gold-600 uppercase tracking-widest text-xs font-bold">Series {idx + 1}00</span>
                        <h2 className="font-serif text-4xl text-stone-900">{col.title}</h2>
                        <p className="text-stone-600 text-lg leading-relaxed">{col.description}</p>
                        <button className="flex items-center gap-3 text-stone-900 uppercase tracking-widest text-xs font-bold border-b border-stone-300 pb-2 hover:border-gold-500 hover:text-gold-600 transition-colors">
                            Discover Series <ArrowRight size={16} />
                        </button>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;