import React from 'react';
import MenuSection from './MenuSection';

interface MenuProps {
  onAddToBasket: (item: Omit<import('../types/basket').BasketItem, 'id' | 'quantity'>) => void;
}

const Menu: React.FC<MenuProps> = ({ onAddToBasket }) => {
  return <MenuSection onAddToBasket={onAddToBasket} />;
};

export default Menu;