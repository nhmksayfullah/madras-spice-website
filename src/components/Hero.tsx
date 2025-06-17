import React from 'react';
import { Star, Phone, MapPin, Clock, Sparkles } from 'lucide-react';
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
    <section id="hero" className="relative min-h-screen flex items-center bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Spice Particles */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-orange-400 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-red-400 rounded-full opacity-50 animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-5 h-5 bg-yellow-400 rounded-full opacity-40 animate-bounce" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-pink-400 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-orange-300 to-red-300 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full opacity-15 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-yellow-200 to-orange-200 rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto py-20">
          
          {/* Clover Image and Restaurant Name */}
          <div className="mb-12 animate-fade-in">
            <div className="relative inline-block">
              <div className="mb-6 relative flex justify-center">
                <img 
                  src="/madras_spice_hero_icon.png" 
                  alt="Madras Spice Logo" 
                  className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 object-contain drop-shadow-2xl"
                />
                {/* Sparkle effects around the clover */}
                <Sparkles className="absolute -top-4 -right-4 w-8 h-8 text-yellow-400 animate-pulse" />
                <Sparkles className="absolute -bottom-2 -left-2 w-6 h-6 text-orange-400 animate-pulse" style={{ animationDelay: '1s' }} />
                <Sparkles className="absolute top-1/2 -right-8 w-5 h-5 text-pink-400 animate-pulse" style={{ animationDelay: '2s' }} />
              </div>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-4 tracking-tight bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent" style={{ fontFamily: 'Georgia, serif' }}>
              Madras Spice
            </h1>
            <div className="w-32 h-2 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 mx-auto rounded-full shadow-lg"></div>
          </div>
          
          {/* Tagline */}
          <div className="mb-8 animate-fade-in-delayed">
            <p className="text-2xl sm:text-3xl lg:text-4xl text-gray-700 font-light mb-6 bg-gradient-to-r from-gray-700 to-gray-600 bg-clip-text text-transparent">
              {RESTAURANT_DATA.tagline}
            </p>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {RESTAURANT_DATA.description}
            </p>
          </div>

          {/* Rating Stars */}
          <div className="flex justify-center items-center mb-12 animate-fade-in-delayed-2">
            <div className="bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-orange-200">
              <div className="flex items-center gap-1 mr-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 drop-shadow-sm" />
                ))}
              </div>
              <span className="text-lg font-medium text-gray-700">4.8/5 from 150+ reviews</span>
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto animate-fade-in-delayed-3">
            {/* Phone */}
            <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl p-6 hover:from-orange-200 hover:to-red-200 transition-all duration-300 transform hover:scale-105 shadow-lg border border-orange-200">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-full">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800">Call Us</h3>
              </div>
              <a 
                href={`tel:${RESTAURANT_DATA.phone}`}
                className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent hover:from-orange-700 hover:to-red-700 transition-all duration-200"
              >
                {RESTAURANT_DATA.phone}
              </a>
            </div>

            {/* Location */}
            <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl p-6 hover:from-pink-200 hover:to-purple-200 transition-all duration-300 transform hover:scale-105 shadow-lg border border-pink-200">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-2 rounded-full">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800">Location</h3>
              </div>
              <p className="text-gray-700 leading-relaxed font-medium">
                Sale, Cheshire
              </p>
            </div>

            {/* Opening Hours */}
            <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-6 hover:from-yellow-200 hover:to-orange-200 transition-all duration-300 transform hover:scale-105 shadow-lg border border-yellow-200 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-2 rounded-full">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800">Today</h3>
              </div>
              <p className="text-gray-700 font-medium">
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
              className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white px-10 py-4 rounded-2xl text-xl font-semibold hover:from-orange-700 hover:via-red-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center gap-3 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Phone className="w-6 h-6 relative z-10" />
              <span className="relative z-10">Order Takeaway</span>
            </a>
            
            <button
              onClick={scrollToMenu}
              className="bg-white border-2 border-gradient-to-r from-orange-300 to-red-300 text-gray-700 px-10 py-4 rounded-2xl text-xl font-semibold hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 hover:border-orange-500 hover:text-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm"
            >
              Browse Menu
            </button>
            
            <button
              onClick={scrollToContact}
              className="bg-white border-2 border-gradient-to-r from-pink-300 to-purple-300 text-gray-700 px-10 py-4 rounded-2xl text-xl font-semibold hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 hover:border-pink-500 hover:text-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm"
            >
              Opening Hours
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-orange-400 rounded-full flex justify-center bg-white/50 backdrop-blur-sm shadow-lg">
            <div className="w-1 h-3 bg-gradient-to-b from-orange-400 to-red-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;