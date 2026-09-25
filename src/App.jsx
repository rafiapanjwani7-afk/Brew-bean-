import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import { menuData } from './Data/menuData';
// import CheckoutPage from './pages/CheckoutPage';

// Pages
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import Coffee from './pages/Coffee';
import ProductDetail from './pages/ProductDetail';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  // const handleClearCart = () => setCart([]);

  const handleAddToCart = (item) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((cartItem) => cartItem.id === item.id);
      if (existingIndex > -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingIndex].quantity += 1;
        return updatedCart;
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id, change) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + change;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const handleRemove = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#3B2922] flex flex-col justify-between font-sans">
      <div>
        <Navbar 
          cartCount={cartCount} 
          onOpenCart={() => setIsCartOpen(true)} 
        />

        <Routes>
          <Route path="/" element={<HomePage menuData={menuData} onAddToCart={handleAddToCart} />} />
          
          <Route path="/products" element={<ProductsPage />}>
            {/* Main All Products Index Route */}
            <Route 
              index 
              element={
                <Coffee 
        items={[...(menuData?.coffee || []), ...(menuData?.desserts || []), ...(menuData?.bakery || [])]} 
        title="ALL PRODUCTS" 
        description="Explore our complete selection of coffee, desserts, and fresh bakery items." 
        onAddToCart={handleAddToCart} 
      />
              } 
            />
            
            {/* Category Sub-Routes */}
            <Route 
              path="coffee" 
              element={
                <Coffee 
        items={menuData?.coffee || []} 
        title="COFFEE" 
        description="From bold espresso to smooth iced favorites." 
        onAddToCart={handleAddToCart} 
      />
              } 
            />
            <Route 
              path="desserts" 
              element={
                <Coffee 
        items={menuData?.desserts || []} 
        title="DESSERTS" 
        description="Indulgent sweet treats perfectly crafted for your coffee break." 
        onAddToCart={handleAddToCart} 
      />
              } 
            />
            <Route 
              path="bakery" 
              element={
               <Coffee 
        items={menuData?.bakery || []} 
        title="BAKERY" 
        description="Freshly baked artisanal breads, rolls, and flaky pastries." 
        onAddToCart={handleAddToCart} 
      />
              } 
            />
          </Route>
{/* <Route 
  path="/checkout" 
  element={<CheckoutPage cart={cart} onClearCart={handleClearCart} />} 
/> */}
          <Route path="/products/:category/:id" element={<ProductDetail menuData={menuData} onAddToCart={handleAddToCart} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* 404 Catch All Route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>

      <Footer />

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemove={handleRemove}
      />
    </div>
  );
}