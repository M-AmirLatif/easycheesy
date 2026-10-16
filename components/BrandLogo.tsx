import React from "react";
import Image from "next/image";

interface BrandLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showTagline?: boolean;
  variant?: "horizontal" | "badge" | "icon";
}

export function BrandLogo({
  className = "",
  size = "md",
  showTagline = true,
  variant = "horizontal",
}: BrandLogoProps) {
  const iconDimensions = {
    sm: { width: 34, height: 34, className: "w-[34px] h-[34px]" },
    md: { width: 44, height: 44, className: "w-11 h-11" },
    lg: { width: 56, height: 56, className: "w-14 h-14" },
    xl: { width: 72, height: 72, className: "w-[72px] h-[72px]" },
  };

  const badgeDimensions = {
    sm: { width: 68, height: 80, className: "w-[68px] h-auto" },
    md: { width: 92, height: 110, className: "w-[92px] h-auto" },
    lg: { width: 120, height: 142, className: "w-[120px] h-auto" },
    xl: { width: 160, height: 190, className: "w-[160px] h-auto" },
  };

  const titleSizes = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl sm:text-4xl",
    xl: "text-4xl sm:text-5xl",
  };

  const tagSizes = {
    sm: "text-[9px]",
    md: "text-[11px]",
    lg: "text-xs",
    xl: "text-sm",
  };

  // Full Badge Variant (The authentic printed menu emblem)
  if (variant === "badge") {
    return (
      <div
        className={`relative inline-flex flex-col items-center group transition-transform duration-300 hover:scale-[1.03] select-none ${className}`}
      >
        <div className="relative rounded-2xl overflow-hidden p-1 bg-gradient-to-b from-brand-yellow/80 via-brand-orange to-red-600 shadow-[0_8px_25px_rgba(249,115,22,0.35)]">
          <Image
            src="/images/shawarma-line-badge.png"
            alt="Shawarma Line Official Logo - All Taste Behind Me"
            width={badgeDimensions[size].width}
            height={badgeDimensions[size].height}
            priority
            className="rounded-xl object-contain drop-shadow-md"
          />
        </div>
      </div>
    );
  }

  // Icon Only Variant (Authentic circular chef medallion)
  if (variant === "icon") {
    return (
      <div
        className={`relative inline-flex items-center justify-center select-none ${iconDimensions[size].className} ${className}`}
      >
        <div className="relative w-full h-full rounded-full overflow-hidden shadow-[0_0_15px_rgba(249,115,22,0.5)] border-2 border-brand-orange/80 transition-transform duration-300 hover:scale-105">
          <Image
            src="/images/shawarma-line-avatar.png"
            alt="Shawarma Line Chef Mascot"
            fill
            sizes="72px"
            priority
            className="object-cover"
          />
        </div>
      </div>
    );
  }

  // Default: Horizontal Lockup (Authentic Mascot Medallion + Wordmark + Tagline)
  return (
    <div className={`flex items-center gap-3 select-none group ${className}`}>
      {/* Authentic Chef Mascot Medallion */}
      <div className={`relative ${iconDimensions[size].className} flex-shrink-0`}>
        <div className="relative w-full h-full rounded-full overflow-hidden shadow-[0_0_15px_rgba(249,115,22,0.5)] border-2 border-brand-orange/80 transition-transform duration-300 group-hover:scale-105">
          <Image
            src="/images/shawarma-line-avatar.png"
            alt="Shawarma Line Chef Mascot"
            fill
            sizes="72px"
            priority
            className="object-cover"
          />
        </div>
      </div>

      {/* Wordmark typography */}
      <div className="flex flex-col">
        <div className="flex items-baseline tracking-wide">
          <span
            className={`font-display font-black uppercase text-brand-offwhite tracking-wider leading-none drop-shadow-sm ${titleSizes[size]}`}
          >
            SHAWARMA
          </span>
          <span
            className={`font-display font-black uppercase text-brand-yellow ml-1.5 leading-none drop-shadow-[0_2px_10px_rgba(255,194,14,0.3)] ${titleSizes[size]}`}
          >
            LINE
          </span>
        </div>
        {showTagline && (
          <span
            className={`font-script text-brand-orange font-normal tracking-wide leading-tight mt-0.5 ${tagSizes[size]}`}
          >
            All Taste Behind Me
          </span>
        )}
      </div>
    </div>
  );
}

export function BrandFaviconSvg() {
  return (
    <svg
      viewBox="0 0 100 100"
      className="w-full h-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="favFlame" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#DC2626" />
          <stop offset="50%" stopColor="#F97316" />
          <stop offset="100%" stopColor="#FFC20E" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="24" fill="#0E0E0E" />
      <path
        d="M50 12 C40 30, 24 42, 24 64 C24 80, 36 90, 50 92 C64 90, 76 80, 76 64 C76 44, 66 32, 50 12 Z"
        fill="url(#favFlame)"
      />
      <circle cx="50" cy="66" r="10" fill="#FFF" opacity="0.9" />
    </svg>
  );
}
