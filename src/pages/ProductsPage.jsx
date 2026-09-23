import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function ProductsPage() {
  const categories = [
    { name: 'All Products', path: '/products' },
    { name: 'Coffee', path: '/products/coffee' },
    { name: 'Desserts', path: '/products/desserts' },
    { name: 'Bakery', path: '/products/bakery' },
  ];

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Header */}
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#C68B59] uppercase">
            Artisanal Selection
          </span>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#3B2922] tracking-wide">
            OUR MENU
          </h1>
          <p className="text-xs text-[#6B5E57] font-light">
            Discover freshly roasted coffee, delicate desserts, and freshly baked bakery treats.
          </p>
        </div>

        {/* Premium Pill Tabs Navigation */}
        <div className="flex justify-center items-center mb-12">
          <div className="inline-flex p-1.5 bg-[#EFEBE4] rounded-full shadow-inner border border-[#E2DAD0]">
            {categories.map((cat) => (
              <NavLink
                key={cat.path}
                to={cat.path}
                end={cat.path === '/products'}
                className={({ isActive }) =>
                  `px-6 py-2.5 rounded-full text-xs font-medium tracking-wider transition-all duration-300 ${
                    isActive
                      ? 'bg-[#3B2922] text-[#FAF7F2] shadow-md scale-105'
                      : 'text-[#6B5E57] hover:text-[#3B2922] hover:bg-white/60'
                  }`
                }
              >
                {cat.name}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Dynamic Nested Category Render */}
        <Outlet />
      </div>
    </div>
  );
}