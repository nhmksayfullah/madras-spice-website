import React from 'react';
import { Calendar, Clock, Star, Users, Coffee, Utensils, AlertCircle } from 'lucide-react';
import { MenuItem } from '../types/menu';
import { isSunday, getCurrentDayName } from '../utils/dateUtils';

interface SundaySpecialCardProps {
  item: MenuItem;
  onAddToBasket?: (item: Omit<import('../types/basket').BasketItem, 'id' | 'quantity'>) => void;
}

const SundaySpecialCard: React.FC<SundaySpecialCardProps> = ({ item, onAddToBasket }) => {
  const isAvailable = isSunday();
  const currentDay = getCurrentDayName();
  const isAdult = item.name.includes('Adult');

  const formatPrice = (price: number): string => {
    return `£${price.toFixed(2)}`;
  };

  const handleAddToBasket = () => {
    if (!isAvailable || !onAddToBasket) return;
    
    onAddToBasket({
      name: item.name,
      price: item.price,
      category: 'Sunday Night Special',
      isSpicy: false,
      isVegetarian: false,
      isVegan: false,
      isPopular: item.isPopular
    });
  };

  return (
    <div className={`relative bg-gradient-to-br rounded-2xl p-8 shadow-2xl border-4 transition-all duration-500 transform hover:scale-105 ${
      isAvailable 
        ? 'from-purple-50 via-indigo-50 to-blue-50 border-purple-400 hover:shadow-3xl' 
        : 'from-gray-100 via-gray-200 to-gray-300 border-gray-400 opacity-75'
    }`}>
      
      {/* Availability Badge */}
      <div className={`absolute -top-4 -right-4 px-4 py-2 rounded-full shadow-lg transform rotate-12 ${
        isAvailable 
          ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white' 
          : 'bg-gradient-to-r from-red-500 to-orange-600 text-white'
      }`}>
        <div className="flex items-center gap-1">
          {isAvailable ? (
            <>
              <Calendar className="w-4 h-4" />
              <span className="font-bold text-sm">AVAILABLE TODAY</span>
            </>
          ) : (
            <>
              <Clock className="w-4 h-4" />
              <span className="font-bold text-sm">SUNDAY ONLY</span>
            </>
          )}
        </div>
      </div>

      {/* Special Indicators */}
      <div className="absolute top-4 left-4 flex flex-col gap-2">
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full shadow-lg">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4" />
            <span className="font-bold text-sm">SPECIAL</span>
          </div>
        </div>
        {isAdult ? (
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-3 py-1 rounded-full shadow-lg">
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span className="font-bold text-sm">ADULT</span>
            </div>
          </div>
        ) : (
          <div className="bg-gradient-to-r from-pink-500 to-rose-600 text-white px-3 py-1 rounded-full shadow-lg">
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span className="font-bold text-sm">CHILD</span>
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="text-center mt-8 mb-6">
        <h3 className={`text-2xl font-bold mb-4 ${
          isAvailable ? 'text-gray-800' : 'text-gray-600'
        }`}>
          {item.name.replace('Sunday Night Special Five Course Meal - ', '')}
        </h3>
        
        <div className={`text-4xl font-bold mb-6 ${
          isAvailable ? 'text-purple-600' : 'text-gray-500'
        }`}>
          {formatPrice(item.price)}
        </div>

        {/* Course Details */}
        <div className={`bg-white/80 backdrop-blur-sm rounded-xl p-6 mb-6 border-2 ${
          isAvailable ? 'border-purple-200' : 'border-gray-300'
        }`}>
          <h4 className={`text-lg font-bold mb-4 flex items-center justify-center gap-2 ${
            isAvailable ? 'text-gray-800' : 'text-gray-600'
          }`}>
            <Utensils className="w-5 h-5" />
            Five Course Experience
          </h4>
          
          <div className="space-y-3 text-left">
            <div className={`flex items-start gap-3 p-3 rounded-lg ${
              isAvailable ? 'bg-purple-50' : 'bg-gray-100'
            }`}>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm ${
                isAvailable ? 'bg-purple-600 text-white' : 'bg-gray-500 text-white'
              }`}>1</div>
              <span className={`font-medium ${isAvailable ? 'text-gray-800' : 'text-gray-600'}`}>
                Papadum & Chutneys
              </span>
            </div>
            
            <div className={`flex items-start gap-3 p-3 rounded-lg ${
              isAvailable ? 'bg-purple-50' : 'bg-gray-100'
            }`}>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm ${
                isAvailable ? 'bg-purple-600 text-white' : 'bg-gray-500 text-white'
              }`}>2</div>
              <span className={`font-medium ${isAvailable ? 'text-gray-800' : 'text-gray-600'}`}>
                Choice of Any Starter from the menu
              </span>
            </div>
            
            <div className={`flex items-start gap-3 p-3 rounded-lg ${
              isAvailable ? 'bg-purple-50' : 'bg-gray-100'
            }`}>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm ${
                isAvailable ? 'bg-purple-600 text-white' : 'bg-gray-500 text-white'
              }`}>3</div>
              <div className={`font-medium ${isAvailable ? 'text-gray-800' : 'text-gray-600'}`}>
                <div>Choice of Any Main Dish from the menu</div>
                <div className="text-sm text-red-600 mt-1">
                  (except King Prawns, Salmon, Duck & Lamb Chop)
                </div>
              </div>
            </div>
            
            <div className={`flex items-start gap-3 p-3 rounded-lg ${
              isAvailable ? 'bg-purple-50' : 'bg-gray-100'
            }`}>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm ${
                isAvailable ? 'bg-purple-600 text-white' : 'bg-gray-500 text-white'
              }`}>4</div>
              <span className={`font-medium ${isAvailable ? 'text-gray-800' : 'text-gray-600'}`}>
                Choice of Rice, Naan or Chips
              </span>
            </div>
            
            <div className={`flex items-start gap-3 p-3 rounded-lg ${
              isAvailable ? 'bg-purple-50' : 'bg-gray-100'
            }`}>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm ${
                isAvailable ? 'bg-purple-600 text-white' : 'bg-gray-500 text-white'
              }`}>5</div>
              <div className={`flex items-center gap-2 font-medium ${isAvailable ? 'text-gray-800' : 'text-gray-600'}`}>
                <Coffee className="w-4 h-4" />
                <span>Served with tea or coffee</span>
              </div>
            </div>
          </div>
          
          <div className={`mt-4 p-3 rounded-lg text-center ${
            isAvailable ? 'bg-orange-100 border border-orange-300' : 'bg-gray-200 border border-gray-400'
          }`}>
            <span className={`font-bold ${isAvailable ? 'text-orange-700' : 'text-gray-600'}`}>
              Any extras £1.50
            </span>
          </div>
        </div>
      </div>

      {/* Availability Status */}
      {!isAvailable && (
        <div className="bg-red-100 border-2 border-red-300 rounded-xl p-4 mb-6">
          <div className="flex items-center gap-2 text-red-700 justify-center">
            <AlertCircle className="w-5 h-5" />
            <span className="font-bold">
              Unavailable Today ({currentDay})
            </span>
          </div>
          <p className="text-red-600 text-sm text-center mt-2">
            This special is only available on Sundays. Available for Dine in only.
          </p>
        </div>
      )}

      {/* Action Button */}
      <div className="text-center">
        <button
          onClick={handleAddToBasket}
          disabled={!isAvailable}
          className={`px-8 py-4 rounded-xl font-bold text-xl transition-all duration-300 transform ${
            isAvailable 
              ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700 hover:scale-105 shadow-lg hover:shadow-xl' 
              : 'bg-gray-400 text-gray-600 cursor-not-allowed opacity-50'
          }`}
        >
          {isAvailable ? (
            <div className="flex items-center gap-3">
              <Calendar className="w-6 h-6" />
              <span>Add to Basket - {formatPrice(item.price)}</span>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6" />
              <span>Available Sundays Only</span>
            </div>
          )}
        </button>
        
        {isAvailable && (
          <p className="text-sm text-gray-600 mt-3">
            Special Days not included | Available for Dine in only
          </p>
        )}
      </div>
    </div>
  );
};

export default SundaySpecialCard;