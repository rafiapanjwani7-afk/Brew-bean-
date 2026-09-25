import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, Award, Heart, Smile, Sparkles, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: <Coffee size={24} />,
      title: 'Ethically Sourced',
      desc: '100% Arabica beans sourced directly from sustainable high-altitude farms.'
    },
    {
      icon: <Award size={24} />,
      title: 'Master Roasters',
      desc: 'Small-batch roasting to preserve rich profiles and natural aromas.'
    },
    {
      icon: <Heart size={24} />,
      title: 'Baked Fresh Daily',
      desc: 'Artisanal breads and desserts prepared in-house every morning.'
    },
    {
      icon: <Smile size={24} />,
      title: 'Cozy Ambience',
      desc: 'A warm, peaceful space crafted for work, conversation, and comfort.'
    }
  ];

  return (
    <div className="bg-[#FAF7F2] text-[#3B2922] py-12 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Hero Section */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#C68B59] uppercase">
            Our Heritage
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-[#3B2922]">
            Crafting Moments, One Cup at a Time
          </h1>
          <p className="text-xs md:text-sm text-[#6B5E57] font-serif italic leading-relaxed pt-2">
            "Coffee is more than just a morning routine—it’s a daily ritual of comfort, connection, and craft."
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-[#EADFCF]">
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#FAF7F2] border border-[#E2DAD0] rounded-full text-[10px] font-bold text-[#C68B59] uppercase tracking-widest">
              <Sparkles size={12} />
              <span>Est. 2026 • Karachi</span>
            </div>
            <h2 className="text-2xl font-serif font-bold text-[#3B2922]">The BREW & BEAN Vision</h2>
            <p className="text-xs text-[#6B5E57] leading-relaxed">
              Founded with a passion for exceptional coffee, BREW & BEAN sources micro-lot Arabica beans from ethical farms across South America and East Africa, roasting them locally to bring out their unique tasting notes.
            </p>
            <p className="text-xs text-[#6B5E57] leading-relaxed">
              Whether you prefer a bold espresso, a velvety flat white, or fresh pastries baked at dawn, every single item on our menu is crafted with care and passion.
            </p>
          </div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-[#EADFCF]">
            <img 
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=800&auto=format&fit=crop" 
              alt="Café Interior" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Values Grid */}
        {/* <div>
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#C68B59] uppercase">
              Our Commitment
            </span>
            <h2 className="text-2xl font-serif font-bold text-[#3B2922] mt-1">What Sets Us Apart</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-[#EADFCF] shadow-sm text-center space-y-3">
                <div className="p-3 bg-[#FAF7F2] text-[#C68B59] rounded-xl w-fit mx-auto border border-[#E2DAD0]">
                  {v.icon}
                </div>
                <h3 className="font-serif font-semibold text-[#3B2922] text-sm">{v.title}</h3>
                <p className="text-xs text-[#6B5E57] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div> */}

        {/* CTA Banner */}
        <div className="bg-[#3B2922] text-[#FAF7F2] p-10 md:p-12 rounded-3xl text-center space-y-4 shadow-xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold">Experience Specialty Coffee</h2>
          <p className="text-xs text-[#EADFCF]/80 max-w-md mx-auto leading-relaxed">
            Visit our café or order online to get fresh coffee and artisanal pastries delivered to your door.
          </p>
          <div className="pt-2">
            <Link 
              to="/products" 
              className="inline-flex items-center space-x-2 px-8 py-3.5 bg-[#C68B59] text-white text-xs font-bold tracking-widest rounded-xl hover:bg-[#2A1D18] transition-all uppercase shadow-md"
            >
              <span>Explore Our Menu</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}