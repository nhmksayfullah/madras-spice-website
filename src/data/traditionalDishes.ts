export interface CurrySauce {
  id: string;
  name: string;
  description: string;
  spiceLevel: 'Mild' | 'Medium' | 'Medium to Hot' | 'Hot' | 'Very Hot';
  isPopular?: boolean;
}

export interface Protein {
  id: string;
  name: string;
  basePrice: number;
  isVegetarian?: boolean;
  isVegan?: boolean;
  isPopular?: boolean;
}

export const currySauces: CurrySauce[] = [
  {
    id: 'curry',
    name: 'Curry',
    description: 'Cooked with medium spices',
    spiceLevel: 'Medium',
    isPopular: true
  },
  {
    id: 'bhuna',
    name: 'Bhuna',
    description: 'Dry spiced dishes with an exotic blend of spices',
    spiceLevel: 'Medium',
    isPopular: true
  },
  {
    id: 'korma',
    name: 'Korma',
    description: 'Mild and creamy dish, using coconut, mild almonds, sugar & cream',
    spiceLevel: 'Mild'
  },
  {
    id: 'dupiaza',
    name: 'Dupiaza',
    description: 'Cooked in medium thick spicy sauce & garnished with diced onions',
    spiceLevel: 'Medium'
  },
  {
    id: 'rogan-josh',
    name: 'Rogan Josh',
    description: 'Cooked with roasted green peppers, red peppers, tomatoes & coriander to create a medium rich thick spicy dish',
    spiceLevel: 'Medium'
  },
  {
    id: 'dhansak',
    name: 'Dhansak',
    description: 'Cooked in lentils & exotic sweet and sour with pineapple fruit taste',
    spiceLevel: 'Medium'
  },
  {
    id: 'samber',
    name: 'Samber',
    description: 'Hot & sour dish containing lentils and lemon juice to produce a sharp but flavoured dish',
    spiceLevel: 'Medium to Hot'
  },
  {
    id: 'madras',
    name: 'Madras',
    description: 'Hot and tangy sauce, fairly thick consistency',
    spiceLevel: 'Medium to Hot',
    isPopular: true
  },
  {
    id: 'patia',
    name: 'Patia',
    description: 'Sweet, hot and sour dish, cooked with herbs and spices, producing a unique taste that brings out tingling experience',
    spiceLevel: 'Medium to Hot'
  },
  {
    id: 'vindaloo',
    name: 'Vindaloo',
    description: 'Hot and spicy dish using a great of spices and chillies',
    spiceLevel: 'Hot'
  },
  {
    id: 'phall',
    name: 'Phall',
    description: 'An extremely hot dish with the use of fresh hot chillies',
    spiceLevel: 'Very Hot'
  }
];

export const proteins: Protein[] = [
  {
    id: 'chicken',
    name: 'Chicken',
    basePrice: 7.50,
    isPopular: true
  },
  {
    id: 'lamb',
    name: 'Lamb',
    basePrice: 7.50,
    isPopular: true
  },
  {
    id: 'chicken-tikka',
    name: 'Chicken Tikka',
    basePrice: 7.95
  },
  {
    id: 'lamb-tikka',
    name: 'Lamb Tikka',
    basePrice: 8.50
  },
  {
    id: 'king-prawn',
    name: 'King Prawn',
    basePrice: 8.95
  },
  {
    id: 'special-mix',
    name: 'Special Mix (Chicken, Lamb, Prawn)',
    basePrice: 8.50
  },
  {
    id: 'mix-vegetable',
    name: 'Mix Vegetable',
    basePrice: 6.95,
    isVegetarian: true,
    isVegan: true
  },
  {
    id: 'fish',
    name: 'Fish',
    basePrice: 7.50
  },
  {
    id: 'paneer',
    name: 'Paneer',
    basePrice: 6.95,
    isVegetarian: true
  },
  {
    id: 'duck',
    name: 'Duck',
    basePrice: 8.95
  }
];

export interface TraditionalDish {
  protein: Protein;
  sauce: CurrySauce;
  name: string;
  price: number;
  description: string;
  spiceLevel: string;
  isVegetarian?: boolean;
  isVegan?: boolean;
  isPopular?: boolean;
}

export const createTraditionalDish = (protein: Protein, sauce: CurrySauce): TraditionalDish => {
  return {
    protein,
    sauce,
    name: `${protein.name} ${sauce.name}`,
    price: protein.basePrice,
    description: `${protein.name} ${sauce.description.toLowerCase()}`,
    spiceLevel: sauce.spiceLevel,
    isVegetarian: protein.isVegetarian,
    isVegan: protein.isVegan,
    isPopular: protein.isPopular && sauce.isPopular
  };
};