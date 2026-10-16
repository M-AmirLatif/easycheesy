"use client";

import React from "react";
import Image from "next/image";
import { SIGNATURE_PICKS, SignaturePick } from "@/data/menu";
import { useCart } from "@/context/CartContext";
import { SHIMMER_BLUR } from "@/lib/images";
import { Flame, ShoppingBag, Sparkles, Check } from "lucide-react";

export function SignaturePicks() {
  const { addItem, setIsCartOpen } = useCart();
  const [addedId, setAddedId] = React.useState<string | null>(null);

  const handleOrder = (dish: SignaturePick) => {
    addItem({
      id: dish.id,
      name: dish.name,
      price: dish.price,
      image: dish.image,
    });
    setAddedId(dish.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  return (
    <section id="signature" className="py-20 sm:py-28 bg-[#0E0E0E] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brand-orange/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/15 border border-brand-orange/40 text-brand-orange text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-brand-yellow" />
              <span>Crowd Favorites &amp; Chef Specialities</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
              Signature <span className="text-brand-yellow">Picks</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-300 font-sans">
              Hand-picked by our grill masters. Six iconic dishes that define the fiery flavor of Shawarma Line Kasur.
            </p>
          </div>

          <a
            href="#menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-neutral-900 border border-neutral-700/80 hover:border-brand-orange text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-orange hover:text-brand-yellow transition-all duration-200 shadow-md group whitespace-nowrap"
          >
            <span>Explore All 45+ Menu Items</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
          </a>
        </div>

        {/* 6 Hero Dishes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SIGNATURE_PICKS.map((dish) => {
            const isJustAdded = addedId === dish.id;

            return (
              <div
                key={dish.id}
                className="group relative rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-brand-orange/60 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between overflow-hidden shadow-card hover:shadow-fiery"
              >
                {/* Dish Image Container with Next/Image */}
                <div className="relative w-full h-52 sm:h-56 overflow-hidden bg-neutral-950">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    placeholder="blur"
                    blurDataURL={SHIMMER_BLUR}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-black/30" />

                  {/* Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-black/80 text-brand-yellow border border-brand-yellow/40 backdrop-blur-md shadow-md">
                      {dish.tag}
                    </span>
                  </div>

                  {/* Price Tag Overlay */}
                  <div className="absolute bottom-3 right-3">
                    <span className="px-3 py-1 rounded-xl bg-brand-charcoal/95 border border-brand-orange/40 text-brand-yellow font-display font-black text-lg tracking-wider shadow-lg">
                      {dish.priceText}
                    </span>
                  </div>
                </div>

                {/* Dish Info */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-semibold text-brand-orange uppercase tracking-wider block mb-1">
                      {dish.subtitle}
                    </span>
                    <h3 className="text-xl font-black text-white group-hover:text-brand-yellow transition-colors font-sans mb-2">
                      {dish.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed mb-5">
                      {dish.description}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-3 border-t border-neutral-800/80 flex items-center gap-2.5">
                    <button
                      onClick={() => handleOrder(dish)}
                      className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-black text-xs uppercase tracking-wider transition-all duration-200 min-h-[44px] ${
                        isJustAdded
                          ? "bg-emerald-600 text-white"
                          : "bg-brand-orange hover:bg-brand-orangeDark text-white shadow-md hover:shadow-fiery active:scale-95"
                      }`}
                      aria-label={`Order ${dish.name}`}
                    >
                      {isJustAdded ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Added to Cart!</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-4 h-4" />
                          <span>Add to Order</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => {
                        handleOrder(dish);
                        setIsCartOpen(true);
                      }}
                      className="px-3 py-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white text-xs font-bold uppercase transition-colors min-h-[44px] border border-neutral-700"
                      aria-label="View Cart"
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
