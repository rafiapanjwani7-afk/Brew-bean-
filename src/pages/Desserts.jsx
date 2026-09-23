import React from 'react';
import ProductCard from '../components/ProductCard';

export default function Desserts({ items, onAddToCart }) {
  return (
    <div className="space-y-6">
      <div className="border-b border-latte pb-4">
        <h2 className="text-2xl font-serif text-espresso">DESSERTS</h2>
        <p className="text-xs text-muted-gray">Indulgent sweet treats to pair with your brew.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((item) => (
          <ProductCard key={item.id} item={item} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
}