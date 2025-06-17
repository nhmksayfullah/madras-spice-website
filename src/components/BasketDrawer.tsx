import React from 'react';
import { X, Minus, Plus, Phone, ShoppingCart, Trash2, Star, Flame, Leaf } from 'lucide-react';
import { BasketState } from '../types/basket';
import { RESTAURANT_DATA } from '../utils/constants';

interface BasketDrawerProps {
  basket: BasketState;
  onClose: () => void;
  onUpdateQuantity: (itemId: string, quantity: number) => void;
  onRemoveItem: (itemId: string) => void;
  onClearBasket: () => void;
}

const BasketDrawer: React.FC<BasketDrawerProps> = ({
  basket,
  onClose,
  onUpdateQuantity,
  onRemoveItem,
  onClearBasket
}) => {
  const formatPrice = (price: number): string => {
    return `£${price.toFixed(2)}`;
  };

  const generateOrderSummary = (): string => {
    if (basket.items.length === 0) return '';
    
    let summary = `Hello! I'd like to place a takeaway order:\n\n`;
    
    basket.items.forEach((item, index) => {
      summary += `${index + 1}. ${item.name} x${item.quantity} - ${formatPrice(item.price * item.quantity)}\n`;
    });
    
    summary += `\nTotal: ${formatPrice(basket.total)}\n\n`;
    summary += `Please let me know the collection time. Thank you!`;
    
    return encodeURIComponent(summary);
  };

  const handleCallWithOrder = () => {
    // For mobile devices, we can try to pre-fill SMS or just call
    const orderSummary = generateOrderSummary();
    
    // Try to open SMS with order details (works on mobile)
    if (navigator.userAgent.match(/iPhone|iPad|iPod|Android/i)) {
      const smsUrl = `sms:${RESTAURANT_DATA.phone}?body=${orderSummary}`;
      window.open(smsUrl, '_blank');
    }
    
    // Also initiate the call
    window.open(`tel:${RESTAURANT_DATA.phone}`, '_blank');
  };

  if (!basket.isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-50 transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl transform transition-transform duration-300 flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShoppingCart className="w-6 h-6" />
            <div>
              <h2 className="text-xl font-bold">Your Order</h2>
              <p className="text-orange-100 text-sm">
                {basket.itemCount} item{basket.itemCount !== 1 ? 's' : ''}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-full transition-colors duration-200"
            aria-label="Close basket"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {basket.items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full p-8 text-center">
              <ShoppingCart className="w-16 h-16 text-gray-300 mb-4" />
              <h3 className="text-xl font-bold text-gray-600 mb-2">Your basket is empty</h3>
              <p className="text-gray-500 mb-6">Add some delicious items from our menu!</p>
              <button
                onClick={onClose}
                className="bg-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors duration-200"
              >
                Browse Menu
              </button>
            </div>
          ) : (
            <div className="p-4 space-y-4">
              {basket.items.map((item) => (
                <div key={item.id} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-bold text-gray-800">{item.name}</h4>
                        <div className="flex gap-1">
                          {item.isPopular && (
                            <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                          )}
                          {item.isSpicy && (
                            <Flame className="w-3 h-3 text-red-500" />
                          )}
                          {item.isVegetarian && (
                            <Leaf className="w-3 h-3 text-green-500" />
                          )}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 capitalize">{item.category}</p>
                      <p className="text-lg font-bold text-orange-600 mt-1">
                        {formatPrice(item.price)} each
                      </p>
                    </div>
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="p-2 text-red-500 hover:bg-red-100 rounded-full transition-colors duration-200"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center hover:bg-orange-700 transition-colors duration-200"
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="font-bold text-lg min-w-[2rem] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center hover:bg-orange-700 transition-colors duration-200"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-gray-800">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {basket.items.length > 0 && (
          <div className="border-t border-gray-200 p-6 bg-white">
            {/* Total */}
            <div className="flex justify-between items-center mb-6 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-orange-200">
              <span className="text-xl font-bold text-gray-800">Total:</span>
              <span className="text-2xl font-bold text-orange-600">
                {formatPrice(basket.total)}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleCallWithOrder}
                className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:from-green-700 hover:to-green-800 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Call to Order: {RESTAURANT_DATA.phone}
              </button>
              
              <div className="flex gap-3">
                <button
                  onClick={onClearBasket}
                  className="flex-1 bg-gray-600 text-white py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors duration-200"
                >
                  Clear Basket
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 bg-orange-600 text-white py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors duration-200"
                >
                  Continue Shopping
                </button>
              </div>
            </div>

            {/* Order Info */}
            <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-800 text-center">
                <strong>💡 Tip:</strong> Your order summary will be ready when you call. 
                Collection times typically 15-30 minutes.
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BasketDrawer;