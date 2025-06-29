import React from 'react';
import { Trophy, Award, ChefHat, Star, Flame, Leaf } from 'lucide-react';
import { MenuCategory } from '../../types/menu';
import AddToBasketButton from '../AddToBasketButton';

interface SignatureDishesSectionProps {
  category: MenuCategory;
  onAddToBasket: (item: Omit<import('../../types/basket').BasketItem, 'id' | 'quantity'>) => void;
  showVegetarianOnly: boolean;
  selectedSpiceLevel: string;
  getSpiceLevelFromItem: (item: any) => string;
}

const SignatureDishesSection: React.FC<SignatureDishesSectionProps> = ({
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

  const SignatureDishCard: React.FC<{ item: any }> = ({ item }) => {
    return (
      <div className="relative bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-purple-200 hover:border-purple-400 transform hover:-translate-y-2 group">
        {/* Signature Badge */}
        <div className="absolute -top-3 -right-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-3 py-1 rounded-full shadow-lg transform rotate-6 group-hover:rotate-12 transition-transform duration-300">
          <div className="flex items-center gap-1">
            <Award className="w-3 h-3" />
            <span className="font-bold text-xs">SIGNATURE</span>
          </div>
        </div>

        {/* Chef's Special Icon */}
        <div className="absolute top-3 left-3 text-purple-500 group-hover:text-purple-600 transition-colors duration-300">
          <Trophy className="w-5 h-5" />
        </div>

        <div className="pt-4">
          <div className="flex justify-between items-start mb-3">
            <div className="flex-1 pr-4">
              <div className="flex items-center gap-2 mb-2">
                <h4 className="text-lg font-bold text-gray-800 group-hover:text-purple-800 transition-colors duration-300">
                  {item.name}
                </h4>
                <div className="flex gap-1">
                  {item.isPopular && (
                    <div className="bg-yellow-100 p-1 rounded-full">
                      <Star className="w-3 h-3 text-yellow-600 fill-yellow-600" title="Popular dish" />
                    </div>
                  )}
                  {item.isSpicy && (
                    <div className="bg-red-100 p-1 rounded-full">
                      <Flame className="w-3 h-3 text-red-600" title="Spicy" />
                    </div>
                  )}
                  {item.isVegetarian && (
                    <div className="bg-green-100 p-1 rounded-full">
                      <Leaf className="w-3 h-3 text-green-600" title="Vegetarian" />
                    </div>
                  )}
                </div>
              </div>
              {item.description && (
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {item.description}
                </p>
              )}
            </div>
            <div className="flex-shrink-0">
              <div className="text-2xl font-bold text-purple-600 group-hover:text-purple-700 transition-colors duration-300">
                {formatPrice(item.price)}
              </div>
            </div>
          </div>

          {/* Premium Features Bar */}
          <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-purple-200">
            <div className="flex items-center gap-1 bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium">
              <ChefHat className="w-3 h-3" />
              Chef's Special
            </div>
            {item.isPopular && (
              <div className="flex items-center gap-1 bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs font-medium">
                <Star className="w-3 h-3" />
                Customer Favorite
              </div>
            )}
            <div className="flex items-center gap-1 bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full text-xs font-medium">
              <Award className="w-3 h-3" />
              Premium Quality
            </div>
          </div>

          {/* Add to Basket Button */}
          <div className="mt-4 pt-3 border-t border-purple-200">
            <AddToBasketButton
              onAdd={() => handleAddToBasket(item)}
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="mb-16">
      {/* Special Signature Header */}
      <div className="text-center mb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-indigo-500 to-blue-500 opacity-10 rounded-3xl"></div>
        <div className="relative py-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Trophy className="w-12 h-12 text-purple-600" />
            <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
              {category.name}
            </h3>
            <Award className="w-12 h-12 text-purple-600" />
          </div>
          <div className="w-32 h-2 bg-gradient-to-r from-purple-400 via-indigo-500 to-blue-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-700 text-xl max-w-4xl mx-auto font-medium leading-relaxed">
            {category.description}
          </p>
          
          {/* Attention-grabbing banner */}
          <div className="mt-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-2xl inline-block shadow-2xl">
            <div className="flex items-center gap-2 text-lg font-bold">
              <ChefHat className="w-6 h-6" />
              <span>👨‍🍳 CHEF'S MASTERPIECES • AUTHENTIC FLAVORS • PREMIUM QUALITY 👨‍🍳</span>
              <Trophy className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid gap-6 max-w-6xl mx-auto">
        {filteredItems.map((item, index) => (
          <SignatureDishCard key={index} item={item} />
        ))}
      </div>

      {/* Special Call to Action for Signature Dishes */}
      <div className="mt-12 text-center">
        <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 rounded-3xl p-8 text-white shadow-2xl max-w-4xl mx-auto">
          <h4 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
            <Trophy className="w-8 h-8" />
            Why Choose Our Signature Dishes?
          </h4>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
              <div className="text-3xl mb-2">👨‍🍳</div>
              <div className="font-bold">Chef's Expertise</div>
              <div className="text-sm opacity-90">Masterfully crafted recipes</div>
            </div>
            <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
              <div className="text-3xl mb-2">🌟</div>
              <div className="font-bold">Premium Ingredients</div>
              <div className="text-sm opacity-90">Only the finest quality</div>
            </div>
            <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
              <div className="text-3xl mb-2">🏆</div>
              <div className="font-bold">Authentic Tradition</div>
              <div className="text-sm opacity-90">Time-honored techniques</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignatureDishesSection;