export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategoryId;
  description: string;
  price: number; // Base price or fixed price in Rs
  sizes?: { name: string; price: number }[]; // For pizzas, pasta, fries, water
  spicy?: boolean;
  popular?: boolean;
  chefSpecial?: boolean;
  image?: string;
}

export type MenuCategoryId =
  | "all"
  | "shawarma"
  | "burger"
  | "starters"
  | "loaded-fries"
  | "sandwich"
  | "paratha-roll"
  | "platters"
  | "pasta"
  | "tortilla-wrap"
  | "special-pizza"
  | "regular-pizza"
  | "drinks";

export interface MenuCategory {
  id: MenuCategoryId;
  name: string;
  shortName: string;
  iconName: string;
  description: string;
}

export const MENU_CATEGORIES: MenuCategory[] = [
  { id: "all", name: "All Items", shortName: "All", iconName: "Flame", description: "Explore the full fast-food lineup of Shawarma Line Kasur." },
  { id: "shawarma", name: "Shawarma", shortName: "Shawarma", iconName: "Wrap", description: "Slow-roasted chicken, authentic Arabic garlic sauce & freshly baked pita." },
  { id: "burger", name: "Burgers", shortName: "Burgers", iconName: "Beef", description: "Crispy fried zinger fillets & juicy flame-grilled patties." },
  { id: "special-pizza", name: "Special Pizza", shortName: "Special Pizza", iconName: "Pizza", description: "Handcrafted gourmet stuffed crusts and secret house recipes." },
  { id: "regular-pizza", name: "Regular Pizza", shortName: "Pizza", iconName: "Sparkles", description: "Classic Italian-style stone baked crusts with 100% dairy mozzarella." },
  { id: "platters", name: "Grill Platters", shortName: "Platters", iconName: "UtensilsCrossed", description: "Feast platters served with signature sauces, spiced fries & warm pita." },
  { id: "loaded-fries", name: "Loaded Fries", shortName: "Fries", iconName: "Layers", description: "Crispy golden cut fries drowned in cheddar cheese and zinger bites." },
  { id: "starters", name: "Wings & Starters", shortName: "Starters", iconName: "Drumstick", description: "Crisp hot wings, honey chilli glazes and golden tenders." },
  { id: "sandwich", name: "Sandwiches", shortName: "Sandwich", iconName: "Sandwich", description: "Toasted triple-decker clubs and stuffed grilled sandwiches." },
  { id: "paratha-roll", name: "Paratha Rolls", shortName: "Rolls", iconName: "Scroll", description: "Flaky golden fried parathas wrapped around smoky charcoal chicken." },
  { id: "tortilla-wrap", name: "Tortilla Wraps", shortName: "Wraps", iconName: "CircleDot", description: "Soft toasted Mexican style tortillas packed with fiery grill chicken." },
  { id: "pasta", name: "Pasta & Lasagna", shortName: "Pasta", iconName: "Soup", description: "Rich creamy Alfredo sauce & baked layers of cheesy macaroni." },
  { id: "drinks", name: "Chilled Soft Drinks", shortName: "Drinks", iconName: "CupSoda", description: "Ice-cold sodas and pure mineral water to wash down your grill feast." },
];

