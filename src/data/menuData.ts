import { MenuCategory } from '../types/menu';

export const menuData: MenuCategory[] = [
  // 1. Condiments
  {
    id: 'condiments',
    name: 'Condiments',
    description: 'Traditional accompaniments to enhance your meal',
    items: [
      {
        name: 'Plain Papadoms',
        price: 0.50,
        isVegetarian: true,
        isVegan: true
      },
      {
        name: 'Spicy Papadoms',
        price: 0.70,
        isVegetarian: true,
        isVegan: true,
        isSpicy: true
      },
      {
        name: 'Chutney Tray',
        description: 'Selection of traditional chutneys including mint, tamarind, and mango',
        price: 2.10,
        isVegetarian: true,
        isVegan: true
      },
      {
        name: 'Onion/Mango/Mint/Red',
        description: 'Fresh accompaniments served with every meal',
        price: 0.50,
        isVegetarian: true,
        isVegan: true
      },
      {
        name: 'Lime Pickle',
        description: 'Traditional tangy lime pickle',
        price: 0.60,
        isVegetarian: true,
        isVegan: true,
        isSpicy: true
      }
    ]
  },
  // 2. Starters
  {
    id: 'starters',
    name: 'Starters',
    description: 'Delicious appetizers to begin your authentic Indian dining experience',
    items: [
      {
        name: 'Chicken Tikka',
        description: 'Tender pieces of chicken marinated in yogurt and spices, grilled in the tandoor',
        price: 3.50,
        isPopular: true,
        isSpicy: true
      },
      {
        name: 'Tandoori Chicken',
        description: 'Classic tandoori chicken marinated in traditional spices and yogurt',
        price: 3.50,
        isPopular: true,
        isSpicy: true
      },
      {
        name: 'Lamb Tikka',
        description: 'Succulent lamb pieces marinated and grilled to perfection',
        price: 3.95,
        isSpicy: true
      },
      {
        name: 'Lamb Chops',
        description: 'Tender lamb chops marinated in aromatic spices and grilled',
        price: 4.95,
        isSpicy: true
      },
      {
        name: 'Garlic Chicken Tikka',
        description: 'Chicken tikka with a delicious garlic twist',
        price: 3.95,
        isSpicy: true
      },
      {
        name: 'Chicken Pakora',
        description: 'Crispy chicken pieces in spiced gram flour batter',
        price: 2.95,
        isVegetarian: false
      },
      {
        name: 'Chicken Chat',
        description: 'Spicy chicken pieces mixed with onions, peppers and chat masala',
        price: 3.50,
        isSpicy: true
      },
      {
        name: 'Cheesy Chicken',
        description: 'Chicken tikka topped with melted cheese',
        price: 3.50,
        isPopular: true
      },
      {
        name: 'Sweet Chilli Chicken',
        description: 'Chicken pieces in a sweet and spicy chilli sauce',
        price: 3.95,
        isSpicy: true
      },
      {
        name: 'Shashlik Tikka Chicken',
        description: 'Chicken tikka with grilled peppers and onions',
        price: 4.50,
        isSpicy: true
      },
      {
        name: 'Shashlik Tikka Lamb',
        description: 'Lamb tikka with grilled peppers and onions',
        price: 4.95,
        isSpicy: true
      },
      {
        name: 'Mix Kebab',
        description: 'A selection of our finest kebabs - chicken tikka, lamb tikka, and sheek kebab',
        price: 4.95,
        isPopular: true,
        isSpicy: true
      },
      {
        name: 'Sheek Kebab',
        description: 'Spiced minced lamb grilled on skewers',
        price: 3.50,
        isSpicy: true
      },
      {
        name: 'Shami Kebab',
        description: 'Traditional spiced lamb patties, shallow fried',
        price: 3.50,
        isSpicy: true
      },
      {
        name: 'Meat Samosa',
        description: 'Crispy pastry filled with spiced minced meat',
        price: 2.95
      },
      {
        name: 'Rashmi Kebab',
        description: 'Minced lamb wrapped in a delicate egg net',
        price: 3.50,
        isSpicy: true
      }
    ]
  },
  // 3. Vegetarian Starters
  {
    id: 'vegetarian-starters',
    name: 'Vegetarian Starters',
    description: 'Delicious plant-based appetizers bursting with authentic Indian flavors',
    items: [
      {
        name: 'Onion Bhoji',
        description: 'Crispy onion fritters made with gram flour and spices',
        price: 2.95,
        isVegetarian: true,
        isVegan: true,
        isPopular: true
      },
      {
        name: 'Veg Samosa',
        description: 'Crispy pastry triangles filled with spiced potatoes and peas',
        price: 2.95,
        isVegetarian: true,
        isVegan: true,
        isPopular: true
      },
      {
        name: 'Veg Pakora',
        description: 'Mixed vegetable fritters in spiced gram flour batter',
        price: 2.95,
        isVegetarian: true,
        isVegan: true
      },
      {
        name: 'Garlic Mushroom',
        description: 'Fresh mushrooms cooked with garlic and aromatic spices',
        price: 2.95,
        isVegetarian: true,
        isVegan: true
      },
      {
        name: 'Mulligatawny Soup',
        description: 'Traditional lentil soup with vegetables and mild spices',
        price: 2.95,
        isVegetarian: true,
        isVegan: true
      },
      {
        name: 'Paneer Tikka',
        description: 'Marinated cottage cheese cubes grilled with peppers and onions',
        price: 3.50,
        isVegetarian: true,
        isSpicy: true,
        isPopular: true
      },
      {
        name: 'Aloo Chat',
        description: 'Spiced potato cubes mixed with tangy chat masala and chutneys',
        price: 2.95,
        isVegetarian: true,
        isVegan: true,
        isSpicy: true
      },
      {
        name: 'Veg Chat',
        description: 'Mixed vegetables with chat masala, onions, and fresh coriander',
        price: 2.95,
        isVegetarian: true,
        isVegan: true,
        isSpicy: true
      },
      {
        name: 'Cheesy Mushroom',
        description: 'Fresh mushrooms topped with melted cheese and herbs',
        price: 3.50,
        isVegetarian: true,
        isPopular: true
      }
    ]
  },
  // 4. Seafood Starters
  {
    id: 'seafood-starters',
    name: 'Seafood Starters',
    description: 'Fresh seafood appetizers prepared with authentic Indian spices and cooking techniques',
    items: [
      {
        name: 'Fish Tikka',
        description: 'Fresh fish marinated in yogurt and spices, grilled in the tandoor',
        price: 3.95,
        isSpicy: true
      },
      {
        name: 'Fish Shashlik',
        description: 'Fish tikka grilled with peppers and onions on skewers',
        price: 4.50,
        isSpicy: true
      },
      {
        name: 'Tandoori King Prawn',
        description: 'Large king prawns marinated in tandoori spices and grilled to perfection',
        price: 4.95,
        isSpicy: true,
        isPopular: true
      },
      {
        name: 'King Prawn Puri',
        description: 'Spiced king prawns served on crispy puri bread',
        price: 4.50,
        isSpicy: true
      },
      {
        name: 'Prawn Puri',
        description: 'Traditional prawns cooked with spices and served on puri bread',
        price: 3.50,
        isSpicy: true
      },
      {
        name: 'King Prawn Butterfly',
        description: 'Butterflied king prawns coated in spices and deep fried',
        price: 4.50,
        isSpicy: true
      },
      {
        name: 'Salmon Tikka',
        description: 'Fresh salmon marinated in traditional spices and grilled in the tandoor',
        price: 4.95,
        isSpicy: true,
        isPopular: true
      }
    ]
  },
  // 5. Tandoori
  {
    id: 'tandoori',
    name: 'Tandoori - Sizzler Specialities',
    description: 'All tandoori dishes are served with medium curry sauce and fresh salad. Tandoori is a clay oven, it makes high quality of barbecued cooking marinating with patak paste, spices, herbal yogurt to produce a most wonderful unique taste. Extra sauce £1.50',
    items: [
      {
        name: 'Chicken Tikka',
        description: 'Tender chicken pieces marinated in yogurt and spices, grilled in the tandoor',
        price: 7.95,
        isPopular: true,
        isSpicy: true
      },
      {
        name: 'Tandoori Chicken',
        description: 'Classic half chicken marinated in traditional tandoori spices',
        price: 7.95,
        isPopular: true,
        isSpicy: true
      },
      {
        name: 'Lamb Tikka',
        description: 'Succulent lamb pieces marinated and grilled to perfection in the clay oven',
        price: 8.95,
        isSpicy: true
      },
      {
        name: 'Garlic Chicken Tikka',
        description: 'Chicken tikka infused with aromatic garlic and traditional spices',
        price: 8.95,
        isSpicy: true
      },
      {
        name: 'Tandoori Lamb Chops',
        description: 'Premium lamb chops marinated in tandoori spices and grilled',
        price: 10.95,
        isSpicy: true,
        isPopular: true
      },
      {
        name: 'Tandoori Mixed Grill',
        description: 'A selection of our finest tandoori meats - chicken tikka, lamb tikka, tandoori chicken, and sheek kebab',
        price: 10.95,
        isPopular: true,
        isSpicy: true
      },
      {
        name: 'Paneer Tikka',
        description: 'Marinated cottage cheese cubes grilled with peppers and onions',
        price: 8.95,
        isVegetarian: true,
        isSpicy: true
      },
      {
        name: 'Chicken Tikka Shashlik',
        description: 'Chicken tikka grilled with peppers, onions, and tomatoes on skewers',
        price: 8.50,
        isSpicy: true
      },
      {
        name: 'Lamb Tikka Shashlik',
        description: 'Lamb tikka grilled with peppers, onions, and tomatoes on skewers',
        price: 8.95,
        isSpicy: true
      },
      {
        name: 'Tandoori Fish Tikka',
        description: 'Fresh fish marinated in tandoori spices and grilled in the clay oven',
        price: 8.95,
        isSpicy: true
      },
      {
        name: 'Tandoori King Prawn Shashlik',
        description: 'Large king prawns grilled with peppers and onions on skewers',
        price: 11.95,
        isSpicy: true,
        isPopular: true
      },
      {
        name: 'Tandoori King Prawn',
        description: 'Large king prawns marinated in tandoori spices and grilled to perfection',
        price: 10.95,
        isSpicy: true,
        isPopular: true
      },
      {
        name: 'Salmon Tikka',
        description: 'Fresh salmon marinated in traditional spices and grilled in the tandoor',
        price: 10.95,
        isSpicy: true,
        isPopular: true
      }
    ]
  },
  // 6. Premium Platters (Mix Meat Platter and Vegetable Mix Platter)
  {
    id: 'premium-platters',
    name: 'Premium Platters for Two',
    description: 'Perfect for sharing! Our signature combination platters featuring the best of our menu, specially curated for two people to enjoy together.',
    items: [
      {
        name: 'Mix Meat Platter for Two Person',
        description: 'The ultimate meat lover\'s experience! A generous combination of our finest grilled specialties perfect for sharing.',
        price: 9.95,
        isPopular: true,
        isSpicy: true
      },
      {
        name: 'Vegetable Mix Platter for Two Person',
        description: 'A delightful vegetarian feast featuring our most popular plant-based starters, perfect for sharing.',
        price: 8.95,
        isVegetarian: true,
        isPopular: true
      }
    ]
  },
  // 7. Signature Dishes
  {
    id: 'signature-dishes',
    name: 'Signature Dishes',
    description: 'Our chef\'s masterpieces - premium main courses that showcase the finest traditions of Indian cuisine, each dish crafted with exceptional care and authentic flavors.',
    items: [
      {
        name: 'Madras Spice Special Tawa',
        description: 'An exotic collection of tandoori grilled dishes consist of lamb chops, chicken tikka, lamb tikka, king prawns & sheesh cooked with olive oil, mustard, coriander green peppers, red onions & egg fried.',
        price: 11.95,
        isPopular: true,
        isSpicy: true
      },
      {
        name: 'Lamb Chops Karahi',
        description: 'Bangladeshi style succulent pieces cooked with fresh red, green peppers garnished with coriander, cucumber, herbs & spices.',
        price: 11.95,
        isSpicy: true
      },
      {
        name: 'Honey Duck',
        description: 'Succulent roast grilled breast cooked with homemade honey, stir fried, red & green peppers, onion & aromatic duck, herbs & spices.',
        price: 10.95,
        isPopular: true
      },
      {
        name: 'Balti Exotica',
        description: 'Cooked with tandoori chicken, lamb tikka, chicken tikka & king prawn, medium spiced balti sauce.',
        price: 11.95,
        isSpicy: true
      },
      {
        name: 'Hyderabadi Ghost',
        description: 'Lamb cooked in very special sauce with yoghurt & garnish.',
        price: 9.95
      },
      {
        name: 'Garlic Chilli (Chicken or Lamb)',
        description: 'Pieces of your choice in garlic and chilli sauce with coriander leaves and chilli pepper coffee.',
        price: 9.95,
        isSpicy: true
      },
      {
        name: 'Sabzi Bahar',
        description: 'Cooked with stir fry, prawns, mushroom, potatoes & aubergine in thick medium sauce.',
        price: 7.95
      },
      {
        name: 'Shatkora (Chicken or Lamb)',
        description: 'Cooked with exotic selection of spices & aubergine in tangy sauce. Presented in a special way for easy eating & enjoyment.',
        price: 8.95,
        isSpicy: true
      },
      {
        name: 'Salmon Naga',
        description: 'Tender grilled pieces of salmon cooked with chef\'s special homemade sauce to create medium spiced special dish.',
        price: 11.95,
        isPopular: true
      },
      {
        name: 'Balti Fried Cham Cham',
        description: 'Fried chicken cooked in medium, with red & green pepper & tomatoes.',
        price: 9.95,
        isSpicy: true
      },
      {
        name: 'Shashlik Karahi',
        description: 'Tender diced chicken tikka pieces cooked with homemade tomatoes, onions & capsicum. Served in thick spicy sauce, chef special spices & herbs.',
        price: 10.95,
        isSpicy: true,
        isPopular: true
      },
      {
        name: 'Jhinga Bhuna',
        description: 'Large grilled king prawn cooked with red & green pepper, onions & capsicum. Served in thick spicy sauce, chef special spices & herbs.',
        price: 11.95,
        isSpicy: true
      },
      {
        name: 'Shahi Mix',
        description: 'Strip chicken tikka & minced lamb cooked with ginger, garlic & thick blend of medium spices & herbs topped with boiled egg.',
        price: 9.95,
        isSpicy: true
      },
      {
        name: 'Garlic Manchurian',
        description: 'Chicken, Lamb, Veg) when garlic, onions & peppers slowly cooked producing a full garlic flavoured dish.',
        price: 9.95,
        isSpicy: true
      },
      {
        name: 'Chilli Masala',
        description: 'Succulent lamb or veg) hot & sour dish with touch of sweetness, green chillies with onions, peppers cooked together for special masala sauce.',
        price: 8.95,
        isSpicy: true
      },
      {
        name: 'Rezalla',
        description: 'Chicken or Lamb) cooked in a medium spicy sauce with capsicum, onion & coriander.',
        price: 8.95,
        isSpicy: true
      }
    ]
  },
  // 8. Traditional Dishes (handled by builder component)
  // 9. All Time Favourites (handled by builder component)
  // 10. Biryani Dishes (handled by builder component)
  // 11. Vegetable Side Dishes
  {
    id: 'vegetable-side-dishes',
    name: 'Vegetable Side Dishes',
    description: 'Authentic vegetarian side dishes to complement your meal. Any side dish can be ordered as a main course for £5.90.',
    items: [
      {
        name: 'Saag Aloo',
        description: 'Spinach and potatoes cooked with traditional spices',
        price: 2.95,
        isVegetarian: true,
        isVegan: true,
        isPopular: true
      },
      {
        name: 'Saag Bhaji',
        description: 'Fresh spinach cooked with aromatic spices and herbs',
        price: 2.95,
        isVegetarian: true,
        isVegan: true
      },
      {
        name: 'Bombay Aloo',
        description: 'Spiced potatoes cooked Bombay style with turmeric and cumin',
        price: 2.95,
        isVegetarian: true,
        isVegan: true,
        isPopular: true
      },
      {
        name: 'Aloo Gobi',
        description: 'Cauliflower and potatoes cooked with traditional spices',
        price: 2.95,
        isVegetarian: true,
        isVegan: true
      },
      {
        name: 'Mushroom Bhaji',
        description: 'Fresh mushrooms cooked with onions and aromatic spices',
        price: 2.95,
        isVegetarian: true,
        isVegan: true
      },
      {
        name: 'Tarka Daal',
        description: 'Yellow lentils tempered with cumin, garlic, and fresh herbs',
        price: 2.95,
        isVegetarian: true,
        isVegan: true,
        isPopular: true
      },
      {
        name: 'Bhindi Bhaji',
        description: 'Fresh okra cooked with onions and traditional spices',
        price: 2.95,
        isVegetarian: true,
        isVegan: true
      },
      {
        name: 'Brinjal Bhaji',
        description: 'Aubergine cooked with aromatic spices and herbs',
        price: 2.95,
        isVegetarian: true,
        isVegan: true
      },
      {
        name: 'Cauliflower Bhaji',
        description: 'Fresh cauliflower cooked with traditional spices',
        price: 2.95,
        isVegetarian: true,
        isVegan: true
      },
      {
        name: 'Mix Vegetable',
        description: 'Seasonal mixed vegetables cooked with aromatic spices',
        price: 2.95,
        isVegetarian: true,
        isVegan: true
      },
      {
        name: 'Saag Paneer',
        description: 'Fresh spinach cooked with cottage cheese in a creamy sauce',
        price: 3.95,
        isVegetarian: true,
        isPopular: true
      },
      {
        name: 'Mutter Paneer',
        description: 'Green peas and cottage cheese in a rich tomato-based sauce',
        price: 3.95,
        isVegetarian: true
      },
      {
        name: 'Chana Massala',
        description: 'Chickpeas cooked in a spiced tomato and onion sauce',
        price: 3.50,
        isVegetarian: true,
        isVegan: true,
        isPopular: true
      },
      {
        name: 'Chana Daal',
        description: 'Split chickpeas cooked with aromatic spices and herbs',
        price: 3.50,
        isVegetarian: true,
        isVegan: true
      }
    ]
  },
  // 12. Rice Dishes
  {
    id: 'rice-dishes',
    name: 'Rice Dishes',
    description: 'Aromatic rice dishes to perfectly complement your meal, each prepared with authentic spices and traditional cooking methods.',
    items: [
      {
        name: 'Pilau Rice',
        description: 'Fragrant basmati rice cooked with aromatic spices',
        price: 2.50,
        isVegetarian: true,
        isVegan: true,
        isPopular: true
      },
      {
        name: 'Boiled Rice',
        description: 'Simple steamed basmati rice, perfect with any curry',
        price: 2.30,
        isVegetarian: true,
        isVegan: true
      },
      {
        name: 'Special Fried Rice',
        description: 'Basmati rice stir-fried with eggs and aromatic spices',
        price: 3.50,
        isPopular: true
      },
      {
        name: 'Mushroom Pilau Rice',
        description: 'Fragrant pilau rice cooked with fresh mushrooms and spices',
        price: 2.95,
        isVegetarian: true,
        isVegan: true
      },
      {
        name: 'Egg Pilau Rice',
        description: 'Aromatic pilau rice with scrambled eggs and mild spices',
        price: 2.95,
        isVegetarian: true
      },
      {
        name: 'Lemon Rice',
        description: 'Fragrant rice infused with fresh lemon and curry leaves',
        price: 2.95,
        isVegetarian: true,
        isVegan: true
      },
      {
        name: 'Keema Pilau Rice',
        description: 'Aromatic pilau rice cooked with spiced minced lamb',
        price: 3.50,
        isPopular: true
      },
      {
        name: 'Vegetable Pilau Rice',
        description: 'Fragrant pilau rice with mixed seasonal vegetables',
        price: 2.95,
        isVegetarian: true,
        isVegan: true,
        isPopular: true
      },
      {
        name: 'Onion Fried Rice',
        description: 'Basmati rice stir-fried with caramelized onions and spices',
        price: 2.95,
        isVegetarian: true,
        isVegan: true
      },
      {
        name: 'Garlic Fried Rice',
        description: 'Aromatic rice stir-fried with fresh garlic and herbs',
        price: 2.95,
        isVegetarian: true,
        isVegan: true
      },
      {
        name: 'Peas Pilau Rice',
        description: 'Fragrant pilau rice cooked with green peas and mild spices',
        price: 2.95,
        isVegetarian: true,
        isVegan: true
      },
      {
        name: 'Aloo & Chilli Rice',
        description: 'Spiced rice with potatoes and green chillies for extra heat',
        price: 3.50,
        isVegetarian: true,
        isVegan: true,
        isSpicy: true
      },
      {
        name: 'Coconut Rice',
        description: 'Aromatic basmati rice cooked with coconut milk and curry leaves',
        price: 2.95,
        isVegetarian: true,
        isVegan: true
      }
    ]
  },
  // 13. Sundries & Naan Breads
  {
    id: 'sundries-naan-breads',
    name: 'Sundries & Naan Breads',
    description: 'Freshly baked naan breads and traditional Indian accompaniments to complete your authentic dining experience.',
    items: [
      {
        name: 'Plain Naan',
        description: 'Traditional soft and fluffy naan bread baked fresh in our tandoor',
        price: 2.30,
        isVegetarian: true,
        isPopular: true
      },
      {
        name: 'Garlic Naan',
        description: 'Naan bread topped with fresh garlic and herbs',
        price: 2.80,
        isVegetarian: true,
        isPopular: true
      },
      {
        name: 'Keema Naan',
        description: 'Naan bread stuffed with spiced minced lamb',
        price: 2.95,
        isPopular: true
      },
      {
        name: 'Peshwari Naan',
        description: 'Sweet naan filled with coconut, almonds, and sultanas',
        price: 2.80,
        isVegetarian: true,
        isPopular: true
      },
      {
        name: 'Cheese Naan',
        description: 'Naan bread stuffed with melted cheese',
        price: 2.80,
        isVegetarian: true
      },
      {
        name: 'Coriander Naan',
        description: 'Naan bread topped with fresh coriander and herbs',
        price: 2.80,
        isVegetarian: true
      },
      {
        name: 'Cheese & Onion Naan',
        description: 'Naan bread stuffed with cheese and caramelized onions',
        price: 3.50,
        isVegetarian: true
      },
      {
        name: 'Garlic & Coriander Naan',
        description: 'Naan bread topped with garlic and fresh coriander',
        price: 3.50,
        isVegetarian: true
      },
      {
        name: 'Chilli Naan',
        description: 'Spicy naan bread with green chillies and herbs',
        price: 2.80,
        isVegetarian: true,
        isSpicy: true
      },
      {
        name: 'Stuffed Paratha',
        description: 'Layered flatbread stuffed with spiced vegetables',
        price: 2.95,
        isVegetarian: true
      },
      {
        name: 'Paratha',
        description: 'Traditional layered flatbread cooked on the griddle',
        price: 2.80,
        isVegetarian: true
      },
      {
        name: 'Tandoori Roti',
        description: 'Whole wheat bread baked in the tandoor',
        price: 2.20,
        isVegetarian: true,
        isVegan: true
      },
            {
        name: 'Chapati',
        description: '',
        price: 1.95,
        isVegetarian: true,
        isVegan: true
      },
      {
        name: 'Puri',
        description: 'Deep-fried puffed bread, light and crispy',
        price: 1.20,
        isVegetarian: true,
        isVegan: true
      },
      {
        name: 'Chips',
        description: 'Golden crispy potato chips',
        price: 1.80,
        isVegetarian: true,
        isVegan: true
      },
      {
        name: 'Raita',
        description: 'Cooling yogurt-based side dish with cucumber or onion',
        price: 1.80,
        isVegetarian: true
      },
      {
        name: 'Indian Salad',
        description: 'Fresh mixed salad with cucumber, tomatoes, and onions',
        price: 1.95,
        isVegetarian: true,
        isVegan: true
      }
    ]
  },
  // 14. English Dishes
  {
    id: 'english-dishes',
    name: 'English Dishes',
    description: 'Traditional English comfort food served with chips, salad & green peas for a hearty and satisfying meal.',
    items: [
      {
        name: 'Chicken Omelette',
        description: 'Fluffy omelette filled with tender chicken pieces, served with chips, salad & green peas',
        price: 6.95,
        isPopular: true
      },
      {
        name: 'Prawn Omelette',
        description: 'Light and fluffy omelette with succulent prawns, served with chips, salad & green peas',
        price: 6.95
      },
      {
        name: 'Mushroom Omelette',
        description: 'Classic omelette with fresh mushrooms, served with chips, salad & green peas',
        price: 6.50,
        isVegetarian: true
      },
      {
        name: 'Chicken Nuggets',
        description: 'Golden crispy chicken nuggets served with chips, salad & green peas',
        price: 6.95,
        isPopular: true
      },
      {
        name: 'Fried Chicken',
        description: 'Traditional fried chicken pieces served with chips, salad & green peas',
        price: 6.95
      }
    ]
  },
  // 15. Sunday Night Special
  {
    id: 'sunday-special',
    name: 'Sunday Night Special',
    description: 'Our exclusive five-course meal available only on Sundays. A complete dining experience featuring the best of our menu.',
    items: [
      {
        name: 'Sunday Night Special Five Course Meal - Adult',
        description: 'Papadum & Chutneys • Choice of Any starters & Any Main Dishes from the menu (except King Prawns, Salmon, Duck & Lamb Chop) • Choice of Rice, Naan or Chips • Served with tea or coffee • Any extras £1.50',
        price: 12.95,
        isPopular: true,
        isSundayOnly: true
      },
      {
        name: 'Sunday Night Special Five Course Meal - Child',
        description: 'Papadum & Chutneys • Choice of Any starters & Any Main Dishes from the menu (except King Prawns, Salmon, Duck & Lamb Chop) • Choice of Rice, Naan or Chips • Served with tea or coffee • Any extras £1.50',
        price: 9.95,
        isPopular: true,
        isSundayOnly: true
      }
    ]
  },
  // 16. Set Meals (Curry Set Meal, Vegetable Set Meal, Tandoori Set Meal)
  {
    id: 'set-meals',
    name: 'Set Meals for Two',
    description: 'Complete dining experiences perfect for sharing! Our carefully curated set meals include everything you need for an authentic Indian feast - from starters to sides, all at exceptional value.',
    items: [
      {
        name: 'Curry Set Meal for Two Person',
        description: 'Complete curry experience for two people featuring our most popular dishes. Includes: Papadums & Chutney, Chicken Tikka & Meat Samosa (starters), Lamb Rogan Josh & Chicken Balti (mains), Bombay Potatoes, Pilau Rice & Naan Bread (sides)',
        price: 24.95,
        isPopular: true,
        isSpicy: true
      },
      {
        name: 'Vegetable Set Meal for Two Person',
        description: 'Delicious vegetarian feast for two people showcasing the best of our plant-based menu. Includes: Papadums & Chutney, Vegetable Samosa & Aloo Chaat (starters), Veg Rogan Josh & Veg Bhuna (mains), Bombay Potatoes, Pilau Rice & Naan Bread (sides)',
        price: 22.95,
        isVegetarian: true,
        isPopular: true
      },
      {
        name: 'Tandoori Set Meal for Two Person',
        description: 'Ultimate tandoori experience for two people featuring our finest grilled specialties. Includes: Papadum & Chutneys, Seekh Kebab & Chicken Tikka (starters), Lamb Tikka & Tandoori Chicken (mains), Curry Sauce, Pilau Rice & Naan Bread (sides)',
        price: 25.95,
        isPopular: true,
        isSpicy: true
      }
    ]
  }
];

