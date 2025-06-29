import React from 'react';
import { Star, Quote } from 'lucide-react';
import { RESTAURANT_DATA } from '../utils/constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">
            What Our <span className="text-orange-600">Customers Say</span>
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-orange-600 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Don't just take our word for it - hear from our loyal customers who have been enjoying 
            our authentic Indian cuisine for years.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {RESTAURANT_DATA.testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-orange-50 to-red-50 p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-orange-200 hover:border-orange-300 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 -left-3 bg-orange-600 p-2 sm:p-3 rounded-full">
                <Quote className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </div>

              {/* Rating Stars */}
              <div className="flex items-center mb-3 sm:mb-4 mt-3 sm:mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Customer Name */}
              <div className="border-t border-orange-200 pt-3 sm:pt-4">
                <p className="font-bold text-gray-800 text-base sm:text-lg">
                  {testimonial.name}
                </p>
                <p className="text-orange-600 font-medium text-sm sm:text-base">
                  Verified Customer
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-orange-600 to-red-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 text-white">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
            Join Hundreds of Satisfied Customers
          </h3>
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto">
            Experience the authentic flavors that have earned us over 150 five-star reviews. 
            Call us today to place your order.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`tel:${RESTAURANT_DATA.phone}`}
              className="w-full sm:w-auto bg-white text-orange-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              <span className="hidden sm:inline">Order Now: {RESTAURANT_DATA.phone}</span>
              <span className="sm:hidden">Order: {RESTAURANT_DATA.phone}</span>
            </a>
            <div className="flex items-center gap-2 text-base sm:text-lg">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-300 text-yellow-300" />
                ))}
              </div>
              <span className="font-medium">4.8/5 Average Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;