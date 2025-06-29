import React, { useState } from 'react';
import { ChefHat, Leaf, Flame, Star, Filter, Users, Crown, Sparkles, Award, Trophy, Heart, Calendar, Utensils } from 'lucide-react';
import { menuData } from '../data/menuData';
import { MenuItem } from '../types/menu';
import TraditionalDishBuilder from './TraditionalDishBuilder';
import AllTimeFavouritesBuilder from './AllTimeFavouritesBuilder';
import BiryaniDishesBuilder from './BiryaniDishesBuilder';
import SundaySpecialCard from './SundaySpecialCard';
import SetMealCard from './SetMealCard';
import { isSunday } from '../utils/dateUtils';

// Import all menu section components
import CondimentsSection from './menu-sections/CondimentsSection';
import StartersSection from './menu-sections/StartersSection';
import VegetarianStartersSection from './menu-sections/VegetarianStartersSection';
import SeafoodStartersSection from './menu-sections/SeafoodStartersSection';
import TandooriSection from './menu-sections/TandooriSection';
import PremiumPlattersSection from './menu-sections/PremiumPlattersSection';
import SignatureDishesSection from './menu-sections/SignatureDishesSection';
import VegetableSideDishesSection from './menu-sections/VegetableSideDishesSection';
import RiceDishesSection from './menu-sections/RiceDishesSection';
import SundriesNaanSection from './menu-sections/SundriesNaanSection';
import EnglishDishesSection from './menu-sections/EnglishDishesSection';

interface MenuSectionProps {
  onAddToBasket: (item: Omit<import('../types/basket').BasketItem, 'id' | 'quantity'>) => void;
}

