import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Sparkle, Plus, Star } from 'lucide-react';
import { PRODUCTS, REVIEWS } from '../constants';
import ScrollReveal from '../components/ScrollReveal';

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'All' | 'Table' | 'Chair'>('All');
  const [heroImage, setHeroImage] = useState(PRODUCTS[0].imageUrl);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const filteredProducts = activeTab === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeTab);

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % PRODUCTS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#18181b] overflow-hidden text-stone-100">
      
      {/* 🔹 HERO SECTION */}
      <section className="relative px-6 py-8 md:py-16 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Typography */}
            <div className="lg:col-span-6 space-y-10 z-10">
                <ScrollReveal>
                    <h1 className="text-5xl md:text-7xl font-sans font-medium leading-[1.1]">
                        Standard Table and <br/>
                        Chair <span className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-rose-200 text-[#18181b] rounded-full mx-2"><Sparkle className="w-6 h-6 md:w-8 md:h-8 fill-current" /></span> Collections <br/>
                        for a Comfortable <br/>
                        Studying
                    </h1>
                </ScrollReveal>
                
                <ScrollReveal delay={0.2} className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                    <div className="max-w-xs text-stone-400 text-sm leading-relaxed border-l border-stone-700 pl-4">
                        Incorporating vibrant colors and playful designs, the Standard Children Book Table adds a touch of fun to study sessions.
                    </div>
                    <Link to="/collections" className="bg-[#e7e5e4] text-[#18181b] px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-white transition-colors">
                        Go to Shop <span className="bg-[#18181b] text-white rounded-full p-1"><ArrowRight size={14} /></span>
                    </Link>
                </ScrollReveal>
            </div>

            {/* Right: Product Visual */}
            <div className="lg:col-span-6 relative">
                 <ScrollReveal delay={0.4} className="relative z-10">
                    <div className="aspect-square bg-[#27272a] rounded-[3rem] overflow-hidden relative group">
                        {/* Background Accent Shape */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-[#3f3f46] rounded-[2.5rem] opacity-50 blur-3xl"></div>
                        
                        <img 
                            src={heroImage} 
                            alt="Hero Product" 
                            className="absolute inset-0 w-full h-full object-cover object-center p-8 md:p-12 transition-transform duration-700 hover:scale-105"
                        />

                        {/* Floating Price Tag */}
                        <div className="absolute bottom-8 left-8 bg-[#18181b] px-6 py-6 rounded-full flex flex-col items-center justify-center w-24 h-24 shadow-2xl border border-stone-800 z-20">
                             <span className="text-xl font-bold text-white">$26</span>
                             <span className="text-[10px] text-stone-400 uppercase">Only</span>
                             <div className="absolute -top-2 -right-2 bg-[#f0abfc] p-2 rounded-full text-[#18181b]">
                                 <ArrowUpRight size={16} />
                             </div>
                        </div>

                        {/* Thumbnails Control */}
                        <div className="absolute bottom-8 right-8 bg-[#18181b]/80 backdrop-blur p-2 rounded-full flex gap-2 border border-stone-700 z-20">
                             {[PRODUCTS[0].imageUrl, PRODUCTS[1].imageUrl, PRODUCTS[2].imageUrl].map((img, i) => (
                                 <button 
                                    key={i} 
                                    onClick={() => setHeroImage(img)}
                                    className={`w-12 h-12 rounded-full overflow-hidden border-2 transition-all ${heroImage === img ? 'border-white' : 'border-transparent opacity-50 hover:opacity-100'}`}
                                 >
                                     <img src={img} className="w-full h-full object-cover object-center" />
                                 </button>
                             ))}
                        </div>
                    </div>
                 </ScrollReveal>
            </div>
        </div>
      </section>

      {/* 🔹 CREATIVE COLLECTIONS */}
      <section className="py-24 bg-[#18181b]">
          <div className="max-w-[1400px] mx-auto px-6 text-center mb-16">
              <ScrollReveal>
                  <h2 className="text-4xl md:text-6xl font-medium max-w-3xl mx-auto leading-tight">
                      Our Collections all are <br/>
                      <span className="inline-block bg-[#27272a] px-4 py-1 rounded-full text-3xl md:text-5xl mx-2 align-middle border border-stone-700">🎨</span>
                      Creative & World Class
                  </h2>
              </ScrollReveal>
          </div>
          
          <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {PRODUCTS.slice(3,6).map((product, i) => (
                  <ScrollReveal key={product.id} delay={i * 0.1} className="relative group">
                      <div className="bg-[#27272a] rounded-[2rem] p-8 h-[400px] flex flex-col items-center justify-center relative overflow-hidden transition-colors hover:bg-[#3f3f46]">
                          <div className="w-full h-48 mb-6 overflow-hidden rounded-xl shadow-2xl">
                             <img src={product.imageUrl} className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500" />
                          </div>
                          
                          <div className="absolute top-6 right-6">
                               <span className="w-10 h-10 rounded-full bg-[#18181b] flex items-center justify-center border border-stone-700 text-stone-300">
                                   <ArrowUpRight size={18} />
                               </span>
                          </div>
                          <div className="absolute bottom-8 left-8">
                              <div className="bg-[#18181b] px-4 py-2 rounded-xl border border-stone-700">
                                  <span className="block text-xs text-stone-400">Price</span>
                                  <span className="font-bold">${product.price}</span>
                              </div>
                          </div>
                          <div className="absolute bottom-8 right-8">
                              <button className="bg-white text-black px-4 py-2 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                                  Buy Now
                              </button>
                          </div>
                      </div>
                  </ScrollReveal>
              ))}
          </div>
      </section>


      {/* 🔹 PRODUCT FILTER GRID */}
      <section className="py-12 bg-[#18181b]">
         <div className="max-w-[1400px] mx-auto px-6">
             <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
                 <h2 className="text-3xl md:text-4xl font-medium max-w-md leading-tight">
                     Our Products that Embrace Modern Living with Style
                 </h2>
                 <div className="flex gap-2 bg-[#27272a] p-1 rounded-full">
                     {['Table', 'Chair', 'All'].map(tab => (
                         <button
                            key={tab}
                            onClick={() => setActiveTab(tab as any)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === tab ? 'bg-white text-black shadow-lg' : 'text-stone-400 hover:text-white'}`}
                         >
                             {tab === 'All' ? 'All' : `${tab} Collection`}
                         </button>
                     ))}
                 </div>
             </div>

             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                 {filteredProducts.map((product) => (
                     <Link to={`/product/${product.id}`} key={product.id} className="group">
                         <div className="bg-[#27272a] rounded-[2rem] p-4 h-[320px] relative flex flex-col">
                             <div className="flex-grow flex items-center justify-center p-4 overflow-hidden rounded-xl">
                                 <img src={product.imageUrl} alt={product.name} className="w-full h-40 object-cover object-center rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-500" />
                             </div>
                             <div className="p-4 bg-[#18181b] rounded-3xl mt-2 flex justify-between items-center group-hover:bg-[#3f3f46] transition-colors">
                                 <div>
                                     <h3 className="text-sm font-medium leading-tight max-w-[100px] truncate">{product.name}</h3>
                                     <p className="text-stone-500 text-xs mt-1">{product.category}</p>
                                 </div>
                                 <span className="text-lg font-bold">${product.price}</span>
                             </div>
                             
                             <button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                 <Plus size={16} />
                             </button>
                         </div>
                     </Link>
                 ))}
             </div>

             <div className="text-center mt-12">
                 <button className="inline-flex items-center gap-2 border border-stone-700 px-6 py-3 rounded-full text-sm hover:bg-white hover:text-black transition-colors">
                     See More Products <span className="bg-[#27272a] text-white rounded-full p-1"><ArrowRight size={10} /></span>
                 </button>
             </div>
         </div>
      </section>

      {/* 🔹 NEW ARRIVALS CAROUSEL */}
      <section className="py-24 overflow-hidden relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-stone-800 rounded-full opacity-50"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-stone-800 rounded-full opacity-30"></div>
          
          <div className="max-w-[1400px] mx-auto px-6 text-center relative z-10">
              <h2 className="text-4xl mb-8 font-medium">Our New Arrival <br/> Products</h2>
              
              <div className="relative h-[450px] w-full flex items-center justify-center mt-12">
                   {PRODUCTS.map((product, index) => {
                       // Circular buffer logic
                       const length = PRODUCTS.length;
                       let position = (index - carouselIndex + length) % length;
                       if (position > length / 2) position -= length;
                       
                       // Only render items close to center to optimize
                       if (Math.abs(position) > 2) return null;

                       let styles: React.CSSProperties = {
                           transition: 'all 0.8s cubic-bezier(0.25, 1, 0.5, 1)',
                           position: 'absolute',
                           top: '50%',
                           left: '50%',
                           transform: 'translate(-50%, -50%)',
                           opacity: 0,
                           zIndex: 0
                       };

                       if (position === 0) {
                           styles = { ...styles, opacity: 1, zIndex: 20, transform: 'translate(-50%, -50%) scale(1)' };
                       } else if (position === -1) {
                           styles = { ...styles, opacity: 0.6, zIndex: 10, transform: 'translate(-140%, -50%) scale(0.6)' };
                       } else if (position === 1) {
                           styles = { ...styles, opacity: 0.6, zIndex: 10, transform: 'translate(40%, -50%) scale(0.6)' };
                       } else if (position === -2) {
                           styles = { ...styles, opacity: 0, zIndex: 5, transform: 'translate(-220%, -50%) scale(0.4)' };
                       } else if (position === 2) {
                           styles = { ...styles, opacity: 0, zIndex: 5, transform: 'translate(120%, -50%) scale(0.4)' };
                       }

                       return (
                           <div key={product.id} style={styles} className="w-64 md:w-80">
                               <div className="relative">
                                  {position === 0 && (
                                     <div className="absolute -top-4 -right-4 bg-rose-300 text-[#18181b] w-16 h-16 rounded-full flex items-center justify-center text-xs font-bold text-center leading-tight rotate-12 z-20 shadow-lg animate-pulse">
                                         New <br/> Arrival
                                     </div>
                                  )}
                                  <img 
                                    src={product.imageUrl} 
                                    className={`rounded-full aspect-square object-cover object-center border-4 border-[#27272a] shadow-2xl ${position === 0 ? 'border-[8px]' : ''}`} 
                                    alt={product.name}
                                  />
                                  {position === 0 && (
                                     <div className="mt-8 text-center animate-fade-in">
                                         <h3 className="text-xl font-bold">{product.name}</h3>
                                         <p className="text-stone-400 mt-1 text-lg">${product.price}</p>
                                         <Link to={`/product/${product.id}`} className="inline-block mt-4 text-xs font-bold uppercase tracking-widest border-b border-white pb-1">View Product</Link>
                                     </div>
                                  )}
                               </div>
                           </div>
                       );
                   })}
              </div>
          </div>
      </section>

      {/* 🔹 REVIEWS GRID */}
      <section className="py-24 bg-[#18181b]">
          <div className="max-w-[1400px] mx-auto px-6">
               <h2 className="text-4xl md:text-5xl text-center mb-16 font-medium">
                   What Our Customers <br/>
                   <span className="inline-block bg-[#27272a] px-3 py-1 rounded-full text-2xl align-middle mx-2">💬</span> 
                   Say About Our <br/> Products
               </h2>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                   {REVIEWS.map((review) => (
                       <ScrollReveal key={review.id} className="bg-[#27272a] p-8 rounded-[2rem] relative group hover:bg-[#3f3f46] transition-colors">
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex items-center gap-4">
                                    <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full border border-stone-600 object-cover" />
                                    <div>
                                        <h4 className="font-bold text-sm">{review.name}</h4>
                                        <div className="flex text-yellow-500 text-[10px] mt-1">
                                            {[...Array(5)].map((_,i) => <Star key={i} size={10} fill="currentColor" />)}
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white p-1 rounded-full">
                                    {/* Google G Logo Mockup */}
                                    <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center text-[8px] font-bold text-white">G</div>
                                </div>
                            </div>
                            <p className="text-stone-300 text-sm leading-relaxed mb-6">
                                "{review.text}"
                            </p>
                       </ScrollReveal>
                   ))}
               </div>
               
               <div className="text-center mt-12">
                   <button className="bg-[#27272a] text-white px-8 py-3 rounded-full text-sm font-bold flex items-center gap-2 mx-auto hover:bg-white hover:text-black transition-colors">
                       See All Reviews <ArrowRight size={14} />
                   </button>
               </div>
          </div>
      </section>


      {/* 🔹 BIG FOOTER CTA */}
      <section className="py-32 bg-[#18181b] overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 relative">
              <h2 className="text-5xl md:text-8xl font-bold text-center leading-[0.9] tracking-tighter text-[#27272a] select-none hover:text-stone-700 transition-colors duration-500">
                  WHY LATE HURRY UP <br/>
                  PURCHASE YOUR BEST <br/>
                  ONE FROM OUR <br/>
                  CREATIVE COLLECTION <br/>
                  WE ARE WAITING
              </h2>
              
              {/* Floating Images over text */}
              <div className="absolute top-10 left-[10%] w-32 md:w-48 rotate-12 hover:scale-110 transition-transform duration-500">
                  <img src={PRODUCTS[3].imageUrl} className="rounded-2xl shadow-2xl object-cover" />
              </div>
               <div className="absolute bottom-10 right-[10%] w-32 md:w-48 -rotate-12 hover:scale-110 transition-transform duration-500">
                  <img src={PRODUCTS[2].imageUrl} className="rounded-2xl shadow-2xl object-cover" />
              </div>
          </div>
      </section>

    </div>
  );
};

export default Home;