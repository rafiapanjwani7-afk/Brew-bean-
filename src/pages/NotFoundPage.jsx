import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="bg-[#FAF7F2] min-h-[80vh] flex items-center justify-center px-6 py-16">
      <div className="max-w-md w-full text-center space-y-6 bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-[#EADFCF]">
        
        {/* Coffee Cup Icon Header */}
        <div className="w-20 h-20 bg-[#FAF7F2] rounded-full flex items-center justify-center mx-auto border border-[#E2DAD0] text-[#C68B59] shadow-inner">
          <Coffee size={36} />
        </div>

        {/* Status & Title */}
        <div className="space-y-2">
          <span className="text-4xl font-serif font-bold text-[#C68B59]">404</span>
          <h1 className="text-2xl font-serif font-bold text-[#3B2922]">
            Oops! Page Spilled Away
          </h1>
          <p className="text-xs text-[#6B5E57] leading-relaxed">
            The page you are looking for doesn't exist or has been moved. Let's get you back to something warm and fresh.
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <Link
            to="/"
            className="inline-flex items-center justify-center space-x-2 w-full py-3 bg-[#3B2922] text-[#FAF7F2] text-xs font-bold tracking-widest rounded-xl hover:bg-[#C68B59] transition-all uppercase shadow-md active:scale-95"
          >
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>
        </div>

      </div>
    </div>
  );
}