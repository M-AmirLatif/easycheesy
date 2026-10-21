"use client";

import React from "react";
import Image from "next/image";
import { SIGNATURE_PICKS, SignaturePick } from "@/data/menu";
import { useCart } from "@/context/CartContext";
import { SHIMMER_BLUR } from "@/lib/images";
import { ShoppingBag, Sparkles, Check, ArrowRight } from "lucide-react";

export function SignaturePicks() {
  const { addItem } = useCart();
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
    <section id="signature" className="py-14 sm:py-24 bg-[#0F0F11] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-500/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-14 gap-4 sm:gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2.5">
              <Sparkles className="w-3.5 h-3.5 text-orange-400" />
              <span>Famous Signatures</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-white mb-2">
              Signature <span className="text-amber-400">Picks</span>
            </h2>
            <p className="text-xs sm:text-base text-neutral-300 font-sans leading-relaxed">
              Hand-crafted crowd favorites that define the flavor of Easy Cheesy Kasur.
              From smashed double beef burgers to cheesy crown pizzas and injected broast.
            </p>
          </div>

          <a
            href="#menu"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl bg-neutral-900 border border-neutral-700 hover:border-amber-400 text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-400 hover:text-white transition-all duration-200 shadow-md group self-start md:self-auto"
          >
            <span>Explore 100+ Menu Items</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>

        {/* 6 Hero Dishes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          {SIGNATURE_PICKS.map((dish) => {
            const isJustAdded = addedId === dish.id;

            return (
              <div
                key={dish.id}
                className="group relative rounded-2xl bg-neutral-900/90 border border-neutral-800 hover:border-amber-500/60 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden shadow-card"
              >
                {/* Dish Image Container with Next/Image */}
                <div className="relative w-full h-48 sm:h-56 overflow-hidden bg-neutral-950">
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
                    <span className="px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-black uppercase tracking-wider bg-black/85 text-amber-400 border border-amber-500/40 backdrop-blur-md shadow-md">
                      {dish.tag}
                    </span>
                  </div>

                  {/* Price Tag Overlay on image */}
                  <div className="absolute bottom-2.5 right-3">
                    <span className="px-2.5 py-1 rounded-xl bg-black/90 border border-amber-500/40 text-amber-400 font-display font-black text-base sm:text-lg tracking-wider shadow-lg">
                      {dish.priceText}
                    </span>
                  </div>
                </div>

                {/* Dish Info */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-bold text-orange-400 uppercase tracking-wider block mb-1">
                      {dish.subtitle}
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-white group-hover:text-amber-400 transition-colors font-sans mb-1.5">
                      {dish.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed mb-4">
                      {dish.description}
                    </p>
                  </div>

                  {/* Order Button in Footer */}
                  <div className="pt-3 border-t border-neutral-800/80 flex items-center justify-between gap-2">
                    <div>
                      <span className="text-[10px] text-neutral-500 uppercase tracking-wider font-bold block">
                        Freshly Prepared
                      </span>
                      <span className="text-base font-black text-amber-400 font-display">
                        {dish.priceText}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleOrder(dish)}
                      className={`inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 active:scale-95 ${
                        isJustAdded
                          ? "bg-emerald-500 text-black shadow-lg"
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
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>Order Dish</span>
                        </>
                      )}
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
