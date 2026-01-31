import React, { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent! (Demo)');
  };

  return (
    <div className="w-full bg-[#18181b] min-h-screen pt-32 pb-24 text-stone-100">
      <div className="max-w-[1400px] mx-auto px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
              
              {/* 🔹 LEFT: INFO & MAP */}
              <div>
                  <ScrollReveal>
                      <h1 className="text-5xl md:text-7xl font-medium mb-8">Get in Touch</h1>
                      <p className="text-stone-400 text-lg mb-12 max-w-md">
                          Have a question about a product, or want to discuss a custom piece? We'd love to hear from you.
                      </p>
                  </ScrollReveal>

                  <div className="space-y-8 mb-16">
                      <ScrollReveal delay={0.1} className="flex items-start gap-6">
                          <div className="w-12 h-12 bg-[#27272a] rounded-full flex items-center justify-center text-white shrink-0">
                              <Mail size={20} />
                          </div>
                          <div>
                              <h3 className="text-lg font-bold mb-1">Email Us</h3>
                              <p className="text-stone-400">hello@fur-furniture.com</p>
                              <p className="text-stone-400">support@fur-furniture.com</p>
                          </div>
                      </ScrollReveal>

                      <ScrollReveal delay={0.2} className="flex items-start gap-6">
                          <div className="w-12 h-12 bg-[#27272a] rounded-full flex items-center justify-center text-white shrink-0">
                              <Phone size={20} />
                          </div>
                          <div>
                              <h3 className="text-lg font-bold mb-1">Call Us</h3>
                              <p className="text-stone-400">+1 (555) 123-4567</p>
                              <p className="text-stone-400">Mon-Fri, 9am - 6pm EST</p>
                          </div>
                      </ScrollReveal>

                      <ScrollReveal delay={0.3} className="flex items-start gap-6">
                          <div className="w-12 h-12 bg-[#27272a] rounded-full flex items-center justify-center text-white shrink-0">
                              <MapPin size={20} />
                          </div>
                          <div>
                              <h3 className="text-lg font-bold mb-1">Visit Studio</h3>
                              <p className="text-stone-400">123 Design District Ave,</p>
                              <p className="text-stone-400">New York, NY 10012</p>
                          </div>
                      </ScrollReveal>
                  </div>

                  {/* Mock Map */}
                  <ScrollReveal delay={0.4} className="w-full h-64 bg-[#27272a] rounded-[2rem] overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500">
                      <img 
                        src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800" 
                        className="w-full h-full object-cover object-center opacity-60"
                        alt="Map Location"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-white text-black px-4 py-2 rounded-full font-bold text-xs flex items-center gap-2 shadow-xl">
                              <MapPin size={12} fill="black" /> Fur. Studio
                          </div>
                      </div>
                  </ScrollReveal>
              </div>

              {/* 🔹 RIGHT: FORM */}
              <div className="relative">
                  <div className="sticky top-32">
                      <ScrollReveal delay={0.2} className="bg-[#27272a] p-8 md:p-12 rounded-[3rem]">
                          <h2 className="text-3xl font-bold mb-8">Send a Message</h2>
                          <form onSubmit={handleSubmit} className="space-y-6">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                  <div className="space-y-2">
                                      <label className="text-xs uppercase tracking-widest text-stone-500 font-bold ml-2">Your Name</label>
                                      <input 
                                        type="text" 
                                        className="w-full bg-[#18181b] border border-stone-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-stone-500 transition-colors"
                                        placeholder="John Doe"
                                        value={formState.name}
                                        onChange={e => setFormState({...formState, name: e.target.value})}
                                      />
                                  </div>
                                  <div className="space-y-2">
                                      <label className="text-xs uppercase tracking-widest text-stone-500 font-bold ml-2">Email Address</label>
                                      <input 
                                        type="email" 
                                        className="w-full bg-[#18181b] border border-stone-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-stone-500 transition-colors"
                                        placeholder="john@example.com"
                                        value={formState.email}
                                        onChange={e => setFormState({...formState, email: e.target.value})}
                                      />
                                  </div>
                              </div>
                              
                              <div className="space-y-2">
                                  <label className="text-xs uppercase tracking-widest text-stone-500 font-bold ml-2">Message</label>
                                  <textarea 
                                    className="w-full bg-[#18181b] border border-stone-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-stone-500 transition-colors min-h-[150px]"
                                    placeholder="Tell us about your project..."
                                    value={formState.message}
                                    onChange={e => setFormState({...formState, message: e.target.value})}
                                  />
                              </div>

                              <button type="submit" className="w-full bg-white text-black py-5 rounded-2xl font-bold text-lg hover:bg-stone-200 transition-colors flex items-center justify-center gap-3 group">
                                  Send Message <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                              </button>
                          </form>
                      </ScrollReveal>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Contact;