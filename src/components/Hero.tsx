import React from 'react';
import { Star, Phone, MapPin, Clock } from 'lucide-react';
import { RESTAURANT_DATA } from '../utils/constants';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-white">
      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto py-20">
          
          {/* Leaf Emoji and Restaurant Name */}
          <div className="mb-12 animate-fade-in">
            <div className="text-8xl sm:text-9xl lg:text-[12rem] mb-6">
              🍀
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-gray-800 mb-4 tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
              Madras Spice
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
          </div>
          
          {/* Tagline */}
          <div className="mb-8 animate-fade-in-delayed">
            <p className="text-2xl sm:text-3xl lg:text-4xl text-gray-600 font-light mb-6">
              {RESTAURANT_DATA.tagline}
            </p>
            <p className="text-lg sm:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
              {RESTAURANT_DATA.description}
            </p>
          </div>

          {/* Rating Stars */}
          <div className="flex justify-center items-center mb-12 animate-fade-in-delayed-2">
            <div className="flex items-center gap-1 mr-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-lg font-medium text-gray-700">4.8/5 from 150+ reviews</span>
          </div>

          {/* Contact Information */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto animate-fade-in-delayed-3">
            {/* Phone */}
            <div className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors duration-300">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Phone className="w-6 h-6 text-orange-600" />
                <h3 className="text-lg font-bold text-gray-800">Call Us</h3>
              </div>
              <a 
                href={`tel:${RESTAURANT_DATA.phone}`}
                className="text-xl font-bold text-orange-600 hover:text-orange-700 transition-colors duration-200"
              >
                {RESTAURANT_DATA.phone}
              </a>
            </div>

            {/* Location */}
            <div className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors duration-300">
              <div className="flex items-center justify-center gap-3 mb-3">
                <MapPin className="w-6 h-6 text-orange-600" />
                <h3 className="text-lg font-bold text-gray-800">Location</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Sale, Cheshire
              </p>
            </div>

            {/* Opening Hours */}
            <div className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors duration-300 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Clock className="w-6 h-6 text-orange-600" />
                <h3 className="text-lg font-bold text-gray-800">Today</h3>
              </div>
              <p className="text-gray-600">
                {(() => {
                  const today = new Date().getDay();
                  const todaySchedule = RESTAURANT_DATA.openingHours[today];
                  return todaySchedule.hours;
                })()}
              </p>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-delayed-4">
            <a
              href={`tel:${RESTAURANT_DATA.phone}`}
              className="bg-orange-600 text-white px-10 py-4 rounded-2xl text-xl font-semibold hover:bg-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3"
            >
              <Phone className="w-6 h-6" />
              Order Takeaway
            </a>
            
            <button
              onClick={scrollToMenu}
              className="bg-white border-2 border-gray-300 text-gray-700 px-10 py-4 rounded-2xl text-xl font-semibold hover:border-orange-600 hover:text-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Browse Menu
            </button>
            
            <button
              onClick={scrollToContact}
              className="bg-white border-2 border-gray-300 text-gray-700 px-10 py-4 rounded-2xl text-xl font-semibold hover:border-orange-600 hover:text-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Opening Hours
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;