import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { RESTAURANT_DATA } from '../utils/constants';

const StickyCallButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 md:hidden">
      <a
        href={`tel:${RESTAURANT_DATA.phone}`}
        className="flex items-center gap-3 bg-orange-600 text-white px-6 py-4 rounded-full shadow-2xl hover:bg-orange-700 transition-all duration-300 transform hover:scale-105 animate-pulse-slow"
        aria-label="Call restaurant"
      >
        <Phone className="w-5 h-5" />
        <span className="font-bold text-lg">Call Now</span>
      </a>
    </div>
  );
};

export default StickyCallButton;