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

const MenuSection: React.FC = () => {
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


  const SetMealSection: React.FC<{ category: any }> = ({ category }) => {
    return (
      <div className="mb-8 sm:mb-12">
        {/* Special Set Meal Header */}
        <div className="text-center mb-8 sm:mb-12 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 opacity-10 rounded-3xl"></div>
          <div className="relative py-6 sm:py-8">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <Utensils className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-orange-600" />
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
                {category.name}
              </h3>
              <Users className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-orange-600" />
            </div>
            <div className="w-24 sm:w-28 lg:w-32 h-1.5 sm:h-2 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 mx-auto rounded-full mb-3 sm:mb-4"></div>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-4xl mx-auto font-medium leading-relaxed px-2">
              {category.description}
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {category.items.map((item: any, index: number) => (
            <SetMealCard 
              key={index} 
              item={item} 
              category={category}
            />
          ))}
        </div>
      </div>
    );
  };

  const SundaySpecialSection: React.FC<{ category: any }> = ({ category }) => {
    return (
      <div className="mb-8 sm:mb-12">
        {/* Special Sunday Header */}
        <div className="text-center mb-8 sm:mb-12 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-indigo-500 to-blue-500 opacity-10 rounded-3xl"></div>
          <div className="relative py-6 sm:py-8">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <Calendar className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-purple-600" />
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
                {category.name}
              </h3>
              <Calendar className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-purple-600" />
            </div>
            <div className="w-24 sm:w-28 lg:w-32 h-1.5 sm:h-2 bg-gradient-to-r from-purple-400 via-indigo-500 to-blue-500 mx-auto rounded-full mb-3 sm:mb-4"></div>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-4xl mx-auto font-medium leading-relaxed px-2">
              {category.description}
            </p>
            
            {/* Availability Banner */}
            <div className={`mt-4 sm:mt-6 px-4 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl inline-block shadow-2xl ${
              isSunday() 
                ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white' 
                : 'bg-gradient-to-r from-red-600 to-orange-600 text-white'
            }`}>
              <div className="flex items-center gap-2 text-base sm:text-lg font-bold">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-sm sm:text-base">
                  {isSunday() 
                    ? '🎉 AVAILABLE TODAY - SUNDAY SPECIAL! 🎉' 
                    : '📅 AVAILABLE SUNDAYS ONLY - DINE IN ONLY 📅'
                  }
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {category.items.map((item: any, index: number) => (
            <SundaySpecialCard 
              key={index} 
              item={item} 
            />
          ))}
        </div>
      </div>
    );
  };

  const getSpiceLevelColor = (spiceLevel: string) => {
    switch (spiceLevel) {
      case 'Mild': return 'text-green-600 bg-green-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'Medium to Hot': return 'text-orange-600 bg-orange-100';
      case 'Hot': return 'text-red-600 bg-red-100';
      case 'Very Hot': return 'text-red-800 bg-red-200';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <section id="menu" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-2 sm:px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">
            Our <span className="text-orange-600">Menu</span>
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-orange-600 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            Explore our carefully curated selection of authentic Indian dishes, each prepared with traditional 
            recipes and the finest spices to deliver an unforgettable dining experience.
          </p>
        </div>

        {/* Enhanced Filters */}
        <div className="mb-6 sm:mb-8">
          {/* Filter Header */}
          <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
            <Filter className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
            <h3 className="text-lg sm:text-xl font-bold text-gray-800">Filter Menu</h3>
          </div>

          {/* Main Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-4 sm:mb-6 px-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 sm:px-4 py-2 rounded-lg font-medium transition-all duration-200 text-sm sm:text-base ${
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
                  className={`px-2 sm:px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-1 sm:gap-2 text-xs sm:text-sm lg:text-base ${
                    selectedCategory === section.id
                      ? 'bg-orange-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-orange-100 shadow-md'
                  } ${
                    isSpecial ? 'border-2 border-yellow-400 bg-gradient-to-r from-yellow-100 to-orange-100' : ''
                  } ${
                    isBuilder ? 'border-2 border-green-400 bg-gradient-to-r from-green-100 to-emerald-100' : ''
                  }`}
                >
                  <IconComponent className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">{section.name}</span>
                  <span className="sm:hidden">{section.name.split(' ')[0]}</span>
                  {section.id === 'sunday-special' && !isSunday() && (
                    <span className="text-xs bg-red-500 text-white px-1 py-0.5 rounded-full hidden lg:inline">Sunday Only</span>
                  )}
                  {section.id === 'sunday-special' && isSunday() && (
                    <span className="text-xs bg-green-500 text-white px-1 py-0.5 rounded-full hidden lg:inline">Available Today</span>
                  )}
                  {section.id === 'set-meals' && (
                    <span className="text-xs bg-orange-500 text-white px-1 py-0.5 rounded-full hidden lg:inline">For Two</span>
                  )}
                  {section.id === 'premium-platters' && (
                    <span className="text-xs bg-yellow-500 text-white px-1 py-0.5 rounded-full hidden lg:inline">Premium</span>
                  )}
                  {isBuilder && (
                    <span className="text-xs bg-green-500 text-white px-1 py-0.5 rounded-full hidden lg:inline">Custom</span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Secondary Filters */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-2">
            {/* Vegetarian Filter */}
            <button
              onClick={() => setShowVegetarianOnly(!showVegetarianOnly)}
              className={`px-3 sm:px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-1 sm:gap-2 text-sm sm:text-base ${
                showVegetarianOnly
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-green-100 shadow-md'
              }`}
            >
              <Leaf className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Vegetarian Only</span>
              <span className="sm:hidden">Veg Only</span>
            </button>

            {/* Spice Level Filter */}
            <div className="flex items-center gap-2">
              <span className="text-gray-700 font-medium text-sm sm:text-base hidden sm:inline">Spice Level:</span>
              <select
                value={selectedSpiceLevel}
                onChange={(e) => setSelectedSpiceLevel(e.target.value)}
                className="px-2 sm:px-3 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm sm:text-base"
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

        {/* Menu Content in Exact Order - Consistent small margins */}
        <div className="max-w-7xl mx-auto px-1 sm:px-2">
          {/* 1. Condiments */}
          {shouldShowSection('condiments') && (
            <CondimentsSection 
              category={menuData.find(cat => cat.id === 'condiments')!}
              showVegetarianOnly={showVegetarianOnly}
              selectedSpiceLevel={selectedSpiceLevel}
              getSpiceLevelFromItem={getSpiceLevelFromItem}
            />
          )}

          {/* 2. Starters */}
          {shouldShowSection('starters') && (
            <StartersSection 
              category={menuData.find(cat => cat.id === 'starters')!}
              showVegetarianOnly={showVegetarianOnly}
              selectedSpiceLevel={selectedSpiceLevel}
              getSpiceLevelFromItem={getSpiceLevelFromItem}
            />
          )}

          {/* 3. Vegetarian Starters */}
          {shouldShowSection('vegetarian-starters') && (
            <VegetarianStartersSection 
              category={menuData.find(cat => cat.id === 'vegetarian-starters')!}
              showVegetarianOnly={showVegetarianOnly}
              selectedSpiceLevel={selectedSpiceLevel}
              getSpiceLevelFromItem={getSpiceLevelFromItem}
            />
          )}

          {/* 4. Seafood Starters */}
          {shouldShowSection('seafood-starters') && (
            <SeafoodStartersSection 
              category={menuData.find(cat => cat.id === 'seafood-starters')!}
              showVegetarianOnly={showVegetarianOnly}
              selectedSpiceLevel={selectedSpiceLevel}
              getSpiceLevelFromItem={getSpiceLevelFromItem}
            />
          )}

          {/* 5. Tandoori */}
          {shouldShowSection('tandoori') && (
            <TandooriSection 
              category={menuData.find(cat => cat.id === 'tandoori')!}
              showVegetarianOnly={showVegetarianOnly}
              selectedSpiceLevel={selectedSpiceLevel}
              getSpiceLevelFromItem={getSpiceLevelFromItem}
            />
          )}

          {/* 6. Premium Platters */}
          {shouldShowSection('premium-platters') && (
            <PremiumPlattersSection 
              category={menuData.find(cat => cat.id === 'premium-platters')!}
              showVegetarianOnly={showVegetarianOnly}
              selectedSpiceLevel={selectedSpiceLevel}
              getSpiceLevelFromItem={getSpiceLevelFromItem}
            />
          )}

          {/* 7. Signature Dishes */}
          {shouldShowSection('signature-dishes') && (
            <SignatureDishesSection 
              category={menuData.find(cat => cat.id === 'signature-dishes')!}
              showVegetarianOnly={showVegetarianOnly}
              selectedSpiceLevel={selectedSpiceLevel}
              getSpiceLevelFromItem={getSpiceLevelFromItem}
            />
          )}

          {/* 8. Traditional Dishes (Builder) */}
          {shouldShowSection('traditional-dishes') && (
            <div className="px-1 sm:px-2">
              <TraditionalDishBuilder />
            </div>
          )}

          {/* 9. All Time Favourites (Builder) */}
          {shouldShowSection('all-time-favourites') && (
            <div className="px-1 sm:px-2">
              <AllTimeFavouritesBuilder />
            </div>
          )}

          {/* 10. Biryani Dishes (Builder) - REMOVED PADDING */}
          {shouldShowSection('biryani-dishes') && (
            <BiryaniDishesBuilder />
          )}

          {/* 11. Vegetable Side Dishes */}
          {shouldShowSection('vegetable-side-dishes') && (
            <VegetableSideDishesSection 
              category={menuData.find(cat => cat.id === 'vegetable-side-dishes')!}
              showVegetarianOnly={showVegetarianOnly}
              selectedSpiceLevel={selectedSpiceLevel}
              getSpiceLevelFromItem={getSpiceLevelFromItem}
            />
          )}

          {/* 12. Rice Dishes */}
          {shouldShowSection('rice-dishes') && (
            <RiceDishesSection 
              category={menuData.find(cat => cat.id === 'rice-dishes')!}
              showVegetarianOnly={showVegetarianOnly}
              selectedSpiceLevel={selectedSpiceLevel}
              getSpiceLevelFromItem={getSpiceLevelFromItem}
            />
          )}

          {/* 13. Sundries & Naan Breads */}
          {shouldShowSection('sundries-naan-breads') && (
            <SundriesNaanSection 
              category={menuData.find(cat => cat.id === 'sundries-naan-breads')!}
              showVegetarianOnly={showVegetarianOnly}
              selectedSpiceLevel={selectedSpiceLevel}
              getSpiceLevelFromItem={getSpiceLevelFromItem}
            />
          )}

          {/* 14. English Dishes */}
          {shouldShowSection('english-dishes') && (
            <EnglishDishesSection 
              category={menuData.find(cat => cat.id === 'english-dishes')!}
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

        {/* Spice Level Guide - Moved to bottom */}
        <div className="mt-8 sm:mt-12 px-2">
          <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-6 sm:mb-8">
            🌶️ Spice Level Guide
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 max-w-4xl mx-auto">
            {['Mild', 'Medium', 'Medium to Hot', 'Hot', 'Very Hot'].map((level, index) => (
              <div key={level} className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg text-center border-2 border-gray-200">
                <div className="flex justify-center mb-2">
                  {[...Array(index + 1)].map((_, i) => (
                    <Flame key={i} className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-red-500" />
                  ))}
                </div>
                <div className={`text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full font-bold ${getSpiceLevelColor(level)}`}>
                  {level}
                </div>
                <div className="text-xs text-gray-600 mt-1 sm:mt-2">
                  {index === 0 && 'Perfect for beginners'}
                  {index === 1 && 'Most popular choice'}
                  {index === 2 && 'Nice kick of heat'}
                  {index === 3 && 'Seriously spicy'}
                  {index === 4 && 'Extreme heat!'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="mt-8 sm:mt-12 bg-white rounded-xl p-4 sm:p-6 shadow-lg max-w-2xl mx-auto">
          <h4 className="text-base sm:text-lg font-bold text-gray-800 mb-3 sm:mb-4 text-center">Menu Legend</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 text-xs sm:text-sm">
            <div className="flex items-center gap-1 sm:gap-2">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 fill-yellow-500" />
              <span className="text-gray-700">Popular</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <Flame className="w-3 h-3 sm:w-4 sm:h-4 text-red-500" />
              <span className="text-gray-700">Spicy</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <Leaf className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
              <span className="text-gray-700">Vegetarian</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <Trophy className="w-3 h-3 sm:w-4 sm:h-4 text-purple-500" />
              <span className="text-gray-700">Signature</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-pink-500" />
              <span className="text-gray-700">Favourite</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-purple-500" />
              <span className="text-gray-700">Sunday Only</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2 col-span-2 sm:col-span-1">
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">V</span>
              </div>
              <span className="text-gray-700">Vegan</span>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8 sm:mt-12 px-2">
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 text-white">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <ChefHat className="w-6 h-6 sm:w-8 sm:h-8" />
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                Ready to Order?
              </h3>
            </div>
            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto">
              Call us now to place your takeaway order. All dishes are prepared fresh with authentic spices and traditional cooking methods.
            </p>
            <a
              href="tel:+44 161 973 3966"
              className="inline-flex items-center gap-2 sm:gap-3 bg-white text-orange-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              <span className="text-xl sm:text-2xl">📞</span>
              <span className="hidden sm:inline">Call Now: +44 161 973 3966</span>
              <span className="sm:hidden">Call: +44 161 973 3966</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;