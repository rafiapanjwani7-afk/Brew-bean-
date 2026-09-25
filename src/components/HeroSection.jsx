import React from 'react'

const Herosection = () => {
  return (
    <>
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
    </>
  )
}

export default Herosection