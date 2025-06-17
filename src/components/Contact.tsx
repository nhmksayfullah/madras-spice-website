import React from 'react';
import { Phone, Clock, MapPin, Star, Mail } from 'lucide-react';
import { RESTAURANT_DATA } from '../utils/constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-orange-900 to-red-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Visit <span className="text-orange-400">Madras Spice</span>
          </h2>
          <div className="w-24 h-1 bg-orange-400 mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
            Ready to experience authentic Indian cuisine? Contact us to place your takeaway order 
            or learn more about our daily specials.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8">
                Contact Information
              </h3>
              
              {/* Address */}
              <div className="flex items-start gap-4 mb-8 p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                <div className="bg-orange-600 p-3 rounded-full flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    Address
                  </h4>
                  <p className="text-orange-100 text-lg leading-relaxed">
                    {RESTAURANT_DATA.address}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 mb-8 p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                <div className="bg-green-600 p-3 rounded-full flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    Phone
                  </h4>
                  <a 
                    href={`tel:${RESTAURANT_DATA.phone}`}
                    className="text-2xl font-bold text-orange-400 hover:text-orange-300 transition-colors duration-200"
                  >
                    {RESTAURANT_DATA.phone}
                  </a>
                  <p className="text-orange-100 mt-2">
                    Quick ordering • Friendly service • Fresh preparation
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 mb-8 p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                <div className="bg-blue-600 p-3 rounded-full flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    Email
                  </h4>
                  <a 
                    href={`mailto:${RESTAURANT_DATA.email}`}
                    className="text-xl font-bold text-orange-400 hover:text-orange-300 transition-colors duration-200"
                  >
                    {RESTAURANT_DATA.email}
                  </a>
                  <p className="text-orange-100 mt-2">
                    For inquiries, feedback, or special requests
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-start gap-4 p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                <div className="bg-yellow-600 p-3 rounded-full flex-shrink-0">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    Customer Rating
                  </h4>
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-orange-100 text-lg font-medium ml-2">4.8/5</span>
                  </div>
                  <p className="text-orange-100">
                    Based on 150+ customer reviews
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm border border-white/20">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-orange-600 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white">
                  Opening Hours
                </h3>
              </div>
              
              <div className="space-y-4">
                {RESTAURANT_DATA.openingHours.map((schedule, index) => (
                  <div 
                    key={index}
                    className={`flex justify-between items-center py-3 border-b border-white/20 last:border-b-0 ${
                      schedule.hours === 'Closed' ? 'opacity-60' : ''
                    }`}
                  >
                    <span className="text-orange-100 font-medium text-lg">
                      {schedule.day}
                    </span>
                    <span className={`font-bold text-lg ${
                      schedule.hours === 'Closed' ? 'text-red-300' : 'text-white'
                    }`}>
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-orange-600/20 rounded-xl border border-orange-400/30">
                <p className="text-orange-100 text-center leading-relaxed">
                  <strong className="text-white">Please call ahead</strong> to ensure availability 
                  and to place your takeaway order for quick collection.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`tel:${RESTAURANT_DATA.phone}`}
              className="inline-flex items-center gap-3 bg-orange-600 text-white px-8 py-4 rounded-xl text-xl font-bold hover:bg-orange-700 transform hover:scale-105 transition-all duration-200 shadow-2xl"
            >
              <Phone className="w-6 h-6" />
              Call Now for Takeaway
            </a>
            <a
              href={`mailto:${RESTAURANT_DATA.email}`}
              className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl text-xl font-bold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-2xl"
            >
              <Mail className="w-6 h-6" />
              Send Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;