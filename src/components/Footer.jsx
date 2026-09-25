import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#2A1D17] text-[#FAF7F2] pt-14 pb-8 border-t border-[#3B2922]">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        
        {/* Brand Info */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 bg-[#C68B59] rounded-xl flex items-center justify-center text-[#2A1D17]">
              <i className="fa-solid fa-[#2A1D17] fa-mug-hot text-lg"></i>
            </div>
            <div>
              <h3 className="font-serif font-bold text-base tracking-widest text-[#FAF7F2]">BREW & BEAN</h3>
              <p className="text-[9px] tracking-widest text-[#C68B59] uppercase font-semibold">Specialty Coffee</p>
            </div>
          </div>
          
          <p className="text-xs text-[#A8988B] italic leading-relaxed">
            "Thoughtfully brewed coffee, freshly baked treats, and cozy moments crafted for slowing down."
          </p>

          {/* Contact Details with Font Awesome */}
          <div className="space-y-2 pt-2 text-xs text-[#A8988B]">
            <div className="flex items-center space-x-3">
              <i className="fa-solid fa-location-dot w-4 text-[#C68B59]"></i>
              <span>DHA Phase 5, Karachi, Pakistan</span>
            </div>
            <div className="flex items-center space-x-3">
              <i className="fa-solid fa-phone w-4 text-[#C68B59]"></i>
              <span>+92 300 1234567</span>
            </div>
            <div className="flex items-center space-x-3">
              <i className="fa-regular fa-envelope w-4 text-[#C68B59]"></i>
              <span>hello@brewandbean.com</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xs font-bold text-[#C68B59] tracking-widest uppercase mb-4">Quick Links</h4>
          <ul className="space-y-2 text-xs text-[#A8988B]">
            <li><Link to="/" className="hover:text-[#FAF7F2] transition-colors">Home</Link></li>
            <li><Link to="/products" className="hover:text-[#FAF7F2] transition-colors">All Products</Link></li>
            <li><Link to="/about" className="hover:text-[#FAF7F2] transition-colors">Our Story</Link></li>
            <li><Link to="/contact" className="hover:text-[#FAF7F2] transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Menu */}
        <div>
          <h4 className="text-xs font-bold text-[#C68B59] tracking-widest uppercase mb-4">Menu</h4>
          <ul className="space-y-2 text-xs text-[#A8988B]">
            <li><Link to="/products/coffee" className="hover:text-[#FAF7F2] transition-colors">Specialty Coffee</Link></li>
            <li><Link to="/products/desserts" className="hover:text-[#FAF7F2] transition-colors">Artisanal Desserts</Link></li>
            <li><Link to="/products/bakery" className="hover:text-[#FAF7F2] transition-colors">Fresh Bakery</Link></li>
          </ul>
        </div>

        {/* Cafe Hours */}
        <div>
          <h4 className="text-xs font-bold text-[#C68B59] tracking-widest uppercase mb-4">Café Hours</h4>
          <div className="space-y-1.5 text-xs text-[#A8988B]">
            <p><span className="font-semibold text-[#FAF7F2]">Mon – Fri:</span> 8:00 AM – 10:00 PM</p>
            <p><span className="font-semibold text-[#FAF7F2]">Sat – Sun:</span> 8:00 AM – 11:00 PM</p>
          </div>
          <span className="inline-block mt-4 px-3 py-1 bg-[#3B2922] text-[#C68B59] text-[10px] font-bold rounded-full border border-[#4A3830]">
            OPEN DAILY
          </span>
        </div>

      </div>

      {/* Bottom Bar with Social Media Icons */}
      <div className="max-w-6xl mx-auto px-6 pt-6 border-t border-[#3B2922] flex flex-col md:flex-row items-center justify-between text-xs text-[#A8988B] gap-4">
        <p>© 2026 BREW & BEAN. All Rights Reserved.</p>

        {/* Social Icons using Font Awesome */}
        <div className="flex items-center space-x-3">
          <a href="#" className="w-8 h-8 rounded-full bg-[#3B2922] flex items-center justify-center text-[#A8988B] hover:text-[#FAF7F2] hover:bg-[#C68B59] transition-all">
            <i className="fa-brands fa-instagram text-sm"></i>
          </a>
          <a href="#" className="w-8 h-8 rounded-full bg-[#3B2922] flex items-center justify-center text-[#A8988B] hover:text-[#FAF7F2] hover:bg-[#C68B59] transition-all">
            <i className="fa-brands fa-facebook-f text-sm"></i>
          </a>
          <a href="#" className="w-8 h-8 rounded-full bg-[#3B2922] flex items-center justify-center text-[#A8988B] hover:text-[#FAF7F2] hover:bg-[#C68B59] transition-all">
            <i className="fa-brands fa-whatsapp text-sm"></i>
          </a>
          <a href="#" className="w-8 h-8 rounded-full bg-[#3B2922] flex items-center justify-center text-[#A8988B] hover:text-[#FAF7F2] hover:bg-[#C68B59] transition-all">
            <i className="fa-solid fa-globe text-sm"></i>
          </a>
        </div>

        <div className="flex space-x-4 text-xs">
          <a href="#" className="hover:text-[#FAF7F2] transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-[#FAF7F2] transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}