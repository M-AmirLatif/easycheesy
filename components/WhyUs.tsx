"use client";

import React, { useState, useEffect } from "react";
import {
  Flame,
  Scale,
  Clock,
  Sparkles,
  Star,
  Award,
  HeartHandshake,
  ShieldCheck,
  Smile,
  Layers,
} from "lucide-react";
import { RESTAURANT_INFO } from "@/lib/restaurant-info";

export function WhyUs() {
  const [counts, setCounts] = useState({
    rating: 0,
    items: 0,
    closeTime: 0,
    quality: 0,
  });

  useEffect(() => {
    let frame = 0;
    const totalFrames = 40;
    const interval = setInterval(() => {
      frame++;
      const progress = Math.min(1, frame / totalFrames);
      setCounts({
        rating: +(4.1 * progress).toFixed(1),
        items: Math.floor(105 * progress),
        closeTime: 2,
        quality: Math.floor(100 * progress),
      });

      if (frame >= totalFrames) {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Flame,
      title: "Real Smashed Patties & Injected Broast",
      description:
        "Juicy double beef patties smashed crisp on high-heat griddles, plus tender flavor-injected crispy broast. Real taste, no shortcuts.",
      badge: "Signature Craft",
      glowColor: "from-amber-500/20 to-orange-600/10",
      borderColor: "border-amber-500/30",
    },
    {
      icon: Smile,
      title: "Family Dining & Dedicated Kids Zone",
      description:
        "Modern two-floor air-conditioned hall with luxury seating, cozy family booths, and an upstairs Kids Play Zone with an inflatable castle.",
      badge: "Family Friendly",
      glowColor: "from-yellow-500/20 to-amber-600/10",
      borderColor: "border-yellow-500/30",
    },
    {
      icon: Layers,
      title: "Artisan Cheesy Crown Pizzas",
      description:
        "Cheesy crown crusts, stuffed rings, and generous mozzarella toppings made with 100% pure dairy cheese and house secret sauces.",
      badge: "Pure Indulgence",
      glowColor: "from-orange-500/20 to-amber-600/10",
      borderColor: "border-orange-500/30",
    },
    {
      icon: Clock,
      title: "Late-Night Feast Till 2 AM",
      description:
        "Kasur's favorite midnight hub. Whether family dinner, friends hangout, or late-night study cravings, our kitchen serves hot till 2:00 AM daily.",
      badge: "Open Till 2 AM",
      glowColor: "from-amber-600/20 to-red-600/10",
      borderColor: "border-amber-600/30",
    },
  ];

  const stats = [
    {
      value: `${counts.rating} ★`,
      label: "Google Maps Rating",
      sub: "269+ real customer reviews",
      color: "text-amber-400",
    },
    {
      value: `${counts.items}+`,
      label: "Menu Varieties",
      sub: "Burgers, pizzas, broast & Chinese",
      color: "text-orange-400",
    },
    {
      value: `${counts.closeTime}:00 AM`,
      label: "Midnight Hub",
      sub: "Open every single day",
      color: "text-amber-400",
    },
    {
      value: `${counts.quality}%`,
      label: "Fresh Ingredients",
      sub: "100% Halal & clean kitchen",
      color: "text-emerald-400",
    },
  ];

  return (
    <section id="why-us" className="py-14 sm:py-24 bg-[#101012] relative overflow-hidden">
      {/* Background radial highlights */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-400 text-xs font-black uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-orange-400" />
            <span>Kasur&apos;s Premium Fast Food</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-white mb-2 sm:mb-3">
            Why Choose <span className="text-amber-400">Easy Cheesy</span>?
          </h2>
          <p className="text-xs sm:text-base text-neutral-300 font-sans leading-relaxed">
            &ldquo;Serving Moments, Not Just Meals.&rdquo; Discover why families and food lovers
            across Kasur choose us for their favorite burgers, pizzas, and celebrations.
          </p>
        </div>

        {/* 4 Feature Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-16">
          {features.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <div
                key={index}
                className={`relative rounded-2xl p-5 sm:p-6 bg-neutral-900/90 border ${feat.borderColor} hover:border-amber-400/80 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between shadow-card group overflow-hidden`}
              >
                <div
                  className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br ${feat.glowColor} rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500`}
                />

                <div>
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-neutral-800/80 border border-neutral-700/60 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
                  </div>

                  <span className="text-[10px] font-black uppercase tracking-wider text-orange-400 block mb-1">
                    {feat.badge}
                  </span>

                  <h3 className="font-display font-black text-lg sm:text-xl uppercase tracking-wide text-white mb-1.5 sm:mb-2 leading-snug">
                    {feat.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                <div className="mt-4 sm:mt-5 pt-3 border-t border-neutral-800/80 flex items-center gap-1.5 text-neutral-500 group-hover:text-amber-400 transition-colors text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Quality Guaranteed</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Honest Stats Bar (Clean Individual Tiles - No broken vertical border lines) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="rounded-2xl p-4 sm:p-6 bg-neutral-900/90 border border-neutral-800 hover:border-amber-500/40 transition-all duration-200 text-center shadow-md flex flex-col items-center justify-center"
            >
              <div className={`font-display font-black text-2xl sm:text-4xl ${stat.color} mb-1 tracking-tight`}>
                {stat.value}
              </div>
              <p className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-neutral-200 leading-tight">
                {stat.label}
              </p>
              <p className="text-[10px] sm:text-[11px] text-neutral-400 mt-1 leading-snug">
                {stat.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
