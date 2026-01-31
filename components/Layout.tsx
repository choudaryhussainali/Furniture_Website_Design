import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';
import { Menu, X, ShoppingCart } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#18181b] text-stone-100 selection:bg-rose-300 selection:text-stone-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 py-6 bg-[#18181b]/90 backdrop-blur-md">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold tracking-tight text-white flex items-center gap-1">
             <div className="w-2 h-2 bg-stone-100 rounded-full"></div> Fur.
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-12 bg-white/5 px-8 py-3 rounded-full border border-white/10 backdrop-blur-sm">
            {NAV_ITEMS.map((item) => (
              <Link 
                key={item.path} 
                to={item.path} 
                className="text-sm font-medium text-stone-300 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
             <button className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-stone-700 transition">
                 <ShoppingCart size={18} />
             </button>
             <button className="md:hidden w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center" onClick={() => setMobileMenuOpen(true)}>
                <Menu size={18} />
             </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#18181b] z-50 flex flex-col transition-transform duration-500 md:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 flex justify-end">
            <button onClick={() => setMobileMenuOpen(false)} className="p-2 bg-stone-800 rounded-full">
                <X size={24} />
            </button>
        </div>
        <div className="flex flex-col items-center justify-center space-y-8 h-full">
            {NAV_ITEMS.map((item) => (
                <Link 
                key={item.path} 
                to={item.path} 
                className="text-3xl font-bold text-white"
                >
                {item.label}
                </Link>
            ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow w-full pt-24">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#18181b] border-t border-white/5 py-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-end gap-12">
            <div>
                 <Link to="/" className="text-2xl font-bold tracking-tight text-white mb-6 block">
                    <div className="w-2 h-2 bg-stone-100 rounded-full inline-block mr-1"></div> Fur.
                 </Link>
                 <p className="text-stone-400 text-sm max-w-xs">
                     Copyright © 2024 by Fur. <br/>
                     All rights reserved.
                 </p>
            </div>

            <div className="flex gap-4">
                 {['Facebook', 'LinkedIn', 'Instagram', 'Twitter'].map(social => (
                     <a key={social} href="#" className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center text-stone-400 hover:bg-white hover:text-black transition-all">
                         {social[0]}
                     </a>
                 ))}
            </div>
            
            <div className="grid grid-cols-2 gap-12 text-sm text-stone-400">
                <div className="space-y-2">
                    <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Navigation</h4>
                    <p>About Us</p>
                    <p>Products</p>
                    <p>News & Events</p>
                </div>
                 <div className="space-y-2">
                    <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Help</h4>
                    <p>Shipping</p>
                    <p>Returns</p>
                    <p>FAQ</p>
                </div>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;