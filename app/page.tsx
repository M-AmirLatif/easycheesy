import React from "react";
import { Hero } from "@/components/Hero";
import { MarqueeTicker } from "@/components/MarqueeTicker";
import { WhyUs } from "@/components/WhyUs";
import { SignaturePicks } from "@/components/SignaturePicks";
import { MenuSection } from "@/components/MenuSection";
import { DealsSection } from "@/components/DealsSection";
import { GallerySection } from "@/components/GallerySection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { HowToOrderSection } from "@/components/HowToOrderSection";
import { VisitUsSection } from "@/components/VisitUsSection";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Marquee ticker of best sellers */}
      <MarqueeTicker />

      {/* 3. "Why Shawarma Line" */}
      <WhyUs />

      {/* 4. Signature picks */}
      <SignaturePicks />

      {/* 5. FULL MENU with Search and Size Selectors */}
      <MenuSection />

      {/* 6. DEALS */}
      <DealsSection />

      {/* 7. Gallery with Lightbox */}
      <GallerySection />

      {/* 8. Reviews */}
      <ReviewsSection />

      {/* 9. How to order */}
      <HowToOrderSection />

      {/* 10. Visit us */}
      <VisitUsSection />
    </>
  );
}
