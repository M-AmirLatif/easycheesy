"use client";

import React, { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { RESTAURANT_INFO } from "@/lib/restaurant-info";

interface Review {
  name: string;
  quote: string;
  badge: string;
  date: string;
}

export function ReviewsSection() {
  const reviews: Review[] = [
    {
      name: "Ghulam M.",
      quote: "Best taste, best service, best quality in Kasur.",
      badge: "Local Guide",
      date: "Google Review",
    },
    {
      name: "Muhammad U.",
      quote:
        "Tasted their shawarma, burger, sandwiches, everything is more than delicious.",
      badge: "Verified Customer",
      date: "Google Review",
    },
    {
      name: "Ahmad A.",
      quote:
        "The grilled chicken is perfectly cooked, with excellent quality and generous quantity.",
      badge: "Regular Diner",
      date: "Google Review",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlay, reviews.length]);

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#141414] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>{RESTAURANT_INFO.rating} ★ Google Rating ({RESTAURANT_INFO.reviewCount} Reviews)</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-white mb-3">
            What Kasur Says <span className="text-brand-yellow">About Us</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 font-sans">
            Real feedback from local foodies and loyal regulars in Kasur.
          </p>
        </div>

        {/* Carousel / Card Container */}
        <div
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
          className="relative rounded-3xl p-6 sm:p-12 bg-neutral-900 border border-neutral-800 shadow-2xl overflow-hidden"
        >
          {/* Subtle fiery glow backdrop */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-orange/15 blur-3xl rounded-full pointer-events-none" />

          {/* Quote mark decoration */}
          <Quote className="w-12 h-12 sm:w-16 sm:h-16 text-brand-orange/20 mb-4" />

          <div className="min-h-[120px] sm:min-h-[140px] flex flex-col justify-center">
            {/* Stars */}
            <div className="flex items-center gap-1 text-amber-400 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
              <span className="ml-2 text-xs font-bold text-neutral-400">
                5.0 Stars
              </span>
            </div>

            {/* Actual Review Quote */}
            <blockquote className="text-lg sm:text-2xl font-bold text-white font-sans leading-relaxed tracking-wide mb-6">
              &ldquo;{reviews[currentIndex].quote}&rdquo;
            </blockquote>

            {/* Author info */}
            <div className="flex items-center justify-between border-t border-neutral-800/80 pt-4 flex-wrap gap-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-orange to-amber-500 flex items-center justify-center font-display font-black text-white text-lg">
                  {reviews[currentIndex].name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white flex items-center gap-1.5">
                    {reviews[currentIndex].name}
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </h4>
                  <p className="text-xs text-neutral-400">
                    {reviews[currentIndex].badge} • {reviews[currentIndex].date}
                  </p>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    setCurrentIndex((prev) =>
                      prev === 0 ? reviews.length - 1 : prev - 1
                    )
                  }
                  className="p-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center border border-neutral-700"
                  aria-label="Previous Review"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() =>
                    setCurrentIndex((prev) => (prev + 1) % reviews.length)
                  }
                  className="p-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center border border-neutral-700"
                  aria-label="Next Review"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === i
                    ? "w-8 bg-brand-orange"
                    : "w-2 bg-neutral-700 hover:bg-neutral-600"
                }`}
                aria-label={`Jump to review ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
