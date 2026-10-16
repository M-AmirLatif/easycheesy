/**
 * Image Registry for Shawarma Line
 * Provides curated, appetizing food photography with high-res Unsplash links & blurDataURLs.
 * Easily replace any image URL with client photography by changing the url field.
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
    logoBadge: "/images/shawarma-line-badge.png",
    logoCard: "/images/shawarma-line-logo-card.png",
    avatar: "/images/shawarma-line-avatar.png",
    mascot: "/images/shawarma-line-mascot.png",
    alt: "Shawarma Line Kasur Official Brand Logo and Flame Chef Mascot",
  },
  hero: {
    bg: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1920&q=85",
    shawarmaHero: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=1200&q=85",
    alt: "Shawarma Line signature sizzling grill and rotisserie chicken",
  },
  signatures: {
    grillPlatter: {
      url: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      alt: "Charcoal Flame Grilled Chicken Platter with Sauces and Fries",
      photographer: "Unsplash Food",
    },
    slSpecialPlatter: {
      url: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
      alt: "SL Special Grand Platter with wings, rolls, fries and grilled meats",
      photographer: "Unsplash Food",
    },
    zingerBurger: {
      url: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
      alt: "Mega Crispy Golden Zinger Burger with Melted Cheese and Spicy Sauce",
      photographer: "Unsplash Food",
    },
    cheeseCrustPizza: {
      url: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
      alt: "Loaded Cheese Stuffed Crust Special Pizza",
      photographer: "Unsplash Food",
    },
    slShawarma: {
      url: "https://images.unsplash.com/photo-1633321702518-7feccafb94d5?auto=format&fit=crop&w=800&q=80",
      alt: "Juicy Shawarma Line Special Wrap dripping with garlic mayo tahini",
      photographer: "Unsplash Food",
    },
    loadedFries: {
      url: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=800&q=80",
      alt: "Volcano Cheese Loaded Crispy Golden Fries with Zinger chunks",
      photographer: "Unsplash Food",
    },
  },
  categories: {
    shawarma: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=700&q=80",
    burger: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=700&q=80",
    starters: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=700&q=80",
    loadedFries: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=700&q=80",
    sandwich: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=700&q=80",
    parathaRoll: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=700&q=80",
    platters: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80",
    pasta: "https://images.unsplash.com/photo-1621996346565-e3d5d628120b?auto=format&fit=crop&w=700&q=80",
    tortillaWrap: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=700&q=80",
    specialPizza: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=700&q=80",
    regularPizza: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=700&q=80",
    drinks: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=700&q=80",
  },
  gallery: [
    {
      url: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=900&q=80",
      caption: "Live charcoal flame rotisserie chicken roasting to perfection",
      tag: "Grill Fire",
    },
    {
      url: "https://images.unsplash.com/photo-1633321702518-7feccafb94d5?auto=format&fit=crop&w=900&q=80",
      caption: "Freshly carved juicy shawarma roll layered with secret garlic sauce",
      tag: "Shawarma Station",
    },
    {
      url: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80",
      caption: "Signature double-crispy Zinger loaded with melted cheese",
      tag: "Fresh Burgers",
    },
    {
      url: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80",
      caption: "Oven fresh Cheese Crust Pizza pull with golden bubbling mozzarella",
      tag: "Stone Oven",
    },
    {
      url: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=900&q=80",
      caption: "Loaded cheese and crispy zinger fries tossed with special spices",
      tag: "Late Night Cravings",
    },
    {
      url: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80",
      caption: "Grand Shawarma Line grill platter ready for family feast",
      tag: "Grill Feast",
    },
  ],
};