export const MENU_ITEMS: MenuItem[] = [
  // 1. SHAWARMA
  {
    id: "sh-1",
    name: "Chicken Shawarma",
    category: "shawarma",
    description: "Classic rotisserie chicken, garlic tahini mayo & pickled greens in warm pita.",
    price: 300,
    popular: true,
  },
  {
    id: "sh-2",
    name: "Cheese Shawarma",
    category: "shawarma",
    description: "Tender shredded chicken topped with hot melted cheddar mozzarella blend.",
    price: 350,
    popular: true,
  },
  {
    id: "sh-3",
    name: "SL Shawarma (Special)",
    category: "shawarma",
    description: "Shawarma Line Signature loaded with double chicken, secret sauce, fries and cheese.",
    price: 400,
    popular: true,
    chefSpecial: true,
  },
  {
    id: "sh-4",
    name: "Zinger Shawarma",
    category: "shawarma",
    description: "Crispy fried golden zinger chicken pieces rolled with hot garlic sauce.",
    price: 350,
    spicy: true,
  },
  {
    id: "sh-5",
    name: "Zinger Cheese Shawarma",
    category: "shawarma",
    description: "Spicy zinger strips smothered in creamy liquid cheese and herbs.",
    price: 400,
    spicy: true,
    popular: true,
  },
  {
    id: "sh-6",
    name: "SL Zinger Shawarma",
    category: "shawarma",
    description: "Signature zinger fillet chunks, double melted cheese and fiery chilli dip.",
    price: 450,
    spicy: true,
    chefSpecial: true,
  },
  {
    id: "sh-7",
    name: "Grill Shawarma",
    category: "shawarma",
    description: "Smoky charcoal grilled chicken breast strips with roasted pepper garlic blend.",
    price: 400,
    popular: true,
  },

  // 2. BURGERS
  {
    id: "bg-1",
    name: "Zinger Burger",
    category: "burger",
    description: "Signature jumbo crispy chicken breast fillet, iceberg lettuce & spicy mayo.",
    price: 400,
    popular: true,
    spicy: true,
  },
  {
    id: "bg-2",
    name: "Chicken Patty Burger",
    category: "burger",
    description: "Seasoned golden chicken patty with crisp onions, lettuce and burger sauce.",
    price: 250,
  },
  {
    id: "bg-3",
    name: "Pizza Burger",
    category: "burger",
    description: "Loaded with melted mozzarella, marinara pizza sauce, pepperoni & grilled chicken.",
    price: 500,
    chefSpecial: true,
  },
  {
    id: "bg-4",
    name: "Mighty Burger",
    category: "burger",
    description: "Double zinger fillets, double cheese slices, jalapeños and smoked barbecue sauce.",
    price: 700,
    popular: true,
    spicy: true,
  },
  {
    id: "bg-5",
    name: "Tower Burger",
    category: "burger",
    description: "Double crispy zinger chicken, golden hash brown patty, cheese layer & special dip.",
    price: 700,
    popular: true,
  },
  {
    id: "bg-6",
    name: "Grill Burger",
    category: "burger",
    description: "Charcoal-seared chicken breast steak infused with peri-peri marinade.",
    price: 500,
    spicy: true,
    popular: true,
  },
  {
    id: "bg-7",
    name: "Egg Shami Burger",
    category: "burger",
    description: "Traditional aromatic daal-chicken shami patty topped with a fresh pan-fried egg.",
    price: 170,
  },

  // 3. STARTERS
  {
    id: "st-1",
    name: "Hot Wings (10 pcs)",
    category: "starters",
    description: "Crispy coated spicy chicken wings tossed in fiery red hot pepper seasonings.",
    price: 500,
    spicy: true,
    popular: true,
  },
  {
    id: "st-2",
    name: "Honey Chilli Wings (5 pcs)",
    category: "starters",
    description: "Golden fried wings glazed with rich sweet bee honey and roasted red chilli flakes.",
    price: 400,
    chefSpecial: true,
  },
  {
    id: "st-3",
    name: "Chicken Nuggets (10 pcs)",
    category: "starters",
    description: "Bite-sized minced chicken nuggets fried golden brown, served with dip.",
    price: 500,
  },
  {
    id: "st-4",
    name: "Crispy Fried Chicken (Per Pc)",
    category: "starters",
    description: "Fresh tender chicken marinated in house spices and fried to crunchy perfection.",
    price: 250,
    popular: true,
  },

  // 4. LOADED FRIES
  {
    id: "lf-1",
    name: "Loaded Fries",
    category: "loaded-fries",
    description: "Crisp potato fries layered with seasoned shredded chicken, secret sauce & jalapeños.",
    price: 500,
    popular: true,
  },
  {
    id: "lf-2",
    name: "Cheese Loaded Fries",
    category: "loaded-fries",
    description: "Drenched in warm bubbling cheddar sauce, mozzarella blend and herb seasoning.",
    price: 600,
    popular: true,
  },
  {
    id: "lf-3",
    name: "Zinger Loaded Fries",
    category: "loaded-fries",
    description: "Golden fries topped with chopped fiery crispy zinger strips and double cheese.",
    price: 600,
    spicy: true,
    chefSpecial: true,
  },
  {
    id: "lf-4",
    name: "Plain Fries",
    category: "loaded-fries",
    description: "Classic salted crispy golden French fries.",
    price: 150,
    sizes: [
      { name: "Small", price: 150 },
      { name: "Medium", price: 200 },
      { name: "Large", price: 300 },
    ],
  },

  // 5. SANDWICH
  {
    id: "sw-1",
    name: "Pizza Sandwich",
    category: "sandwich",
    description: "Oven-baked sandwich stuffed with pizza sauce, oregano, mozzarella and chicken.",
    price: 700,
    chefSpecial: true,
  },
  {
    id: "sw-2",
    name: "Club Sandwich",
    category: "sandwich",
    description: "Classic toasted 3-layer club with chicken, boiled egg, cheese and crisp lettuce.",
    price: 350,
  },
  {
    id: "sw-3",
    name: "SL Club Sandwich",
    category: "sandwich",
    description: "Shawarma Line premium club with extra grilled chicken, double cheese and fries.",
    price: 450,
    popular: true,
  },
  {
    id: "sw-4",
    name: "Zinger Sandwich",
    category: "sandwich",
    description: "Crispy zinger fillet slice tucked inside toasted bread with spicy chipotle.",
    price: 450,
    spicy: true,
  },
  {
    id: "sw-5",
    name: "SL Zinger Sandwich",
    category: "sandwich",
    description: "Special loaded zinger sandwich layered with molten cheese and honey mustard.",
    price: 500,
    spicy: true,
    popular: true,
  },
  {
    id: "sw-6",
    name: "Grill Sandwich",
    category: "sandwich",
    description: "Smoked char-grilled chicken slices with roasted capsicum and garlic spread.",
    price: 500,
  },
  {
    id: "sw-7",
    name: "SL Grill Sandwich",
    category: "sandwich",
    description: "Executive grilled sandwich packed with smoked chicken breast and double cheddar.",
    price: 600,
    chefSpecial: true,
  },
  {
    id: "sw-8",
    name: "Crunchy Sandwich",
    category: "sandwich",
    description: "Extra crunchy golden chicken crust with coleslaw and chef's spicy dressing.",
    price: 800,
    popular: true,
  },

  // 6. PARATHA ROLL
  {
    id: "pr-1",
    name: "Chicken Paratha Roll",
    category: "paratha-roll",
    description: "Flaky crispy fried paratha rolled with tender chicken boti and green mint chutney.",
    price: 330,
    popular: true,
  },
  {
    id: "pr-2",
    name: "Cheese Paratha Roll",
    category: "paratha-roll",
    description: "Hot stuffed chicken paratha roll with a generous melt of gooey cheese.",
    price: 380,
  },
  {
    id: "pr-3",
    name: "SL Chicken Paratha Roll",
    category: "paratha-roll",
    description: "Shawarma Line house roll with extra chicken, signature garlic dip and pickles.",
    price: 430,
    popular: true,
  },
  {
    id: "pr-4",
    name: "Twister Paratha Roll",
    category: "paratha-roll",
    description: "Crunchy zinger chicken strips wrapped in a crispy spiral paratha.",
    price: 400,
    spicy: true,
  },
  {
    id: "pr-5",
    name: "Twister Cheese Paratha Roll",
    category: "paratha-roll",
    description: "Twister zinger roll drizzled with molten cheddar cheese sauce.",
    price: 450,
    spicy: true,
    popular: true,
  },
  {
    id: "pr-6",
    name: "Grill Paratha Roll",
    category: "paratha-roll",
    description: "Smoky charcoal grilled chicken tikka cubes in a fresh golden paratha.",
    price: 450,
  },
  {
    id: "pr-7",
    name: "SL Special Grill Paratha Roll",
    category: "paratha-roll",
    description: "Smoked charcoal tikka boti, double cheese, spicy mayo & onions in a crisp paratha.",
    price: 550,
    chefSpecial: true,
    popular: true,
  },

  // 7. PLATTERS
  {
    id: "pl-1",
    name: "Chicken Platter",
    category: "platters",
    description: "Slow roasted chicken shawarma meat over spiced rice/bread, fries, garlic and tahini.",
    price: 650,
  },
  {
    id: "pl-2",
    name: "Chicken Cheese Platter",
    category: "platters",
    description: "Generous bed of carved chicken smothered in melted mozzarella and warm pita.",
    price: 750,
    popular: true,
  },
  {
    id: "pl-3",
    name: "SL Special Platter",
    category: "platters",
    description: "Shawarma Line flagship platter with seasoned chicken, fries, 2 pita breads & dips.",
    price: 850,
    popular: true,
    chefSpecial: true,
  },
  {
    id: "pl-4",
    name: "Zinger Platter",
    category: "platters",
    description: "Crispy cut zinger chicken fillets served alongside golden fries and coleslaw.",
    price: 700,
    spicy: true,
  },
  {
    id: "pl-5",
    name: "Grill Platter",
    category: "platters",
    description: "Charcoal flame-grilled aromatic chicken skewers, grilled veggies, pita and sauce.",
    price: 800,
    popular: true,
    chefSpecial: true,
  },
  {
    id: "pl-6",
    name: "SL Special Grill Platter",
    category: "platters",
    description: "Deluxe charcoal mixed grill with tikka boti, kebabs, special rice, pita & dips.",
    price: 900,
    popular: true,
    chefSpecial: true,
  },
  {
    id: "pl-7",
    name: "Roasted Platter",
    category: "platters",
    description: "5 Honey Chilli Wings + 4 Spin Rolls + Crispy Golden Seasoned Fries & dip sauces.",
    price: 1100,
    chefSpecial: true,
    popular: true,
  },

  // 8. PASTA (F-1 / F-2 sizes)
  {
    id: "ps-1",
    name: "Lazania Pasta",
    category: "pasta",
    description: "Rich baked meat sauce layered with cheese sheets and herbs.",
    price: 500,
    sizes: [
      { name: "F-1 (Single)", price: 500 },
      { name: "F-2 (Family)", price: 700 },
    ],
    popular: true,
  },
  {
    id: "ps-2",
    name: "Macroni Pasta",
    category: "pasta",
    description: "Savory elbow macaroni tossed with spiced minced chicken and veggies.",
    price: 400,
    sizes: [
      { name: "F-1 (Single)", price: 400 },
      { name: "F-2 (Family)", price: 600 },
    ],
  },
  {
    id: "ps-3",
    name: "Crunchy Pasta",
    category: "pasta",
    description: "Creamy macaroni baked with crispy golden chicken chunks and cheese crust.",
    price: 500,
    sizes: [
      { name: "F-1 (Single)", price: 500 },
      { name: "F-2 (Family)", price: 650 },
    ],
    popular: true,
  },
  {
    id: "ps-4",
    name: "Creamy Alfredo Pasta",
    category: "pasta",
    description: "Fettuccine or penne pasta in rich white garlic cream sauce with grilled chicken.",
    price: 500,
    sizes: [
      { name: "F-1 (Single)", price: 500 },
      { name: "F-2 (Family)", price: 700 },
    ],
    popular: true,
  },

  // 9. TORTILLA WRAPS
  {
    id: "tw-1",
    name: "Tortilla Wrap",
    category: "tortilla-wrap",
    description: "Toasted flour tortilla stuffed with spiced chicken, crisp lettuce & garlic dressing.",
    price: 500,
  },
  {
    id: "tw-2",
    name: "SL Tortilla Wrap",
    category: "tortilla-wrap",
    description: "Signature tortilla loaded with extra grilled meat, molten cheese & crunchy crisps.",
    price: 600,
    popular: true,
    chefSpecial: true,
  },
  {
    id: "tw-3",
    name: "Grilled Wrap",
    category: "tortilla-wrap",
    description: "Smoked charcoal grilled boti cubes with grilled onion rings in a toasted wrap.",
    price: 500,
  },
  {
    id: "tw-4",
    name: "SL Grilled Wrap",
    category: "tortilla-wrap",
    description: "Special charcoal grill wrap with melted mozzarella, jalapenos & chipotle mayo.",
    price: 600,
    spicy: true,
    popular: true,
  },

  // 10. SPECIAL PIZZA (S / M / L)
  {
    id: "sp-1",
    name: "Cheese Crust Pizza",
    category: "special-pizza",
    description: "Golden ring stuffed with pure mozzarella cheese, loaded with premium toppings.",
    price: 650,
    sizes: [
      { name: "Small", price: 650 },
      { name: "Medium", price: 1100 },
      { name: "Large", price: 1550 },
    ],
    popular: true,
    chefSpecial: true,
  },
  {
    id: "sp-2",
    name: "Shawarma Line Special Pizza",
    category: "special-pizza",
    description: "House special blend of grilled chicken, sausages, mushrooms, olives and special sauce.",
    price: 700,
    sizes: [
      { name: "Small", price: 700 },
      { name: "Medium", price: 1200 },
      { name: "Large", price: 1700 },
    ],
    popular: true,
    chefSpecial: true,
  },
  {
    id: "sp-3",
    name: "Behari Kabab Pizza",
    category: "special-pizza",
    description: "Tender spiced Bihari kabab chunks, red onion rings and coriander garnish.",
    price: 650,
    sizes: [
      { name: "Small", price: 650 },
      { name: "Medium", price: 1150 },
      { name: "Large", price: 1600 },
    ],
    spicy: true,
  },
  {
    id: "sp-4",
    name: "Crown Crust Pizza",
    category: "special-pizza",
    description: "Royal crown pockets filled with cream cheese and spicy chicken tikka chunks.",
    price: 1200,
    sizes: [
      { name: "Medium", price: 1200 },
      { name: "Large", price: 1700 },
    ],
    popular: true,
  },
  {
    id: "sp-5",
    name: "Kabab Crust Pizza",
    category: "special-pizza",
    description: "Crust outer rim stuffed with succulent seekh kababs and baked golden.",
    price: 1150,
    sizes: [
      { name: "Medium", price: 1150 },
      { name: "Large", price: 1650 },
    ],
    spicy: true,
  },
  {
    id: "sp-6",
    name: "Malai Boti Pizza",
    category: "special-pizza",
    description: "Mild, creamy melt-in-mouth chicken malai boti cubes with fresh cream drizzle.",
    price: 600,
    sizes: [
      { name: "Small", price: 600 },
      { name: "Medium", price: 1100 },
      { name: "Large", price: 1500 },
    ],
    popular: true,
  },
  {
    id: "sp-7",
    name: "Calzon Pizza",
    category: "special-pizza",
    description: "Folded Italian pizza pocket overflowing with mozzarella, chicken and herbs.",
    price: 650,
    sizes: [
      { name: "Small", price: 650 },
      { name: "Medium", price: 1150 },
      { name: "Large", price: 1500 },
    ],
  },
  {
    id: "sp-8",
    name: "Lazania Pizza",
    category: "special-pizza",
    description: "Rich lasagna Bolognese layered right over pizza crust and finished with cheese.",
    price: 700,
    sizes: [
      { name: "Small", price: 700 },
      { name: "Medium", price: 1250 },
      { name: "Large", price: 1800 },
    ],
  },
  {
    id: "sp-9",
    name: "Kababish Pizza",
    category: "special-pizza",
    description: "Smoky spicy seekh kabab pieces, green chilies, onions and garlic drizzle.",
    price: 600,
    sizes: [
      { name: "Small", price: 600 },
      { name: "Medium", price: 1150 },
      { name: "Large", price: 1600 },
    ],
    spicy: true,
  },

  // 11. REGULAR PIZZA (S: 500, M: 900, L: 1300)
  {
    id: "rp-1",
    name: "Chicken Tikka Pizza",
    category: "regular-pizza",
    description: "Traditional spicy tikka boti chunks with red onion and fresh bell peppers.",
    price: 500,
    sizes: [
      { name: "Small", price: 500 },
      { name: "Medium", price: 900 },
      { name: "Large", price: 1300 },
    ],
    popular: true,
    spicy: true,
  },
  {
    id: "rp-2",
    name: "Chicken Fajita Pizza",
    category: "regular-pizza",
    description: "Mexican style seasoned fajita chicken with onions, capsicum and herbs.",
    price: 500,
    sizes: [
      { name: "Small", price: 500 },
      { name: "Medium", price: 900 },
      { name: "Large", price: 1300 },
    ],
    popular: true,
  },
  {
    id: "rp-3",
    name: "Chicken Supreme Pizza",
    category: "regular-pizza",
    description: "Loaded combination of chicken tikka, fajita, black olives, onions and mushrooms.",
    price: 500,
    sizes: [
      { name: "Small", price: 500 },
      { name: "Medium", price: 900 },
      { name: "Large", price: 1300 },
    ],
    popular: true,
  },
  {
    id: "rp-4",
    name: "Cheese Lover Pizza",
    category: "regular-pizza",
    description: "Heavy double portion of rich 100% mozzarella cheese on savory pizza sauce.",
    price: 500,
    sizes: [
      { name: "Small", price: 500 },
      { name: "Medium", price: 900 },
      { name: "Large", price: 1300 },
    ],
  },
  {
    id: "rp-5",
    name: "Vegetable Lover Pizza",
    category: "regular-pizza",
    description: "Fresh bell peppers, red onions, mushrooms, sweet corn, black olives & herbs.",
    price: 500,
    sizes: [
      { name: "Small", price: 500 },
      { name: "Medium", price: 900 },
      { name: "Large", price: 1300 },
    ],
  },

  // 12. SOFT DRINKS
  {
    id: "dr-1",
    name: "Regular Soft Drink (350ml)",
    category: "drinks",
    description: "Chilled bottle/can: Pepsi, 7Up, Mirinda or Mountain Dew.",
    price: 80,
  },
  {
    id: "dr-2",
    name: "Half Litre Soft Drink (500ml)",
    category: "drinks",
    description: "Cold refreshing 500ml beverage.",
    price: 120,
  },
  {
    id: "dr-3",
    name: "1.5 Litre Jumbo Soft Drink",
    category: "drinks",
    description: "Family-size 1.5L chilled drink perfect for platters and pizza deals.",
    price: 220,
    popular: true,
  },
  {
    id: "dr-4",
    name: "Pure Mineral Water",
    category: "drinks",
    description: "Purified safe drinking water in small or large bottles.",
    price: 60,
    sizes: [
      { name: "Small Bottle", price: 60 },
      { name: "Large Bottle", price: 100 },
    ],
  },
];

