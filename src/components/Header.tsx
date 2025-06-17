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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg backdrop-blur-sm' 
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16 lg:h-20 relative">
          
          {/* Centered Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 text-lg"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 text-lg"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('menu')}
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 text-lg"
            >
              Menu
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 text-lg"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 text-lg"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button - Positioned absolutely to the right */}
          <div className="md:hidden absolute right-0">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-orange-600 p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('hero')}
                className="block w-full text-left px-3 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors duration-200 text-lg font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors duration-200 text-lg font-medium"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('menu')}
                className="block w-full text-left px-3 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors duration-200 text-lg font-medium"
              >
                Menu
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="block w-full text-left px-3 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors duration-200 text-lg font-medium"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors duration-200 text-lg font-medium"
              >
                Contact
              </button>
              
              {/* Mobile Phone Button */}
              <div className="pt-4 border-t border-gray-200 mt-4">
                <a
                  href={`tel:${RESTAURANT_DATA.phone}`}
                  className="block w-full bg-orange-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors duration-200 text-center"
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