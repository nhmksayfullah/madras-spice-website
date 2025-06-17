import { useState, useEffect } from 'react';
import { BasketItem, BasketState } from '../types/basket';

export const useBasket = () => {
  const [basket, setBasket] = useState<BasketState>({
    items: [],
    isOpen: false,
    total: 0,
    itemCount: 0
  });

  // Calculate totals whenever items change
  useEffect(() => {
    const total = basket.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const itemCount = basket.items.reduce((sum, item) => sum + item.quantity, 0);
    
    setBasket(prev => ({
      ...prev,
      total,
      itemCount
    }));
  }, [basket.items]);

  const addItem = (item: Omit<BasketItem, 'id' | 'quantity'>) => {
    const itemId = `${item.name}-${item.category}`;
    
    setBasket(prev => {
      const existingItemIndex = prev.items.findIndex(basketItem => basketItem.id === itemId);
      
      if (existingItemIndex >= 0) {
        // Item exists, increase quantity
        const updatedItems = [...prev.items];
        updatedItems[existingItemIndex].quantity += 1;
        
        return {
          ...prev,
          items: updatedItems
        };
      } else {
        // New item, add to basket
        const newItem: BasketItem = {
          ...item,
          id: itemId,
          quantity: 1
        };
        
        return {
          ...prev,
          items: [...prev.items, newItem]
        };
      }
    });
  };

  const removeItem = (itemId: string) => {
    setBasket(prev => ({
      ...prev,
      items: prev.items.filter(item => item.id !== itemId)
    }));
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(itemId);
      return;
    }

    setBasket(prev => ({
      ...prev,
      items: prev.items.map(item =>
        item.id === itemId ? { ...item, quantity } : item
      )
    }));
  };

  const clearBasket = () => {
    setBasket(prev => ({
      ...prev,
      items: []
    }));
  };

  const toggleBasket = () => {
    setBasket(prev => ({
      ...prev,
      isOpen: !prev.isOpen
    }));
  };

  const openBasket = () => {
    setBasket(prev => ({
      ...prev,
      isOpen: true
    }));
  };

  const closeBasket = () => {
    setBasket(prev => ({
      ...prev,
      isOpen: false
    }));
  };

  return {
    basket,
    addItem,
    removeItem,
    updateQuantity,
    clearBasket,
    toggleBasket,
    openBasket,
    closeBasket
  };
};