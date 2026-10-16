"use client";

import React, { useState, useMemo } from "react";
import {
  MENU_CATEGORIES,
  MENU_ITEMS,
  MenuCategoryId,
  MenuItem,
} from "@/data/menu";
import { useCart } from "@/context/CartContext";
import {
  Search,
  Flame,
  Plus,
  Check,
  Sparkles,
  Info,
  X,
  Layers,
  UtensilsCrossed,
  Pizza,
  Beef,
  Sandwich,
  Scroll,
  CircleDot,
  Soup,
  CupSoda,
  Drumstick,
} from "lucide-react";

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<MenuCategoryId>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSizes, setSelectedSizes] = useState<Record<string, string>>({});
  const [justAddedMap, setJustAddedMap] = useState<Record<string, boolean>>({});
  const { addItem } = useCart();

  // Category icons mapping
  const getCategoryIcon = (id: MenuCategoryId) => {
    switch (id) {
      case "all":
        return Flame;
      case "shawarma":
        return Flame;
      case "burger":
        return Beef;
      case "starters":
        return Drumstick;
      case "loaded-fries":
        return Layers;
      case "sandwich":
        return Sandwich;
      case "paratha-roll":
        return Scroll;
      case "platters":
        return UtensilsCrossed;
      case "pasta":
        return Soup;
      case "tortilla-wrap":
        return CircleDot;
      case "special-pizza":
      case "regular-pizza":
        return Pizza;
      case "drinks":
        return CupSoda;
      default:
        return Flame;
    }
  };

  // Filtered menu items based on category and search query
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Size handler
  const handleSelectSize = (itemId: string, sizeName: string) => {
    setSelectedSizes((prev) => ({
      ...prev,
      [itemId]: sizeName,
    }));
  };

  const handleAddToCart = (item: MenuItem) => {
    let price = item.price;
    let sizeLabel: string | undefined = undefined;

    if (item.sizes && item.sizes.length > 0) {
      const chosenSizeName = selectedSizes[item.id] || item.sizes[0].name;
      const foundSize = item.sizes.find((s) => s.name === chosenSizeName);
      if (foundSize) {
        price = foundSize.price;
        sizeLabel = foundSize.name;
      }
    }

    const key = sizeLabel ? `${item.id}-${sizeLabel}` : item.id;

    addItem({
      id: item.id,
      name: item.name,
      price,
      size: sizeLabel,
    });

    setJustAddedMap((prev) => ({ ...prev, [key]: true }));
    setTimeout(() => {
      setJustAddedMap((prev) => ({ ...prev, [key]: false }));
    }, 1200);
  };

  return (
    <section id="menu" className="py-20 sm:py-28 bg-[#161616] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/15 border border-brand-orange/40 text-brand-orange text-xs font-bold uppercase tracking-wider mb-3">
            <Flame className="w-3.5 h-3.5 text-brand-yellow" />
            <span>Complete Fast-Food Lineup</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-white mb-3">
            Explore Our <span className="text-brand-yellow">Full Menu</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 font-sans">
            Every dish is prepared fresh to order in Kasur with premium quality chicken, cheese, and secret spices.
          </p>
        </div>

        {/* Live Search Bar */}
        <div className="max-w-md mx-auto mb-8 relative">
          <div className="relative flex items-center">
            <Search className="absolute left-4 w-5 h-5 text-neutral-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search shawarma, zinger, cheese crust pizza..."
              className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-400 text-sm focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/30 transition-all shadow-inner"
              aria-label="Search Menu"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 p-1 rounded-full text-neutral-400 hover:text-white"
                aria-label="Clear Search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Sticky Category Tabs (Horizontal Scroll on Mobile, Centered on Wide Desktop) */}
        <div className="sticky top-20 z-20 -mx-4 px-4 sm:mx-0 sm:px-0 py-3 bg-[#161616]/95 backdrop-blur-md border-y border-neutral-800/80 mb-10">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth pb-1 xl:justify-center">
            {MENU_CATEGORIES.map((cat) => {
              const Icon = getCategoryIcon(cat.id);
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-150 h-10 flex-shrink-0 border ${
                    isActive
                      ? "bg-brand-orange text-white border-brand-orange shadow-md font-black"
                      : "bg-neutral-900/90 text-neutral-300 hover:text-brand-yellow hover:bg-neutral-800 border-neutral-800"
                  }`}
                  aria-pressed={isActive}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-brand-orange"}`} />
                  <span>{cat.shortName}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Category Description Banner & Extra Topping Callout */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 p-3.5 sm:p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800 mb-8">
          <div className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-300">
            <Info className="w-4 h-4 text-brand-yellow flex-shrink-0" />
            <span className="leading-snug">
              {activeCategory === "all"
                ? "Showing all dishes. Tap category pills above to filter."
                : MENU_CATEGORIES.find((c) => c.id === activeCategory)?.description}
            </span>
          </div>

          {/* Add-on Pricing Highlights */}
          {(activeCategory === "platters" || activeCategory === "all") && (
            <div className="text-[11px] sm:text-xs text-amber-300 font-semibold bg-neutral-950 px-3 py-2 rounded-xl border border-amber-500/20 flex flex-wrap items-center gap-x-2 gap-y-1">
              <span className="text-brand-orange font-bold uppercase tracking-wider text-[10px]">Platter Extras:</span>
              <span>Bread Rs 50</span>
              <span className="text-neutral-600">•</span>
              <span>Extra Chicken Rs 150</span>
              <span className="text-neutral-600">•</span>
              <span>Dip Sauce Rs 60</span>
            </div>
          )}
          {(activeCategory === "special-pizza" ||
            activeCategory === "regular-pizza") && (
            <div className="text-[11px] sm:text-xs text-amber-300 font-semibold bg-neutral-950 px-3 py-2 rounded-xl border border-amber-500/20 flex flex-wrap items-center gap-x-2 gap-y-1">
              <span className="text-brand-orange font-bold uppercase tracking-wider text-[10px]">Extra Topping:</span>
              <span>Small Rs 50</span>
              <span className="text-neutral-600">•</span>
              <span>Medium Rs 100</span>
              <span className="text-neutral-600">•</span>
              <span>Large Rs 150</span>
            </div>
          )}
        </div>

        {/* Menu Cards Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 p-8 rounded-2xl bg-neutral-900 border border-neutral-800">
            <Search className="w-12 h-12 text-neutral-500 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">No items found</h3>
            <p className="text-sm text-neutral-400 mb-4">
              We couldn&apos;t find anything matching &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
              className="px-4 py-2 rounded-xl bg-brand-orange text-white text-xs font-bold uppercase"
            >
              Reset Search &amp; Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredItems.map((item) => {
              const currentSize =
                item.sizes && item.sizes.length > 0
                  ? selectedSizes[item.id] || item.sizes[0].name
                  : null;

              const activePrice =
                item.sizes && currentSize
                  ? item.sizes.find((s) => s.name === currentSize)?.price ||
                    item.price
                  : item.price;

              const key = currentSize ? `${item.id}-${currentSize}` : item.id;
              const isJustAdded = !!justAddedMap[key];

              return (
                <div
                  key={item.id}
                  className="group rounded-2xl p-5 bg-neutral-900/90 border border-neutral-800 hover:border-brand-orange/50 transition-all duration-200 hover:-translate-y-1 shadow-card flex flex-col justify-between"
                >
                  <div>
                    {/* Badges Row */}
                    <div className="flex items-center gap-1.5 mb-2.5 flex-wrap">
                      {item.popular && (
                        <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-brand-yellow/15 text-brand-yellow border border-brand-yellow/30 flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          Popular
                        </span>
                      )}
                      {item.spicy && (
                        <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-red-950/80 text-red-400 border border-red-500/30 flex items-center gap-1">
                          <Flame className="w-3 h-3 text-red-500" />
                          Spicy
                        </span>
                      )}
                      {item.chefSpecial && (
                        <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-brand-orange/20 text-brand-orange border border-brand-orange/40">
                          Chef Special
                        </span>
                      )}
                      <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider ml-auto">
                        {item.category.replace("-", " ")}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-brand-yellow transition-colors font-sans mb-1.5">
                      {item.name}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Size Selector for multi-size dishes (Pizza, Pasta, Fries, Water) */}
                    {item.sizes && item.sizes.length > 0 && (
                      <div className="mb-3.5 pt-2 border-t border-neutral-800/70">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
                            Choose Size
                          </span>
                          <span className="text-[11px] font-bold text-brand-yellow">
                            {currentSize}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {item.sizes.map((s) => {
                            const isSelected = currentSize === s.name;
                            return (
                              <button
                                key={s.name}
                                type="button"
                                onClick={() =>
                                  handleSelectSize(item.id, s.name)
                                }
                                className={`px-2.5 py-1 rounded-lg text-xs font-semibold inline-flex items-center gap-1.5 transition-all duration-150 ${
                                  isSelected
                                    ? "bg-brand-orange text-white shadow-sm ring-1 ring-brand-orange"
                                    : "bg-neutral-800/90 text-neutral-300 hover:bg-neutral-700 hover:text-white border border-neutral-700/60"
                                }`}
                              >
                                <span className="text-[11px] font-bold">{s.name}</span>
                                <span className={`text-[10px] ${isSelected ? "text-amber-100 font-bold" : "text-brand-yellow"}`}>
                                  Rs {s.price}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Price & Add to Order Bar */}
                  <div className="pt-3 border-t border-neutral-800 flex items-center justify-between gap-2 mt-auto">
                    <div>
                      <span className="text-[10px] text-neutral-400 block font-semibold uppercase tracking-wider">
                        {currentSize ? currentSize : "Price"}
                      </span>
                      <span className="font-display font-black text-xl sm:text-2xl text-brand-yellow tracking-wide leading-none">
                        Rs {activePrice.toLocaleString()}
                      </span>
                    </div>

                    <button
                      onClick={() => handleAddToCart(item)}
                      className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 min-h-[40px] ${
                        isJustAdded
                          ? "bg-emerald-600 text-white"
                          : "bg-neutral-800 hover:bg-brand-orange text-white hover:shadow-fiery active:scale-95 border border-neutral-700 hover:border-transparent"
                      }`}
                      aria-label={`Add ${item.name} to order`}
                    >
                      {isJustAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Added</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5 text-brand-yellow group-hover:text-white" />
                          <span>Add to Order</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
