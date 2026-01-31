import React, { useState } from 'react';

const FABRICS = [
    { id: 'linen', name: 'Belgian Linen', color: 'bg-[#e5e0d4]' },
    { id: 'velvet', name: 'Royal Velvet', color: 'bg-[#1a2e35]' },
    { id: 'leather', name: 'Italian Leather', color: 'bg-[#5c4033]' },
];

const Builder: React.FC = () => {
  const [selectedFabric, setSelectedFabric] = useState(FABRICS[0]);

  return (
    <div className="pt-24 min-h-screen bg-stone-50 flex flex-col md:flex-row">
        {/* Preview Area */}
        <div className="w-full md:w-2/3 h-[50vh] md:h-[calc(100vh-6rem)] bg-stone-200 relative flex items-center justify-center">
            <div className="absolute top-8 left-8">
                <h1 className="font-serif text-3xl text-stone-800">Bespoke Studio</h1>
                <p className="text-stone-500 text-sm">Configure your masterpiece</p>
            </div>
            
            {/* Mock 3D Object */}
            <div 
                className={`w-64 h-64 md:w-96 md:h-96 shadow-2xl transition-colors duration-700 rounded-lg flex items-center justify-center`}
                style={{ backgroundColor: selectedFabric.id === 'linen' ? '#e5e0d4' : selectedFabric.id === 'velvet' ? '#1a2e35' : '#5c4033' }}
            >
                <span className={`font-serif text-2xl ${selectedFabric.id === 'linen' ? 'text-stone-800' : 'text-stone-200'}`}>
                    3D Preview
                </span>
            </div>
        </div>

        {/* Controls */}
        <div className="w-full md:w-1/3 bg-white p-8 md:p-12 overflow-y-auto">
            <div className="space-y-12">
                <div>
                    <h3 className="uppercase tracking-widest text-xs font-bold text-stone-900 mb-6">Select Fabric</h3>
                    <div className="grid grid-cols-1 gap-4">
                        {FABRICS.map(f => (
                            <button 
                                key={f.id}
                                onClick={() => setSelectedFabric(f)}
                                className={`flex items-center gap-4 p-4 border transition-all ${selectedFabric.id === f.id ? 'border-gold-500 bg-stone-50' : 'border-stone-200 hover:border-stone-400'}`}
                            >
                                <div className={`w-8 h-8 rounded-full ${f.color} shadow-sm`}></div>
                                <span className="font-sans text-stone-800">{f.name}</span>
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="uppercase tracking-widest text-xs font-bold text-stone-900 mb-6">Dimensions</h3>
                    <div className="flex gap-4">
                        <button className="flex-1 py-3 border border-stone-200 hover:border-stone-900 text-stone-600">2-Seater</button>
                        <button className="flex-1 py-3 border-2 border-stone-900 text-stone-900 font-bold">3-Seater</button>
                        <button className="flex-1 py-3 border border-stone-200 hover:border-stone-900 text-stone-600">L-Shape</button>
                    </div>
                </div>

                <div className="pt-8 border-t border-stone-100">
                    <div className="flex justify-between items-end mb-6">
                        <span className="text-stone-500">Total Estimate</span>
                        <span className="font-serif text-3xl text-stone-900">$4,200</span>
                    </div>
                    <button className="w-full bg-gold-600 text-white py-5 uppercase tracking-widest text-xs font-bold hover:bg-gold-700 transition">
                        Order Custom Piece
                    </button>
                    <p className="text-center text-xs text-stone-400 mt-4">
                        *Production time: 6-8 weeks
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Builder;