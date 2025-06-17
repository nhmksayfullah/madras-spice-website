export interface BiryaniProtein {
  id: string;
  name: string;
  price: number;
  isVegetarian?: boolean;
  isVegan?: boolean;
  isPopular?: boolean;
}

export const biryaniProteins: BiryaniProtein[] = [
  {
    id: 'chicken',
    name: 'Chicken',
    price: 7.95,
    isPopular: true
  },
  {
    id: 'lamb',
    name: 'Lamb',
    price: 8.50,
    isPopular: true
  },
  {
    id: 'chicken-tikka',
    name: 'Chicken Tikka',
    price: 8.50
  },
  {
    id: 'lamb-tikka',
    name: 'Lamb Tikka',
    price: 8.95
  },
  {
    id: 'king-prawn',
    name: 'King Prawn',
    price: 10.95
  },
  {
    id: 'prawn',
    name: 'Prawn',
    price: 7.95
  },
  {
    id: 'mix-vegetable',
    name: 'Mix Vegetable',
    price: 6.95,
    isVegetarian: true,
    isVegan: true,
    isPopular: true
  },
  {
    id: 'mix-biryani',
    name: 'Mix Biryani (chicken, lamb, prawn)',
    price: 8.95,
    isPopular: true
  }
];

export interface BiryaniDish {
  protein: BiryaniProtein;
  name: string;
  price: number;
  description: string;
  isVegetarian?: boolean;
  isVegan?: boolean;
  isPopular?: boolean;
}

export const createBiryaniDish = (protein: BiryaniProtein): BiryaniDish => {
  return {
    protein,
    name: `${protein.name} Biryani`,
    price: protein.price,
    description: 'A stir fry basmati rice with blend of medium spices garnished with a light omelette & served with a medium curry sauce.',
    isVegetarian: protein.isVegetarian,
    isVegan: protein.isVegan,
    isPopular: protein.isPopular
  };
};