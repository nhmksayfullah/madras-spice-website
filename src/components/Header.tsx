import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { RESTAURANT_DATA } from '../utils/constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-white/20' 
          : 'bg-black/20 backdrop-blur-sm'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16 lg:h-20 relative">
          
          {/* Centered Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className={`font-bold transition-all duration-300 text-lg hover:scale-105 ${
                isScrolled 
                  ? 'text-gray-800 hover:text-orange-600' 
                  : 'text-gray-800 hover:text-orange-600 bg-white/90 px-4 py-2 rounded-full shadow-lg hover:bg-white hover:shadow-xl'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className={`font-bold transition-all duration-300 text-lg hover:scale-105 ${
                isScrolled 
                  ? 'text-gray-800 hover:text-orange-600' 
                  : 'text-gray-800 hover:text-orange-600 bg-white/90 px-4 py-2 rounded-full shadow-lg hover:bg-white hover:shadow-xl'
              }`}
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('menu')}
              className={`font-bold transition-all duration-300 text-lg hover:scale-105 ${
                isScrolled 
                  ? 'text-gray-800 hover:text-orange-600' 
                  : 'text-gray-800 hover:text-orange-600 bg-white/90 px-4 py-2 rounded-full shadow-lg hover:bg-white hover:shadow-xl'
              }`}
            >
              Menu
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className={`font-bold transition-all duration-300 text-lg hover:scale-105 ${
                isScrolled 
                  ? 'text-gray-800 hover:text-orange-600' 
                  : 'text-gray-800 hover:text-orange-600 bg-white/90 px-4 py-2 rounded-full shadow-lg hover:bg-white hover:shadow-xl'
              }`}
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`font-bold transition-all duration-300 text-lg hover:scale-105 ${
                isScrolled 
                  ? 'text-gray-800 hover:text-orange-600' 
                  : 'text-gray-800 hover:text-orange-600 bg-white/90 px-4 py-2 rounded-full shadow-lg hover:bg-white hover:shadow-xl'
              }`}
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button - Positioned absolutely to the right */}
          <div className="md:hidden absolute right-0">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                isScrolled 
                  ? 'text-gray-800 hover:text-orange-600 hover:bg-orange-50' 
                  : 'text-gray-800 hover:text-orange-600 bg-white/90 hover:bg-white shadow-lg hover:shadow-xl'
              }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg rounded-b-xl">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('hero')}
                className="block w-full text-left px-3 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-all duration-300 text-lg font-medium hover:scale-105"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-all duration-300 text-lg font-medium hover:scale-105"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('menu')}
                className="block w-full text-left px-3 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-all duration-300 text-lg font-medium hover:scale-105"
              >
                Menu
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="block w-full text-left px-3 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-all duration-300 text-lg font-medium hover:scale-105"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-all duration-300 text-lg font-medium hover:scale-105"
              >
                Contact
              </button>
              
              {/* Mobile Phone Button */}
              <div className="pt-4 border-t border-gray-200 mt-4">
                <a
                  href={`tel:${RESTAURANT_DATA.phone}`}
                  className="block w-full bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-3 rounded-lg font-medium hover:from-orange-700 hover:to-red-700 transition-all duration-300 text-center transform hover:scale-105 shadow-lg"
                >
                  <div className="flex items-center justify-center gap-2">
                    <Phone size={18} />
                    Call Now: {RESTAURANT_DATA.phone}
                  </div>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;