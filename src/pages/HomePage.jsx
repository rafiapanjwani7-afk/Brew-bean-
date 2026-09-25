import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Award, ShieldCheck, Flame } from 'lucide-react';
import ProductCard from '../components/ProductCard';


export default function HomePage({ menuData, onAddToCart }) {
  // Take top items for showcase
  const featuredItems = [
    ...(menuData?.coffee || []).slice(0, 2),
    ...(menuData?.desserts || []).slice(0, 1),
    ...(menuData?.bakery || []).slice(0, 1),
  ];

  return (
    <div className="bg-[#FAF7F2] text-[#3B2922]">
<section className="relative py-10 md:py-14 px-6 md:px-12 overflow-hidden bg-[#FAF7F2]">
  {/* Background Glow */}
  <div className="absolute -top-16 -right-16 w-80 h-80 bg-[#C68B59]/15 rounded-full blur-3xl pointer-events-none" />

  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center z-10 relative">
    
    {/* Left Column - Text Content */}
    <div className="space-y-5">
      <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-[#EADFCF]/60 rounded-full border border-[#C68B59]/30">
        <Sparkles size={14} className="text-[#C68B59]" />
        <span className="text-[11px] font-bold tracking-widest text-[#3B2922] uppercase">
          Artisanal Specialty Roasts
        </span>
      </div>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#3B2922] leading-tight">
        Sip the Craft, <br />
        <span className="italic text-[#C68B59] font-normal">Savor the Moment.</span>
      </h1>

      <p className="text-xs md:text-sm text-[#6B5E57] max-w-md leading-relaxed">
        Ethically sourced 100% Arabica beans roasted in micro-batches, paired with freshly baked artisanal pastries delivered daily.
      </p>

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <Link
          to="/products"
          className="px-7 py-3 bg-[#3B2922] text-[#FAF7F2] text-xs font-bold tracking-widest rounded-xl hover:bg-[#C68B59] transition-all shadow-md flex items-center space-x-2 group"
        >
          <span>EXPLORE MENU</span>
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
        
        <Link
          to="/about"
          className="px-7 py-3 border border-[#3B2922]/30 text-[#3B2922] text-xs font-bold tracking-widest rounded-xl hover:bg-[#EFEBE4] transition-all"
        >
          OUR STORY
        </Link>
      </div>
    </div>

    {/* Right Column - Image & Floating Badge */}
    <div className="relative max-w-md mx-auto lg:max-w-none w-full">
      {/* Aspect Ratio Adjusted for lower height */}
      <div className="aspect-[4/3] sm:aspect-[14/10] rounded-3xl overflow-hidden shadow-xl border-4 border-white relative group">
        <img 
          src="https://foodpanda.dhmedia.io/image/fd-pk/LH/uz05-listing.jpg" 
          alt="Artisanal Pour Over Coffee" 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* Floating Freshly Roasted Card */}
      <div className="absolute -bottom-4 -left-3 sm:-bottom-5 sm:-left-5 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-xl border border-[#EADFCF] flex items-center space-x-3 z-20">
        <div className="p-2.5 bg-[#FAF7F2] text-[#C68B59] rounded-xl border border-[#EADFCF]">
          <Flame size={20} />
        </div>
        <div>
          <p className="text-xs font-bold text-[#3B2922]">Freshly Roasted</p>
          <p className="text-[10px] text-[#6B5E57] font-medium">Batch #104 Roasted Today</p>
        </div>
      </div>
    </div>

  </div>
</section>

      {/* Feature Highlights */}
      {/* <section className="bg-white py-10 border-y border-[#EADFCF]/60 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center space-y-2">
            <Award className="text-[#C68B59]" size={28} />
            <h3 className="font-serif font-bold text-sm text-[#3B2922]">Single Origin Beans</h3>
            <p className="text-xs text-[#6B5E57]">Hand-picked Arabica from high-altitude farms.</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Sparkles className="text-[#C68B59]" size={28} />
            <h3 className="font-serif font-bold text-sm text-[#3B2922]">Baked In-House</h3>
            <p className="text-xs text-[#6B5E57]">Croissants and pastries baked fresh every morning.</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <ShieldCheck className="text-[#C68B59]" size={28} />
            <h3 className="font-serif font-bold text-sm text-[#3B2922]">Express Delivery</h3>
            <p className="text-xs text-[#6B5E57]">Warm coffee & fresh bakery delivered to your door.</p>
          </div>
        </div>
      </section> */}

      {/* Featured Menu Items Grid */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#C68B59] uppercase">
              Curated Selection
            </span>
            <h2 className="text-3xl font-serif font-bold text-[#3B2922] mt-1">
              Popular Favorites
            </h2>
          </div>
          <Link 
            to="/products" 
            className="text-xs font-bold text-[#C68B59] hover:underline mt-2 md:mt-0 inline-flex items-center space-x-1"
          >
            <span>VIEW ALL ITEMS</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredItems.map((item) => (
            <ProductCard key={item.id} item={item} onAddToCart={onAddToCart} />
          ))}
        </div>
      </section>

    </div>
  );
}