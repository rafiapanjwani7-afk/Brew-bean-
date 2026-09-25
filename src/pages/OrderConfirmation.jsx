import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle2, Clock, MapPin, ShoppingBag, ArrowRight, Coffee } from 'lucide-react';

export default function OrderConfirmation() {
  const location = useLocation();

  // Safely fallback parameters if state is null
  const stateData = location?.state || {};

  const orderDetails = {
    orderId: stateData.orderId || '#BREW-' + Math.floor(100000 + Math.random() * 900000),
    items: Array.isArray(stateData.items) ? stateData.items : [],
    totalAmount: stateData.totalAmount || '0.00',
    deliveryAddress: stateData.deliveryAddress || 'Your specified address',
    estimatedTime: stateData.estimatedTime || '25-35 Mins',
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] py-12 px-4 sm:px-6 lg:px-8 text-[#3B2922]">
      <div className="max-w-3xl mx-auto space-y-8">
        
        {/* Success Banner */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#EADFCF] text-center space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full mb-2">
            <CheckCircle2 size={48} />
          </div>
          
          <span className="inline-block px-3 py-1 bg-[#EADFCF]/50 text-[#C68B59] rounded-full text-xs font-bold tracking-widest uppercase">
            Order Received
          </span>

          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#3B2922]">
            Thank You For Your Order!
          </h1>
          
          <p className="text-sm text-[#6B5E57] max-w-md mx-auto">
            We've received your request and our baristas are preparing your freshly brewed experience.
          </p>

          <div className="pt-2 text-xs font-bold tracking-wider text-[#A8988B] uppercase">
            Order ID: <span className="text-[#3B2922] font-mono text-sm">{orderDetails.orderId}</span>
          </div>
        </div>

        {/* Details Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-[#EADFCF] flex items-center space-x-4">
            <div className="p-3 bg-[#FAF7F2] text-[#C68B59] rounded-xl border border-[#EADFCF]/60">
              <Clock size={24} />
            </div>
            <div>
              <p className="text-xs text-[#A8988B] font-semibold uppercase tracking-wider">Estimated Time</p>
              <p className="text-sm font-bold text-[#3B2922] mt-0.5">{orderDetails.estimatedTime}</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#EADFCF] flex items-center space-x-4">
            <div className="p-3 bg-[#FAF7F2] text-[#C68B59] rounded-xl border border-[#EADFCF]/60">
              <MapPin size={24} />
            </div>
            <div>
              <p className="text-xs text-[#A8988B] font-semibold uppercase tracking-wider">Delivery To</p>
              <p className="text-sm font-bold text-[#3B2922] truncate max-w-[180px] mt-0.5">
                {orderDetails.deliveryAddress}
              </p>
            </div>
          </div>
        </div>

        {/* Order Items */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#EADFCF] space-y-6">
          <h2 className="text-lg font-serif font-bold text-[#3B2922] border-b border-[#EADFCF] pb-4 flex items-center space-x-2">
            <ShoppingBag size={18} className="text-[#C68B59]" />
            <span>Order Summary</span>
          </h2>

          {orderDetails.items.length > 0 ? (
            <div className="divide-y divide-[#EADFCF]/50">
              {orderDetails.items.map((item, index) => (
                <div key={index} className="py-3 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-[#FAF7F2] flex items-center justify-center text-[#C68B59] border border-[#EADFCF]">
                      <Coffee size={18} />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-[#3B2922]">{item.name}</p>
                      <p className="text-[11px] text-[#6B5E57]">Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-[#3B2922]">
                    ${((item.price || 0) * (item.quantity || 1)).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs text-[#6B5E57] italic">Fresh roasts and artisanal treats arriving shortly.</p>
          )}

          <div className="pt-4 border-t border-[#EADFCF] flex justify-between items-center">
            <span className="font-serif font-bold text-[#3B2922]">Total Paid</span>
            <span className="text-lg font-bold text-[#C68B59]">${orderDetails.totalAmount}</span>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            to="/"
            className="w-full sm:w-auto px-8 py-3.5 bg-[#3B2922] text-[#FAF7F2] text-xs font-bold tracking-widest rounded-xl hover:bg-[#C68B59] transition-all text-center shadow-md"
          >
            BACK TO HOME
          </Link>
          <Link
            to="/products"
            className="w-full sm:w-auto px-8 py-3.5 border border-[#3B2922]/30 text-[#3B2922] text-xs font-bold tracking-widest rounded-xl hover:bg-[#EFEBE4] transition-all text-center flex items-center justify-center space-x-2"
          >
            <span>ORDER MORE</span>
            <ArrowRight size={15} />
          </Link>
        </div>

      </div>
    </div>
  );
}