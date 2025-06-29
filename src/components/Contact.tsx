import React from 'react';
import { Phone, Clock, MapPin, Star, Mail } from 'lucide-react';
import { RESTAURANT_DATA } from '../utils/constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-orange-900 to-red-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Visit <span className="text-orange-400">Madras Spice</span>
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-orange-400 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-orange-100 max-w-3xl mx-auto leading-relaxed px-4">
            Ready to experience authentic Indian cuisine? Contact us to place your takeaway order 
            or learn more about our daily specials.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6 sm:mb-8">
                Contact Information
              </h3>
              
              {/* Address */}
              <div className="flex items-start gap-3 sm:gap-4 mb-6 sm:mb-8 p-4 sm:p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                <div className="bg-orange-600 p-2 sm:p-3 rounded-full flex-shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">
                    Address
                  </h4>
                  <p className="text-orange-100 text-base sm:text-lg leading-relaxed">
                    {RESTAURANT_DATA.address}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3 sm:gap-4 mb-6 sm:mb-8 p-4 sm:p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                <div className="bg-green-600 p-2 sm:p-3 rounded-full flex-shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">
                    Phone
                  </h4>
                  <a 
                    href={`tel:${RESTAURANT_DATA.phone}`}
                    className="text-xl sm:text-2xl font-bold text-orange-400 hover:text-orange-300 transition-colors duration-200 block"
                  >
                    {RESTAURANT_DATA.phone}
                  </a>
                  <p className="text-orange-100 mt-1 sm:mt-2 text-sm sm:text-base">
                    Quick ordering • Friendly service • Fresh preparation
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3 sm:gap-4 mb-6 sm:mb-8 p-4 sm:p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                <div className="bg-blue-600 p-2 sm:p-3 rounded-full flex-shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">
                    Email
                  </h4>
                  <a 
                    href={`mailto:${RESTAURANT_DATA.email}`}
                    className="text-lg sm:text-xl font-bold text-orange-400 hover:text-orange-300 transition-colors duration-200 block break-all"
                  >
                    {RESTAURANT_DATA.email}
                  </a>
                  <p className="text-orange-100 mt-1 sm:mt-2 text-sm sm:text-base">
                    For inquiries, feedback, or special requests
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                <div className="bg-yellow-600 p-2 sm:p-3 rounded-full flex-shrink-0">
                  <Star className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">
                    Customer Rating
                  </h4>
                  <div className="flex items-center gap-2 mb-1 sm:mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-orange-100 text-base sm:text-lg font-medium ml-2">4.8/5</span>
                  </div>
                  <p className="text-orange-100 text-sm sm:text-base">
                    Based on 150+ customer reviews
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <div className="bg-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 backdrop-blur-sm border border-white/20">
              <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                <div className="bg-orange-600 p-2 sm:p-3 rounded-full">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                  Opening Hours
                </h3>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                {RESTAURANT_DATA.openingHours.map((schedule, index) => (
                  <div 
                    key={index}
                    className={`flex justify-between items-center py-2 sm:py-3 border-b border-white/20 last:border-b-0 ${
                      schedule.hours === 'Closed' ? 'opacity-60' : ''
                    }`}
                  >
                    <span className="text-orange-100 font-medium text-base sm:text-lg">
                      {schedule.day}
                    </span>
                    <span className={`font-bold text-base sm:text-lg ${
                      schedule.hours === 'Closed' ? 'text-red-300' : 'text-white'
                    }`}>
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-orange-600/20 rounded-xl border border-orange-400/30">
                <p className="text-orange-100 text-center leading-relaxed text-sm sm:text-base">
                  <strong className="text-white">Please call ahead</strong> to ensure availability 
                  and to place your takeaway order for quick collection.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <a
              href={`tel:${RESTAURANT_DATA.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-lg sm:text-xl font-bold hover:bg-orange-700 transform hover:scale-105 transition-all duration-200 shadow-2xl"
            >
              <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="hidden sm:inline">Call Now for Takeaway</span>
              <span className="sm:hidden">Call for Takeaway</span>
            </a>
            <a
              href={`mailto:${RESTAURANT_DATA.email}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-lg sm:text-xl font-bold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-2xl"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="hidden sm:inline">Send Email</span>
              <span className="sm:hidden">Email Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;