export interface DealItem {
  id: string;
  name: string;
  itemsSummary: string;
  price: number;
  badge: string;
  popular?: boolean;
}

export const DEALS_DATA: DealItem[] = [
  {
    id: "deal-1",
    name: "Deal 1 — Grand Pizza Feast",
    itemsSummary: "2 Large Pizzas + 1.5L Chilled Drink",
    price: 2600,
    badge: "Family Saver",
    popular: true,
  },
  {
    id: "deal-2",
    name: "Deal 2 — Twin Medium Feast",
    itemsSummary: "2 Medium Pizzas + 1.5L Chilled Drink",
    price: 1900,
    badge: "Best Value",
    popular: true,
  },
  {
    id: "deal-3",
    name: "Deal 3 — Quad Small Party",
    itemsSummary: "4 Small Pizzas + 1.5L Chilled Drink",
    price: 2100,
    badge: "Friends Party",
  },
  {
    id: "deal-4",
    name: "Deal 4 — 5x Zinger Fiesta",
    itemsSummary: "5 Crispy Zinger Burgers + 1.5L Chilled Drink",
    price: 2000,
    badge: "Top Seller",
    popular: true,
  },
  {
    id: "deal-5",
    name: "Deal 5 — Triple Grill Treat",
    itemsSummary: "3 Flame Grill Burgers + 1.5L Chilled Drink",
    price: 1500,
    badge: "BBQ Special",
  },
  {
    id: "deal-6",
    name: "Deal 6 — Mega Mixed Combo",
    itemsSummary: "2 Chicken Shawarma + 2 Zinger Burgers + Crispy Fries + 1.5L Drink",
    price: 1700,
    badge: "All-Rounder",
    popular: true,
  },
];

