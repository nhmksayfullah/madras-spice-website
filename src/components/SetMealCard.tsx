import React from 'react';
import { Users, Star, Utensils, Crown, Sparkles, Check, Flame, Leaf } from 'lucide-react';
import { MenuItem, MenuCategory } from '../types/menu';
import { setMealDetails } from '../data/menuData';
import AddToBasketButton from './AddToBasketButton';

interface SetMealCardProps {
  item: MenuItem;
  category: MenuCategory;
  onAddToBasket: (item: Omit<import('../types/basket').BasketItem, 'id' | 'quantity'>) => void;
}

const SetMealCard: React.FC<SetMealCardProps> = ({ item, category, onAddToBasket }) => {
  const formatPrice = (price: number): string => {
    return `£${price.toFixed(2)}`;
  };

  const handleAddToBasket = () => {
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

  const setMealInfo = setMealDetails[item.name as keyof typeof setMealDetails];
  const isVegetarian = item.name.includes('Vegetable');

  return (
    <div className={`relative bg-gradient-to-br rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 border-4 hover:scale-105 transform ${
      isVegetarian 
        ? 'from-green-50 via-emerald-50 to-teal-50 border-green-400' 
        : 'from-orange-50 via-red-50 to-pink-50 border-orange-400'
    }`}>
      
      {/* Premium Badge */}
      <div className={`absolute -top-4 -right-4 px-4 py-2 rounded-full shadow-lg transform rotate-12 ${
        isVegetarian 
          ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white' 
          : 'bg-gradient-to-r from-orange-500 to-red-600 text-white'
      }`}>
        <div className="flex items-center gap-1">
          <Crown className="w-4 h-4" />
          <span className="font-bold text-sm">SET MEAL</span>
        </div>
      </div>

      {/* Sparkle Effects */}
      <div className={`absolute top-4 left-4 animate-pulse ${
        isVegetarian ? 'text-green-400' : 'text-orange-400'
      }`}>
        <Sparkles className="w-6 h-6" />
      </div>
      <div className={`absolute bottom-4 right-8 animate-pulse delay-1000 ${
        isVegetarian ? 'text-emerald-400' : 'text-red-400'
      }`}>
        <Sparkles className="w-5 h-5" />
      </div>

      {/* Main Content */}
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Users className={`w-8 h-8 ${isVegetarian ? 'text-green-600' : 'text-orange-600'}`} />
          <h4 className="text-2xl font-bold text-gray-800 uppercase tracking-wide">
            {item.name.replace(' for Two Person', '')}
          </h4>
        </div>
        
        <div className="flex justify-center items-center gap-2 mb-4">
          <div className={`text-4xl font-bold ${isVegetarian ? 'text-green-600' : 'text-orange-600'}`}>
            {formatPrice(item.price)}
          </div>
          <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-bold">
            GREAT VALUE!
          </div>
        </div>

        <p className="text-gray-700 text-lg leading-relaxed mb-6 font-medium">
          {item.description}
        </p>
      </div>

      {/* Set Meal Contents */}
      {setMealInfo && (
        <div className={`bg-white/80 backdrop-blur-sm rounded-xl p-6 mb-6 border-2 ${
          isVegetarian ? 'border-green-200' : 'border-orange-200'
        }`}>
          <h5 className={`text-lg font-bold text-gray-800 mb-4 text-center flex items-center justify-center gap-2`}>
            <Utensils className={`w-5 h-5 ${isVegetarian ? 'text-green-600' : 'text-orange-600'}`} />
            Complete Set Meal Includes:
          </h5>
          
          {/* Starters */}
          <div className="mb-4">
            <h6 className={`font-bold text-gray-700 mb-2 flex items-center gap-2`}>
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold ${
                isVegetarian ? 'bg-green-600' : 'bg-orange-600'
              }`}>1</span>
              Starters:
            </h6>
            <div className="grid gap-2">
              {setMealInfo.starters.map((starter, index) => (
                <div key={index} className={`flex items-center gap-3 p-2 rounded-lg ${
                  isVegetarian ? 'bg-green-100' : 'bg-orange-100'
                }`}>
                  <Check className={`w-4 h-4 ${isVegetarian ? 'text-green-600' : 'text-orange-600'}`} />
                  <span className="text-gray-800 font-medium">{starter}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mains */}
          <div className="mb-4">
            <h6 className={`font-bold text-gray-700 mb-2 flex items-center gap-2`}>
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold ${
                isVegetarian ? 'bg-green-600' : 'bg-orange-600'
              }`}>2</span>
              Main Dishes:
            </h6>
            <div className="grid gap-2">
              {setMealInfo.mains.map((main, index) => (
                <div key={index} className={`flex items-center gap-3 p-2 rounded-lg ${
                  isVegetarian ? 'bg-green-100' : 'bg-orange-100'
                }`}>
                  <Check className={`w-4 h-4 ${isVegetarian ? 'text-green-600' : 'text-orange-600'}`} />
                  <span className="text-gray-800 font-medium">{main}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sides */}
          <div>
            <h6 className={`font-bold text-gray-700 mb-2 flex items-center gap-2`}>
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold ${
                isVegetarian ? 'bg-green-600' : 'bg-orange-600'
              }`}>3</span>
              Side Dishes:
            </h6>
            <div className="grid gap-2">
              {setMealInfo.sides.map((side, index) => (
                <div key={index} className={`flex items-center gap-3 p-2 rounded-lg ${
                  isVegetarian ? 'bg-green-100' : 'bg-orange-100'
                }`}>
                  <Check className={`w-4 h-4 ${isVegetarian ? 'text-green-600' : 'text-orange-600'}`} />
                  <span className="text-gray-800 font-medium">{side}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Features */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-bold text-white ${
          isVegetarian ? 'bg-green-600' : 'bg-orange-600'
        }`}>
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

      {/* Add to Basket Button */}
      <div className="text-center">
        <AddToBasketButton
          onAdd={handleAddToBasket}
          className={`text-xl px-8 py-4 shadow-2xl ${
            isVegetarian 
              ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700' 
              : 'bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700'
          }`}
        />
      </div>
    </div>
  );
};

export default SetMealCard;