"use client";

import React from "react";
import {
  Utensils,
  PhoneCall,
  Smile,
  Bike,
  Store,
  Baby,
  Clock,
  ArrowRight,
  Flame,
} from "lucide-react";
import { RESTAURANT_INFO } from "@/lib/restaurant-info";

export function HowToOrderSection() {
  const steps = [
    {
      num: "01",
      title: "Explore The Menu",
      description:
        "Select your favorite double beef smash burger, crown crust pizza, flavor-injected broast, or club sandwiches.",
      icon: Utensils,
      accent: "text-amber-400",
      bgGradient: "from-amber-500/20 to-orange-500/10",
    },
    {
      num: "02",
      title: "Tap WhatsApp or Call",
      description:
        `Send your order directly to our WhatsApp with 1-click cart, or call ${RESTAURANT_INFO.phonePrimary} for immediate assistance.`,
      icon: PhoneCall,
      accent: "text-emerald-400",
      bgGradient: "from-emerald-500/20 to-teal-500/10",
    },
    {
      num: "03",
      title: "Hot & Fresh Enjoyment",
      description:
        "Savor sizzling hot food in our air-conditioned family hall, pick up at our takeaway counter, or get fast delivery.",
      icon: Smile,
      accent: "text-orange-400",
      bgGradient: "from-orange-500/20 to-red-500/10",
    },
  ];

  const services = [
    {
      icon: Bike,
      title: "Doorstep Delivery",
      desc: "Fast riders delivering piping hot burgers & pizzas across Kasur city till 2 AM.",
    },
    {
      icon: Store,
      title: "Quick Takeaway",
      desc: "Call ahead or order online for fast counter pickup on Shahbaz Khan Road.",
    },
    {
      icon: Baby,
      title: "Family Hall & Kids Zone",
      desc: "Two-floor modern dining hall with a dedicated inflatable play area for children.",
    },
    {
      icon: Clock,
      title: "Late Night Till 2 AM",
      desc: "Craving midnight bites? Our kitchen stays open daily until 2:00 AM.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#0F0F11] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Flame className="w-3.5 h-3.5 text-orange-500" />
            <span>Fast, Fresh &amp; Effortless</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-white mb-3">
            How It <span className="text-amber-400">Works</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 font-sans">
            From craving to first bite in three seamless steps.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative rounded-2xl p-6 sm:p-8 bg-neutral-900 border border-neutral-800 shadow-xl flex flex-col justify-between group hover:border-amber-500/60 transition-all duration-300 hover:-translate-y-1.5"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.bgGradient} border border-neutral-700/60 flex items-center justify-center group-hover:scale-110 transition-transform`}
                    >
                      <Icon className={`w-7 h-7 ${step.accent}`} />
                    </div>
                    <span className="font-display font-black text-4xl text-neutral-700 group-hover:text-amber-400/40 transition-colors">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="font-display font-black text-2xl uppercase tracking-wide text-white mb-3 group-hover:text-amber-400 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-sm text-neutral-400 font-sans leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-800/80 flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-wider">
                  <span>Step {step.num}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* 4 Service Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((serv, index) => {
            const Icon = serv.icon;
            return (
              <div
                key={index}
                className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 flex items-start gap-4 hover:border-amber-500/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">
                    {serv.title}
                  </h4>
                  <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                    {serv.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
