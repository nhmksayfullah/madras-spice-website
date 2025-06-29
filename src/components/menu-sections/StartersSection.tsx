import React from 'react';
import { Star, Flame, Leaf } from 'lucide-react';
import { MenuCategory } from '../../types/menu';
import AddToBasketButton from '../AddToBasketButton';

interface StartersSectionProps {
  category: MenuCategory;
  onAddToBasket: (item: Omit<import('../../types/basket').BasketItem, 'id' | 'quantity'>) => void;
  showVegetarianOnly: boolean;
  selectedSpiceLevel: string;
  getSpiceLevelFromItem: (item: any) => string;
}

const StartersSection: React.FC<StartersSectionProps> = ({
  category,
  onAddToBasket,
  showVegetarianOnly,
  selectedSpiceLevel,
  getSpiceLevelFromItem
}) => {
  const formatPrice = (price: number): string => {
    return `£${price.toFixed(2)}`;
  };

  const handleAddToBasket = (item: any) => {
    onAddToBasket({
      name: item.name,
      price: item.price,
      category: category.name,
      isSpicy: item.isSpicy,
      isVegetarian: item.isVegetarian,
      isVegan: item.isVegan,
      isPopular: item.isPopular
    });
  };

  // Filter items based on vegetarian and spice level filters
  const filteredItems = category.items.filter(item => {
    if (showVegetarianOnly && !item.isVegetarian) return false;
    if (selectedSpiceLevel !== 'all') {
      const itemSpiceLevel = getSpiceLevelFromItem(item);
      if (itemSpiceLevel !== selectedSpiceLevel) return false;
    }
    return true;
  });

  if (filteredItems.length === 0) return null;

  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
          {category.name}
        </h3>
        {category.description && (
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {category.description}
          </p>
        )}
        <div className="w-16 h-1 bg-orange-600 mx-auto mt-4"></div>
      </div>
      
      <div className="grid gap-3">
        {filteredItems.map((item, index) => (
          <div key={index} className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-orange-100 hover:border-orange-300">
            <div className="flex justify-between items-center">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-base font-bold text-gray-800 truncate">{item.name}</h4>
                  <div className="flex gap-1 flex-shrink-0">
                    {item.isPopular && (
                      <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" title="Popular dish" />
                    )}
                    {item.isSpicy && (
                      <Flame className="w-3 h-3 text-red-500" title="Spicy" />
                    )}
                    {item.isVegetarian && (
                      <Leaf className="w-3 h-3 text-green-500" title="Vegetarian" />
                    )}
                    {item.isVegan && (
                      <div className="w-3 h-3 bg-green-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">V</span>
                      </div>
                    )}
                  </div>
                </div>
                {item.description && (
                  <p className="text-gray-600 text-sm leading-relaxed mb-2 line-clamp-2">{item.description}</p>
                )}
              </div>
              
              <div className="flex items-center gap-3 ml-4 flex-shrink-0">
                <span className="text-lg font-bold text-orange-600">{formatPrice(item.price)}</span>
                <AddToBasketButton
                  onAdd={() => handleAddToBasket(item)}
                  className="text-sm px-3 py-2"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StartersSection;