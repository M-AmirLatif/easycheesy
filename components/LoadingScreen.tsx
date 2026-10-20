"use client";

import React, { useState, useEffect } from "react";
import { BrandLogo } from "./BrandLogo";

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const hideDelay = prefersReducedMotion ? 200 : 850;
    const unmountDelay = hideDelay + 300;

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, hideDelay);

    const unmountTimer = setTimeout(() => {
      setShouldRender(false);
    }, unmountDelay);

    return () => {
      clearTimeout(timer);
      clearTimeout(unmountTimer);
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0C0C0E] transition-opacity duration-300 pointer-events-none ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden="true"
    >
      <div className="relative flex flex-col items-center">
        {/* Glowing radial flame behind logo */}
        <div className="absolute -top-12 w-64 h-64 bg-amber-500/25 blur-3xl rounded-full animate-pulse" />

        <BrandLogo variant="badge" size="lg" />

        <div className="mt-5 flex flex-col items-center">
          <span className="font-display font-black text-amber-400 text-2xl tracking-wider uppercase drop-shadow-md">
            EASY CHEESY
          </span>
          <span className="text-amber-200/80 text-xs font-bold uppercase tracking-widest mt-1">
            Love at First Bite &bull; Kasur
          </span>
        </div>

        {/* Loading Spinner Dots */}
        <div className="mt-6 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-bounce" style={{ animationDelay: "0ms" }} />
          <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-bounce" style={{ animationDelay: "150ms" }} />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-300 animate-bounce" style={{ animationDelay: "300ms" }} />
        </div>
      </div>
    </div>
  );
}
