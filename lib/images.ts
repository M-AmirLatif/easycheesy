/**
 * Image Registry for Easy Cheesy (Kasur, Pakistan)
 * Combines authentic in-house restaurant photography with high-res fast-food visuals.
 */

export interface FoodImage {
  id: string;
  title: string;
  url: string;
  alt: string;
  blurDataURL?: string;
  photographer: string;
  source: string;
}

// Fallback base64 shimmer/blur placeholder for instant rendering
export const SHIMMER_BLUR =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzE2MTYxNiIvPjwvc3ZnPg==";

export const IMAGES = {
  brand: {
    logoBadge: "/images/easy-cheesy-badge.svg",
    logoFull: "/images/easy-cheesy-logo.svg",
    avatar: "/images/easy-cheesy-badge.svg",
    alt: "Easy Cheesy Kasur Official Logo - Love at First Bite",
  },
  hero: {
    bg: "/images/easy-cheesy/restaurant-panoramic-render.png",
    alt: "Easy Cheesy Kasur modern vibrant dining hall and fast-food feast",
  },
  signatures: {
    smashBurger: {
      url: "/images/easy-cheesy/burger-smash-cut.png",
      alt: "Ultimate Beef Smash Burger loaded with double patties and melted cheddar",
      tag: "Best Seller",
    },
    crownPizza: {
      url: "/images/easy-cheesy/pizza-slice-loaded.png",
      alt: "Easy Cheesy Special Crown Crust Pizza loaded with toppings & melted cheese",
      tag: "Chef Special",
    },
    injectedBroast: {
      url: "/images/easy-cheesy/broast-basket.png",
      alt: "Crispy Golden Injected Chicken Broast Basket with crinkle fries and dip",
      tag: "Fan Favorite",
    },
    clubSandwich: {
      url: "/images/easy-cheesy/sandwich-tray-yellow.jpg",
      alt: "Smokin' Club Sandwich platter with crispy fries and coleslaw",
      tag: "Must Try",
    },
    dynamiteWings: {
      url: "/images/easy-cheesy/wings-dynamite.png",
      alt: "Spicy Glazed Dynamite Wings garnished with sesame seeds and olives",
      tag: "Spicy Hit",
    },
    cheesyCrazeFries: {
      url: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=800&q=80",
      alt: "Cheesy Craze Fries loaded with rich melty cheese and tender chicken",
      tag: "Cheesy Craze",
    },
  },
  categories: {
    all: "/images/easy-cheesy/feast-table-platter.png",
    pizza: "/images/easy-cheesy/pizza-slice-loaded.png",
    burger: "/images/easy-cheesy/burger-smash-cut.png",
    sandwich: "/images/easy-cheesy/sandwich-tray-yellow.jpg",
    broast: "/images/easy-cheesy/broast-basket.png",
    appetizers: "/images/easy-cheesy/wings-dynamite.png",
    fries: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=800&q=80",
    wraps: "/images/easy-cheesy/wrap-crispy.png",
    chinese: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=80",
    shakes: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80",
    mocktails: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    coffee: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80",
    desserts: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
    drinks: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80",
  },
  gallery: [
    {
      url: "/images/easy-cheesy/building-exterior-night.png",
      caption: "Illuminated Multi-Storey Facade with Kids Play Zone on Shahbaz Khan Road",
      tag: "Exterior & Kids Zone",
    },
    {
      url: "/images/easy-cheesy/restaurant-booth-neon.png",
      caption: "Vibrant Air-Conditioned Family Dining Hall with Neon Wall Art",
      tag: "Family Ambiance",
    },
    {
      url: "/images/easy-cheesy/burger-smash-cut.png",
      caption: "Signature Double Beef Smash Burger with Melted Cheese & Special Sauce",
      tag: "Smash Burgers",
    },
    {
      url: "/images/easy-cheesy/pizza-slice-loaded.png",
      caption: "Artisan Pan Pizza loaded with Sausage, Mushrooms, Olives & Molten Cheese",
      tag: "Gourmet Pizzas",
    },
    {
      url: "/images/easy-cheesy/broast-basket.png",
      caption: "Crispy Golden Injected Chicken Broast with Seasoned Crinkle Fries",
      tag: "Injected Broast",
    },
    {
      url: "/images/easy-cheesy/sandwich-tray-yellow.jpg",
      caption: "Smokin' Club Sandwich Quad Feast with Fries, Garlic Dip & Fresh Slaw",
      tag: "Club Sandwiches",
    },
    {
      url: "/images/easy-cheesy/wings-dynamite.png",
      caption: "Glazed Fiery Dynamite Wings with Toasted Sesame Seeds & Black Olives",
      tag: "Hot Appetizers",
    },
    {
      url: "/images/easy-cheesy/restaurant-dining-spread.png",
      caption: "Full Table Spread in our Modern Dining Hall with Pizzas and Paninis",
      tag: "Dine-In Experience",
    },
  ],
};
