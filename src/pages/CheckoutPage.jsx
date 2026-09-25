import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function CheckoutPage({ cart = [], onClearCart }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: 'Karachi',
  });

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cart.length === 0) return;

    // SweetAlert Order Success
    Swal.fire({
      title: 'Order Placed Successfully! 🎉',
      text: 'Aapka order receive ho gaya hai. Hum jald aap se contact karenge!',
      icon: 'success',
      confirmButtonColor: '#3B2922',
      confirmButtonText: 'Back to Home',
      background: '#FAF7F2',
      color: '#3B2922',
      customClass: {
        popup: 'rounded-2xl border border-[#EADFCF]',
      }
    }).then(() => {
      if (onClearCart) onClearCart();
      navigate('/');
    });
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-xl mx-auto py-20 text-center px-4">
        <h2 className="text-2xl font-serif font-bold text-[#3B2922]">YOUR CART IS EMPTY</h2>
        <p className="text-sm text-[#6B5E57] mt-2">Add some items to your bag before checking out.</p>
        <button 
          onClick={() => navigate('/products')}
          className="mt-6 px-6 py-3 bg-[#3B2922] text-[#FAF7F2] rounded-xl text-xs font-bold tracking-wider hover:bg-[#C68B59] transition-all"
        >
          BROWSE MENU
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-serif font-bold text-[#3B2922] mb-8">CHECKOUT</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Delivery Form */}
        <form onSubmit={handleSubmit} className="md:col-span-2 space-y-5 bg-white p-6 rounded-2xl border border-[#EADFCF] shadow-sm">
          <h2 className="text-lg font-serif font-bold text-[#3B2922]">Shipping Information</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#6B5E57] uppercase mb-1">Full Name</label>
              <input 
                type="text" 
                required 
                className="w-full p-3 border border-[#E2DAD0] rounded-xl text-sm focus:outline-none focus:border-[#C68B59]" 
                value={formData.fullName} 
                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#6B5E57] uppercase mb-1">Phone Number</label>
              <input 
                type="tel" 
                required 
                className="w-full p-3 border border-[#E2DAD0] rounded-xl text-sm focus:outline-none focus:border-[#C68B59]" 
                value={formData.phone} 
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#6B5E57] uppercase mb-1">Email Address</label>
            <input 
              type="email" 
              required 
              className="w-full p-3 border border-[#E2DAD0] rounded-xl text-sm focus:outline-none focus:border-[#C68B59]" 
              value={formData.email} 
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#6B5E57] uppercase mb-1">Delivery Address</label>
            <textarea 
              rows="3" 
              required 
              className="w-full p-3 border border-[#E2DAD0] rounded-xl text-sm focus:outline-none focus:border-[#C68B59]" 
              value={formData.address} 
              onChange={(e) => setFormData({...formData, address: e.target.value})}
            ></textarea>
          </div>

          {/* Payment Method */}
          <div className="pt-3 border-t border-[#EADFCF]">
            <h2 className="text-base font-serif font-bold text-[#3B2922] mb-3">Payment Method</h2>
            <div className="flex items-center space-x-3 p-3 border border-[#C68B59] rounded-xl bg-[#FAF7F2]">
              <input type="radio" checked readOnly className="accent-[#C68B59]" />
              <span className="text-xs font-bold text-[#3B2922]">Cash on Delivery (COD)</span>
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full py-3.5 bg-[#3B2922] text-[#FAF7F2] rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-[#C68B59] transition-all shadow-md"
          >
            CONFIRM ORDER (Rs. {subtotal})
          </button>
        </form>

        {/* Order Summary */}
        <div className="bg-white p-6 rounded-2xl border border-[#EADFCF] h-fit space-y-4 shadow-sm">
          <h2 className="text-lg font-serif font-bold text-[#3B2922]">Order Summary</h2>
          <div className="divide-y divide-[#EADFCF]">
            {cart.map((item) => (
              <div key={item.id} className="py-2.5 flex justify-between text-xs">
                <div>
                  <p className="font-bold text-[#3B2922]">{item.name}</p>
                  <p className="text-[#A8988B]">Qty: {item.quantity}</p>
                </div>
                <p className="font-semibold text-[#C68B59]">Rs. {item.price * item.quantity}</p>
              </div>
            ))}
          </div>
          <div className="pt-3 border-t border-[#EADFCF] flex justify-between font-bold text-sm text-[#3B2922]">
            <span>Total</span>
            <span className="text-[#C68B59]">Rs. {subtotal}</span>
          </div>
        </div>
      </div>
    </div>
  );
}