import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { Shield, Truck, RefreshCw, ArrowLeft, Star, ArrowUpRight, Plus } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    return (
        <div className="min-h-screen bg-[#18181b] flex flex-col items-center justify-center text-white">
            <h2 className="text-2xl mb-4">Product not found.</h2>
            <Link to="/products" className="underline">Back to Products</Link>
        </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-[#18181b] text-stone-100 pb-24">
      <div className="max-w-[1400px] mx-auto px-6">
         
         <div className="mb-8">
             <Link to="/products" className="inline-flex items-center gap-2 text-stone-400 hover:text-white transition-colors">
                 <ArrowLeft size={16} /> Back to Collection
             </Link>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
             
             {/* 🔹 LEFT: GALLERY */}
             <div className="lg:col-span-7 space-y-6">
                 <ScrollReveal className="aspect-square w-full bg-[#27272a] rounded-[3rem] overflow-hidden relative">
                     <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover object-center" />
                 </ScrollReveal>
                 <div className="grid grid-cols-3 gap-4 md:gap-6">
                     {[1,2,3].map((_, i) => (
                         <ScrollReveal delay={0.1 * i} key={i} className="aspect-square bg-[#27272a] rounded-3xl overflow-hidden cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
                             {/* Using same image for mock, in reality would be different angles */}
                             <img src={product.imageUrl} alt="Detail" className="w-full h-full object-cover object-center scale-150" />
                         </ScrollReveal>
                     ))}
                 </div>
             </div>

             {/* 🔹 RIGHT: INFO */}
             <div className="lg:col-span-5 flex flex-col justify-center">
                 <ScrollReveal delay={0.1}>
                     <div className="flex items-center gap-2 mb-4">
                        <span className="px-3 py-1 rounded-full bg-[#27272a] border border-stone-700 text-xs font-bold uppercase tracking-wider text-stone-300">
                            {product.category}
                        </span>
                        <div className="flex text-yellow-500">
                            {[...Array(5)].map((_,i) => <Star key={i} size={12} fill="currentColor" />)}
                        </div>
                        <span className="text-xs text-stone-500">(24 Reviews)</span>
                     </div>
                     
                     <h1 className="text-4xl md:text-6xl font-medium leading-tight mb-6">{product.name}</h1>
                     <p className="text-3xl font-bold mb-8">${product.price.toLocaleString()}</p>
                     
                     <p className="text-stone-400 text-lg leading-relaxed mb-10 border-l-2 border-stone-700 pl-6">
                         {product.description}
                     </p>

                     <div className="bg-[#27272a] rounded-3xl p-8 mb-10">
                         <h3 className="uppercase tracking-widest text-xs font-bold text-stone-500 mb-6">Key Features</h3>
                         <ul className="grid grid-cols-1 gap-3">
                             {product.features.map(f => (
                                 <li key={f} className="flex items-center gap-3 text-sm">
                                     <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                     {f}
                                 </li>
                             ))}
                         </ul>
                     </div>

                     <div className="flex gap-4 mb-10">
                         <button className="flex-grow bg-white text-black py-4 rounded-full font-bold text-lg hover:bg-stone-200 transition-colors flex items-center justify-center gap-2">
                             Add to Cart <Plus size={20} />
                         </button>
                         <button className="w-16 h-16 rounded-full border border-stone-700 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                             <ArrowUpRight size={20} />
                         </button>
                     </div>

                     <div className="grid grid-cols-3 gap-2 text-center text-[10px] text-stone-400">
                         <div className="bg-[#27272a] py-4 rounded-2xl flex flex-col items-center gap-2">
                             <Truck size={18} className="text-white" />
                             <span>Free Shipping</span>
                         </div>
                         <div className="bg-[#27272a] py-4 rounded-2xl flex flex-col items-center gap-2">
                             <Shield size={18} className="text-white" />
                             <span>2 Year Warranty</span>
                         </div>
                         <div className="bg-[#27272a] py-4 rounded-2xl flex flex-col items-center gap-2">
                             <RefreshCw size={18} className="text-white" />
                             <span>30 Day Returns</span>
                         </div>
                     </div>
                 </ScrollReveal>
             </div>
         </div>
      </div>
    </div>
  );
};

export default ProductDetail;