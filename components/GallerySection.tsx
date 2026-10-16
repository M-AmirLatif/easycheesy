"use client";

import React, { useState } from "react";
import Image from "next/image";
import { IMAGES, SHIMMER_BLUR } from "@/lib/images";
import { Camera, X, ChevronLeft, ChevronRight, Flame, ZoomIn } from "lucide-react";

export function GallerySection() {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const galleryItems = IMAGES.gallery;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) =>
      prev === null || prev === 0 ? galleryItems.length - 1 : prev - 1
    );
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) =>
      prev === null || prev === galleryItems.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#0E0E0E] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/15 border border-brand-orange/40 text-brand-orange text-xs font-bold uppercase tracking-wider mb-3">
            <Flame className="w-3.5 h-3.5 text-brand-yellow" />
            <span>Behind The Grill</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-white mb-3">
            The Sizzle &amp; <span className="text-brand-yellow">Fire</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 font-sans">
            A glimpse into the daily craft at Shawarma Line. Searing heat, slow-carved rotisserie meats, and stone ovens.
          </p>
        </div>

        {/* Masonry / Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              onClick={() => setActiveImageIndex(index)}
              className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden cursor-pointer bg-neutral-900 border border-neutral-800 hover:border-brand-orange/60 transition-all duration-300 shadow-card hover:shadow-fiery"
            >
              <Image
                src={item.url}
                alt={item.caption}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                placeholder="blur"
                blurDataURL={SHIMMER_BLUR}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Tag Pill */}
              <div className="absolute top-3 left-3 z-10">
                <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/70 text-brand-yellow border border-brand-yellow/30 backdrop-blur-md">
                  {item.tag}
                </span>
              </div>

              {/* Zoom In icon indicator */}
              <div className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-neutral-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4 text-brand-yellow" />
              </div>

              {/* Caption */}
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <p className="text-xs sm:text-sm font-semibold text-white leading-snug">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && (
        <div
          onClick={() => setActiveImageIndex(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          {/* Close button */}
          <button
            onClick={() => setActiveImageIndex(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-neutral-900 text-white hover:text-brand-yellow hover:bg-neutral-800 transition-colors z-20 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Button */}
          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 p-3 rounded-full bg-neutral-900/80 text-white hover:text-brand-yellow hover:bg-neutral-800 transition-colors z-20 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 p-3 rounded-full bg-neutral-900/80 text-white hover:text-brand-yellow hover:bg-neutral-800 transition-colors z-20 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Content */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center"
          >
            <div className="relative w-full h-[55vh] sm:h-[65vh] rounded-2xl overflow-hidden border border-neutral-800">
              <Image
                src={galleryItems[activeImageIndex].url}
                alt={galleryItems[activeImageIndex].caption}
                fill
                sizes="90vw"
                className="object-contain object-center"
                priority
              />
            </div>
            <div className="mt-4 text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                {galleryItems[activeImageIndex].tag}
              </span>
              <p className="text-sm sm:text-base text-neutral-200 mt-1">
                {galleryItems[activeImageIndex].caption}
              </p>
              <p className="text-xs text-neutral-500 mt-0.5">
                {activeImageIndex + 1} of {galleryItems.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
