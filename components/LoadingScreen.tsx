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

    const hideDelay = prefersReducedMotion ? 200 : 950;
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
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0E0E0E] transition-opacity duration-300 pointer-events-none ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden="true"
    >
      <div className="relative flex flex-col items-center">
        {/* Glowing radial flame behind logo */}
        <div className="absolute -top-12 w-64 h-64 bg-brand-orange/35 blur-3xl rounded-full animate-pulse" />

        <BrandLogo variant="badge" size="lg" />

        <div className="mt-5 flex items-center gap-2">
          <span className="font-script text-brand-yellow text-xl sm:text-2xl tracking-wider drop-shadow-md">
            All Taste Behind Me
          </span>
        </div>

        {/* Loading progress bar */}
        <div className="w-40 h-1 bg-neutral-800 rounded-full mt-6 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-brand-orange to-brand-yellow rounded-full animate-[marquee_1s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
}
