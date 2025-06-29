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
          ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16 lg:h-20 relative">
          
          {/* Centered Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center space-x-6 xl:space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-black font-light text-sm xl:text-base hover:text-orange-600 transition-colors duration-200 px-2 py-1"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-black font-light text-sm xl:text-base hover:text-orange-600 transition-colors duration-200 px-2 py-1"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('menu')}
              className="text-black font-light text-sm xl:text-base hover:text-orange-600 transition-colors duration-200 px-2 py-1"
            >
              Menu
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-black font-light text-sm xl:text-base hover:text-orange-600 transition-colors duration-200 px-2 py-1"
            >
              Contact
            </button>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <div className="lg:hidden absolute right-0">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black hover:text-orange-600 p-2 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('hero')}
                className="block w-full text-left px-3 py-3 text-base font-light text-black hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-3 text-base font-light text-black hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors duration-200"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('menu')}
                className="block w-full text-left px-3 py-3 text-base font-light text-black hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors duration-200"
              >
                Menu
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-3 text-base font-light text-black hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors duration-200"
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