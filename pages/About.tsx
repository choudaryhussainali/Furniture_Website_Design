import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { Sparkle, Heart, Users, Globe } from 'lucide-react';

const TEAM = [
    { name: "Sarah Jenkins", role: "Creative Director", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800" },
    { name: "David Chen", role: "Head of Design", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800" },
    { name: "Elena Rodriguez", role: "Lead Artisan", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800" },
    { name: "Marcus Johnson", role: "Sustainability Officer", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=800" }
];

const About: React.FC = () => {
  return (
    <div className="w-full bg-[#18181b] min-h-screen text-stone-100 overflow-hidden">
        
        {/* 🔹 HERO HEADER */}
        <section className="relative pt-48 pb-32 px-6 overflow-hidden">
            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[128px]"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[128px]"></div>
            
            <div className="max-w-[1000px] mx-auto text-center relative z-10">
                <ScrollReveal>
                    <span className="inline-block py-1 px-3 rounded-full bg-stone-800 text-stone-400 text-xs font-bold tracking-widest uppercase mb-6">Our Story</span>
                    <h1 className="text-5xl md:text-8xl font-medium leading-[0.9] mb-12">
                        Crafting Comfort <br/>
                        <span className="text-stone-500 italic">for the Modern Soul</span>
                    </h1>
                </ScrollReveal>
                
                <ScrollReveal delay={0.2}>
                    <p className="text-xl md:text-2xl text-stone-400 leading-relaxed max-w-3xl mx-auto">
                        Fur. was born from a simple belief: that furniture shouldn't just fill a space, it should shape a feeling. We combine century-old woodworking traditions with contemporary aesthetics.
                    </p>
                </ScrollReveal>
            </div>
        </section>

        {/* 🔹 VISUAL STORY */}
        <section className="py-12 px-6">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <ScrollReveal className="h-[600px] rounded-[3rem] overflow-hidden relative">
                     <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-[2s]" />
                     <div className="absolute bottom-8 left-8 bg-black/50 backdrop-blur-md p-6 rounded-2xl">
                         <h3 className="text-xl font-bold mb-2">Design Studio</h3>
                         <p className="text-sm text-stone-300">Where ideas take shape.</p>
                     </div>
                </ScrollReveal>
                <ScrollReveal delay={0.2} className="h-[600px] rounded-[3rem] overflow-hidden relative mt-12 md:mt-32">
                     <img src="https://images.unsplash.com/photo-1581539250439-c96689b516dd?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-[2s]" />
                     <div className="absolute top-8 right-8 bg-black/50 backdrop-blur-md p-6 rounded-2xl text-right">
                         <h3 className="text-xl font-bold mb-2">The Workshop</h3>
                         <p className="text-sm text-stone-300">Handcrafted perfection.</p>
                     </div>
                </ScrollReveal>
            </div>
        </section>

        {/* 🔹 STATS */}
        <section className="py-32">
            <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
                {[
                    { label: "Years Active", val: "12+" },
                    { label: "Unique Products", val: "450+" },
                    { label: "Happy Clients", val: "15k" },
                    { label: "Awards Won", val: "28" }
                ].map((stat, i) => (
                    <ScrollReveal key={i} delay={i*0.1} className="text-center">
                        <h3 className="text-5xl md:text-7xl font-bold text-white mb-2">{stat.val}</h3>
                        <p className="text-stone-500 uppercase tracking-widest text-xs">{stat.label}</p>
                    </ScrollReveal>
                ))}
            </div>
        </section>

        {/* 🔹 VALUES */}
        <section className="py-24 bg-[#27272a]">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                     <ScrollReveal className="bg-[#18181b] p-10 rounded-[2rem]">
                         <div className="w-16 h-16 bg-rose-200 rounded-full flex items-center justify-center text-[#18181b] mb-8">
                             <Heart size={32} />
                         </div>
                         <h3 className="text-2xl font-bold mb-4">Passion First</h3>
                         <p className="text-stone-400 leading-relaxed">
                             Every piece is crafted with love. We don't just manufacture; we create heirlooms that are meant to be cherished for generations.
                         </p>
                     </ScrollReveal>
                     <ScrollReveal delay={0.1} className="bg-[#18181b] p-10 rounded-[2rem]">
                         <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center text-[#18181b] mb-8">
                             <Users size={32} />
                         </div>
                         <h3 className="text-2xl font-bold mb-4">Community Led</h3>
                         <p className="text-stone-400 leading-relaxed">
                             We work directly with local artisans, ensuring fair wages and preserving traditional craftsmanship techniques.
                         </p>
                     </ScrollReveal>
                     <ScrollReveal delay={0.2} className="bg-[#18181b] p-10 rounded-[2rem]">
                         <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center text-[#18181b] mb-8">
                             <Globe size={32} />
                         </div>
                         <h3 className="text-2xl font-bold mb-4">Sustainable Future</h3>
                         <p className="text-stone-400 leading-relaxed">
                             100% of our wood is ethically sourced. We are committed to a carbon-neutral manufacturing process by 2025.
                         </p>
                     </ScrollReveal>
                </div>
            </div>
        </section>

        {/* 🔹 TEAM */}
        <section className="py-32 px-6">
            <div className="max-w-[1400px] mx-auto">
                <h2 className="text-4xl md:text-5xl font-medium mb-16 text-center">Meet the Makers</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {TEAM.map((member, i) => (
                        <ScrollReveal key={i} delay={i*0.1} className="group text-center">
                            <div className="relative overflow-hidden rounded-[2rem] aspect-[3/4] mb-6">
                                <img src={member.img} className="w-full h-full object-cover object-center filter grayscale group-hover:grayscale-0 transition-all duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            <h3 className="text-xl font-bold text-white">{member.name}</h3>
                            <p className="text-stone-500 text-sm mt-1">{member.role}</p>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>

    </div>
  );
};

export default About;