export interface MenuItem {
  name: string;
  description?: string;
  price: number;
  isSpicy?: boolean;
  isVegetarian?: boolean;
  isVegan?: boolean;
  isPopular?: boolean;
  isSundayOnly?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  description?: string;
  items: MenuItem[];
}