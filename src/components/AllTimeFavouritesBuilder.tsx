import React, { useState } from 'react';
import { Heart, Flame, Leaf, Star, Plus, Check, ArrowDown, Crown, Sparkles } from 'lucide-react';
import { favouriteProteins, favouriteSauces, createAllTimeFavouriteDish, Protein, FavouriteSauce } from '../data/allTimeFavourites';

interface AllTimeFavouritesBuilderProps {
  onAddToBasket: (item: Omit<import('../types/basket').BasketItem, 'id' | 'quantity'>) => void;
}

const AllTimeFavouritesBuilder: React.FC<AllTimeFavouritesBuilderProps> = ({ onAddToBasket }) => {
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

  const handleAddToBasket = () => {
    if (!selectedProtein || !selectedSauce) return;
    
    const dish = createAllTimeFavouriteDish(selectedProtein, selectedSauce);
    const itemKey = `${selectedProtein.id}-${selectedSauce.id}`;
    
    onAddToBasket({
      name: dish.name,
      price: dish.price,
      category: 'All Time Favourites',
      isSpicy: selectedSauce.spiceLevel !== 'Mild',
      isVegetarian: dish.isVegetarian,
      isVegan: dish.isVegan,
      isPopular: dish.isPopular
    });

    // Add to added items for visual feedback
    setAddedItems(prev => new Set([...prev, itemKey]));
    
    // Reset selections for next order
    setSelectedProtein(null);
    setSelectedSauce(null);
    setShowSauceSelection(false);
    
    // Remove from added items after 3 seconds
    setTimeout(() => {
      setAddedItems(prev => {
        const newSet = new Set(prev);
        newSet.delete(itemKey);
        return newSet;
      });
    }, 3000);
  };

  const handleQuickAdd = (protein: Protein, sauce: FavouriteSauce) => {
    const dish = createAllTimeFavouriteDish(protein, sauce);
    const itemKey = `${protein.id}-${sauce.id}`;
    
    onAddToBasket({
      name: dish.name,
      price: dish.price,
      category: 'All Time Favourites',
      isSpicy: sauce.spiceLevel !== 'Mild',
      isVegetarian: dish.isVegetarian,
      isVegan: dish.isVegan,
      isPopular: dish.isPopular
    });

    // Add to added items for visual feedback
    setAddedItems(prev => new Set([...prev, itemKey]));
    
    // Remove from added items after 3 seconds
    setTimeout(() => {
      setAddedItems(prev => {
        const newSet = new Set(prev);
        newSet.delete(itemKey);
        return newSet;
      });
    }, 3000);
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
    <section className="py-16 lg:py-24 bg-gradient-to-br from-pink-50 via-rose-50 to-red-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart className="w-12 h-12 text-pink-600" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 bg-clip-text text-transparent">
              All Time Favourites
            </h2>
            <Heart className="w-12 h-12 text-pink-600" />
          </div>
          <div className="w-32 h-2 bg-gradient-to-r from-pink-400 via-rose-500 to-red-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
            Our most beloved dishes that have won hearts for generations! Choose your favorite protein and pair it with any of our 
            signature all-time favourite sauces. Each dish represents the pinnacle of Indian culinary tradition.
          </p>
        </div>

        {/* Quick Popular Combinations */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
            💖 Customer Favourites
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
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
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-pink-200 hover:border-pink-400 transform hover:-translate-y-2">
                  <div className="text-center mb-4">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Heart className="w-5 h-5 text-pink-500 fill-pink-500" />
                      <span className="text-xs font-bold text-pink-600 uppercase tracking-wide">Favourite</span>
                    </div>
                    <h4 className="font-bold text-lg text-gray-800 mb-2">{dish.name}</h4>
                    <div className="flex justify-center items-center gap-2 mb-2">
                      {[...Array(getFlameCount(dish.spiceLevel))].map((_, i) => (
                        <Flame key={i} className="w-4 h-4 text-red-500" />
                      ))}
                      <span className={`text-sm px-3 py-1 rounded-full font-medium ${getSpiceLevelColor(dish.spiceLevel)}`}>
                        {dish.spiceLevel}
                      </span>
                    </div>
                    <div className="text-xl font-bold text-pink-600 mb-4">
                      {formatPrice(dish.price)}
                    </div>
                  </div>
                  <button
                    onClick={() => handleQuickAdd(combo.protein, combo.sauce)}
                    className={`w-full px-4 py-3 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                      isAdded 
                        ? 'bg-green-600 text-white shadow-lg' 
                        : 'bg-gradient-to-r from-pink-600 to-red-600 text-white hover:from-pink-700 hover:to-red-700 shadow-lg hover:shadow-xl'
                    }`}
                  >
                    {isAdded ? (
                      <div className="flex items-center justify-center gap-2">
                        <Check className="w-5 h-5" />
                        <span>Added to Basket!</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        <Plus className="w-5 h-5" />
                        <span>Quick Add</span>
                      </div>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Custom Combination Builder */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-pink-200">
            <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white p-6 text-center">
              <h3 className="text-2xl font-bold mb-2">💖 Create Your Favourite Combination</h3>
              <p className="text-pink-100">Simple 2-step process - Choose protein, then choose your favourite sauce</p>
            </div>
            
            <div className="p-8">
              {/* Step 1: Protein Selection */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-pink-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
                  <h4 className="text-xl font-bold text-gray-800">Choose Your Protein</h4>
                  {selectedProtein && (
                    <button
                      onClick={resetSelection}
                      className="text-sm text-pink-600 hover:text-pink-700 underline"
                    >
                      Change Selection
                    </button>
                  )}
                </div>
                
                {!selectedProtein ? (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {favouriteProteins.map((protein) => (
                      <button
                        key={protein.id}
                        onClick={() => handleProteinSelect(protein)}
                        className="p-4 border-2 border-gray-200 rounded-xl hover:border-pink-400 hover:bg-pink-50 transition-all duration-300 text-left group transform hover:-translate-y-1 hover:shadow-lg"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h5 className="font-bold text-gray-800 group-hover:text-pink-700">{protein.name}</h5>
                          <div className="flex gap-1">
                            {protein.isPopular && (
                              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                            )}
                            {protein.isVegetarian && (
                              <Leaf className="w-4 h-4 text-green-500" />
                            )}
                          </div>
                        </div>
                        <div className="text-lg font-bold text-pink-600">
                          {formatPrice(protein.basePrice)}
                        </div>
                        <div className="mt-2 text-sm text-gray-600 group-hover:text-gray-700">
                          Click to select →
                        </div>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="bg-pink-50 border-2 border-pink-200 rounded-xl p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h5 className="text-xl font-bold text-gray-800">{selectedProtein.name}</h5>
                          <div className="flex gap-1">
                            {selectedProtein.isPopular && (
                              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                            )}
                            {selectedProtein.isVegetarian && (
                              <Leaf className="w-5 h-5 text-green-500" />
                            )}
                          </div>
                        </div>
                        <div className="text-xl font-bold text-pink-600">
                          {formatPrice(selectedProtein.basePrice)}
                        </div>
                      </div>
                      <Check className="w-8 h-8 text-green-600" />
                    </div>
                  </div>
                )}
              </div>

              {/* Step 2: Sauce Selection */}
              {showSauceSelection && (
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-pink-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
                    <h4 className="text-xl font-bold text-gray-800">Choose Your Favourite Sauce</h4>
                    <ArrowDown className="w-5 h-5 text-pink-600 animate-bounce" />
                  </div>
                  
                  <div className="grid gap-4">
                    {favouriteSauces.map((sauce) => (
                      <button
                        key={sauce.id}
                        onClick={() => handleSauceSelect(sauce)}
                        className={`p-4 border-2 rounded-xl transition-all duration-300 text-left transform hover:-translate-y-1 hover:shadow-lg ${
                          selectedSauce?.id === sauce.id
                            ? 'border-pink-400 bg-pink-50'
                            : 'border-gray-200 hover:border-pink-300 hover:bg-pink-25'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h5 className="text-lg font-bold text-gray-800">{sauce.name}</h5>
                              <div className="flex items-center gap-1">
                                {[...Array(getFlameCount(sauce.spiceLevel))].map((_, i) => (
                                  <Flame key={i} className="w-4 h-4 text-red-500" />
                                ))}
                              </div>
                              <span className={`text-sm px-3 py-1 rounded-full font-medium ${getSpiceLevelColor(sauce.spiceLevel)}`}>
                                {sauce.spiceLevel}
                              </span>
                              {sauce.isPopular && (
                                <div className="flex items-center gap-1 bg-pink-100 px-2 py-1 rounded-full">
                                  <Heart className="w-3 h-3 text-pink-600 fill-pink-600" />
                                  <span className="text-xs font-medium text-pink-700">Favourite</span>
                                </div>
                              )}
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {sauce.description}
                            </p>
                          </div>
                          {selectedSauce?.id === sauce.id && (
                            <Check className="w-6 h-6 text-green-600 ml-4" />
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Final Step: Add to Basket */}
              {selectedProtein && selectedSauce && (
                <div className="border-t-2 border-gray-200 pt-8">
                  <div className="bg-gradient-to-r from-pink-50 to-rose-50 border-2 border-pink-200 rounded-xl p-6 mb-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-4 text-center">
                      💖 Your Favourite Dish is Ready!
                    </h4>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-800 mb-2">
                        {selectedProtein.name} {selectedSauce.name}
                      </div>
                      <div className="flex items-center justify-center gap-2 mb-3">
                        {[...Array(getFlameCount(selectedSauce.spiceLevel))].map((_, i) => (
                          <Flame key={i} className="w-5 h-5 text-red-500" />
                        ))}
                        <span className={`text-sm px-3 py-1 rounded-full font-medium ${getSpiceLevelColor(selectedSauce.spiceLevel)}`}>
                          {selectedSauce.spiceLevel}
                        </span>
                      </div>
                      <div className="text-3xl font-bold text-pink-600 mb-4">
                        {formatPrice(selectedProtein.basePrice)}
                      </div>
                      <p className="text-gray-600 text-sm mb-6">
                        {selectedProtein.name} {selectedSauce.description.toLowerCase()}
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <button
                      onClick={handleAddToBasket}
                      className="bg-gradient-to-r from-pink-600 to-rose-600 text-white px-8 py-4 rounded-xl font-bold text-xl hover:from-pink-700 hover:to-rose-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <div className="flex items-center gap-3">
                        <Plus className="w-6 h-6" />
                        <span>Add to Basket - {formatPrice(selectedProtein.basePrice)}</span>
                      </div>
                    </button>
                    <p className="text-sm text-gray-600 mt-3">
                      Click to add this dish to your order and create another combination
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 rounded-2xl p-8 lg:p-12 text-white">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Heart className="w-8 h-8" />
              <h3 className="text-2xl lg:text-3xl font-bold">
                Over 96 Beloved Combinations
              </h3>
            </div>
            <p className="text-lg lg:text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              These are the dishes our customers have fallen in love with over the years. 
              Each combination represents years of perfecting authentic flavors!
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center max-w-2xl mx-auto">
              <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                <div className="text-3xl mb-2">🥘</div>
                <div className="font-bold">12 Proteins</div>
                <div className="text-sm opacity-90">Including vegetarian options</div>
              </div>
              <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                <div className="text-3xl mb-2">💖</div>
                <div className="font-bold">8 Favourite Sauces</div>
                <div className="text-sm opacity-90">Customer tested & approved</div>
              </div>
              <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                <div className="text-3xl mb-2">⭐</div>
                <div className="font-bold">Time-Tested</div>
                <div className="text-sm opacity-90">Loved for generations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllTimeFavouritesBuilder;