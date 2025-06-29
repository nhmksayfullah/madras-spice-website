import React, { useState } from 'react';
import { ChefHat, Flame, Leaf, Star, Plus, Check, ArrowDown, ArrowRight } from 'lucide-react';
import { proteins, currySauces, createTraditionalDish, Protein, CurrySauce } from '../data/traditionalDishes';

interface TraditionalDishBuilderProps {
  onAddToBasket: (item: Omit<import('../types/basket').BasketItem, 'id' | 'quantity'>) => void;
}

const TraditionalDishBuilder: React.FC<TraditionalDishBuilderProps> = ({ onAddToBasket }) => {
  const [selectedProtein, setSelectedProtein] = useState<Protein | null>(null);
  const [selectedSauce, setSelectedSauce] = useState<CurrySauce | null>(null);
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

  const handleSauceSelect = (sauce: CurrySauce) => {
    setSelectedSauce(sauce);
  };

  const handleAddToBasket = () => {
    if (!selectedProtein || !selectedSauce) return;
    
    const dish = createTraditionalDish(selectedProtein, selectedSauce);
    const itemKey = `${selectedProtein.id}-${selectedSauce.id}`;
    
    onAddToBasket({
      name: dish.name,
      price: dish.price,
      category: 'Traditional Dishes',
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

  const handleQuickAdd = (protein: Protein, sauce: CurrySauce) => {
    const dish = createTraditionalDish(protein, sauce);
    const itemKey = `${protein.id}-${sauce.id}`;
    
    onAddToBasket({
      name: dish.name,
      price: dish.price,
      category: 'Traditional Dishes',
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
    <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <div className="container mx-auto px-2 sm:px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <ChefHat className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-amber-600" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
              Traditional Dishes
            </h2>
            <ChefHat className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-amber-600" />
          </div>
          <div className="w-24 sm:w-28 lg:w-32 h-1.5 sm:h-2 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 mx-auto rounded-full mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium px-2">
            Create your perfect curry combination! Choose your favorite protein and pair it with any of our authentic curry sauces. 
            Each dish is prepared fresh with traditional spices and cooking methods.
          </p>
        </div>

        {/* Quick Popular Combinations */}
        <div className="mb-8 sm:mb-12">
          <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-6 sm:mb-8">
            🌟 Most Popular Combinations
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {[
              { protein: proteins.find(p => p.id === 'chicken')!, sauce: currySauces.find(s => s.id === 'curry')! },
              { protein: proteins.find(p => p.id === 'lamb')!, sauce: currySauces.find(s => s.id === 'bhuna')! },
              { protein: proteins.find(p => p.id === 'chicken-tikka')!, sauce: currySauces.find(s => s.id === 'madras')! },
              { protein: proteins.find(p => p.id === 'mix-vegetable')!, sauce: currySauces.find(s => s.id === 'korma')! }
            ].map((combo, index) => {
              const dish = createTraditionalDish(combo.protein, combo.sauce);
              const itemKey = `${combo.protein.id}-${combo.sauce.id}`;
              const isAdded = addedItems.has(itemKey);
              
              return (
                <div key={index} className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-orange-200 hover:border-orange-400 transform hover:-translate-y-2">
                  <div className="text-center mb-3 sm:mb-4">
                    <div className="flex items-center justify-center gap-1 sm:gap-2 mb-2">
                      <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 fill-yellow-500" />
                      <span className="text-xs font-bold text-yellow-600 uppercase tracking-wide">Popular</span>
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
                    <div className="text-lg sm:text-xl font-bold text-orange-600 mb-3 sm:mb-4">
                      {formatPrice(dish.price)}
                    </div>
                  </div>
                  <button
                    onClick={() => handleQuickAdd(combo.protein, combo.sauce)}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg font-bold text-sm sm:text-lg transition-all duration-300 transform hover:scale-105 ${
                      isAdded 
                        ? 'bg-green-600 text-white shadow-lg' 
                        : 'bg-gradient-to-r from-orange-600 to-red-600 text-white hover:from-orange-700 hover:to-red-700 shadow-lg hover:shadow-xl'
                    }`}
                  >
                    {isAdded ? (
                      <div className="flex items-center justify-center gap-1 sm:gap-2">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>Added to Basket!</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-1 sm:gap-2">
                        <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
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
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden border-2 border-orange-200">
            <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-4 sm:p-6 text-center">
              <h3 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2">🍛 Build Your Own Combination</h3>
              <p className="text-amber-100 text-sm sm:text-base">Simple 2-step process - Choose protein, then choose sauce</p>
            </div>
            
            <div className="p-4 sm:p-8">
              {/* Step 1: Protein Selection */}
              <div className="mb-6 sm:mb-8">
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div className="bg-orange-600 text-white w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-sm sm:text-base">1</div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-800">Choose Your Protein</h4>
                  {selectedProtein && (
                    <button
                      onClick={resetSelection}
                      className="text-xs sm:text-sm text-orange-600 hover:text-orange-700 underline"
                    >
                      Change Selection
                    </button>
                  )}
                </div>
                
                {!selectedProtein ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                    {proteins.map((protein) => (
                      <button
                        key={protein.id}
                        onClick={() => handleProteinSelect(protein)}
                        className="p-3 sm:p-4 border-2 border-gray-200 rounded-xl hover:border-orange-400 hover:bg-orange-50 transition-all duration-300 text-left group transform hover:-translate-y-1 hover:shadow-lg"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h5 className="font-bold text-gray-800 group-hover:text-orange-700 text-sm sm:text-base">{protein.name}</h5>
                          <div className="flex gap-1">
                            {protein.isPopular && (
                              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 fill-yellow-500" />
                            )}
                            {protein.isVegetarian && (
                              <Leaf className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
                            )}
                          </div>
                        </div>
                        <div className="text-base sm:text-lg font-bold text-orange-600">
                          {formatPrice(protein.basePrice)}
                        </div>
                        <div className="mt-2 text-xs sm:text-sm text-gray-600 group-hover:text-gray-700">
                          Click to select →
                        </div>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-4 sm:p-6">
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
                        <div className="text-lg sm:text-xl font-bold text-orange-600">
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
                    <div className="bg-orange-600 text-white w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-sm sm:text-base">2</div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-800">Choose Your Curry Sauce</h4>
                    <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600 animate-bounce" />
                  </div>
                  
                  <div className="grid gap-3 sm:gap-4">
                    {currySauces.map((sauce) => (
                      <button
                        key={sauce.id}
                        onClick={() => handleSauceSelect(sauce)}
                        className={`p-3 sm:p-4 border-2 rounded-xl transition-all duration-300 text-left transform hover:-translate-y-1 hover:shadow-lg ${
                          selectedSauce?.id === sauce.id
                            ? 'border-orange-400 bg-orange-50'
                            : 'border-gray-200 hover:border-orange-300 hover:bg-orange-25'
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
                                <div className="flex items-center gap-1 bg-yellow-100 px-2 py-1 rounded-full">
                                  <Star className="w-3 h-3 text-yellow-600 fill-yellow-600" />
                                  <span className="text-xs font-medium text-yellow-700">Popular</span>
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
                  <div className="bg-gradient-to-r from-green-50 to-orange-50 border-2 border-green-200 rounded-xl p-4 sm:p-6 mb-4 sm:mb-6">
                    <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 text-center">
                      🎉 Your Custom Dish is Ready!
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
                      <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-3 sm:mb-4">
                        {formatPrice(selectedProtein.basePrice)}
                      </div>
                      <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6">
                        {selectedProtein.name} {selectedSauce.description.toLowerCase()}
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <button
                      onClick={handleAddToBasket}
                      className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-lg sm:text-xl hover:from-green-700 hover:to-green-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <div className="flex items-center gap-2 sm:gap-3">
                        <Plus className="w-5 h-5 sm:w-6 sm:h-6" />
                        <span>Add to Basket - {formatPrice(selectedProtein.basePrice)}</span>
                      </div>
                    </button>
                    <p className="text-xs sm:text-sm text-gray-600 mt-2 sm:mt-3">
                      Click to add this dish to your order and create another combination
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8 sm:mt-12">
          <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 text-white">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <ChefHat className="w-6 h-6 sm:w-8 sm:h-8" />
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                Over 110 Delicious Combinations
              </h3>
            </div>
            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 opacity-90 max-w-3xl mx-auto">
              Every dish is prepared fresh to order with authentic spices and traditional cooking methods. 
              Create your perfect curry today!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-center max-w-2xl mx-auto">
              <div className="bg-white/20 rounded-xl p-3 sm:p-4 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl mb-2">🥘</div>
                <div className="font-bold text-sm sm:text-base">10 Proteins</div>
                <div className="text-xs sm:text-sm opacity-90">Including vegetarian options</div>
              </div>
              <div className="bg-white/20 rounded-xl p-3 sm:p-4 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl mb-2">🍛</div>
                <div className="font-bold text-sm sm:text-base">11 Curry Sauces</div>
                <div className="text-xs sm:text-sm opacity-90">From mild to very hot</div>
              </div>
              <div className="bg-white/20 rounded-xl p-3 sm:p-4 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl mb-2">👨‍🍳</div>
                <div className="font-bold text-sm sm:text-base">Fresh Made</div>
                <div className="text-xs sm:text-sm opacity-90">Prepared to order</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TraditionalDishBuilder;