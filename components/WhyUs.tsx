"use client";

import React, { useState, useEffect } from "react";
import { Flame, Scale, Clock, Utensils, Star, Award, HeartHandshake, ShieldCheck } from "lucide-react";

export function WhyUs() {
  const [counts, setCounts] = useState({
    rating: 0,
    items: 0,
    closeTime: 0,
    quality: 0,
  });

  // Animated honest counters on mount
  useEffect(() => {
    let frame = 0;
    const totalFrames = 40;
    const interval = setInterval(() => {
      frame++;
      const progress = Math.min(1, frame / totalFrames);
      setCounts({
        rating: +(4.5 * progress).toFixed(1),
        items: Math.floor(45 * progress),
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
      title: "Fresh Flame-Grilled Chicken",
      description:
        "Every skewer is freshly marinated with natural spices and grilled over live charcoal embers. No frozen processed patties.",
      badge: "Pure Charcoal Grill",
      glowColor: "from-amber-500/20 to-orange-600/10",
      borderColor: "border-orange-500/30",
    },
    {
      icon: Scale,
      title: "Generous Kasuri Portions",
      description:
        "We believe true taste comes with genuine satisfaction. Every roll, burger, and platter is loaded generously with meat and cheese.",
      badge: "No Compromise",
      glowColor: "from-yellow-500/20 to-amber-600/10",
      borderColor: "border-yellow-500/30",
    },
    {
      icon: Clock,
      title: "Late-Night Sizzle Till 2 AM",
      description:
        "Kasur's favorite midnight hub. Whether studying late, coming from duty, or hanging out with friends, we are open until 2:00 AM daily.",
      badge: "Open Till 2 AM",
      glowColor: "from-red-500/20 to-orange-600/10",
      borderColor: "border-red-500/30",
    },
    {
      icon: Utensils,
      title: "Dine-In, Takeaway & Delivery",
      description:
        "Air-conditioned family hall, lightning-fast counter takeaway, and steaming hot doorstep delivery across College Road & Kasur.",
      badge: "Full Service",
      glowColor: "from-emerald-500/20 to-teal-600/10",
      borderColor: "border-emerald-500/30",
    },
  ];

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-[#121212] relative overflow-hidden">
      {/* Decorative ambient glowing circles */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-orange/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-brand-yellow/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Kasur&apos;s Trusted Taste</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-white mb-4">
            Why Kasur Loves <span className="text-brand-yellow">Shawarma Line</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 font-sans leading-relaxed">
            From our sizzling rotisseries to our stone-baked pizza ovens, we don&apos;t take shortcuts.
            Here is what makes every bite memorable.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`group relative rounded-2xl p-6 bg-neutral-900/90 border ${item.borderColor} hover:border-brand-orange transition-all duration-300 hover:-translate-y-1.5 shadow-card hover:shadow-fiery flex flex-col justify-between`}
              >
                {/* Background radial glow on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${item.glowColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-neutral-800 border border-neutral-700 group-hover:border-brand-yellow flex items-center justify-center mb-5 transition-colors">
                    <Icon className="w-6 h-6 text-brand-yellow group-hover:text-brand-orange transition-colors" />
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-neutral-800 text-brand-yellow border border-neutral-700 inline-block mb-3">
                    {item.badge}
                  </span>

                  <h3 className="text-lg font-bold text-white mb-2 font-sans group-hover:text-brand-yellow transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Honest Animated Counter Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-neutral-900 via-neutral-900/95 to-neutral-900 border border-neutral-800 shadow-xl divide-y sm:divide-y-0 sm:divide-x divide-neutral-800">
          {/* Stat 1: Google Rating */}
          <div className="flex flex-col items-center justify-center p-4">
            <div className="flex items-center gap-1.5 text-brand-yellow mb-1">
              <Star className="w-5 h-5 fill-brand-yellow" />
              <span className="font-display font-black text-3xl sm:text-4xl text-white">
                {counts.rating}
              </span>
              <span className="text-sm font-bold text-neutral-400">/ 5.0</span>
            </div>
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 text-center">
              Google Rating (480+ Reviews)
            </p>
          </div>

          {/* Stat 2: Menu Items */}
          <div className="flex flex-col items-center justify-center p-4">
            <span className="font-display font-black text-3xl sm:text-4xl text-brand-orange mb-1">
              {counts.items}+
            </span>
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 text-center">
              Fresh Menu Items
            </p>
          </div>

          {/* Stat 3: Late Night Closing */}
          <div className="flex flex-col items-center justify-center p-4">
            <span className="font-display font-black text-3xl sm:text-4xl text-white mb-1">
              {counts.closeTime} AM
            </span>
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 text-center">
              Daily Late Night Service
            </p>
          </div>

          {/* Stat 4: Fresh Chicken Guarantee */}
          <div className="flex flex-col items-center justify-center p-4">
            <span className="font-display font-black text-3xl sm:text-4xl text-brand-yellow mb-1">
              {counts.quality}%
            </span>
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 text-center">
              Fresh Daily Marinated Chicken
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
