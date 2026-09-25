import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShoppingBag, Coffee, Heart, Search } from 'lucide-react';

export default function Navbar({ cartCount, onOpenCart }) {
  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
     { name: 'PRODUCTS', path: '/products' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#EADFCF]/60 px-6 py-4 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="p-2 bg-[#3B2922] text-[#FAF7F2] rounded-xl group-hover:bg-[#C68B59] transition-colors shadow-sm">
            <Coffee size={20} />
          </div>
          <div>
            <span className="text-xl font-serif font-bold tracking-widest text-[#3B2922] block leading-tight">
              BREW & BEAN
            </span>
            <span className="text-[9px] tracking-[0.25em] text-[#C68B59] font-bold uppercase block">
              Specialty Coffee
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-xs font-bold tracking-widest transition-all duration-200 relative py-1 ${
                  isActive
                    ? 'text-[#C68B59] after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#C68B59]'
                    : 'text-[#3B2922] hover:text-[#C68B59]'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Action Icons */}
        <div className="flex items-center space-x-4">
          <button className="p-2 text-[#3B2922] hover:text-[#C68B59] transition-colors rounded-full hover:bg-[#EFEBE4]">
            <Search size={19} />
          </button>
          
          <button className="p-2 text-[#3B2922] hover:text-[#C68B59] transition-colors rounded-full hover:bg-[#EFEBE4] hidden sm:block">
            <Heart size={19} />
          </button>

          {/* Cart Button */}
          <button 
            onClick={onOpenCart}
            className="relative flex items-center space-x-2 px-4 py-2 bg-[#3B2922] text-[#FAF7F2] rounded-xl hover:bg-[#C68B59] transition-all shadow-md active:scale-95"
          >
            <ShoppingBag size={18} />
             <span className="text-xs font-bold tracking-wider hidden sm:inline">CART</span>
            {cartCount > 0 && (
              <span className="bg-[#C68B59] text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center border-2 border-white">
                {cartCount}
              </span>
            )} 
          </button>
        </div>

      </div>
    </header>
  );
}