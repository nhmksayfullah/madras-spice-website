export interface BasketItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  category: string;
  isSpicy?: boolean;
  isVegetarian?: boolean;
  isVegan?: boolean;
  isPopular?: boolean;
}

export interface BasketState {
  items: BasketItem[];
  isOpen: boolean;
  total: number;
  itemCount: number;
}