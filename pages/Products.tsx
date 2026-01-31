import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import ScrollReveal from '../components/ScrollReveal';
import { Search, Filter, ArrowUpRight, Plus, SlidersHorizontal } from 'lucide-react';

const CATEGORIES = ['All', 'Table', 'Chair', 'Sofa', 'Lighting', 'Decor'];

const Products: React.FC = () => {
  const [category, setCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState<'price-asc' | 'price-desc' | 'newest'>('newest');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchCat = category === 'All' || p.category === category;
      const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    }).sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price;
      if (sort === 'price-desc') return b.price - a.price;
      return 0; // default order
    });
  }, [category, search, sort]);

  return (
    <div className="w-full bg-[#18181b] min-h-screen pt-24 pb-24 text-stone-100">
      
      {/* 🔹 HEADER */}
      <div className="max-w-[1400px] mx-auto px-6 mb-16">
        <ScrollReveal>
          <h1 className="text-4xl md:text-6xl font-medium mb-6">Our Collection</h1>
          <p className="text-stone-400 max-w-2xl text-lg">
            Explore our meticulously crafted furniture pieces, designed to bring comfort, style, and functionality to your living spaces.
          </p>
        </ScrollReveal>
      </div>

      {/* 🔹 CONTROLS */}
      <div className="sticky top-20 z-30 bg-[#18181b]/95 backdrop-blur-md border-b border-stone-800 py-6 mb-12">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between gap-6 items-center">
          
          {/* Categories */}
          <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
             {CATEGORIES.map(cat => (
               <button
                 key={cat}
                 onClick={() => setCategory(cat)}
                 className={`px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                   category === cat 
                   ? 'bg-white text-black' 
                   : 'bg-[#27272a] text-stone-400 hover:text-white hover:bg-[#3f3f46]'
                 }`}
               >
                 {cat}
               </button>
             ))}
          </div>

          {/* Search & Sort */}
          <div className="flex gap-4 w-full md:w-auto">
             <div className="relative flex-grow md:w-64">
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-500" size={16} />
               <input 
                 type="text" 
                 placeholder="Search products..." 
                 value={search}
                 onChange={(e) => setSearch(e.target.value)}
                 className="w-full bg-[#27272a] rounded-full py-3 pl-12 pr-6 text-sm text-white placeholder-stone-500 focus:outline-none focus:ring-1 focus:ring-white"
               />
             </div>
             
             <div className="relative group">
                <button className="h-full px-4 rounded-full bg-[#27272a] text-stone-400 hover:text-white flex items-center gap-2">
                   <SlidersHorizontal size={16} />
                </button>
                <div className="absolute right-0 top-full mt-2 w-48 bg-[#27272a] rounded-xl border border-stone-700 shadow-xl overflow-hidden hidden group-hover:block p-1">
                   <button onClick={() => setSort('newest')} className={`w-full text-left px-4 py-3 text-sm rounded-lg ${sort === 'newest' ? 'bg-white text-black' : 'text-stone-300 hover:bg-[#3f3f46]'}`}>Newest</button>
                   <button onClick={() => setSort('price-asc')} className={`w-full text-left px-4 py-3 text-sm rounded-lg ${sort === 'price-asc' ? 'bg-white text-black' : 'text-stone-300 hover:bg-[#3f3f46]'}`}>Price: Low to High</button>
                   <button onClick={() => setSort('price-desc')} className={`w-full text-left px-4 py-3 text-sm rounded-lg ${sort === 'price-desc' ? 'bg-white text-black' : 'text-stone-300 hover:bg-[#3f3f46]'}`}>Price: High to Low</button>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* 🔹 GRID */}
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
         {filteredProducts.length === 0 ? (
             <div className="col-span-full py-20 text-center text-stone-500">
               <p className="text-xl">No products found matching your criteria.</p>
               <button onClick={() => {setCategory('All'); setSearch('')}} className="mt-4 text-white underline">Clear Filters</button>
             </div>
         ) : (
            filteredProducts.map((product, i) => (
              <ScrollReveal key={product.id} delay={i % 4 * 0.05} className="group">
                  <Link to={`/product/${product.id}`} className="block h-full bg-[#27272a] rounded-[2rem] p-4 flex flex-col relative transition-all duration-500 hover:bg-[#3f3f46] hover:-translate-y-2">
                      <div className="relative aspect-square rounded-[1.5rem] overflow-hidden bg-[#18181b] mb-4">
                          <img 
                            src={product.imageUrl} 
                            alt={product.name} 
                            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110" 
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                          
                          <div className="absolute top-4 right-4 bg-white text-black w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                              <ArrowUpRight size={16} />
                          </div>
                      </div>
                      
                      <div className="mt-auto">
                        <div className="flex justify-between items-start mb-2">
                           <div>
                              <p className="text-stone-500 text-xs font-bold tracking-wider uppercase mb-1">{product.category}</p>
                              <h3 className="text-white font-medium text-lg leading-tight pr-4">{product.name}</h3>
                           </div>
                           <span className="text-white font-bold text-lg">${product.price}</span>
                        </div>
                      </div>
                  </Link>
              </ScrollReveal>
            ))
         )}
      </div>
      
      {/* 🔹 LOAD MORE MOCK */}
      {filteredProducts.length > 0 && (
        <div className="mt-24 text-center">
            <button className="bg-transparent border border-stone-700 text-stone-300 px-8 py-3 rounded-full hover:bg-white hover:text-black hover:border-white transition-all">
                Load More Products
            </button>
        </div>
      )}

    </div>
  );
};

export default Products;