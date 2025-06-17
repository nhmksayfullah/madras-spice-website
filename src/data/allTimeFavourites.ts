export interface FavouriteSauce {
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

export const favouriteSauces: FavouriteSauce[] = [
  {
    id: 'masaala',
    name: 'Masaala',
    description: 'Sweet & mild dish with coconut, mix almonds and a special masaala sauces',
    spiceLevel: 'Mild',
    isPopular: true
  },
  {
    id: 'pasanda',
    name: 'Pasanda',
    description: 'Mild dish using coconut, mix almonds, sugar & a touch of cream & yogurt',
    spiceLevel: 'Mild',
    isPopular: true
  },
  {
    id: 'makani',
    name: 'Makani',
    description: 'A tangy but mild dish containing tomatoes, coconut, mix almonds, sugar & producing a nice creamy sauce',
    spiceLevel: 'Mild',
    isPopular: true
  },
  {
    id: 'balti',
    name: 'Balti',
    description: 'Made from a special balti sauce prepared from the grinding some of Indian most powerful spices to produce a mouth watering dish',
    spiceLevel: 'Medium'
  },
  {
    id: 'karahi',
    name: 'Karahi',
    description: 'A blend of spices fused with sautéed onions, peppers & herbs, cooked together in a traditional karahi dish',
    spiceLevel: 'Medium'
  },
  {
    id: 'jalfrezi',
    name: 'Jalfrezi',
    description: 'A fairly hot dish combing spices with green chillies, peppers & diced onions producing a thick & spicy sauce',
    spiceLevel: 'Medium to Hot'
  },
  {
    id: 'achari',
    name: 'Achari',
    description: 'Exotic dish from Bengal, cooked with fresh spices & coriander with homemade pickles to give that tangy flavour',
    spiceLevel: 'Medium'
  },
  {
    id: 'saag',
    name: 'Saag',
    description: 'Cooked with fresh spinach as bhuna style dish with an exotic spices',
    spiceLevel: 'Medium'
  }
];

export const favouriteProteins: Protein[] = [
  {
    id: 'chicken',
    name: 'Chicken',
    basePrice: 7.95,
    isPopular: true
  },
  {
    id: 'prawn',
    name: 'Prawn',
    basePrice: 7.50
  },
  {
    id: 'lamb',
    name: 'Lamb',
    basePrice: 8.50,
    isPopular: true
  },
  {
    id: 'keema',
    name: 'Keema',
    basePrice: 8.50
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
    id: 'mix-vegetables',
    name: 'Mix Vegetables',
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

export interface AllTimeFavouriteDish {
  protein: Protein;
  sauce: FavouriteSauce;
  name: string;
  price: number;
  description: string;
  spiceLevel: string;
  isVegetarian?: boolean;
  isVegan?: boolean;
  isPopular?: boolean;
}

export const createAllTimeFavouriteDish = (protein: Protein, sauce: FavouriteSauce): AllTimeFavouriteDish => {
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