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
    sm: { width: 68, height: 68, className: "w-[68px] h-[68px]" },
    md: { width: 88, height: 88, className: "w-[88px] h-[88px]" },
    lg: { width: 110, height: 110, className: "w-[110px] h-[110px]" },
    xl: { width: 140, height: 140, className: "w-[140px] h-[140px]" },
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

  // Badge Variant
  if (variant === "badge") {
    return (
      <div
        className={`relative inline-flex flex-col items-center group transition-transform duration-300 hover:scale-[1.03] select-none ${className}`}
      >
        <div className="relative rounded-2xl overflow-hidden p-1 bg-gradient-to-b from-amber-400 via-orange-500 to-amber-600 shadow-[0_8px_25px_rgba(245,158,11,0.35)]">
          <Image
            src="/images/easy-cheesy-badge.svg"
            alt="Easy Cheesy Kasur Official Logo"
            width={badgeDimensions[size].width}
            height={badgeDimensions[size].height}
            priority
            className="rounded-xl object-contain drop-shadow-md"
          />
        </div>
      </div>
    );
  }

  // Icon Only Variant
  if (variant === "icon") {
    return (
      <div
        className={`relative inline-flex items-center justify-center select-none ${iconDimensions[size].className} ${className}`}
      >
        <div className="relative w-full h-full rounded-full overflow-hidden shadow-[0_0_15px_rgba(245,158,11,0.5)] border-2 border-amber-500/80 transition-transform duration-300 hover:scale-105">
          <Image
            src="/images/easy-cheesy-badge.svg"
            alt="Easy Cheesy Icon"
            fill
            sizes="72px"
            priority
            className="object-cover"
          />
        </div>
      </div>
    );
  }

  // Default: Horizontal Lockup
  return (
    <div className={`flex items-center gap-3 select-none group ${className}`}>
      {/* Medallion */}
      <div className={`relative ${iconDimensions[size].className} flex-shrink-0`}>
        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_0_15px_rgba(245,158,11,0.4)] border border-amber-500/60 transition-transform duration-300 group-hover:scale-105 bg-neutral-900 flex items-center justify-center">
          <Image
            src="/images/easy-cheesy-badge.svg"
            alt="Easy Cheesy Logo"
            fill
            sizes="72px"
            priority
            className="object-contain p-0.5"
          />
        </div>
      </div>

      {/* Typography */}
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-display font-black tracking-wider uppercase text-amber-400 group-hover:text-amber-300 transition-colors drop-shadow-sm ${titleSizes[size]}`}
          >
            EASY
          </span>
          <span
            className={`font-display font-black tracking-wider uppercase text-orange-500 group-hover:text-orange-400 transition-colors drop-shadow-sm ${titleSizes[size]}`}
          >
            CHEESY
          </span>
        </div>
        {showTagline && (
          <div className="flex items-center gap-1 mt-1">
            <span
              className={`font-bold uppercase tracking-widest text-amber-300/90 font-sans ${tagSizes[size]}`}
            >
              Love at First Bite
            </span>
            <span className="text-neutral-500 text-[10px]">•</span>
            <span
              className={`font-semibold uppercase tracking-wider text-neutral-400 font-sans ${tagSizes[size]}`}
            >
              Kasur
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
