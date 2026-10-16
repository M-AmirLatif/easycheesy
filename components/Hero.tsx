"use client";

import React from "react";
import Image from "next/image";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { RESTAURANT_INFO } from "@/lib/restaurant-info";
import { IMAGES, SHIMMER_BLUR } from "@/lib/images";
import {
  MessageCircle,
  UtensilsCrossed,
  Star,
  Flame,
  Clock,
  Sparkles,
  ChevronDown,
  ShieldCheck,
} from "lucide-react";

export function Hero() {
  const phrases = [
    "Juicy Shawarma.",
    "Loaded Zinger Burgers.",
    "Cheesy Pizzas.",
    "Open Till 2 AM.",
  ];

  const { text } = useTypingEffect(phrases, {
    typingSpeed: 75,
    deletingSpeed: 40,
    pauseDuration: 1800,
  });

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-brand-charcoal pt-16 pb-20 sm:py-24"
    >
      {/* Background Hero Image with Dark Vignette Gradient */}
      <div className="absolute inset-0 z-0">
        <Image
          src={IMAGES.hero.bg}
          alt={IMAGES.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-30 scale-105 transition-transform duration-1000 ease-out"
          placeholder="blur"
          blurDataURL={SHIMMER_BLUR}
        />
        {/* Multi-layered dark fiery vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-[#0E0E0E]/85 to-[#0E0E0E]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-600/20 via-orange-950/10 to-transparent pointer-events-none" />
        {/* Glowing flame radial background spots */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-orange/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-brand-yellow/10 blur-[100px] rounded-full pointer-events-none" />
      </div>

      {/* Balanced Floating Decorative Badges (Wide Desktop only, vertically centered) */}
      <div
        className="hidden 2xl:flex absolute top-1/2 -translate-y-1/2 left-8 xl:left-14 z-10 items-center gap-3 px-4 py-3 rounded-2xl bg-black/70 backdrop-blur-md border border-neutral-700/80 shadow-2xl animate-float-slow max-w-[240px]"
        style={{ animationDuration: "6s" }}
      >
        <div className="w-10 h-10 rounded-full overflow-hidden border border-brand-orange flex-shrink-0 relative shadow-md">
          <Image
            src="/images/shawarma-line-avatar.png"
            alt="Shawarma Line Charcoal Grill"
            fill
            sizes="40px"
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-xs font-bold text-white uppercase tracking-wider">
            100% Charcoal Grill
          </p>
          <p className="text-[11px] text-neutral-400 leading-snug">Authentic smoky Arabic aroma</p>
        </div>
      </div>

      <div
        className="hidden 2xl:flex absolute top-1/2 -translate-y-1/2 right-8 xl:right-14 z-10 items-center gap-3 px-4 py-3 rounded-2xl bg-black/70 backdrop-blur-md border border-neutral-700/80 shadow-2xl animate-float-slow max-w-[240px]"
        style={{ animationDuration: "7s", animationDelay: "1.5s" }}
      >
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-brand-orange flex items-center justify-center shadow-md flex-shrink-0">
          <Sparkles className="w-5 h-5 text-brand-yellow" />
        </div>
        <div>
          <p className="text-xs font-bold text-white uppercase tracking-wider">
            Kasur&apos;s Midnight Hub
          </p>
          <p className="text-[11px] text-amber-400 font-semibold leading-snug">Open Daily Till 2:00 AM</p>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-3 sm:px-6 lg:px-8 text-center flex flex-col items-center w-full">
        {/* Top Badges Row */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6 max-w-full">
          {/* Google 4.5 Rating Badge */}
          <div className="inline-flex items-center gap-1 px-2.5 py-1 sm:px-3 sm:py-1 rounded-full bg-black/80 backdrop-blur-md border border-amber-500/40 shadow-[0_0_15px_rgba(255,194,14,0.15)]">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span className="text-[11px] sm:text-xs font-bold text-neutral-100 whitespace-nowrap">
              {RESTAURANT_INFO.rating} ★ Google Rating
            </span>
          </div>

          {/* Open Till 2 AM Pill */}
          <div className="inline-flex items-center gap-1 px-2.5 py-1 sm:px-3 sm:py-1 rounded-full bg-brand-orange/15 border border-brand-orange/40 text-brand-orange shadow-[0_0_15px_rgba(249,115,22,0.2)]">
            <Clock className="w-3 h-3 text-brand-yellow" />
            <span className="text-[11px] sm:text-xs font-bold tracking-wide uppercase text-amber-300 whitespace-nowrap">
              Open Till 2 AM
            </span>
          </div>

          {/* Kasur Location Pill */}
          <div className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-neutral-900/80 border border-neutral-700 text-neutral-300 text-xs font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Kasur</span>
          </div>
        </div>

        {/* Authentic Mascot Medallion */}
        <div className="relative mb-2 flex items-center justify-center">
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-brand-orange shadow-[0_0_20px_rgba(249,115,22,0.6)] bg-black/70 transition-transform duration-300 hover:scale-105">
            <Image
              src="/images/shawarma-line-avatar.png"
              alt="Shawarma Line Flame Chef Mascot"
              fill
              sizes="64px"
              priority
              className="object-cover"
            />
          </div>
        </div>

        {/* Script Accent Subtitle */}
        <p className="font-script text-brand-orange text-xl sm:text-3xl lg:text-4xl mb-1.5 sm:mb-2 drop-shadow-[0_2px_10px_rgba(249,115,22,0.4)]">
          &ldquo;{RESTAURANT_INFO.tagline}&rdquo;
        </p>

        {/* Main Display Headline with Typing Animation */}
        <h1 className="font-display font-black text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tight text-white leading-none max-w-4xl min-h-[90px] sm:min-h-[140px] md:min-h-[160px] flex flex-col justify-center items-center w-full">
          <span className="text-neutral-100">Craving Hot &amp;</span>
          <span className="bg-gradient-to-r from-brand-yellow via-brand-orange to-red-500 bg-clip-text text-transparent drop-shadow-[0_4px_25px_rgba(249,115,22,0.5)] flex items-center justify-center max-w-full truncate px-1">
            {text}
            {/* Blinking Cursor */}
            <span
              className="inline-block w-1 sm:w-1.5 h-6 xs:h-8 sm:h-12 lg:h-14 bg-brand-yellow ml-1.5 align-middle animate-pulse"
              aria-hidden="true"
            />
          </span>
        </h1>

        {/* Descriptive Pitch Copy */}
        <p className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg text-neutral-300 max-w-2xl font-sans leading-relaxed">
          Kasur&apos;s go-to destination for live flame-roasted chicken shawarmas,
          monster zinger burgers, and golden stuffed-crust pizzas.
          Charcoal grilled fresh right in front of you till late night.
        </p>

        {/* Dual Primary CTAs */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
          {/* WhatsApp Order CTA */}
          <a
            href={`https://wa.me/${RESTAURANT_INFO.whatsAppNumber}?text=Salam%20Shawarma%20Line!%20I%20would%20like%20to%20order.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-black text-base uppercase tracking-wider shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-95 min-h-[50px] focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Order on WhatsApp</span>
          </a>

          {/* View Menu CTA */}
          <a
            href="#menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-neutral-900/90 hover:bg-neutral-800 border-2 border-brand-orange/60 hover:border-brand-yellow text-brand-yellow hover:text-white font-bold text-base uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] active:scale-95 min-h-[50px] shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-orange"
          >
            <UtensilsCrossed className="w-5 h-5 text-brand-orange" />
            <span>View Full Menu</span>
          </a>
        </div>

        {/* Micro highlights under CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
            Cash on Delivery / Takeaway
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
            Fresh Chicken Prepared Daily
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Family Dine-In Hall
          </span>
        </div>

        {/* Scroll down indicator */}
        <div className="mt-10 sm:mt-12">
          <a
            href="#marquee"
            className="inline-flex flex-col items-center text-neutral-400 hover:text-brand-yellow transition-colors group p-2"
            aria-label="Scroll to best sellers"
          >
            <span className="text-[11px] uppercase tracking-widest font-semibold mb-1 group-hover:translate-y-0.5 transition-transform">
              Explore Our Sizzle
            </span>
            <ChevronDown className="w-5 h-5 animate-bounce text-brand-orange" />
          </a>
        </div>
      </div>
    </section>
  );
}
