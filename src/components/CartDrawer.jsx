import React from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemove }) {
  const navigate = useNavigate();
  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-sm">
      <div className="w-full max-w-md bg-cream h-full flex flex-col justify-between shadow-2xl p-6">
        <div>
          <div className="flex justify-between items-center border-b border-latte pb-4">
            <h2 className="text-lg font-serif font-bold text-espresso tracking-wider uppercase">Your Bag</h2>
            <button onClick={onClose}><X size={22} className="text-espresso" /></button>
          </div>

          {cartItems.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-muted-gray text-sm">YOUR BAG IS EMPTY</p>
              <p className="text-xs text-muted-gray mt-2">Find something delicious to make your day better.</p>
              <button 
                onClick={() => { onClose(); navigate('/products'); }} 
                className="mt-6 px-6 py-3 bg-espresso text-cream text-xs tracking-wider rounded-xl hover:bg-coffee-brown"
              >
                EXPLORE MENU →
              </button>
            </div>
          ) : (
            <div className="mt-6 space-y-4 max-h-[60vh] overflow-y-auto pr-2">
              {cartItems.map((item) => (
                <div key={`${item.id}-${item.selectedSize}`} className="flex items-center space-x-4 bg-white p-3 rounded-xl border border-latte">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                  <div className="flex-1">
                    <h4 className="font-semibold text-espresso text-sm">{item.name}</h4>
                    <span className="text-xs text-muted-gray">{item.selectedSize || 'Standard'}</span>
                    <p className="text-xs font-bold text-espresso mt-1">Rs {item.price}</p>
                  </div>
                  <div className="flex items-center space-x-2 border rounded-lg px-2 py-1 bg-cream text-xs">
                    <button onClick={() => onUpdateQuantity(item.id, -1)}><Minus size={12} /></button>
                    <span className="font-bold">{item.quantity}</span>
                    <button onClick={() => onUpdateQuantity(item.id, 1)}><Plus size={12} /></button>
                  </div>
                  <button onClick={() => onRemove(item.id)} className="text-muted-gray hover:text-red-500">
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="border-t border-latte pt-4 space-y-3">
            <div className="flex justify-between font-bold text-espresso">
              <span>Subtotal</span>
              <span>Rs {subtotal}</span>
            </div>
            <button 
              onClick={() => { onClose(); navigate('/checkout'); }}
              className="w-full py-3 bg-espresso text-cream font-semibold text-xs tracking-widest rounded-xl hover:bg-coffee-brown transition uppercase"
            >
              Checkout →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}