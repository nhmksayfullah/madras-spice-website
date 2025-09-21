import React from 'react';
import Header from './components/Header';
import PromotionalBanner from './components/PromotionalBanner';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import StickyCallButton from './components/StickyCallButton';

function App() {
  return (
    <div className="min-h-screen">
      <PromotionalBanner />
      <Header />
      <main>
        <Hero />
        <About />
        <Menu />
        <Testimonials />
        <Contact />
      </main>
      <StickyCallButton />
    </div>
  );
}

export default App;