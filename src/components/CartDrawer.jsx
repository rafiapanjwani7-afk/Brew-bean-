import React from 'react';
import { X, Trash2, ShoppingBag, Plus, Minus, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function CartDrawer({ isOpen, onClose, cartItems = [], onUpdateQuantity, onRemove }) {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckoutClick = () => {
    onClose();

    // Custom Styled SweetAlert Popup
    Swal.fire({
      title: 'Proceed to Checkout?',
      text: 'Aap apne order ki details checkout page par complete karein.',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3B2922',
      cancelButtonColor: '#A8988B',
      confirmButtonText: 'Yes, Checkout',
      cancelButtonText: 'Cancel',
      background: '#FAF7F2',
      color: '#3B2922',
      customClass: {
        popup: 'rounded-2xl border border-[#EADFCF]',
      }
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/checkout');
      }
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Dark Overlay Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        {/* Solid Background Drawer Panel */}
        <div className="w-screen max-w-md bg-[#FAF7F2] text-[#3B2922] shadow-2xl flex flex-col border-l border-[#EADFCF]">
          
          {/* Header */}
          <div className="p-6 bg-white border-b border-[#EADFCF] flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-[#3B2922] text-[#FAF7F2] rounded-xl">
                <ShoppingBag size={18} />
              </div>
              <div>
                <h2 className="text-lg font-serif font-bold text-[#3B2922]">YOUR BAG</h2>
                <p className="text-[11px] text-[#A8988B] font-medium">
                  {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} selected
                </p>
              </div>
            </div>

            <button 
              onClick={onClose}
              className="p-2 text-[#6B5E57] hover:bg-[#FAF7F2] hover:text-[#3B2922] rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-16 h-16 bg-[#EADFCF]/50 rounded-full flex items-center justify-center text-[#C68B59]">
                  <ShoppingBag size={32} />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-[#3B2922] text-base">YOUR BAG IS EMPTY</h3>
                  <p className="text-xs text-[#6B5E57] max-w-[200px] mt-1">
                    Find something delicious to make your day better.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="mt-2 text-xs font-bold text-[#C68B59] uppercase tracking-wider hover:underline"
                >
                  Explore Menu →
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-white p-4 rounded-2xl border border-[#EADFCF] shadow-sm flex space-x-4 items-center"
                >
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-16 h-16 object-cover rounded-xl border border-[#EADFCF]"
                  />
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-[#3B2922] truncate">{item.name}</h4>
                    <p className="text-xs font-semibold text-[#C68B59] mt-0.5">
                      Rs. {item.price}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-2 mt-2">
                      <button 
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="p-1 bg-[#FAF7F2] border border-[#E2DAD0] rounded-md text-[#3B2922] hover:bg-[#EADFCF] transition-colors"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-xs font-bold w-5 text-center text-[#3B2922]">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="p-1 bg-[#FAF7F2] border border-[#E2DAD0] rounded-md text-[#3B2922] hover:bg-[#EADFCF] transition-colors"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>

                  <button 
                    onClick={() => onRemove(item.id)}
                    className="p-2 text-[#A8988B] hover:text-red-600 transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer Subtotal & Checkout */}
          {cartItems.length > 0 && (
            <div className="p-6 bg-white border-t border-[#EADFCF] space-y-4">
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs text-[#6B5E57]">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#3B2922]">Rs. {subtotal}</span>
                </div>
                <div className="flex justify-between text-xs text-[#6B5E57]">
                  <span>Delivery Fee</span>
                  <span className="text-emerald-700 font-medium">Free</span>
                </div>
                <div className="border-t border-[#EADFCF] pt-2 flex justify-between text-sm font-bold text-[#3B2922]">
                  <span>Total</span>
                  <span className="text-[#C68B59]">Rs. {subtotal}</span>
                </div>
              </div>

              {/* SweetAlert Triggering Checkout Button */}
              <button 
                onClick={handleCheckoutClick}
                className="w-full py-3.5 bg-[#3B2922] text-[#FAF7F2] text-xs font-bold tracking-widest rounded-xl hover:bg-[#C68B59] transition-all uppercase shadow-md flex items-center justify-center space-x-2"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight size={14} />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}