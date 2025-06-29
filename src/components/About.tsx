import React from 'react';
import { Truck, ChefHat, Star, Clock } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Truck className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-orange-600" />,
      title: "FREE DELIVERY",
      description: "Free home delivery on orders over £15 within 3 mile radius. £2 delivery charge per mile for order less than £15 & over 3 mile."
    },
    {
      icon: <ChefHat className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-red-600" />,
      title: "EXPERT CHEF",
      description: "Expert chefs craft delicious, innovative dishes. Passionate, dedicated to providing an unforgettable culinary experience."
    },
    {
      icon: <Star className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-orange-600" />,
      title: "AWESOME RECIPE",
      description: "Our authentic Indian dishes, crafted with traditional spices and techniques. A true taste of India, guaranteed to delight your palate."
    },
    {
      icon: <Clock className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-red-600" />,
      title: "Fresh Daily",
      description: "All our dishes are prepared fresh daily using the finest ingredients and traditional cooking methods."
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">
            About <span className="text-orange-600">Madras Spice</span>
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-orange-600 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Discover the authentic taste of India with our traditional cuisine. We bring you the rich, vibrant flavors 
            of authentic Indian dishes, prepared with passion and served with pride to our valued customers.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
            >
              <div className="flex justify-center mb-3 sm:mb-4">
                {feature.icon}
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">
                {feature.title}
              </h4>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;