import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from './ProductCard';

export default function FeaturedProducts({ featuredItems = [], onAddToCart }) {
  return (
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
  );
}