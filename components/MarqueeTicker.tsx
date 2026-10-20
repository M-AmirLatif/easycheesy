"use client";

import React from "react";
import { Flame, Star, Sparkles } from "lucide-react";

export function MarqueeTicker() {
  const tickerItems = [
    { title: "Ultimate Beef Smash Burger", price: "Rs 850", tag: "Must Try" },
    { title: "Easy Cheesy Crown Pizza", price: "Rs 1250+", tag: "Chef Special" },
    { title: "Injected Crispy Broast", price: "Rs 680+", tag: "Best Seller" },
    { title: "Spiceshot Duo Deal", price: "Rs 999", tag: "Hot Deal" },
    { title: "Smokin' Club Sandwich", price: "Rs 700", tag: "Crowd Fav" },
    { title: "Cheesy Craze Fries", price: "Rs 710", tag: "Melty Cheese" },
    { title: "Dynamite Wings (Olives & Sesame)", price: "Rs 599", tag: "Spicy Hit" },
    { title: "Fresh Mint Margarita", price: "Rs 220", tag: "Refresher" },
    { title: "Kids Play Zone Upstairs", price: "Inflatable Fun", tag: "Family" },
    { title: "Open Till 2:00 AM Daily", price: "Shahbaz Khan Rd", tag: "Kasur" },
  ];

  // Repeat twice for seamless infinite marquee loop
  const displayItems = [...tickerItems, ...tickerItems];

  return (
    <div
      id="marquee"
      className="relative w-full overflow-hidden bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 border-y border-amber-500/20 py-3.5 select-none"
    >
      {/* Edge gradient masks for smooth fade */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#0C0C0E] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#0C0C0E] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {displayItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 mx-4 sm:mx-6 px-3.5 py-1.5 rounded-full bg-neutral-900/80 border border-neutral-800 shadow-sm whitespace-nowrap"
          >
            <Flame className="w-3.5 h-3.5 text-orange-500 flex-shrink-0" />
            <span className="font-display uppercase text-sm sm:text-base tracking-wide text-neutral-100 font-bold">
              {item.title}
            </span>
            <span className="text-xs font-black text-amber-400 font-sans">
              {item.price}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
              {item.tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
