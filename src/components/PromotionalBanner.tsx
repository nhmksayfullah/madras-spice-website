import React, { useState, useEffect, useRef } from 'react';
import { X, Calendar, Percent, Sparkles, Gift } from 'lucide-react';

const PromotionalBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [daysRemaining, setDaysRemaining] = useState(0);
  const [isPromoActive, setIsPromoActive] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const startDate = new Date('2025-10-20');
    const endDate = new Date('2025-10-30');
    const currentDate = new Date();
    
    // Always show the banner, but calculate different states
    setIsVisible(true);
    
    if (currentDate < startDate) {
      // Before the promotion starts - show countdown to start
      const timeDiff = startDate.getTime() - currentDate.getTime();
      const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
      setDaysRemaining(daysDiff);
      setIsPromoActive(false);
    } else if (currentDate >= startDate && currentDate <= endDate) {
      // During the promotion - show days remaining
      const timeDiff = endDate.getTime() - currentDate.getTime();
      const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
      setDaysRemaining(Math.max(0, daysDiff));
      setIsPromoActive(true);
    } else {
      // After the promotion - hide banner
      setIsVisible(false);
    }
  }, []);

  // Update CSS custom property when banner height changes
  useEffect(() => {
    if (bannerRef.current && isVisible) {
      const height = bannerRef.current.offsetHeight;
      document.documentElement.style.setProperty('--banner-height', `${height}px`);
    } else {
      document.documentElement.style.setProperty('--banner-height', '0px');
    }
  }, [isVisible]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div 
      ref={bannerRef}
      className="relative bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute -top-2 -right-8 w-6 h-6 bg-white/15 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -bottom-4 -right-4 w-10 h-10 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-2 -left-8 w-7 h-7 bg-white/25 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-center gap-2 sm:gap-4 text-center">
          {/* Close button for mobile */}
          <button
            onClick={handleClose}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 p-1 hover:bg-white/20 rounded-full transition-colors duration-200 lg:hidden"
            aria-label="Close banner"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Main promotional content */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            {/* Celebration icon */}
            <div className="flex items-center gap-1 sm:gap-2">
              <Gift className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce" />
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300 animate-pulse" />
            </div>

            {/* Main offer text */}
            <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
              <span className="text-sm sm:text-base font-bold">
                🎉 10 YEARS CELEBRATION! 🎉
              </span>
              <span className="hidden sm:inline text-white/80">|</span>
              <span className="text-sm sm:text-base font-semibold">
                <Percent className="inline w-4 h-4 sm:w-5 sm:h-5 mr-1" />
                20% OFF
              </span>
              <span className="text-sm sm:text-base">
                on any item
              </span>
            </div>

            {/* Days counter */}
            {daysRemaining > 0 && (
              <div className="flex items-center gap-1 sm:gap-2 bg-white/20 rounded-full px-2 sm:px-3 py-1">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm font-medium">
                  {isPromoActive 
                    ? `${daysRemaining} day${daysRemaining !== 1 ? 's' : ''} left!`
                    : `Starts in ${daysRemaining} day${daysRemaining !== 1 ? 's' : ''}!`
                  }
                </span>
              </div>
            )}

            {/* Call to action */}
            <div className="hidden sm:flex items-center gap-1 sm:gap-2">
              <span className="text-sm">
                {isPromoActive 
                  ? 'Valid until Oct 30, 2025' 
                  : 'Starts Oct 20, 2025 - Oct 30, 2025'
                }
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Animated border */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
    </div>
  );
};

export default PromotionalBanner;
