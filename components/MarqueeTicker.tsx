"use client";

import React from "react";
import { Flame, Star, Sparkles } from "lucide-react";

export function MarqueeTicker() {
  const tickerItems = [
    { title: "SL Shawarma Special", price: "Rs 400", tag: "Must Try" },
    { title: "Cheese Crust Pizza", price: "Rs 650+", tag: "Best Seller" },
    { title: "Crispy Zinger Burger", price: "Rs 400", tag: "Crowd Fav" },
    { title: "Charcoal Grill Platter", price: "Rs 800", tag: "Chef Special" },
    { title: "Volcano Loaded Fries", price: "Rs 500", tag: "Late Night" },
    { title: "Honey Chilli Wings (5pc)", price: "Rs 400", tag: "Crispy" },
    { title: "SL Special Grill Paratha", price: "Rs 550", tag: "Smoky" },
    { title: "Crown Crust Pizza", price: "Rs 1200+", tag: "Royal" },
    { title: "Tower Zinger Burger", price: "Rs 700", tag: "Mega Feast" },
    { title: "Open Till 2:00 AM", price: "College Rd", tag: "Daily" },
  ];

  // Repeat twice for seamless infinite marquee loop
  const displayItems = [...tickerItems, ...tickerItems];

  return (
    <div
      id="marquee"
      className="relative w-full overflow-hidden bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 border-y border-brand-orange/20 py-3.5 select-none"
    >
      {/* Edge gradient masks for smooth fade */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#0E0E0E] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#0E0E0E] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {displayItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 mx-4 sm:mx-6 px-3.5 py-1.5 rounded-full bg-neutral-900/80 border border-neutral-800 shadow-sm whitespace-nowrap"
          >
            <Flame className="w-3.5 h-3.5 text-brand-orange flex-shrink-0" />
            <span className="font-display uppercase text-sm sm:text-base tracking-wide text-neutral-100 font-bold">
              {item.title}
            </span>
            <span className="text-xs font-black text-brand-yellow font-sans">
              {item.price}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-brand-orange/20 text-brand-orange border border-brand-orange/30">
              {item.tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
