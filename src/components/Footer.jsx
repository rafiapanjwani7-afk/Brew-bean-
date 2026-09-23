import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, Camera, Globe, Share2, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#2A1D18] text-[#FAF7F2] border-t border-[#3B2922] pt-16 pb-8 px-6 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#3B2922]">
        
        {/* Brand Column */}
        <div className="lg:col-span-2 space-y-4">
          <Link to="/" className="inline-flex items-center space-x-2 group">
            <div className="p-2 bg-[#C68B59] text-white rounded-xl group-hover:bg-[#EADFCF] group-hover:text-[#2A1D18] transition-colors">
              <Coffee size={20} />
            </div>
            <div>
              <span className="text-xl font-serif font-bold tracking-widest text-[#FAF7F2] block leading-tight">
                BREW & BEAN
              </span>
              <span className="text-[9px] tracking-[0.25em] text-[#C68B59] font-bold uppercase block">
                Specialty Coffee
              </span>
            </div>
          </Link>

          <p className="text-xs text-[#EADFCF]/70 font-serif italic max-w-sm pt-1">
            "Thoughtfully brewed coffee, freshly baked treats, and cozy moments crafted for slowing down."
          </p>

          <div className="pt-2 space-y-2 text-xs text-[#EADFCF]/60">
            <div className="flex items-center space-x-2">
              <MapPin size={14} className="text-[#C68B59] flex-shrink-0" />
              <span>DHA Phase 5, Karachi, Pakistan</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone size={14} className="text-[#C68B59] flex-shrink-0" />
              <span>+92 300 1234567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={14} className="text-[#C68B59] flex-shrink-0" />
              <span>hello@brewandbean.com</span>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="space-y-3">
          <h4 className="text-[11px] font-bold tracking-[0.2em] text-[#C68B59] uppercase">
            Quick Links
          </h4>
          <ul className="space-y-2 text-xs text-[#EADFCF]/80">
            <li>
              <Link to="/" className="hover:text-[#C68B59] transition-colors">Home</Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-[#C68B59] transition-colors">All Products</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#C68B59] transition-colors">Our Story</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#C68B59] transition-colors">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Menu Categories */}
        <div className="space-y-3">
          <h4 className="text-[11px] font-bold tracking-[0.2em] text-[#C68B59] uppercase">
            Menu
          </h4>
          <ul className="space-y-2 text-xs text-[#EADFCF]/80">
            <li>
              <Link to="/products/coffee" className="hover:text-[#C68B59] transition-colors">Specialty Coffee</Link>
            </li>
            <li>
              <Link to="/products/desserts" className="hover:text-[#C68B59] transition-colors">Artisanal Desserts</Link>
            </li>
            <li>
              <Link to="/products/bakery" className="hover:text-[#C68B59] transition-colors">Fresh Bakery</Link>
            </li>
          </ul>
        </div>

        {/* Working Hours */}
        <div className="space-y-3">
          <h4 className="text-[11px] font-bold tracking-[0.2em] text-[#C68B59] uppercase">
            Café Hours
          </h4>
          <p className="text-xs text-[#EADFCF]/80 leading-relaxed">
            Mon – Fri: 8:00 AM – 10:00 PM<br />
            Sat – Sun: 8:00 AM – 11:00 PM
          </p>
          <span className="inline-block mt-2 text-[10px] bg-[#3B2922] text-[#C68B59] px-2.5 py-1 rounded-full font-bold tracking-wider">
            OPEN DAILY
          </span>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-[#EADFCF]/50 gap-4">
        <p>© 2026 BREW & BEAN. All Rights Reserved.</p>
        
        {/* Social Icons */}
        <div className="flex space-x-4 text-[#FAF7F2]">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noreferrer" 
            className="p-2 bg-[#3B2922] rounded-full hover:bg-[#C68B59] hover:text-white transition-all"
            aria-label="Instagram"
          >
            <Camera size={15} />
          </a>
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noreferrer" 
            className="p-2 bg-[#3B2922] rounded-full hover:bg-[#C68B59] hover:text-white transition-all"
            aria-label="Facebook"
          >
            <Share2 size={15} />
          </a>
          <a 
            href="https://brewandbean.com" 
            target="_blank" 
            rel="noreferrer" 
            className="p-2 bg-[#3B2922] rounded-full hover:bg-[#C68B59] hover:text-white transition-all"
            aria-label="Website"
          >
            <Globe size={15} />
          </a>
        </div>

        {/* Legal Links */}
        <div className="flex space-x-4 text-[11px]">
          <a href="#privacy" className="hover:text-[#C68B59] transition-colors">Privacy Policy</a>
          <a href="#terms" className="hover:text-[#C68B59] transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}