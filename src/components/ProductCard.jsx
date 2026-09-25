import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Plus } from 'lucide-react';

export default function ProductCard({ item, onAddToCart }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-[#EADFCF]/60 flex flex-col justify-between">
      
      {/* Image Container */}
      <div className="relative aspect-[4/3] bg-[#FAF7F2] overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Category Tag */}
        <span className="absolute top-3 left-3 bg-[#FAF7F2]/90 backdrop-blur-md text-[#3B2922] text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-[#E2DAD0]">
          {item.category}
        </span>

        {/* Wishlist Button */}
        <button className="absolute top-3 right-3 bg-white/80 backdrop-blur-md p-2 rounded-full text-[#3B2922] hover:text-red-500 hover:bg-white transition-all shadow-sm">
          <Heart size={16} />
        </button>
      </div>

      {/* Card Body */}
      <div className="p-5 flex flex-col flex-grow justify-between bg-white">
        <div>
          <Link to={`/products/${item.category}/${item.id}`}>
            <h3 className="font-serif font-semibold text-[#3B2922] text-base group-hover:text-[#C68B59] transition-colors line-clamp-1">
              {item.name}
            </h3>
          </Link>
          <p className="text-[11px] text-[#8C7A6B] mt-1 line-clamp-2 leading-relaxed">
            {item.description || 'Freshly prepared with signature artisanal roasting & fine ingredients.'}
          </p>
        </div>

        {/* Footer Price & Add Button */}
        <div className="mt-5 pt-3 border-t border-[#F3EFEA] flex items-center justify-between">
          {/* <div>
            <span className="text-[10px] uppercase font-bold text-[#A8988B] block">Price</span>
            <span className="font-serif font-bold text-[#3B2922] text-base">
              Rs {item.price}
            </span>
          </div> */}
          <div>
  <span className="block text-[10px] font-bold text-[#A8988B] uppercase tracking-wider">
    PRICE
  </span>
  <span className="text-sm font-bold font-sans text-[#3B2922]">
    Rs {item.price}
  </span>
</div>

          <button 
            onClick={() => onAddToCart(item)}
            className="flex items-center space-x-1 px-4 py-2 bg-[#3B2922] text-[#FAF7F2] text-[11px] font-bold tracking-wider rounded-xl hover:bg-[#C68B59] transition-all shadow-sm active:scale-95"
          >
            <span>ADD</span>
            <Plus size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}