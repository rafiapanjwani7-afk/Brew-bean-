import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetail({ menuData, onAddToCart }) {
  const { category, id } = useParams();
  const [size, setSize] = useState('Medium');
  const [milk, setMilk] = useState('Regular');
  const [quantity, setQuantity] = useState(1);

  const productList = menuData[category] || [];
  const product = productList.find((p) => p.id === id);

  if (!product) return <div className="p-20 text-center text-espresso">Product not found.</div>;

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="rounded-3xl overflow-hidden aspect-square bg-cream">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
      </div>

      <div className="space-y-6 flex flex-col justify-center">
        <div>
          <span className="text-xs font-bold text-caramel uppercase tracking-widest">{product.category}</span>
          <h1 className="text-4xl font-serif text-espresso mt-1">{product.name}</h1>
          <p className="text-2xl font-bold text-dark-espresso mt-2">Rs {product.price}</p>
        </div>

        <p className="text-sm text-muted-gray leading-relaxed">{product.description}</p>

        {category === 'coffee' && (
          <div className="space-y-4">
            <div>
              <label className="text-xs font-bold text-espresso uppercase block mb-2">Size</label>
              <div className="flex space-x-3">
                {['Small', 'Medium', 'Large'].map((s) => (
                  <button 
                    key={s} 
                    onClick={() => setSize(s)}
                    className={`px-4 py-2 text-xs rounded-xl border ${size === s ? 'bg-espresso text-cream border-espresso' : 'bg-white text-espresso border-latte'}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-espresso uppercase block mb-2">Milk Choice</label>
              <div className="flex space-x-3">
                {['Regular', 'Oat', 'Almond'].map((m) => (
                  <button 
                    key={m} 
                    onClick={() => setMilk(m)}
                    className={`px-4 py-2 text-xs rounded-xl border ${milk === m ? 'bg-espresso text-cream border-espresso' : 'bg-white text-espresso border-latte'}`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="flex items-center space-x-4 pt-4">
          <div className="flex items-center border border-latte bg-white rounded-xl px-3 py-2 space-x-3 text-sm">
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
            <span className="font-bold">{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>

          <button 
            onClick={() => onAddToCart({ ...product, selectedSize: size, selectedMilk: milk, quantity })}
            className="flex-1 py-3 bg-espresso text-cream text-xs font-bold tracking-widest rounded-xl hover:bg-coffee-brown uppercase"
          >
            Add To Bag
          </button>
        </div>
      </div>
    </div>
  );
}