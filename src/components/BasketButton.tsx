import React from 'react';
import { ShoppingCart, Plus } from 'lucide-react';

interface BasketButtonProps {
  itemCount: number;
  onClick: () => void;
}

const BasketButton: React.FC<BasketButtonProps> = ({ itemCount, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 bg-gradient-to-r from-orange-600 to-red-600 text-white p-3 sm:p-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 group"
      aria-label="View basket"
    >
      <div className="relative">
        <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
        {itemCount > 0 && (
          <div className="absolute -top-2 sm:-top-3 -right-2 sm:-right-3 bg-yellow-400 text-black text-xs font-bold rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center animate-pulse">
            {itemCount > 99 ? '99+' : itemCount}
          </div>
        )}
      </div>
      
      {/* Floating text hint - Hidden on mobile */}
      <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-black text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap hidden sm:block">
        {itemCount === 0 ? 'Your basket is empty' : `${itemCount} item${itemCount > 1 ? 's' : ''} in basket`}
        <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-black"></div>
      </div>
    </button>
  );
};

export default BasketButton;