export interface SignaturePick {
  id: string;
  name: string;
  subtitle: string;
  priceText: string;
  price: number;
  image: string;
  tag: string;
  description: string;
}

export const SIGNATURE_PICKS: SignaturePick[] = [
  {
    id: "sig-1",
    name: "Charcoal Grill Platter",
    subtitle: "Smoky Charcoal Perfection",
    priceText: "Rs 800",
    price: 800,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    tag: "Chef's Pride",
    description: "Charcoal flame-grilled aromatic chicken skewers, grilled veggies, freshly baked pita and garlic dip.",
  },
  {
    id: "sig-2",
    name: "SL Special Grill Platter",
    subtitle: "The Ultimate Grand Feast",
    priceText: "Rs 900",
    price: 900,
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    tag: "Best Seller",
    description: "Deluxe charcoal mixed grill with tikka boti, kebabs, special seasoned rice, warm pita and signature sauces.",
  },
  {
    id: "sig-3",
    name: "Crispy Zinger Burger",
    subtitle: "Golden & Ultra Crunchy",
    priceText: "Rs 400",
    price: 400,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    tag: "Crowd Favorite",
    description: "Signature jumbo crispy chicken breast fillet, crispy iceberg lettuce & house spicy garlic mayo in toasted brioche bun.",
  },
  {
    id: "sig-4",
    name: "Cheese Crust Pizza",
    subtitle: "Stuffed Edge Indulgence",
    priceText: "From Rs 650",
    price: 650,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    tag: "Gourmet",
    description: "Golden stone-baked crust stuffed with 100% molten mozzarella cheese, marinara and generous seasoned chicken.",
  },
  {
    id: "sig-5",
    name: "SL Shawarma Special",
    subtitle: "Authentic Arabic Sizzle",
    priceText: "Rs 400",
    price: 400,
    image: "https://images.unsplash.com/photo-1633321702518-7feccafb94d5?auto=format&fit=crop&w=800&q=80",
    tag: "Must Try",
    description: "Shawarma Line Signature loaded with double carved chicken, secret garlic tahini sauce, pickled cucumbers & fries.",
  },
  {
    id: "sig-6",
    name: "Volcano Loaded Fries",
    subtitle: "Molten Cheese & Zinger Chunks",
    priceText: "Rs 500",
    price: 500,
    image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=800&q=80",
    tag: "Late Night Craving",
    description: "Crispy potato fries layered with seasoned shredded chicken, secret spicy sauce, jalapeños & molten cheddar.",
  },
];
