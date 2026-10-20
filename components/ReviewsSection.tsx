"use client";

import React, { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { RESTAURANT_INFO } from "@/lib/restaurant-info";

interface Review {
  name: string;
  quote: string;
  dish: string;
  badge: string;
  date: string;
}

export function ReviewsSection() {
  const reviews: Review[] = [
    {
      name: "Ch Ahmad Ayaz Kasuri",
      quote:
        "Easy Cheesy’s Injected Broast is super tasty, crispy outside and juicy inside, making every bite full of flavor. Their sandwiches are also amazing, fresh, and perfectly balanced, making it a must-try spot for a quick, delicious meal.",
      dish: "Injected Broast & Sandwiches",
      badge: "Local Guide • 199 Reviews",
      date: "Google Maps Review",
    },
    {
      name: "Hamza SSH",
      quote:
        "Awesome taste & fast service! Love At First Bite Pizza and Beef Smash Burger are uffffffff amazing! Definitely recommended in Kasur.",
      dish: "Beef Smash Burger & Pizza",
      badge: "Verified Customer",
      date: "Google Maps Review",
    },
    {
      name: "Afzaal Saeed",
      quote:
        "The food was absolutely delicious – we enjoyed it a lot! Worth visiting for the incredible taste and flavor quality.",
      dish: "Fast Food Variety",
      badge: "Local Reviewer",
      date: "Google Maps Review",
    },
    {
      name: "Zahra Alam",
      quote:
        "I ordered mighty zinger burger and cocktail sandwiches… Super duper hit and classical! I recommend all must visit Easy Cheesy Kasur.",
      dish: "Mighty Zinger & Cocktail Sandwich",
      badge: "Local Guide",
      date: "Google Maps Review",
    },
    {
      name: "Momina Shahbaz",
      quote:
        "Soooo good food, just loved it! Best pizza and best broast in town, everything on point. Great experience for family dinner.",
      dish: "Best Pizza & Broast",
      badge: "Family Diner",
      date: "Google Maps Review",
    },
    {
      name: "Adil Arain",
      quote:
        "Really enjoyed my visit! The burgers, pizzas, and broast were super tasty and fresh — a great spot if you’re craving something delicious in Kasur.",
      dish: "Burgers, Pizzas & Broast",
      badge: "Verified Customer",
      date: "Google Maps Review",
    },
    {
      name: "Khadija Yousaf",
      quote:
        "A good ambience & tasty cheesy food at the same time. Very comfortable place for family with the kids area.",
      dish: "Cheesy Food & Family Hall",
      badge: "Family Dining",
      date: "Google Maps Review",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlay, reviews.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const current = reviews[currentIndex];

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#121214] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>{RESTAURANT_INFO.rating} ★ Google Rating ({RESTAURANT_INFO.reviewCount} Reviews)</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-white mb-3">
            What Kasur Says <span className="text-amber-400">About Us</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 font-sans">
            Real, uncensored reviews from foodies and families dining at Easy Cheesy Kasur.
          </p>
        </div>

        {/* Carousel / Card Container */}
        <div
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
          className="relative rounded-3xl p-6 sm:p-12 bg-neutral-900 border border-neutral-800 shadow-2xl overflow-hidden"
        >
          {/* Large decorative quotation mark background */}
          <Quote className="absolute -bottom-6 -right-6 w-44 h-44 text-neutral-800/20 pointer-events-none" />

          {/* Stars */}
          <div className="flex items-center gap-1.5 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 fill-amber-400 text-amber-400 drop-shadow-sm"
              />
            ))}
            <span className="text-xs font-bold text-amber-300/80 uppercase tracking-wider ml-2">
              5.0 Star Feedback
            </span>
          </div>

          {/* Quote */}
          <blockquote className="text-lg sm:text-2xl text-white font-sans font-medium leading-relaxed mb-6">
            &ldquo;{current.quote}&rdquo;
          </blockquote>

          {/* Reviewer Details */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-neutral-800">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-white text-base sm:text-lg">
                  {current.name}
                </span>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="flex items-center gap-2 text-xs text-neutral-400 mt-1">
                <span>{current.badge}</span>
                <span className="text-neutral-600">&bull;</span>
                <span className="text-amber-400/90 font-semibold">{current.dish}</span>
                <span className="text-neutral-600">&bull;</span>
                <span>{current.date}</span>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous review"
                className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white flex items-center justify-center transition-colors border border-neutral-700"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next review"
                className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white flex items-center justify-center transition-colors border border-neutral-700"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel indicator dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {reviews.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to review ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? "w-8 bg-amber-400"
                  : "w-2 bg-neutral-700 hover:bg-neutral-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
