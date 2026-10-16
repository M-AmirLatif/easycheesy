"use client";

import React from "react";
import {
  Utensils,
  PhoneCall,
  Smile,
  Bike,
  Store,
  ShoppingBag,
  Car,
  ArrowRight,
  Flame,
} from "lucide-react";
import { RESTAURANT_INFO } from "@/lib/restaurant-info";

export function HowToOrderSection() {
  const steps = [
    {
      num: "01",
      title: "Choose Your Sizzle",
      description:
        "Select your favorite slow-roasted shawarma, crispy zinger, stone-baked pizza, or loaded platter.",
      icon: Utensils,
      accent: "text-brand-yellow",
      bgGradient: "from-amber-500/20 to-orange-500/10",
    },
    {
      num: "02",
      title: "Tap WhatsApp or Call",
      description:
        "Hit 'Order on WhatsApp' to send your auto-formatted cart, or call 0327-0090903 for direct assistance.",
      icon: PhoneCall,
      accent: "text-emerald-400",
      bgGradient: "from-emerald-500/20 to-teal-500/10",
    },
    {
      num: "03",
      title: "Hot & Fresh Enjoyment",
      description:
        "Savor steaming hot goodness at our dine-in hall, grab your quick takeaway, or receive fast delivery.",
      icon: Smile,
      accent: "text-brand-orange",
      bgGradient: "from-brand-orange/20 to-red-500/10",
    },
  ];

  const services = [
    {
      icon: Bike,
      title: "Fast Delivery",
      subtitle: "Across College Road & Kasur city",
    },
    {
      icon: Store,
      title: "Family Dine-In",
      subtitle: "Clean, air-conditioned comfortable hall",
    },
    {
      icon: ShoppingBag,
      title: "Express Takeaway",
      subtitle: "Freshly packed hot at our counter",
    },
    {
      icon: Car,
      title: "Drive-Through / Car Service",
      subtitle: "Convenient window pickup right to your car",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#101010] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/15 border border-brand-orange/40 text-brand-orange text-xs font-bold uppercase tracking-wider mb-3">
            <Flame className="w-3.5 h-3.5 text-brand-yellow" />
            <span>Effortless Ordering</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-white mb-3">
            How To <span className="text-brand-yellow">Order</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 font-sans">
            Three simple steps between you and Kasur&apos;s most satisfying grill experience.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative rounded-2xl p-7 bg-neutral-900 border border-neutral-800 hover:border-brand-orange/50 transition-all duration-300 hover:-translate-y-1 shadow-card flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display font-black text-4xl text-neutral-700 tracking-wider">
                      {step.num}
                    </span>
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.bgGradient} border border-neutral-700 flex items-center justify-center`}
                    >
                      <Icon className={`w-6 h-6 ${step.accent}`} />
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white font-sans mb-3">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4 Fulfillment Services */}
        <div className="pt-8 border-t border-neutral-800/80">
          <h3 className="text-center text-xs font-bold uppercase tracking-widest text-neutral-400 mb-8">
            Flexible Dining &amp; Delivery Channels in Kasur
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <div
                  key={i}
                  className="flex flex-col items-center text-center p-5 rounded-xl bg-neutral-900/60 border border-neutral-800/80 hover:border-neutral-700 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-brand-yellow" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1 font-sans">
                    {svc.title}
                  </h4>
                  <p className="text-xs text-neutral-400">
                    {svc.subtitle}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
