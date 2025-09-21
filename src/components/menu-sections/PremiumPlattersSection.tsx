import React from 'react';
import { Crown, Sparkles, Users, ChefHat, Star, Flame, Leaf } from 'lucide-react';
import { MenuCategory } from '../../types/menu';
import { platterDetails } from '../../data/menuData';

interface PremiumPlattersSectionProps {
  category: MenuCategory;
  showVegetarianOnly: boolean;
  selectedSpiceLevel: string;
  getSpiceLevelFromItem: (item: any) => string;
}

const PremiumPlattersSection: React.FC<PremiumPlattersSectionProps> = ({
  category,
  showVegetarianOnly,
  selectedSpiceLevel,
  getSpiceLevelFromItem
}) => {
  const formatPrice = (price: number): string => {
    return `£${price.toFixed(2)}`;
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

  const PremiumPlatterCard: React.FC<{ item: any }> = ({ item }) => {
    const platterInfo = platterDetails[item.name as keyof typeof platterDetails];
    
    return (
      <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200 hover:border-orange-300 transform hover:-translate-y-2">
        {/* Premium Badge */}
        <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full shadow-lg transform rotate-12">
          <div className="flex items-center gap-1">
            <Crown className="w-4 h-4" />
            <span className="font-bold text-sm">PREMIUM</span>
          </div>
        </div>

        {/* Sparkle Effects */}
        <div className="absolute top-4 left-4 text-orange-400 animate-pulse">
          <Sparkles className="w-6 h-6" />
        </div>
        <div className="absolute bottom-4 right-8 text-red-400 animate-pulse delay-1000">
          <Sparkles className="w-5 h-5" />
        </div>

        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Users className="w-8 h-8 text-orange-600" />
            <h4 className="text-2xl font-bold text-gray-800 uppercase tracking-wide">
              {item.name}
            </h4>
          </div>
          
          <div className="flex justify-center items-center gap-2 mb-4">
            <div className="text-4xl font-bold text-orange-600">{formatPrice(item.price)}</div>
            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">
              GREAT VALUE!
            </div>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed mb-6 font-medium">
            {item.description}
          </p>
        </div>

        {/* Platter Contents */}
        {platterInfo && (
          <div className="bg-gray-50 rounded-xl p-6 mb-6 border border-gray-200">
            <h5 className="text-lg font-bold text-gray-800 mb-4 text-center flex items-center justify-center gap-2">
              <ChefHat className="w-5 h-5 text-orange-600" />
              Combination Includes:
            </h5>
            <div className="grid grid-cols-1 gap-3">
              {platterInfo.items.map((platterItem, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-100">
                  <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <span className="text-gray-800 font-medium">{platterItem}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          <div className="flex items-center gap-1 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-bold">
            <Users className="w-4 h-4" />
            Perfect for 2
          </div>
          {item.isPopular && (
            <div className="flex items-center gap-1 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              <Star className="w-4 h-4" />
              Most Popular
            </div>
          )}
          {item.isSpicy && (
            <div className="flex items-center gap-1 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              <Flame className="w-4 h-4" />
              Spicy
            </div>
          )}
          {item.isVegetarian && (
            <div className="flex items-center gap-1 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              <Leaf className="w-4 h-4" />
              Vegetarian
            </div>
          )}
        </div>

        {/* Premium Display */}
        <div className="text-center">
          <div className="text-xl px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg rounded-lg font-bold">
            Premium Platter
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="mb-16">
      {/* Special Premium Header */}
      <div className="text-center mb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-red-50 rounded-3xl"></div>
        <div className="relative py-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Crown className="w-12 h-12 text-orange-600" />
            <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
              {category.name}
            </h3>
            <Crown className="w-12 h-12 text-orange-600" />
          </div>
          <div className="w-32 h-2 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-700 text-xl max-w-3xl mx-auto font-medium">
            {category.description}
          </p>
          
          {/* Attention-grabbing banner */}
          <div className="mt-6 bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-2xl inline-block shadow-lg">
            <div className="flex items-center gap-2 text-lg font-bold">
              <Sparkles className="w-6 h-6" />
              <span>🎉 PERFECT FOR SHARING • AMAZING VALUE • CUSTOMER FAVORITE 🎉</span>
              <Sparkles className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {filteredItems.map((item, index) => (
          <PremiumPlatterCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default PremiumPlattersSection;