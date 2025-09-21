import React, { useState } from 'react';
import { Heart, Flame, Leaf, Star, Plus, Check, ArrowDown, Crown, Sparkles } from 'lucide-react';
import { favouriteProteins, favouriteSauces, createAllTimeFavouriteDish, Protein, FavouriteSauce } from '../data/allTimeFavourites';

const AllTimeFavouritesBuilder: React.FC = () => {
  const [selectedProtein, setSelectedProtein] = useState<Protein | null>(null);
  const [selectedSauce, setSelectedSauce] = useState<FavouriteSauce | null>(null);
  const [showSauceSelection, setShowSauceSelection] = useState(false);
  const [addedItems, setAddedItems] = useState<Set<string>>(new Set());

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

  const getFlameCount = (spiceLevel: string) => {
    switch (spiceLevel) {
      case 'Mild': return 1;
      case 'Medium': return 2;
      case 'Medium to Hot': return 3;
      case 'Hot': return 4;
      case 'Very Hot': return 5;
      default: return 1;
    }
  };

  const handleProteinSelect = (protein: Protein) => {
    setSelectedProtein(protein);
    setShowSauceSelection(true);
    setSelectedSauce(null);
  };

  const handleSauceSelect = (sauce: FavouriteSauce) => {
    setSelectedSauce(sauce);
  };


  const formatPrice = (price: number): string => {
    return `£${price.toFixed(2)}`;
  };

  const resetSelection = () => {
    setSelectedProtein(null);
    setSelectedSauce(null);
    setShowSauceSelection(false);
  };

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-pink-50 via-rose-50 to-red-50">
      <div className="container mx-auto px-2 sm:px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <Heart className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-pink-600" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 bg-clip-text text-transparent">
              All Time Favourites
            </h2>
            <Heart className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-pink-600" />
          </div>
          <div className="w-24 sm:w-28 lg:w-32 h-1.5 sm:h-2 bg-gradient-to-r from-pink-400 via-rose-500 to-red-500 mx-auto rounded-full mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium px-2">
            Our most beloved dishes that have won hearts for generations! Choose your favorite protein and pair it with any of our 
            signature all-time favourite sauces. Each dish represents the pinnacle of Indian culinary tradition.
          </p>
        </div>

        {/* Quick Popular Combinations */}
        <div className="mb-8 sm:mb-12">
          <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-6 sm:mb-8">
            💖 Customer Favourites
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {[
              { protein: favouriteProteins.find(p => p.id === 'chicken')!, sauce: favouriteSauces.find(s => s.id === 'masaala')! },
              { protein: favouriteProteins.find(p => p.id === 'lamb')!, sauce: favouriteSauces.find(s => s.id === 'karahi')! },
              { protein: favouriteProteins.find(p => p.id === 'chicken-tikka')!, sauce: favouriteSauces.find(s => s.id === 'balti')! },
              { protein: favouriteProteins.find(p => p.id === 'mix-vegetables')!, sauce: favouriteSauces.find(s => s.id === 'saag')! }
            ].map((combo, index) => {
              const dish = createAllTimeFavouriteDish(combo.protein, combo.sauce);
              const itemKey = `${combo.protein.id}-${combo.sauce.id}`;
              const isAdded = addedItems.has(itemKey);
              
              return (
                <div key={index} className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-pink-200 hover:border-pink-400 transform hover:-translate-y-2">
                  <div className="text-center mb-3 sm:mb-4">
                    <div className="flex items-center justify-center gap-1 sm:gap-2 mb-2">
                      <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-pink-500 fill-pink-500" />
                      <span className="text-xs font-bold text-pink-600 uppercase tracking-wide">Favourite</span>
                    </div>
                    <h4 className="font-bold text-base sm:text-lg text-gray-800 mb-2">{dish.name}</h4>
                    <div className="flex justify-center items-center gap-1 sm:gap-2 mb-2">
                      {[...Array(getFlameCount(dish.spiceLevel))].map((_, i) => (
                        <Flame key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-red-500" />
                      ))}
                      <span className={`text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full font-medium ${getSpiceLevelColor(dish.spiceLevel)}`}>
                        {dish.spiceLevel}
                      </span>
                    </div>
                    <div className="text-lg sm:text-xl font-bold text-pink-600 mb-3 sm:mb-4">
                      {formatPrice(dish.price)}
                    </div>
                  </div>
                  <div className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg font-bold text-sm sm:text-lg bg-gradient-to-r from-pink-600 to-red-600 text-white shadow-lg text-center">
                    <div className="flex items-center justify-center gap-1 sm:gap-2">
                      <span>Customer Favourite</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Custom Combination Builder */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden border-2 border-pink-200">
            <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white p-4 sm:p-6 text-center">
              <h3 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2">💖 Create Your Favourite Combination</h3>
              <p className="text-pink-100 text-sm sm:text-base">Simple 2-step process - Choose protein, then choose your favourite sauce</p>
            </div>
            
            <div className="p-4 sm:p-8">
              {/* Step 1: Protein Selection */}
              <div className="mb-6 sm:mb-8">
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div className="bg-pink-600 text-white w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-sm sm:text-base">1</div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-800">Choose Your Protein</h4>
                  {selectedProtein && (
                    <button
                      onClick={resetSelection}
                      className="text-xs sm:text-sm text-pink-600 hover:text-pink-700 underline"
                    >
                      Change Selection
                    </button>
                  )}
                </div>
                
                {!selectedProtein ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                    {favouriteProteins.map((protein) => (
                      <button
                        key={protein.id}
                        onClick={() => handleProteinSelect(protein)}
                        className="p-3 sm:p-4 border-2 border-gray-200 rounded-xl hover:border-pink-400 hover:bg-pink-50 transition-all duration-300 text-left group transform hover:-translate-y-1 hover:shadow-lg"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h5 className="font-bold text-gray-800 group-hover:text-pink-700 text-sm sm:text-base">{protein.name}</h5>
                          <div className="flex gap-1">
                            {protein.isPopular && (
                              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 fill-yellow-500" />
                            )}
                            {protein.isVegetarian && (
                              <Leaf className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
                            )}
                          </div>
                        </div>
                        <div className="text-base sm:text-lg font-bold text-pink-600">
                          {formatPrice(protein.basePrice)}
                        </div>
                        <div className="mt-2 text-xs sm:text-sm text-gray-600 group-hover:text-gray-700">
                          Click to select →
                        </div>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="bg-pink-50 border-2 border-pink-200 rounded-xl p-4 sm:p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h5 className="text-lg sm:text-xl font-bold text-gray-800">{selectedProtein.name}</h5>
                          <div className="flex gap-1">
                            {selectedProtein.isPopular && (
                              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 fill-yellow-500" />
                            )}
                            {selectedProtein.isVegetarian && (
                              <Leaf className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                            )}
                          </div>
                        </div>
                        <div className="text-lg sm:text-xl font-bold text-pink-600">
                          {formatPrice(selectedProtein.basePrice)}
                        </div>
                      </div>
                      <Check className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
                    </div>
                  </div>
                )}
              </div>

              {/* Step 2: Sauce Selection */}
              {showSauceSelection && (
                <div className="mb-6 sm:mb-8">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                    <div className="bg-pink-600 text-white w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-sm sm:text-base">2</div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-800">Choose Your Favourite Sauce</h4>
                    <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 text-pink-600 animate-bounce" />
                  </div>
                  
                  <div className="grid gap-3 sm:gap-4">
                    {favouriteSauces.map((sauce) => (
                      <button
                        key={sauce.id}
                        onClick={() => handleSauceSelect(sauce)}
                        className={`p-3 sm:p-4 border-2 rounded-xl transition-all duration-300 text-left transform hover:-translate-y-1 hover:shadow-lg ${
                          selectedSauce?.id === sauce.id
                            ? 'border-pink-400 bg-pink-50'
                            : 'border-gray-200 hover:border-pink-300 hover:bg-pink-25'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 sm:gap-3 mb-2">
                              <h5 className="text-base sm:text-lg font-bold text-gray-800">{sauce.name}</h5>
                              <div className="flex items-center gap-1">
                                {[...Array(getFlameCount(sauce.spiceLevel))].map((_, i) => (
                                  <Flame key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-red-500" />
                                ))}
                              </div>
                              <span className={`text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full font-medium ${getSpiceLevelColor(sauce.spiceLevel)}`}>
                                {sauce.spiceLevel}
                              </span>
                              {sauce.isPopular && (
                                <div className="flex items-center gap-1 bg-pink-100 px-2 py-1 rounded-full">
                                  <Heart className="w-3 h-3 text-pink-600 fill-pink-600" />
                                  <span className="text-xs font-medium text-pink-700">Favourite</span>
                                </div>
                              )}
                            </div>
                            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                              {sauce.description}
                            </p>
                          </div>
                          {selectedSauce?.id === sauce.id && (
                            <Check className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 ml-4" />
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Final Step: Add to Basket */}
              {selectedProtein && selectedSauce && (
                <div className="border-t-2 border-gray-200 pt-6 sm:pt-8">
                  <div className="bg-gradient-to-r from-pink-50 to-rose-50 border-2 border-pink-200 rounded-xl p-4 sm:p-6 mb-4 sm:mb-6">
                    <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 text-center">
                      💖 Your Favourite Dish is Ready!
                    </h4>
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                        {selectedProtein.name} {selectedSauce.name}
                      </div>
                      <div className="flex items-center justify-center gap-1 sm:gap-2 mb-3">
                        {[...Array(getFlameCount(selectedSauce.spiceLevel))].map((_, i) => (
                          <Flame key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
                        ))}
                        <span className={`text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full font-medium ${getSpiceLevelColor(selectedSauce.spiceLevel)}`}>
                          {selectedSauce.spiceLevel}
                        </span>
                      </div>
                      <div className="text-2xl sm:text-3xl font-bold text-pink-600 mb-3 sm:mb-4">
                        {formatPrice(selectedProtein.basePrice)}
                      </div>
                      <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6">
                        {selectedProtein.name} {selectedSauce.description.toLowerCase()}
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-lg sm:text-xl shadow-lg">
                      <div className="flex items-center justify-center gap-2 sm:gap-3">
                        <span>Price: {formatPrice(selectedProtein.basePrice)}</span>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 mt-2 sm:mt-3">
                      Create your perfect all-time favourite combination
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8 sm:mt-12">
          <div className="bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 text-white">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <Heart className="w-6 h-6 sm:w-8 sm:h-8" />
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                Over 96 Beloved Combinations
              </h3>
            </div>
            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 opacity-90 max-w-3xl mx-auto">
              These are the dishes our customers have fallen in love with over the years. 
              Each combination represents years of perfecting authentic flavors!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-center max-w-2xl mx-auto">
              <div className="bg-white/20 rounded-xl p-3 sm:p-4 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl mb-2">🥘</div>
                <div className="font-bold text-sm sm:text-base">12 Proteins</div>
                <div className="text-xs sm:text-sm opacity-90">Including vegetarian options</div>
              </div>
              <div className="bg-white/20 rounded-xl p-3 sm:p-4 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl mb-2">💖</div>
                <div className="font-bold text-sm sm:text-base">8 Favourite Sauces</div>
                <div className="text-xs sm:text-sm opacity-90">Customer tested & approved</div>
              </div>
              <div className="bg-white/20 rounded-xl p-3 sm:p-4 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl mb-2">⭐</div>
                <div className="font-bold text-sm sm:text-base">Time-Tested</div>
                <div className="text-xs sm:text-sm opacity-90">Loved for generations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllTimeFavouritesBuilder;