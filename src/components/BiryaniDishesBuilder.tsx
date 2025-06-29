import React, { useState } from 'react';
import { Crown, Flame, Leaf, Star, Plus, Check, Sparkles, Award } from 'lucide-react';
import { biryaniProteins, createBiryaniDish, BiryaniProtein } from '../data/biryaniDishes';

interface BiryaniDishesBuilderProps {
  onAddToBasket: (item: Omit<import('../types/basket').BasketItem, 'id' | 'quantity'>) => void;
}

const BiryaniDishesBuilder: React.FC<BiryaniDishesBuilderProps> = ({ onAddToBasket }) => {
  const [addedItems, setAddedItems] = useState<Set<string>>(new Set());

  const handleQuickAdd = (protein: BiryaniProtein) => {
    const dish = createBiryaniDish(protein);
    const itemKey = `biryani-${protein.id}`;
    
    onAddToBasket({
      name: dish.name,
      price: dish.price,
      category: 'Biryani Dishes',
      isSpicy: true, // Biryani is typically medium spiced
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

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Crown className="w-12 h-12 text-orange-600" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
              Biryani Dishes
            </h2>
            <Crown className="w-12 h-12 text-orange-600" />
          </div>
          <div className="w-32 h-2 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
            Experience the royal taste of authentic biryani! Each dish features aromatic basmati rice stir-fried with 
            a perfect blend of medium spices, garnished with a light omelette and served with our signature medium curry sauce.
          </p>
          
          {/* Special Note */}
          <div className="mt-8 bg-gradient-to-r from-orange-100 to-red-100 border-2 border-orange-300 rounded-xl p-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Sparkles className="w-6 h-6 text-orange-600" />
              <h3 className="text-xl font-bold text-gray-800">What Makes Our Biryani Special</h3>
              <Sparkles className="w-6 h-6 text-orange-600" />
            </div>
            <p className="text-gray-700 leading-relaxed">
              <strong>A stir fry basmati rice with blend of medium spices garnished with a light omelette & served with a medium curry sauce.</strong>
            </p>
            <div className="mt-4 text-center">
              <span className="inline-block bg-red-500 text-white px-4 py-2 rounded-lg font-bold">
                Extra sauce £1.50
              </span>
            </div>
          </div>
        </div>

        {/* Popular Biryani Selection */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
            👑 Most Popular Biryani Dishes
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {biryaniProteins.filter(p => p.isPopular).map((protein) => {
              const dish = createBiryaniDish(protein);
              const itemKey = `biryani-${protein.id}`;
              const isAdded = addedItems.has(itemKey);
              
              return (
                <div key={protein.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-orange-200 hover:border-orange-400 transform hover:-translate-y-2">
                  <div className="text-center mb-4">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Star className="w-5 h-5 text-orange-500 fill-orange-500" />
                      <span className="text-xs font-bold text-orange-600 uppercase tracking-wide">Popular</span>
                    </div>
                    <h4 className="font-bold text-lg text-gray-800 mb-2">{dish.name}</h4>
                    <div className="flex justify-center items-center gap-2 mb-2">
                      <Flame className="w-4 h-4 text-red-500" />
                      <Flame className="w-4 h-4 text-red-500" />
                      <span className="text-sm px-3 py-1 rounded-full font-medium bg-red-100 text-red-600">
                        Medium Spice
                      </span>
                    </div>
                    <div className="text-xl font-bold text-orange-600 mb-4">
                      {formatPrice(dish.price)}
                    </div>
                    {protein.isVegetarian && (
                      <div className="flex items-center justify-center gap-1 mb-2">
                        <Leaf className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-green-600 font-medium">Vegetarian</span>
                      </div>
                    )}
                  </div>
                  <button
                    onClick={() => handleQuickAdd(protein)}
                    className={`w-full px-4 py-3 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                      isAdded 
                        ? 'bg-green-600 text-white shadow-lg' 
                        : 'bg-gradient-to-r from-orange-600 to-red-600 text-white hover:from-orange-700 hover:to-red-700 shadow-lg hover:shadow-xl'
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
                        <span>Add to Basket</span>
                      </div>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* All Biryani Options */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-orange-200">
            <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-6 text-center">
              <h3 className="text-2xl font-bold mb-2">🍛 Complete Biryani Selection</h3>
              <p className="text-orange-100">Choose from our full range of authentic biryani dishes</p>
            </div>
            
            <div className="p-8">
              <div className="grid gap-4">
                {biryaniProteins.map((protein) => {
                  const dish = createBiryaniDish(protein);
                  const itemKey = `biryani-${protein.id}`;
                  const isAdded = addedItems.has(itemKey);
                  
                  return (
                    <div key={protein.id} className="flex items-center justify-between p-4 border-2 border-gray-200 rounded-xl hover:border-orange-300 hover:bg-orange-50 transition-all duration-300">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="text-lg font-bold text-gray-800">{dish.name}</h4>
                          <div className="flex gap-1">
                            {protein.isPopular && (
                              <div className="bg-orange-100 p-1 rounded-full">
                                <Star className="w-4 h-4 text-orange-600 fill-orange-600" />
                              </div>
                            )}
                            {protein.isVegetarian && (
                              <div className="bg-green-100 p-1 rounded-full">
                                <Leaf className="w-4 h-4 text-green-600" />
                              </div>
                            )}
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {dish.description}
                        </p>
                      </div>
                      
                      <div className="flex items-center gap-4 ml-6">
                        <div className="text-right">
                          <div className="text-2xl font-bold text-orange-600">
                            {formatPrice(dish.price)}
                          </div>
                          <div className="flex items-center gap-1 justify-end mt-1">
                            <Flame className="w-3 h-3 text-red-500" />
                            <Flame className="w-3 h-3 text-red-500" />
                            <span className="text-xs text-red-600">Medium</span>
                          </div>
                        </div>
                        
                        <button
                          onClick={() => handleQuickAdd(protein)}
                          className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 ${
                            isAdded 
                              ? 'bg-green-600 text-white shadow-lg' 
                              : 'bg-gradient-to-r from-orange-600 to-red-600 text-white hover:from-orange-700 hover:to-red-700 shadow-lg hover:shadow-xl'
                          }`}
                        >
                          {isAdded ? (
                            <div className="flex items-center gap-2">
                              <Check className="w-4 h-4" />
                              <span>Added!</span>
                            </div>
                          ) : (
                            <div className="flex items-center gap-2">
                              <Plus className="w-4 h-4" />
                              <span>Add</span>
                            </div>
                          )}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 rounded-2xl p-8 lg:p-12 text-white">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Crown className="w-8 h-8" />
              <h3 className="text-2xl lg:text-3xl font-bold">
                Royal Biryani Experience
              </h3>
            </div>
            <p className="text-lg lg:text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Each biryani is a masterpiece of aromatic basmati rice, perfectly spiced and cooked to perfection. 
              Served with our signature curry sauce for the complete authentic experience.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center max-w-2xl mx-auto">
              <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                <div className="text-3xl mb-2">🍚</div>
                <div className="font-bold">Basmati Rice</div>
                <div className="text-sm opacity-90">Premium quality aromatic rice</div>
              </div>
              <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                <div className="text-3xl mb-2">🥚</div>
                <div className="font-bold">Light Omelette</div>
                <div className="text-sm opacity-90">Traditional garnish included</div>
              </div>
              <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                <div className="text-3xl mb-2">🍛</div>
                <div className="font-bold">Curry Sauce</div>
                <div className="text-sm opacity-90">Medium spiced accompaniment</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiryaniDishesBuilder;