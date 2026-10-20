export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategoryId;
  description: string;
  price: number; // Base price or fixed price in Rs
  sizes?: { name: string; price: number }[]; // For pizzas, pasta, fries, drinks, soup
  spicy?: boolean;
  popular?: boolean;
  chefSpecial?: boolean;
  image: string;
}

export type MenuCategoryId =
  | "all"
  | "pizza"
  | "burger"
  | "sandwich"
  | "broast"
  | "wraps"
  | "appetizers"
  | "fries"
  | "pasta"
  | "chinese"
  | "shakes-frappes"
  | "mocktails-drinks"
  | "icecream-desserts"
  | "dips";

export interface MenuCategory {
  id: MenuCategoryId;
  name: string;
  shortName: string;
  iconName: string;
  description: string;
}

export const MENU_CATEGORIES: MenuCategory[] = [
  { id: "all", name: "All Items", shortName: "All", iconName: "Flame", description: "Explore the full gourmet lineup of Easy Cheesy Kasur." },
  { id: "burger", name: "Smash & Burgers", shortName: "Burgers", iconName: "Beef", description: "Signature smashed beef & chicken patties with melted cheese on toasted brioche." },
  { id: "pizza", name: "Artisan Pizzas", shortName: "Pizza", iconName: "Pizza", description: "Deep pan and thin crusts stuffed with melted mozzarella and loaded toppings." },
  { id: "sandwich", name: "Sandwiches & Paninis", shortName: "Sandwiches", iconName: "Sandwich", description: "Golden toasted club sandwiches and pressed paninis with crisp fries." },
  { id: "broast", name: "Crispy Broast", shortName: "Broast", iconName: "Drumstick", description: "Flavor-injected golden fried chicken broast, crispy outside and juicy inside." },
  { id: "wraps", name: "Wraps & Shawarma", shortName: "Wraps", iconName: "Wrap", description: "Tortilla twists, crispy zinger paratha rolls, and slow-roasted shawarmas." },
  { id: "appetizers", name: "Appetizers & Wings", shortName: "Appetizers", iconName: "Sparkles", description: "Dynamite wings, injected nuggets, fish & chips, and golden drumsticks." },
  { id: "fries", name: "Loaded Fries", shortName: "Fries", iconName: "Layers", description: "Golden cut fries topped with molten cheese sauce, spices, and chicken." },
  { id: "pasta", name: "Pasta Specialties", shortName: "Pasta", iconName: "UtensilsCrossed", description: "Creamy Alfredo and cheesy gourmet pastas made fresh to order." },
  { id: "chinese", name: "Chinese & Soups", shortName: "Chinese", iconName: "Soup", description: "Manchurian, Kung Pao, Chilli Dry, chowmein, and rich hearty soups." },
  { id: "shakes-frappes", name: "Shakes & Frappes", shortName: "Shakes", iconName: "CupSoda", description: "Thick ice cream shakes, caramel mocha frappes, and chilled lattes." },
  { id: "mocktails-drinks", name: "Mocktails & Chai", shortName: "Drinks", iconName: "Coffee", description: "Refreshing mint margaritas, fizzy mojitos, karak tea, and espresso." },
  { id: "icecream-desserts", name: "Ice Creams & Cakes", shortName: "Desserts", iconName: "IceCream", description: "Signature molten lava cake with ice cream, sundaes, and sweet corns." },
  { id: "dips", name: "Sauces & Extras", shortName: "Extras", iconName: "PlusCircle", description: "Signature garlic mayo, Easy Cheesy dip, fresh slaw, and extra patties." },
];

export const MENU_ITEMS: MenuItem[] = [
  // ==========================================
  // 1. BURGERS & SMASH
  // ==========================================
  {
    id: "bg-1",
    name: "Ultimate Beef Smash Burger",
    category: "burger",
    description: "Juicy smashed double beef patties, melted cheddar, fresh toppings, and signature sauce on a toasted bun.",
    price: 850,
    popular: true,
    chefSpecial: true,
    image: "/images/easy-cheesy/burger-smash-cut.png",
  },
  {
    id: "bg-2",
    name: "Chick N' Smash Burger",
    category: "burger",
    description: "Smashed chicken fillet, melty cheese, crisp toppings, and house secret sauce on a buttery toasted bun.",
    price: 699,
    popular: true,
    image: "/images/easy-cheesy/burger-wrapped.png",
  },
  {
    id: "bg-3",
    name: "Smokey Chick Burger",
    category: "burger",
    description: "Tender grilled chicken infused with smoky seasoning, fresh lettuce, and signature sauce on a soft toasted bun.",
    price: 580,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "bg-4",
    name: "Crispy Zinger Burger",
    category: "burger",
    description: "Fiery golden-fried chicken fillet with a bold crunch, loaded with crisp lettuce, creamy mayo, in a soft bun.",
    price: 490,
    popular: true,
    spicy: true,
    image: "/images/easy-cheesy/burger-basket.jpg",
  },
  {
    id: "bg-5",
    name: "Mighty Bite Burger",
    category: "burger",
    description: "A heavyweight double chicken burger with golden crunch, creamy layers, and unstoppable rich flavor.",
    price: 720,
    popular: true,
    image: "/images/easy-cheesy/burger-foil.png",
  },
  {
    id: "bg-6",
    name: "Spiceshot Burger",
    category: "burger",
    description: "Spice-injected crispy chicken patty with fresh crunchy toppings and bold creamy sauce in every bite.",
    price: 720,
    spicy: true,
    image: "/images/easy-cheesy/burger-halves-foil.png",
  },
  {
    id: "bg-7",
    name: "Chicken Patty Burger",
    category: "burger",
    description: "Juicy classic chicken patty topped with fresh garden lettuce, ripe tomato, and mild tangy sauce.",
    price: 350,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "bg-8",
    name: "Fish Burger",
    category: "burger",
    description: "Crispy golden white fish fillet topped with crunchy iceberg lettuce and signature creamy tartar sauce.",
    price: 890,
    image: "https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "bg-9",
    name: "Spiceshot Fillet Burger",
    category: "burger",
    description: "Crispy, spice-marinated chicken breast fillet layered with fresh lettuce and signature mayo on a warm bun.",
    price: 499,
    spicy: true,
    image: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=600&q=80",
  },

  // ==========================================
  // 2. PIZZAS
  // ==========================================
  {
    id: "pz-1",
    name: "Tikka Fusion Pizza",
    category: "pizza",
    description: "Where tradition meets flavor: juicy chicken tikka chunks, creamy mozzarella, and vibrant spices on a golden crust.",
    price: 680,
    sizes: [
      { name: "Small", price: 680 },
      { name: "Medium", price: 1100 },
      { name: "Large", price: 1620 },
    ],
    popular: true,
    image: "/images/easy-cheesy/pizza-pan-cheese.jpg",
  },
  {
    id: "pz-2",
    name: "Sizzling Fajita Pizza",
    category: "pizza",
    description: "Juicy Mexican-spiced chicken, bell peppers, sweet onions, and molten cheese over a sizzling pan base.",
    price: 680,
    sizes: [
      { name: "Small", price: 680 },
      { name: "Medium", price: 1100 },
      { name: "Large", price: 1620 },
    ],
    spicy: true,
    image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "pz-3",
    name: "Royal Malai Boti Pizza",
    category: "pizza",
    description: "Tender malai boti chicken chunks, velvety white sauce, and rich mozzarella cheese on a soft artisan crust.",
    price: 700,
    sizes: [
      { name: "Small", price: 700 },
      { name: "Medium", price: 1200 },
      { name: "Large", price: 1700 },
    ],
    popular: true,
    chefSpecial: true,
    image: "/images/easy-cheesy/pizza-delivery-box.jpg",
  },
  {
    id: "pz-4",
    name: "Cheese Crust Pizza",
    category: "pizza",
    description: "Crispy outside, molten cheese ring inside. An irresistible stuffed crust crafted specially for cheese lovers.",
    price: 1250,
    sizes: [
      { name: "Medium", price: 1250 },
      { name: "Large", price: 1790 },
    ],
    popular: true,
    chefSpecial: true,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "pz-5",
    name: "Crown Crust Pizza",
    category: "pizza",
    description: "Cheesy crown-shaped golden crust pockets packed with flavor and mozzarella in every single bite.",
    price: 1250,
    sizes: [
      { name: "Medium", price: 1250 },
      { name: "Large", price: 1790 },
    ],
    popular: true,
    chefSpecial: true,
    image: "/images/easy-cheesy/pizza-slice-loaded.png",
  },
  {
    id: "pz-6",
    name: "Easy Cheesy Special Pizza",
    category: "pizza",
    description: "Our signature masterpiece: loaded artisan blend of cheeses, chicken cuts, olives, mushrooms, and secret sauce drizzle.",
    price: 1250,
    sizes: [
      { name: "Medium", price: 1250 },
      { name: "Large", price: 1790 },
    ],
    popular: true,
    chefSpecial: true,
    image: "/images/easy-cheesy/pizza-slice-loaded.png",
  },
  {
    id: "pz-7",
    name: "Chicken Cheese Lover Pizza",
    category: "pizza",
    description: "Loaded with double juicy chicken, extra mozzarella layers, rich herb pizza sauce, baked till bubbling golden.",
    price: 800,
    sizes: [
      { name: "Small", price: 800 },
      { name: "Medium", price: 1450 },
      { name: "Large", price: 2000 },
    ],
    popular: true,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "pz-8",
    name: "Signature Peri Peri Pizza",
    category: "pizza",
    description: "The perfect balance of Portuguese peri peri heat, melted cheese, and tender roasted chicken.",
    price: 700,
    sizes: [
      { name: "Small", price: 700 },
      { name: "Medium", price: 1250 },
      { name: "Large", price: 1790 },
    ],
    spicy: true,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80",
  },

  // ==========================================
  // 3. SANDWICHES & PANINIS
  // ==========================================
  {
    id: "sw-1",
    name: "Cocktail Sandwich",
    category: "sandwich",
    description: "Tender chicken, fresh veggies, and creamy cocktail dressing in toasted bread. Light, flavorful, and satisfying.",
    price: 730,
    popular: true,
    image: "/images/easy-cheesy/sandwich-tray-yellow.jpg",
  },
  {
    id: "sw-2",
    name: "Smokin' Club Sandwich",
    category: "sandwich",
    description: "Savory chicken chunks combined with crisp lettuce, egg, and smoky creamy sauce, served with french fries & coleslaw.",
    price: 700,
    popular: true,
    chefSpecial: true,
    image: "/images/easy-cheesy/sandwich-platter-black.png",
  },
  {
    id: "sw-3",
    name: "Signature Panini",
    category: "sandwich",
    description: "Pressed Italian panini bread layered with grilled seasoned chicken, melted cheese, and garlic sauce, toasted golden.",
    price: 680,
    image: "/images/easy-cheesy/feast-table-platter.png",
  },
  {
    id: "sw-4",
    name: "The Perfect Crunch Sandwich",
    category: "sandwich",
    description: "Golden toasted triple sandwich with a crispy exterior and juicy savory chicken filling inside.",
    price: 730,
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "sw-5",
    name: "Signature Half Panini",
    category: "sandwich",
    description: "Same great flavor, pressed to perfection in a convenient two-piece portion. Ideal for a quick bite!",
    price: 450,
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=600&q=80",
  },

  // ==========================================
  // 4. CRISPY BROAST
  // ==========================================
  {
    id: "br-1",
    name: "Quarter Broast Combo",
    category: "broast",
    description: "1 crispy leg, 1 juicy thigh, 1 dinner bun, hot crinkle fries, and 1 signature garlic dip.",
    price: 680,
    popular: true,
    image: "/images/easy-cheesy/broast-basket.png",
  },
  {
    id: "br-2",
    name: "Half Broast Combo",
    category: "broast",
    description: "2 legs, 2 thighs, 1 dinner bun, generous serving of crispy fries, and signature garlic dip.",
    price: 1260,
    popular: true,
    image: "/images/easy-cheesy/broast-basket.png",
  },
  {
    id: "br-3",
    name: "Full Broast Party Pack",
    category: "broast",
    description: "4 legs, 4 thighs, 2 dinner buns, large mountain of fries, 1 garlic dip, and 1 Easy Cheesy special dip.",
    price: 2400,
    popular: true,
    chefSpecial: true,
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "br-4",
    name: "Family Broast Feast",
    category: "broast",
    description: "8 legs, 8 thighs, 4 dinner buns, extra-large fries, 2 garlic dips, and 2 Easy Cheesy special dips. Feeds 6-8.",
    price: 4600,
    popular: true,
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "br-5",
    name: "Broast & Arabian Rice",
    category: "broast",
    description: "One crispy injected leg and one juicy thigh served over aromatic spiced Arabian rice with dipping sauce.",
    price: 899,
    chefSpecial: true,
    image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=600&q=80",
  },

  // ==========================================
  // 5. WRAPS & ROLLS
  // ==========================================
  {
    id: "wr-1",
    name: "Zinger Roll Paratha",
    category: "wraps",
    description: "Golden crispy chicken fillet wrapped in a flaky paratha with crunchy lettuce and rich garlic mayo dressing.",
    price: 490,
    popular: true,
    spicy: true,
    image: "/images/easy-cheesy/wrap-crispy.png",
  },
  {
    id: "wr-2",
    name: "Tortilla Twist",
    category: "wraps",
    description: "Juicy chicken tenders and fresh veggies wrapped in a soft, lightly toasted flour tortilla.",
    price: 699,
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "wr-3",
    name: "House Sp. Shawarma Platter",
    category: "wraps",
    description: "Savor tender shawarma chicken slices served open-faced with fresh salad, seasoned fries, and house dips.",
    price: 699,
    chefSpecial: true,
    popular: true,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "wr-4",
    name: "Classic Chicken Shawarma",
    category: "wraps",
    description: "Slow-roasted marinated chicken shaved into warm pita bread with crunchy pickles and garlic sauce.",
    price: 350,
    popular: true,
    image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "wr-5",
    name: "Zinger Shawarma",
    category: "wraps",
    description: "Crispy fried zinger chicken strips wrapped in pita bread with house spicy garlic sauce.",
    price: 430,
    spicy: true,
    image: "https://images.unsplash.com/photo-1633321702518-7feccafb94d5?auto=format&fit=crop&w=600&q=80",
  },

  // ==========================================
  // 6. APPETIZERS & STARTERS
  // ==========================================
  {
    id: "ap-1",
    name: "Dynamite Wings",
    category: "appetizers",
    description: "Crispy fried chicken wings smothered in spicy signature dynamite sauce, finished with sesame & black olives.",
    price: 599,
    popular: true,
    spicy: true,
    image: "/images/easy-cheesy/wings-dynamite.png",
  },
  {
    id: "ap-2",
    name: "Hot Wings",
    category: "appetizers",
    description: "Golden crispy chicken wings with a powerful spicy glaze. Built for serious heat lovers.",
    price: 550,
    spicy: true,
    image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "ap-3",
    name: "Fried Wings",
    category: "appetizers",
    description: "Crispy deep-fried golden wings seasoned with savory herbs and served with garlic dipping sauce.",
    price: 550,
    image: "https://images.unsplash.com/photo-1527477378408-1bc09c233134?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "ap-4",
    name: "Arabian Injected Nuggets (6 Pcs)",
    category: "appetizers",
    description: "6 pieces of spice-injected tender chicken nuggets served with golden fries and cocktail dip.",
    price: 740,
    popular: true,
    image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "ap-5",
    name: "Large Arabian Injected Nuggets (12 Pcs)",
    category: "appetizers",
    description: "12 pieces of flavor-injected crispy chicken nuggets with double fries and dipping sauce.",
    price: 1399,
    image: "https://images.unsplash.com/photo-1585325701165-351af916e581?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "ap-6",
    name: "Fish & Chips",
    category: "appetizers",
    description: "Premium white fish fillet lightly battered and fried to crispy perfection, served with fries and tartar sauce.",
    price: 750,
    image: "https://images.unsplash.com/photo-1579208575657-c595a05383b7?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "ap-7",
    name: "Chicken Drumsticks (3 Pcs)",
    category: "appetizers",
    description: "3 pieces of seasoned crispy fried drumsticks served hot with signature dip.",
    price: 700,
    image: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "ap-8",
    name: "Chicken Drumsticks (6 Pcs)",
    category: "appetizers",
    description: "6 pieces of golden crunchy chicken drumsticks for family sharing.",
    price: 1300,
    image: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "ap-9",
    name: "Dynamite Prawns",
    category: "appetizers",
    description: "Crispy fried juicy prawns tossed in fiery sweet-and-spicy dynamite dressing.",
    price: 890,
    spicy: true,
    chefSpecial: true,
    image: "https://images.unsplash.com/photo-1559742811-82286364ceaf?auto=format&fit=crop&w=600&q=80",
  },

  // ==========================================
  // 7. FRIES
  // ==========================================
  {
    id: "fr-1",
    name: "Plain Fries",
    category: "fries",
    description: "Crisp potato fries lightly salted, fried fresh to order.",
    price: 350,
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "fr-2",
    name: "Masala Fries",
    category: "fries",
    description: "Golden fries tossed in spicy Kasuri chaat masala.",
    price: 400,
    spicy: true,
    image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "fr-3",
    name: "Cheesy Craze Fries",
    category: "fries",
    description: "Fries loaded with rich molten cheese sauce, seasoned shredded chicken, and jalapeños. Pure cheesy bliss.",
    price: 710,
    popular: true,
    chefSpecial: true,
    image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=600&q=80",
  },

  // ==========================================
  // 8. PASTA
  // ==========================================
  {
    id: "ps-1",
    name: "Creamy Alfredo Pasta",
    category: "pasta",
    description: "Penne pasta tossed in rich parmesan garlic cream sauce with grilled chicken strips and fresh Italian herbs.",
    price: 899,
    popular: true,
    chefSpecial: true,
    image: "https://images.unsplash.com/photo-1621996346565-e3d5d628120b?auto=format&fit=crop&w=600&q=80",
  },

  // ==========================================
  // 9. CHINESE CUISINE & SOUPS
  // ==========================================
  {
    id: "ch-1",
    name: "Hot 'N' Sour Soup",
    category: "chinese",
    description: "Spicy and tangy thick broth with shredded chicken, black mushrooms, egg ribbons, and fresh veggies.",
    price: 320,
    sizes: [
      { name: "Single Bowl", price: 320 },
      { name: "Family Bowl", price: 1160 },
    ],
    spicy: true,
    popular: true,
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "ch-2",
    name: "Chicken Corn Soup",
    category: "chinese",
    description: "Classic smooth corn soup with minced chicken and sweet corn kernels. Warm, comforting, and soul-satisfying.",
    price: 320,
    sizes: [
      { name: "Single Bowl", price: 320 },
      { name: "Family Bowl", price: 1160 },
    ],
    popular: true,
    image: "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "ch-3",
    name: "19B Soup (Special Prawn & Chicken)",
    category: "chinese",
    description: "Rich, aromatic clear broth loaded with juicy prawns, tender chicken chunks, mushrooms, and seasonal greens.",
    price: 370,
    sizes: [
      { name: "Single Bowl", price: 370 },
      { name: "Family Bowl", price: 1350 },
    ],
    chefSpecial: true,
    image: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "ch-4",
    name: "Chicken Manchurian with Steamed Rice",
    category: "chinese",
    description: "Crispy fried chicken bites coated in tangy red Manchurian glaze, served with fluffy steamed jasmine rice.",
    price: 1099,
    popular: true,
    image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "ch-5",
    name: "Chicken Chilli Dry",
    category: "chinese",
    description: "Crispy chicken strips tossed with sliced green chilies, ginger, garlic, and onions in a sizzling dry glaze.",
    price: 1199,
    spicy: true,
    popular: true,
    image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "ch-6",
    name: "Kung Pao Chicken",
    category: "chinese",
    description: "Wok-seared diced chicken tossed with peanuts, dried red chilies, crunchy bell peppers, and savory Sichuan sauce.",
    price: 1180,
    spicy: true,
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "ch-7",
    name: "Chicken Cashewnut",
    category: "chinese",
    description: "Tender chicken stir-fried with roasted cashews, fresh baby corn, broccoli, and rich Chinese brown sauce.",
    price: 1280,
    chefSpecial: true,
    image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "ch-8",
    name: "Mongolian Chicken",
    category: "chinese",
    description: "Tender sliced chicken stir-fried in a sweet and savory garlic-ginger sauce with caramelized spring onions.",
    price: 1180,
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "ch-9",
    name: "Chicken Chowmein",
    category: "chinese",
    description: "Wok-tossed noodles with shredded chicken breast, crunchy cabbage, carrots, bell peppers, and dark soy seasoning.",
    price: 899,
    popular: true,
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "ch-10",
    name: "Sizzling Black Pepper Chicken",
    category: "chinese",
    description: "Tender chicken cooked on a roaring cast-iron platter with freshly cracked black pepper, onions, and capsicum.",
    price: 1150,
    spicy: true,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "ch-11",
    name: "Signature Masala Rice",
    category: "chinese",
    description: "Aromatic basmati rice tossed with shredded chicken, fresh herbs, and house special spice blend.",
    price: 599,
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "ch-12",
    name: "Classic Vegetable Fried Rice",
    category: "chinese",
    description: "Fluffy wok-tossed basmati rice with diced carrots, sweet peas, capsicum, and delicate aromatic seasoning.",
    price: 499,
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80",
  },

  // ==========================================
  // 10. SHAKES & FRAPPES
  // ==========================================
  {
    id: "shk-1",
    name: "Oreo Shake (Vanilla / Chocolate)",
    category: "shakes-frappes",
    description: "Thick premium shake blended with crunchy Oreo cookies, ice cream, chocolate drizzle, and whipped cream.",
    price: 540,
    popular: true,
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "shk-2",
    name: "Chocolate Shake",
    category: "shakes-frappes",
    description: "Creamy Dutch cocoa blended with rich dairy ice cream and dark chocolate syrup.",
    price: 540,
    popular: true,
    image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "shk-3",
    name: "Strawberry Shake",
    category: "shakes-frappes",
    description: "Made with ripe sweet strawberries, creamy chilled milk, and strawberry ice cream.",
    price: 450,
    image: "https://images.unsplash.com/photo-1553787499-6f9133860278?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "shk-4",
    name: "Mango Shake",
    category: "shakes-frappes",
    description: "Rich mango pulp blended with vanilla ice cream and chilled milk for a sunny tropical refreshment.",
    price: 450,
    image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "shk-5",
    name: "Berry Blast Shake",
    category: "shakes-frappes",
    description: "A berry sensation packed with blueberries, strawberries, and creamy ice cream swirl.",
    price: 490,
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "shk-6",
    name: "Vanilla Shake",
    category: "shakes-frappes",
    description: "Classic creamy Madagascar-style vanilla shake made with pure dairy ice cream.",
    price: 450,
    image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "shk-7",
    name: "Caramel Shake",
    category: "shakes-frappes",
    description: "Rich buttery caramel fudge blended with vanilla cream and topped with golden drizzle.",
    price: 480,
    image: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "frp-1",
    name: "Hazelnut Frappe",
    category: "shakes-frappes",
    description: "Chilled espresso blended with crushed ice, roasted hazelnut syrup, and whipped topping.",
    price: 450,
    image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "frp-2",
    name: "Irish Frappe",
    category: "shakes-frappes",
    description: "Creamy cold coffee frappe infused with aromatic Irish cream essence and ice crystals.",
    price: 450,
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "frp-3",
    name: "Mocha Frappe",
    category: "shakes-frappes",
    description: "Decadent blend of dark cocoa, fresh brewed espresso, and cold milk over ice.",
    price: 450,
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "frp-4",
    name: "Ice Latte",
    category: "shakes-frappes",
    description: "Double espresso shots poured over iced fresh milk with a smooth creamy head.",
    price: 350,
    image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=600&q=80",
  },

  // ==========================================
  // 11. MOCKTAILS & REFRESHERS & CHAI
  // ==========================================
  {
    id: "mc-1",
    name: "Mint Margarita",
    category: "mocktails-drinks",
    description: "Kasur's favorite refresher: freshly crushed mint leaves, lime juice, sea salt, and lemon fizz over crushed ice.",
    price: 220,
    popular: true,
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "mc-2",
    name: "Pina Colada",
    category: "mocktails-drinks",
    description: "Creamy coconut milk, sweet pineapple juice, and crushed ice blended into tropical bliss.",
    price: 320,
    popular: true,
    image: "https://images.unsplash.com/photo-1587223075265-591ff5515cbc?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "mc-3",
    name: "Lychee Martini",
    category: "mocktails-drinks",
    description: "Exotic sweet lychee nectar shaken with citrus cordial and chilled sparkling water.",
    price: 320,
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "mc-4",
    name: "Lemon Mojito",
    category: "mocktails-drinks",
    description: "Fresh lime wedges and garden mint muddled with sparkling soda and crushed ice.",
    price: 220,
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "mc-5",
    name: "Strawberry Mojito",
    category: "mocktails-drinks",
    description: "Sweet strawberry reduction muddled with fresh mint and bubbly soda over crushed ice.",
    price: 220,
    image: "https://images.unsplash.com/photo-1560512823-829485b8bf24?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "mc-6",
    name: "Ocean Breeze",
    category: "mocktails-drinks",
    description: "Blue curacao essence blended with lemonade and crushed ice for an electric cool sip.",
    price: 320,
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "mc-7",
    name: "Fresh Lime",
    category: "mocktails-drinks",
    description: "Pure freshly squeezed lime juice with sparkling club soda and a dash of rock salt.",
    price: 220,
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "mc-8",
    name: "Chilled Soft Drinks",
    category: "mocktails-drinks",
    description: "Pepsi, 7Up, Mirinda, or Next Cola chilled ice-cold.",
    price: 80,
    sizes: [
      { name: "Regular Can/Glass", price: 80 },
      { name: "500ml Bottle", price: 120 },
      { name: "1.5L Family Bottle", price: 220 },
    ],
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "mc-9",
    name: "Pure Mineral Water",
    category: "mocktails-drinks",
    description: "Purified safe drinking water in small or large chilled bottles.",
    price: 70,
    sizes: [
      { name: "Small (500ml)", price: 70 },
      { name: "Large (1.5L)", price: 150 },
    ],
    image: "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "tc-1",
    name: "Karak Chai",
    category: "mocktails-drinks",
    description: "Strong traditional Pakistani milk tea simmered to rich golden perfection.",
    price: 180,
    popular: true,
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "tc-2",
    name: "Matka Chai",
    category: "mocktails-drinks",
    description: "Slow-brewed aromatic tea served in traditional clay cups with an earthy fragrance.",
    price: 200,
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "tc-3",
    name: "Cardamom Tea (Elaichi)",
    category: "mocktails-drinks",
    description: "Fragrant green cardamom pods brewed with fresh whole milk and black tea.",
    price: 180,
    image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "cf-1",
    name: "Cappuccino",
    category: "mocktails-drinks",
    description: "Rich espresso topped with velvety steamed milk and thick foam dusted with chocolate.",
    price: 250,
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "cf-2",
    name: "Espresso / Long Black",
    category: "mocktails-drinks",
    description: "Bold extracted espresso shot with rich crema.",
    price: 180,
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=600&q=80",
  },

  // ==========================================
  // 12. ICE CREAMS & DESSERTS
  // ==========================================
  {
    id: "ds-1",
    name: "Signature Molten Lava Cake",
    category: "icecream-desserts",
    description: "Warm dark chocolate lava cake with a molten gooey center, served alongside a scoop of creamy vanilla ice cream.",
    price: 650,
    popular: true,
    chefSpecial: true,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "ic-1",
    name: "Choco Berry Blast",
    category: "icecream-desserts",
    description: "A delicious mix of chocolatey richness, fruity strawberry scoop, and creamy vanilla bites with chocolate fudge.",
    price: 380,
    popular: true,
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "ic-2",
    name: "Tropical Paradise",
    category: "icecream-desserts",
    description: "Indulge in an exotic mix of rich mango, vibrant tutti frutti, and silky vanilla scoops with fruit drizzle.",
    price: 380,
    image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "ic-3",
    name: "Royal Chocolate Delight",
    category: "icecream-desserts",
    description: "Double chocolate scoops with wafer crisp, rich chocolate syrup, and crunchy almond toppings.",
    price: 380,
    popular: true,
    image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "ic-4",
    name: "Berry Mango Magic",
    category: "icecream-desserts",
    description: "Refreshing trio of strawberry delight, mango richness, and smooth creamy vanilla swirls.",
    price: 380,
    image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "ic-5",
    name: "Rainbow Treat Sundae",
    category: "icecream-desserts",
    description: "A colorful bowl of tutti frutti, strawberry, and mango ice cream with rainbow sprinkles.",
    price: 380,
    image: "https://images.unsplash.com/photo-1568651779193-e93444452a8b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "ic-6",
    name: "Your Choice Trio (3 Scoops)",
    category: "icecream-desserts",
    description: "Pick any 3 ice cream flavors of your choice to create your customized dessert combo.",
    price: 380,
    image: "https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "cr-1",
    name: "Sweet Corns Cup (Steaming Hot)",
    category: "icecream-desserts",
    description: "Steaming hot sweet corn kernels tossed with butter, lemon juice, and savory spices.",
    price: 250,
    sizes: [
      { name: "Small Cup", price: 250 },
      { name: "Large Cup", price: 400 },
    ],
    image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=600&q=80",
  },

  // ==========================================
  // 13. DIPS & EXTRAS & KIDS DEAL
  // ==========================================
  {
    id: "dp-1",
    name: "Easy Cheesy Special Dip",
    category: "dips",
    description: "Our house-secret blend of tangy cheese sauce and spices, perfect for fries, broast, and burgers.",
    price: 100,
    popular: true,
    image: "/images/easy-cheesy/burger-basket.jpg",
  },
  {
    id: "dp-2",
    name: "Garlic Mayo Dip",
    category: "dips",
    description: "Creamy, smooth garlic mayonnaise made fresh daily with whole herbs.",
    price: 80,
    image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "dp-3",
    name: "Fresh Crunchy Coleslaw",
    category: "dips",
    description: "Finely shredded crisp cabbage and sweet carrots in a chilled creamy dressing.",
    price: 80,
    image: "/images/easy-cheesy/sandwich-tray-yellow.jpg",
  },
  {
    id: "dp-4",
    name: "Add-On Melted Cheese Slice",
    category: "dips",
    description: "Extra slice of melted cheddar cheese for any burger, sandwich, or wrap.",
    price: 80,
    image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "dp-5",
    name: "Add-On Smashed Beef Patty",
    category: "dips",
    description: "Extra grilled beef patty to stack your burger into a towering beast.",
    price: 300,
    image: "/images/easy-cheesy/burger-smash-cut.png",
  },
  {
    id: "kd-1",
    name: "Little Bites Combo (Kids Deal)",
    category: "dips",
    description: "6 pieces of tender golden nuggets with plain salted fries and juice/sauce. Loved by young foodies!",
    price: 520,
    popular: true,
    image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=600&q=80",
  },
];

// ==========================================
// SIGNATURE PICKS (6 Hero Items)
// ==========================================
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
    name: "Ultimate Beef Smash Burger",
    subtitle: "Double Smashed Patties & Cheddar",
    priceText: "Rs 850",
    price: 850,
    image: "/images/easy-cheesy/burger-smash-cut.png",
    tag: "Crowd Star",
    description: "Two seasoned beef patties smashed ultra-thin with crispy caramelized edges, overflowing melted cheddar & signature secret sauce.",
  },
  {
    id: "sig-2",
    name: "Easy Cheesy Crown Crust Pizza",
    subtitle: "Stuffed Edge Indulgence",
    priceText: "From Rs 1250",
    price: 1250,
    image: "/images/easy-cheesy/pizza-slice-loaded.png",
    tag: "Chef Special",
    description: "Artisan crown-shaped crust stuffed with molten mozzarella pockets, roasted chicken, olives, mushrooms, and signature sauce drizzle.",
  },
  {
    id: "sig-3",
    name: "Injected Crispy Broast",
    subtitle: "Golden Crunchy & Juicy Inside",
    priceText: "From Rs 680",
    price: 680,
    image: "/images/easy-cheesy/broast-basket.png",
    tag: "Must Try",
    description: "Kasur's celebrated flavor-injected fried chicken. Super crunchy outside, piping hot and juicy inside, served with crinkle fries & dip.",
  },
  {
    id: "sig-4",
    name: "Smokin' Club Sandwich Feast",
    subtitle: "Toasted Quad & Fresh Sides",
    priceText: "Rs 700",
    price: 700,
    image: "/images/easy-cheesy/sandwich-tray-yellow.jpg",
    tag: "Best Value",
    description: "Triple-decker golden toasted sandwich with savory shredded chicken, egg, crisp veggies, served with crinkle fries and coleslaw.",
  },
  {
    id: "sig-5",
    name: "Glazed Dynamite Wings",
    subtitle: "Fiery Sweet & Spicy Kick",
    priceText: "Rs 599",
    price: 599,
    image: "/images/easy-cheesy/wings-dynamite.png",
    tag: "Heat Lovers",
    description: "Crispy chicken wings drenched in creamy dynamite chili sauce, topped with toasted sesame seeds and sliced black olives.",
  },
  {
    id: "sig-6",
    name: "Cheesy Craze Loaded Fries",
    subtitle: "Molten Cheese & Chicken Blend",
    priceText: "Rs 710",
    price: 710,
    image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=800&q=80",
    tag: "Late Night Crave",
    description: "Crispy golden french fries smothered under a heavy blanket of molten cheese sauce, seasoned shredded chicken, and jalapeños.",
  },
];

// ==========================================
// OFFICIAL DEALS DATA (Extracted from Menu Poster)
// ==========================================
export interface DealItem {
  id: string;
  name: string;
  itemsSummary: string;
  price: number;
  badge: string;
  popular?: boolean;
  image?: string;
}

export const DEALS_DATA: DealItem[] = [
  {
    id: "deal-1",
    name: "Spiceshot Duo Deal",
    itemsSummary: "2 Spiceshot Chicken Fillet Burgers + 1 Chilled Cold Drink",
    price: 999,
    badge: "Official Deal",
    popular: true,
    image: "/images/easy-cheesy/burger-basket.jpg",
  },
  {
    id: "deal-2",
    name: "Sandwich Duo Deal",
    itemsSummary: "2 Club Sandwiches + 2 Chilled Cold Drinks",
    price: 999,
    badge: "Official Deal",
    popular: true,
    image: "/images/easy-cheesy/sandwich-tray-yellow.jpg",
  },
  {
    id: "deal-3",
    name: "Broast Family Mega Feast",
    itemsSummary: "8 Crispy Legs, 8 Thighs, 4 Buns, Jumbo Fries, 2 Garlic Dips, 2 Easy Cheesy Sp. Dips",
    price: 4600,
    badge: "Mega Family Deal",
    popular: true,
    image: "/images/easy-cheesy/broast-basket.png",
  },
  {
    id: "deal-4",
    name: "Broast Full Party Deal",
    itemsSummary: "4 Crispy Legs, 4 Thighs, 2 Buns, Large Fries, 1 Garlic Dip, 1 Easy Cheesy Sp. Dip",
    price: 2400,
    badge: "Friends Feast",
    popular: true,
    image: "/images/easy-cheesy/broast-basket.png",
  },
  {
    id: "deal-5",
    name: "Half Broast Combo",
    itemsSummary: "2 Crispy Legs, 2 Thighs, 1 Bun, Fries & Garlic Dip",
    price: 1260,
    badge: "Top Value",
    image: "/images/easy-cheesy/broast-basket.png",
  },
  {
    id: "deal-6",
    name: "Kids Little Bites Combo",
    itemsSummary: "6 Pcs Crispy Nuggets + Golden Plain Fries + Dipping Sauce",
    price: 520,
    badge: "Kids Favorite",
    image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=600&q=80",
  },
];
