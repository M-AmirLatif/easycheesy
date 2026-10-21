"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import {
  MENU_CATEGORIES,
  MENU_ITEMS,
  MenuCategoryId,
  MenuItem,
} from "@/data/menu";
import { useCart } from "@/context/CartContext";
import { SHIMMER_BLUR } from "@/lib/images";
import {
  Search,
  Flame,
  Plus,
  Check,
  Sparkles,
  Layers,
  UtensilsCrossed,
  Pizza,
  Beef,
  Sandwich,
  Drumstick,
  Soup,
  CupSoda,
  Coffee,
  IceCream,
  PlusCircle,
  Scroll,
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
      case "burger":
        return Beef;
      case "pizza":
        return Pizza;
      case "sandwich":
        return Sandwich;
      case "broast":
        return Drumstick;
      case "wraps":
        return Scroll;
      case "appetizers":
        return Sparkles;
      case "fries":
        return Layers;
      case "pasta":
        return UtensilsCrossed;
      case "chinese":
        return Soup;
      case "shakes-frappes":
        return CupSoda;
      case "mocktails-drinks":
        return Coffee;
      case "icecream-desserts":
        return IceCream;
      case "dips":
        return PlusCircle;
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
      const chosen = item.sizes.find((s) => s.name === chosenSizeName);
      if (chosen) {
        price = chosen.price;
        sizeLabel = chosen.name;
      }
    }

    const itemKey = sizeLabel ? `${item.id}-${sizeLabel}` : item.id;

    addItem({
      id: item.id,
      name: item.name,
      price: price,
      size: sizeLabel,
      image: item.image,
    });

    setJustAddedMap((prev) => ({ ...prev, [itemKey]: true }));
    setTimeout(() => {
      setJustAddedMap((prev) => ({ ...prev, [itemKey]: false }));
    }, 1200);
  };

  const currentCategoryObj = MENU_CATEGORIES.find(
    (c) => c.id === activeCategory
  );

  return (
    <section id="menu" className="py-14 sm:py-24 bg-[#121214] relative overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-amber-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-orange-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2.5">
            <Flame className="w-3.5 h-3.5 text-orange-500" />
            <span>Digital Menu Catalog</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-white mb-2">
            Easy Cheesy <span className="text-amber-400">Menu</span>
          </h2>
          <p className="text-xs sm:text-base text-neutral-300 font-sans leading-relaxed">
            Every dish crafted fresh to order. Filter by category, select portion sizes,
            and order directly for takeaway or doorstep delivery across Kasur.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-6 sm:mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search burgers, pizzas, broast, shakes, wings..."
              className="w-full pl-11 pr-16 py-3 rounded-2xl bg-neutral-900/90 border border-neutral-700/80 text-white placeholder-neutral-400 text-xs sm:text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all shadow-inner"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 px-2 py-1 rounded text-neutral-400 hover:text-white text-xs font-semibold"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Pills (Smooth Horizontal Touch-Scroll) */}
        <div className="mb-6 sm:mb-10 overflow-x-auto pb-2 scrollbar-none flex gap-2 items-center justify-start md:justify-center -mx-4 px-4 sm:mx-0 sm:px-0">
          {MENU_CATEGORIES.map((cat) => {
            const Icon = getCategoryIcon(cat.id);
            const isActive = activeCategory === cat.id;
            const count =
              cat.id === "all"
                ? MENU_ITEMS.length
                : MENU_ITEMS.filter((i) => i.category === cat.id).length;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl font-bold text-xs uppercase tracking-wider whitespace-nowrap transition-all duration-200 flex-shrink-0 ${
                  isActive
                    ? "bg-gradient-to-r from-amber-500 to-orange-500 text-black shadow-md scale-[1.02]"
                    : "bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-black" : "text-amber-400"}`} />
                <span>{cat.shortName}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-black ${
                    isActive
                      ? "bg-black/25 text-black"
                      : "bg-neutral-800 text-neutral-400"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Category Description Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 sm:p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800 mb-6 sm:mb-8">
          <div>
            <h3 className="font-display font-black text-lg sm:text-xl text-white tracking-wide uppercase">
              {currentCategoryObj?.name || "All Items"}
            </h3>
            <p className="text-xs text-neutral-400 font-sans mt-0.5">
              {currentCategoryObj?.description}
            </p>
          </div>

          <div className="text-[10px] sm:text-xs text-amber-300 font-semibold bg-neutral-950 px-3 py-2 rounded-xl border border-amber-500/20 flex flex-wrap items-center gap-x-2 gap-y-1 self-start sm:self-auto">
            <span className="text-orange-400 font-bold uppercase tracking-wider">Add-ons:</span>
            <span>Cheese Slice Rs 80</span>
            <span className="text-neutral-600">•</span>
            <span>Beef Patty Rs 300</span>
            <span className="text-neutral-600">•</span>
            <span>Sp. Dip Rs 100</span>
          </div>
        </div>

        {/* Menu Cards Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 p-8 rounded-2xl bg-neutral-900 border border-neutral-800">
            <Search className="w-12 h-12 text-neutral-500 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">No dishes found</h3>
            <p className="text-xs sm:text-sm text-neutral-400 mb-4">
              We couldn&apos;t find anything matching &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-black text-xs font-bold uppercase"
            >
              Reset Search &amp; Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
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
                  className="group rounded-2xl bg-neutral-900/90 border border-neutral-800 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1 shadow-card overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    {/* Item Image with Fallback and Next/Image */}
                    <div className="relative w-full h-48 sm:h-52 bg-neutral-950 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                        placeholder="blur"
                        blurDataURL={SHIMMER_BLUR}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-transparent to-black/30" />

                      {/* Badges on Top of Image */}
                      <div className="absolute top-3 left-3 flex items-center gap-1.5 flex-wrap">
                        {item.popular && (
                          <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-black/85 text-amber-400 border border-amber-500/40 backdrop-blur-md flex items-center gap-1">
                            <Sparkles className="w-3 h-3 text-amber-400" />
                            Popular
                          </span>
                        )}
                        {item.spicy && (
                          <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-red-950/90 text-red-400 border border-red-500/50 backdrop-blur-md flex items-center gap-1">
                            <Flame className="w-3 h-3 text-red-500" />
                            Spicy
                          </span>
                        )}
                        {item.chefSpecial && (
                          <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-orange-950/90 text-orange-400 border border-orange-500/50 backdrop-blur-md">
                            Special
                          </span>
                        )}
                      </div>

                      {/* Category Label on Image */}
                      <div className="absolute top-3 right-3">
                        <span className="text-[10px] font-bold text-neutral-300 uppercase tracking-wider px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-md">
                          {item.category.replace("-", " ")}
                        </span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-4 sm:p-5">
                      <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-400 transition-colors font-sans mb-1.5 leading-snug">
                        {item.name}
                      </h4>

                      <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed mb-3 line-clamp-2">
                        {item.description}
                      </p>

                      {/* Size Selector if available */}
                      {item.sizes && item.sizes.length > 0 && (
                        <div className="mb-2 pt-2 border-t border-neutral-800/80">
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
                              Choose Size
                            </span>
                            <span className="text-[11px] font-bold text-amber-400">
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
                                  onClick={() => handleSelectSize(item.id, s.name)}
                                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                                    isSelected
                                      ? "bg-amber-500 text-black shadow-sm"
                                      : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700"
                                  }`}
                                >
                                  {s.name} (Rs {s.price})
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Balanced Card Footer: Price Left + Add to Cart Right */}
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-3 border-t border-neutral-800/70 flex items-center justify-between gap-3">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-neutral-500 uppercase tracking-wider font-bold leading-none mb-1">
                        Price
                      </span>
                      <span className="font-display font-black text-xl text-amber-400 leading-none">
                        Rs {activePrice.toLocaleString()}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleAddToCart(item)}
                      className={`inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 active:scale-95 min-h-[40px] ${
                        isJustAdded
                          ? "bg-emerald-500 text-black shadow-[0_0_15px_rgba(16,185,129,0.5)]"
                          : "bg-gradient-to-r from-amber-500 to-orange-500 text-black hover:brightness-110 shadow-md"
                      }`}
                    >
                      {isJustAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Added!</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add to Cart</span>
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
