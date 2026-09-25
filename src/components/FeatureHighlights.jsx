import React from 'react';
import { Award, Sparkles, ShieldCheck } from 'lucide-react';

export default function FeatureHighlights() {
  return (
    <section className="bg-white py-10 border-y border-[#EADFCF]/60 px-6">
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
    </section>
  );
}