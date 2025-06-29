import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import StickyCallButton from './components/StickyCallButton';
import BasketButton from './components/BasketButton';
import BasketDrawer from './components/BasketDrawer';
import { useBasket } from './hooks/useBasket';

function App() {
  const {
    basket,
    addItem,
    removeItem,
    updateQuantity,
    clearBasket,
    toggleBasket,
    closeBasket
  } = useBasket();

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Menu onAddToBasket={addItem} />
        <Testimonials />
        <Contact />
      </main>
      <StickyCallButton />
      
      {/* Basket System */}
      <BasketButton 
        itemCount={basket.itemCount} 
        onClick={toggleBasket} 
      />
      <BasketDrawer
        basket={basket}
        onClose={closeBasket}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
        onClearBasket={clearBasket}
      />
    </div>
  );
}

export default App;