// Platter details for the premium platters
export const platterDetails = {
  'Mix Meat Platter for Two Person': {
    items: [
      '2 Pcs Lamb Chops',
      '2 Pcs Chicken Tikka', 
      '2 Pcs Sheek Kebab',
      '2 Pcs Meat Samosa'
    ],
    serves: 2,
    type: 'meat'
  },
  'Vegetable Mix Platter for Two Person': {
    items: [
      '2 Pcs Onion Bhoji',
      '2 Pcs Vegetable Samosa',
      '2 Pcs Vegetable Pakora', 
      '2 Pcs Paneer Tikka'
    ],
    serves: 2,
    type: 'vegetarian'
  }
};

// Set meal details for the complete dining experiences
export const setMealDetails = {
  'Curry Set Meal for Two Person': {
    starters: [
      'Papadums & Chutney',
      'Chicken Tikka',
      'Meat Samosa'
    ],
    mains: [
      'Lamb Rogan Josh',
      'Chicken Balti'
    ],
    sides: [
      'Bombay Potatoes',
      'Pilau Rice',
      'Naan Bread'
    ],
    serves: 2,
    type: 'curry'
  },
  'Vegetable Set Meal for Two Person': {
    starters: [
      'Papadums & Chutney',
      'Vegetable Samosa',
      'Aloo Chaat'
    ],
    mains: [
      'Veg Rogan Josh',
      'Veg Bhuna'
    ],
    sides: [
      'Bombay Potatoes',
      'Pilau Rice',
      'Naan Bread'
    ],
    serves: 2,
    type: 'vegetarian'
  },
  'Tandoori Set Meal for Two Person': {
    starters: [
      'Papadum & Chutneys',
      'Seekh Kebab',
      'Chicken Tikka'
    ],
    mains: [
      'Lamb Tikka',
      'Tandoori Chicken'
    ],
    sides: [
      'Curry Sauce',
      'Pilau Rice',
      'Naan Bread'
    ],
    serves: 2,
    type: 'tandoori'
  }
};