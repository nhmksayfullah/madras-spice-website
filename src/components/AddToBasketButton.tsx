import React, { useState } from 'react';
import { Plus, Check } from 'lucide-react';

interface AddToBasketButtonProps {
  onAdd: () => void;
  className?: string;
}

const AddToBasketButton: React.FC<AddToBasketButtonProps> = ({ onAdd, className = '' }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleClick = () => {
    onAdd();
    setIsAdded(true);
    
    // Reset the animation after 2 seconds
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center justify-center gap-1 sm:gap-2 px-3 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 whitespace-nowrap ${
        isAdded 
          ? 'bg-green-600 text-white shadow-lg' 
          : 'bg-orange-600 text-white hover:bg-orange-700 shadow-md hover:shadow-lg'
      } ${className}`}
    >
      {isAdded ? (
        <>
          <Check className="w-3 h-3 sm:w-4 sm:h-4" />
          <span className="text-xs sm:text-sm">Added!</span>
        </>
      ) : (
        <>
          <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
          <span className="text-xs sm:text-sm">Add</span>
        </>
      )}
    </button>
  );
};

export default AddToBasketButton;