const MenuSection: React.FC<MenuSectionProps> = ({ onAddToBasket }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showVegetarianOnly, setShowVegetarianOnly] = useState(false);
  const [selectedSpiceLevel, setSelectedSpiceLevel] = useState<string>('all');

  // Define all available sections in the exact order requested
  const allSections = [
    { id: 'condiments', name: 'Condiments', icon: Star, type: 'category' },
    { id: 'starters', name: 'Starters', icon: Star, type: 'category' },
    { id: 'vegetarian-starters', name: 'Vegetarian Starters', icon: Leaf, type: 'category' },
    { id: 'seafood-starters', name: 'Seafood Starters', icon: Star, type: 'category' },
    { id: 'tandoori', name: 'Tandoori', icon: ChefHat, type: 'category' },
    { id: 'premium-platters', name: 'Premium Platters', icon: Crown, type: 'category' },
    { id: 'signature-dishes', name: 'Signature Dishes', icon: Trophy, type: 'category' },
    { id: 'traditional-dishes', name: 'Traditional Dishes', icon: ChefHat, type: 'builder' },
    { id: 'all-time-favourites', name: 'All Time Favourites', icon: Heart, type: 'builder' },
    { id: 'biryani-dishes', name: 'Biryani Dishes', icon: Crown, type: 'builder' },
    { id: 'vegetable-side-dishes', name: 'Vegetable Side Dishes', icon: Leaf, type: 'category' },
    { id: 'rice-dishes', name: 'Rice Dishes', icon: ChefHat, type: 'category' },
    { id: 'sundries-naan-breads', name: 'Sundries & Naan Breads', icon: ChefHat, type: 'category' },
    { id: 'english-dishes', name: 'English Dishes', icon: Utensils, type: 'category' },
    { id: 'sunday-special', name: 'Sunday Night Special', icon: Calendar, type: 'category' },
    { id: 'set-meals', name: 'Set Meals for Two', icon: Utensils, type: 'category' }
  ];

  // Spice levels for filtering
  const spiceLevels = [
    { id: 'all', name: 'All Spice Levels', flames: 0 },
    { id: 'mild', name: 'Mild', flames: 1 },
    { id: 'medium', name: 'Medium', flames: 2 },
    { id: 'medium-to-hot', name: 'Medium to Hot', flames: 3 },
    { id: 'hot', name: 'Hot', flames: 4 },
    { id: 'very-hot', name: 'Very Hot', flames: 5 }
  ];

  const getSpiceLevelFromItem = (item: MenuItem): string => {
    if (!item.isSpicy) return 'mild';
    // This is a simplified mapping - in a real app you'd have spice level data
    if (item.name.toLowerCase().includes('vindaloo') || item.name.toLowerCase().includes('phall')) return 'very-hot';
    if (item.name.toLowerCase().includes('madras') || item.name.toLowerCase().includes('jalfrezi')) return 'medium-to-hot';
    if (item.name.toLowerCase().includes('korma') || item.name.toLowerCase().includes('masala')) return 'mild';
    return item.isSpicy ? 'medium' : 'mild';
  };

  const shouldShowSection = (sectionId: string): boolean => {
    if (selectedCategory === 'all') return true;
    return selectedCategory === sectionId;
  };

  const formatPrice = (price: number): string => {
    return `£${price.toFixed(2)}`;
  };

  const handleAddToBasket = (item: MenuItem, categoryName: string) => {
    // Check if it's a Sunday-only item and prevent adding if not Sunday
    if (item.isSundayOnly && !isSunday()) {
      alert('This special is only available on Sundays!');
      return;
    }

    onAddToBasket({
      name: item.name,
      price: item.price,
      category: categoryName,
      isSpicy: item.isSpicy,
      isVegetarian: item.isVegetarian,
      isVegan: item.isVegan,
      isPopular: item.isPopular
    });
  };

  const SetMealSection: React.FC<{ category: any }> = ({ category }) => {
    return (
      <div className="mb-16">
        {/* Special Set Meal Header */}
        <div className="text-center mb-12 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 opacity-10 rounded-3xl"></div>
          <div className="relative py-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Utensils className="w-12 h-12 text-orange-600" />
              <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
                {category.name}
              </h3>
              <Users className="w-12 h-12 text-orange-600" />
            </div>
            <div className="w-32 h-2 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-700 text-xl max-w-4xl mx-auto font-medium leading-relaxed">
              {category.description}
            </p>
            
            {/* Attention-grabbing banner */}
            <div className="mt-6 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-2xl inline-block shadow-2xl">
              <div className="flex items-center gap-2 text-lg font-bold">
                <Sparkles className="w-6 h-6" />
                <span>🎉 COMPLETE DINING EXPERIENCE • EXCEPTIONAL VALUE • PERFECT FOR SHARING 🎉</span>
                <Sparkles className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {category.items.map((item: any, index: number) => (
            <SetMealCard 
              key={index} 
              item={item} 
              category={category}
              onAddToBasket={onAddToBasket}
            />
          ))}
        </div>

        {/* Special Call to Action for Set Meals */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 rounded-3xl p-8 text-white shadow-2xl max-w-4xl mx-auto">
            <h4 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
              <Users className="w-8 h-8" />
              Why Choose Our Set Meals?
            </h4>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                <div className="text-3xl mb-2">💰</div>
                <div className="font-bold">Amazing Value</div>
                <div className="text-sm opacity-90">Complete meal at great price</div>
              </div>
              <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                <div className="text-3xl mb-2">🍽️</div>
                <div className="font-bold">Complete Experience</div>
                <div className="text-sm opacity-90">Starters, mains & sides included</div>
              </div>
              <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                <div className="text-3xl mb-2">👥</div>
                <div className="font-bold">Perfect for Two</div>
                <div className="text-sm opacity-90">Ideal for couples & friends</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const SundaySpecialSection: React.FC<{ category: any }> = ({ category }) => {
    return (
      <div className="mb-16">
        {/* Special Sunday Header */}
        <div className="text-center mb-12 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-indigo-500 to-blue-500 opacity-10 rounded-3xl"></div>
          <div className="relative py-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Calendar className="w-12 h-12 text-purple-600" />
              <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
                {category.name}
              </h3>
              <Calendar className="w-12 h-12 text-purple-600" />
            </div>
            <div className="w-32 h-2 bg-gradient-to-r from-purple-400 via-indigo-500 to-blue-500 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-700 text-xl max-w-4xl mx-auto font-medium leading-relaxed">
              {category.description}
            </p>
            
            {/* Availability Banner */}
            <div className={`mt-6 px-8 py-4 rounded-2xl inline-block shadow-2xl ${
              isSunday() 
                ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white' 
                : 'bg-gradient-to-r from-red-600 to-orange-600 text-white'
            }`}>
              <div className="flex items-center gap-2 text-lg font-bold">
                <Calendar className="w-6 h-6" />
                <span>
                  {isSunday() 
                    ? '🎉 AVAILABLE TODAY - SUNDAY SPECIAL! 🎉' 
                    : '📅 AVAILABLE SUNDAYS ONLY - DINE IN ONLY 📅'
                  }
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {category.items.map((item: any, index: number) => (
            <SundaySpecialCard 
              key={index} 
              item={item} 
              onAddToBasket={onAddToBasket}
            />
          ))}
        </div>

        {/* Special Information */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 rounded-3xl p-8 text-white shadow-2xl max-w-4xl mx-auto">
            <h4 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
              <Star className="w-8 h-8" />
              Why Choose Our Sunday Special?
            </h4>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                <div className="text-3xl mb-2">🍽️</div>
                <div className="font-bold">Complete Experience</div>
                <div className="text-sm opacity-90">Five full courses included</div>
              </div>
              <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                <div className="text-3xl mb-2">💰</div>
                <div className="font-bold">Exceptional Value</div>
                <div className="text-sm opacity-90">Much more than individual items</div>
              </div>
              <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                <div className="text-3xl mb-2">👨‍👩‍👧‍👦</div>
                <div className="font-bold">Family Friendly</div>
                <div className="text-sm opacity-90">Adult & child portions available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="menu" className="py-16 lg:py-24 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="text-orange-600">Menu</span>
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our carefully curated selection of authentic Indian dishes, each prepared with traditional 
            recipes and the finest spices to deliver an unforgettable dining experience.
          </p>
        </div>

        {/* Enhanced Filters */}
        <div className="mb-12">
          {/* Filter Header */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <Filter className="w-6 h-6 text-gray-600" />
            <h3 className="text-xl font-bold text-gray-800">Filter Menu</h3>
          </div>

          {/* Main Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedCategory === 'all'
                  ? 'bg-orange-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-orange-100 shadow-md'
              }`}
            >
              All Categories
            </button>

            {allSections.map((section) => {
              const IconComponent = section.icon;
              const isSpecial = ['set-meals', 'sunday-special', 'premium-platters', 'signature-dishes'].includes(section.id);
              const isBuilder = section.type === 'builder';
              
              return (
                <button
                  key={section.id}
                  onClick={() => setSelectedCategory(section.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
                    selectedCategory === section.id
                      ? 'bg-orange-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-orange-100 shadow-md'
                  } ${
                    isSpecial ? 'border-2 border-yellow-400 bg-gradient-to-r from-yellow-100 to-orange-100' : ''
                  } ${
                    isBuilder ? 'border-2 border-green-400 bg-gradient-to-r from-green-100 to-emerald-100' : ''
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  {section.name}
                  {section.id === 'sunday-special' && !isSunday() && (
                    <span className="text-xs bg-red-500 text-white px-2 py-1 rounded-full">Sunday Only</span>
                  )}
                  {section.id === 'sunday-special' && isSunday() && (
                    <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full">Available Today</span>
                  )}
                  {section.id === 'set-meals' && (
                    <span className="text-xs bg-orange-500 text-white px-2 py-1 rounded-full">For Two</span>
                  )}
                  {section.id === 'premium-platters' && (
                    <span className="text-xs bg-yellow-500 text-white px-2 py-1 rounded-full">Premium</span>
                  )}
                  {isBuilder && (
                    <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full">Customizable</span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Secondary Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {/* Vegetarian Filter */}
            <button
              onClick={() => setShowVegetarianOnly(!showVegetarianOnly)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
                showVegetarianOnly
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-green-100 shadow-md'
              }`}
            >
              <Leaf className="w-4 h-4" />
              Vegetarian Only
            </button>

            {/* Spice Level Filter */}
            <div className="flex items-center gap-2">
              <span className="text-gray-700 font-medium">Spice Level:</span>
              <select
                value={selectedSpiceLevel}
                onChange={(e) => setSelectedSpiceLevel(e.target.value)}
                className="px-3 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              >
                {spiceLevels.map((level) => (
                  <option key={level.id} value={level.id}>
                    {level.flames > 0 && '🌶️'.repeat(level.flames)} {level.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Menu Content in Exact Order */}
        <div className="max-w-6xl mx-auto">
          {/* 1. Condiments */}
          {shouldShowSection('condiments') && (
            <CondimentsSection 
              category={menuData.find(cat => cat.id === 'condiments')!}
              onAddToBasket={onAddToBasket}
              showVegetarianOnly={showVegetarianOnly}
              selectedSpiceLevel={selectedSpiceLevel}
              getSpiceLevelFromItem={getSpiceLevelFromItem}
            />
          )}

          {/* 2. Starters */}
          {shouldShowSection('starters') && (
            <StartersSection 
              category={menuData.find(cat => cat.id === 'starters')!}
              onAddToBasket={onAddToBasket}
              showVegetarianOnly={showVegetarianOnly}
              selectedSpiceLevel={selectedSpiceLevel}
              getSpiceLevelFromItem={getSpiceLevelFromItem}
            />
          )}

          {/* 3. Vegetarian Starters */}
          {shouldShowSection('vegetarian-starters') && (
            <VegetarianStartersSection 
              category={menuData.find(cat => cat.id === 'vegetarian-starters')!}
              onAddToBasket={onAddToBasket}
              showVegetarianOnly={showVegetarianOnly}
              selectedSpiceLevel={selectedSpiceLevel}
              getSpiceLevelFromItem={getSpiceLevelFromItem}
            />
          )}

          {/* 4. Seafood Starters */}
          {shouldShowSection('seafood-starters') && (
            <SeafoodStartersSection 
              category={menuData.find(cat => cat.id === 'seafood-starters')!}
              onAddToBasket={onAddToBasket}
              showVegetarianOnly={showVegetarianOnly}
              selectedSpiceLevel={selectedSpiceLevel}
              getSpiceLevelFromItem={getSpiceLevelFromItem}
            />
          )}

          {/* 5. Tandoori */}
          {shouldShowSection('tandoori') && (
            <TandooriSection 
              category={menuData.find(cat => cat.id === 'tandoori')!}
              onAddToBasket={onAddToBasket}
              showVegetarianOnly={showVegetarianOnly}
              selectedSpiceLevel={selectedSpiceLevel}
              getSpiceLevelFromItem={getSpiceLevelFromItem}
            />
          )}

          {/* 6. Premium Platters */}
          {shouldShowSection('premium-platters') && (
            <PremiumPlattersSection 
              category={menuData.find(cat => cat.id === 'premium-platters')!}
              onAddToBasket={onAddToBasket}
              showVegetarianOnly={showVegetarianOnly}
              selectedSpiceLevel={selectedSpiceLevel}
              getSpiceLevelFromItem={getSpiceLevelFromItem}
            />
          )}

          {/* 7. Signature Dishes */}
          {shouldShowSection('signature-dishes') && (
            <SignatureDishesSection 
              category={menuData.find(cat => cat.id === 'signature-dishes')!}
              onAddToBasket={onAddToBasket}
              showVegetarianOnly={showVegetarianOnly}
              selectedSpiceLevel={selectedSpiceLevel}
              getSpiceLevelFromItem={getSpiceLevelFromItem}
            />
          )}

          {/* 8. Traditional Dishes (Builder) */}
          {shouldShowSection('traditional-dishes') && (
            <TraditionalDishBuilder onAddToBasket={onAddToBasket} />
          )}

          {/* 9. All Time Favourites (Builder) */}
          {shouldShowSection('all-time-favourites') && (
            <AllTimeFavouritesBuilder onAddToBasket={onAddToBasket} />
          )}

          {/* 10. Biryani Dishes (Builder) */}
          {shouldShowSection('biryani-dishes') && (
            <BiryaniDishesBuilder onAddToBasket={onAddToBasket} />
          )}

          {/* 11. Vegetable Side Dishes */}
          {shouldShowSection('vegetable-side-dishes') && (
            <VegetableSideDishesSection 
              category={menuData.find(cat => cat.id === 'vegetable-side-dishes')!}
              onAddToBasket={onAddToBasket}
              showVegetarianOnly={showVegetarianOnly}
              selectedSpiceLevel={selectedSpiceLevel}
              getSpiceLevelFromItem={getSpiceLevelFromItem}
            />
          )}

          {/* 12. Rice Dishes */}
          {shouldShowSection('rice-dishes') && (
            <RiceDishesSection 
              category={menuData.find(cat => cat.id === 'rice-dishes')!}
              onAddToBasket={onAddToBasket}
              showVegetarianOnly={showVegetarianOnly}
              selectedSpiceLevel={selectedSpiceLevel}
              getSpiceLevelFromItem={getSpiceLevelFromItem}
            />
          )}

          {/* 13. Sundries & Naan Breads */}
          {shouldShowSection('sundries-naan-breads') && (
            <SundriesNaanSection 
              category={menuData.find(cat => cat.id === 'sundries-naan-breads')!}
              onAddToBasket={onAddToBasket}
              showVegetarianOnly={showVegetarianOnly}
              selectedSpiceLevel={selectedSpiceLevel}
              getSpiceLevelFromItem={getSpiceLevelFromItem}
            />
          )}

          {/* 14. English Dishes */}
          {shouldShowSection('english-dishes') && (
            <EnglishDishesSection 
              category={menuData.find(cat => cat.id === 'english-dishes')!}
              onAddToBasket={onAddToBasket}
              showVegetarianOnly={showVegetarianOnly}
              selectedSpiceLevel={selectedSpiceLevel}
              getSpiceLevelFromItem={getSpiceLevelFromItem}
            />
          )}

          {/* 15. Sunday Night Special */}
          {shouldShowSection('sunday-special') && (
            <SundaySpecialSection category={menuData.find(cat => cat.id === 'sunday-special')!} />
          )}

          {/* 16. Set Meals for Two */}
          {shouldShowSection('set-meals') && (
            <SetMealSection category={menuData.find(cat => cat.id === 'set-meals')!} />
          )}
        </div>

        {/* Legend */}
        <div className="mt-16 bg-white rounded-xl p-6 shadow-lg max-w-2xl mx-auto">
          <h4 className="text-lg font-bold text-gray-800 mb-4 text-center">Menu Legend</h4>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="text-gray-700">Popular</span>
            </div>
            <div className="flex items-center gap-2">
              <Flame className="w-4 h-4 text-red-500" />
              <span className="text-gray-700">Spicy</span>
            </div>
            <div className="flex items-center gap-2">
              <Leaf className="w-4 h-4 text-green-500" />
              <span className="text-gray-700">Vegetarian</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-purple-500" />
              <span className="text-gray-700">Signature</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-pink-500" />
              <span className="text-gray-700">Favourite</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-purple-500" />
              <span className="text-gray-700">Sunday Only</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">V</span>
              </div>
              <span className="text-gray-700">Vegan</span>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 lg:p-12 text-white">
            <div className="flex items-center justify-center gap-3 mb-4">
              <ChefHat className="w-8 h-8" />
              <h3 className="text-2xl lg:text-3xl font-bold">
                Ready to Order?
              </h3>
            </div>
            <p className="text-lg lg:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Call us now to place your takeaway order. All dishes are prepared fresh with authentic spices and traditional cooking methods.
            </p>
            <a
              href="tel:+44 161 973 3966"
              className="inline-flex items-center gap-3 bg-white text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              <span className="text-2xl">📞</span>
              Call Now: +44 161 973 3966
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;