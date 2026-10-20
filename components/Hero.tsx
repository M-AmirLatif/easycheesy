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
  MapPin,
  Smile,
} from "lucide-react";

export function Hero() {
  const phrases = [
    "Ultimate Smash Burgers.",
    "Cheesy Crown Pizzas.",
    "Injected Crispy Broast.",
    "Toasted Club Sandwiches.",
    "Open Till 2:00 AM Daily.",
  ];

  const { text } = useTypingEffect(phrases, {
    typingSpeed: 75,
    deletingSpeed: 40,
    pauseDuration: 1800,
  });

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#0C0C0E] pt-16 pb-20 sm:py-24"
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
        {/* Multi-layered dark vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0E] via-[#0C0C0E]/85 to-[#0C0C0E]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/20 via-orange-950/15 to-transparent pointer-events-none" />
        {/* Glowing warm radial spots */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-amber-500/15 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-orange-500/15 blur-[110px] rounded-full pointer-events-none" />
      </div>

      {/* Floating Badges (Desktop) */}
      <div
        className="hidden 2xl:flex absolute top-1/2 -translate-y-1/2 left-8 xl:left-14 z-10 items-center gap-3 px-4 py-3 rounded-2xl bg-black/75 backdrop-blur-md border border-neutral-700/80 shadow-2xl animate-float-slow max-w-[250px]"
        style={{ animationDuration: "6s" }}
      >
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-md flex-shrink-0">
          <Smile className="w-5 h-5 text-black" />
        </div>
        <div>
          <p className="text-xs font-bold text-white uppercase tracking-wider">
            Kids Play Zone
          </p>
          <p className="text-[11px] text-neutral-400 leading-snug">
            Inflatable fun &amp; 2-floor family hall
          </p>
        </div>
      </div>

      <div
        className="hidden 2xl:flex absolute top-1/2 -translate-y-1/2 right-8 xl:right-14 z-10 items-center gap-3 px-4 py-3 rounded-2xl bg-black/75 backdrop-blur-md border border-neutral-700/80 shadow-2xl animate-float-slow max-w-[250px]"
        style={{ animationDuration: "7s", animationDelay: "1.5s" }}
      >
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shadow-md flex-shrink-0">
          <Sparkles className="w-5 h-5 text-black" />
        </div>
        <div>
          <p className="text-xs font-bold text-white uppercase tracking-wider">
            Late Night Food
          </p>
          <p className="text-[11px] text-amber-400 font-semibold leading-snug">
            Open daily till 2:00 AM
          </p>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center w-full">
        {/* Top Badges Row */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6 max-w-full">
          {/* Google 4.1 Rating Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-amber-500/40 shadow-sm">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span className="text-xs font-black text-white tracking-wide">
              {RESTAURANT_INFO.rating}
            </span>
            <span className="text-[11px] text-neutral-400">
              ({RESTAURANT_INFO.reviewCount} Google Reviews)
            </span>
          </div>

          {/* Location Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900/90 border border-neutral-700/80 text-neutral-300 text-xs font-bold">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>Shahbaz Khan Road, Kasur</span>
          </div>

          {/* Hours Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-400 text-xs font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Closes 2:00 AM</span>
          </div>
        </div>

        {/* Main Brand Title */}
        <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight uppercase text-white mb-2 sm:mb-3">
          EASY <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500">CHEESY</span>
        </h1>

        {/* Brand Taglines */}
        <p className="text-sm sm:text-base md:text-lg font-semibold text-amber-300/90 tracking-widest uppercase mb-4">
          &ldquo;{RESTAURANT_INFO.tagline}&rdquo; &bull; {RESTAURANT_INFO.subTagline}
        </p>

        {/* Dynamic Typing Subtitle */}
        <div className="h-10 sm:h-12 flex items-center justify-center mb-6 sm:mb-8">
          <p className="text-lg sm:text-2xl md:text-3xl font-bold text-neutral-200 font-sans">
            Kasur&apos;s Home For{" "}
            <span className="text-amber-400 font-extrabold border-b-2 border-amber-400/60 pb-0.5">
              {text}
            </span>
            <span className="animate-blink text-amber-400">|</span>
          </p>
        </div>

        {/* Restaurant Description */}
        <p className="max-w-2xl text-sm sm:text-base text-neutral-300 font-sans leading-relaxed mb-8 sm:mb-10">
          Savor double smashed beef patties, cheesy crown-crust pizzas, flavor-injected crispy broast,
          and authentic club sandwiches. Enjoy in our vibrant 2-floor family hall with a kids play zone,
          or get piping hot delivery till 2 AM!
        </p>

        {/* Primary CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
          {/* Menu Button */}
          <a
            href="#menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-black font-black uppercase tracking-wider text-sm shadow-[0_0_25px_rgba(245,158,11,0.4)] hover:shadow-[0_0_35px_rgba(245,158,11,0.6)] hover:brightness-110 transition-all duration-200 active:scale-95"
          >
            <UtensilsCrossed className="w-4 h-4" />
            <span>Explore Full Menu</span>
          </a>

          {/* WhatsApp Direct Order */}
          <a
            href={`https://wa.me/${RESTAURANT_INFO.whatsAppNumber}?text=${encodeURIComponent(
              "Salam Easy Cheesy Kasur! I want to check today's specials and place an order."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-neutral-900/90 border border-neutral-700 hover:border-emerald-500 text-white hover:text-emerald-400 text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-md active:scale-95"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Order on WhatsApp</span>
          </a>
        </div>

        {/* Delivery / Takeaway Info Micro-Pill */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-neutral-400">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            Dine-In &bull; Takeout &bull; Delivery
          </span>
          <span className="text-neutral-600">&bull;</span>
          <span>Call: {RESTAURANT_INFO.phonePrimary}</span>
          <span className="text-neutral-600">&bull;</span>
          <span>Kids Play Zone Upstairs</span>
        </div>
      </div>
    </section>
  );
}
