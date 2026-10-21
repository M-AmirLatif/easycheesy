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
    sm: { width: 32, height: 32, className: "w-8 h-8 sm:w-[34px] sm:h-[34px]" },
    md: { width: 40, height: 40, className: "w-9 h-9 sm:w-11 sm:h-11" },
    lg: { width: 56, height: 56, className: "w-14 h-14" },
    xl: { width: 72, height: 72, className: "w-[72px] h-[72px]" },
  };

  const badgeDimensions = {
    sm: { width: 64, height: 64, className: "w-16 h-16" },
    md: { width: 84, height: 84, className: "w-[84px] h-[84px]" },
    lg: { width: 110, height: 110, className: "w-[110px] h-[110px]" },
    xl: { width: 140, height: 140, className: "w-[140px] h-[140px]" },
  };

  const titleSizes = {
    sm: "text-base sm:text-lg",
    md: "text-lg sm:text-2xl",
    lg: "text-2xl sm:text-4xl",
    xl: "text-3xl sm:text-5xl",
  };

  const tagSizes = {
    sm: "text-[8px] sm:text-[9px]",
    md: "text-[9px] sm:text-[11px]",
    lg: "text-[11px] sm:text-xs",
    xl: "text-xs sm:text-sm",
  };

  // Badge Variant
  if (variant === "badge") {
    return (
      <div
        className={`relative inline-flex flex-col items-center group transition-transform duration-300 hover:scale-[1.03] select-none ${className}`}
      >
        <div className="relative rounded-2xl overflow-hidden p-1 bg-gradient-to-b from-amber-400 via-orange-500 to-amber-600 shadow-[0_4px_16px_rgba(245,158,11,0.3)]">
          <Image
            src="/images/easy-cheesy-badge.svg"
            alt="Easy Cheesy Kasur Official Logo"
            width={badgeDimensions[size].width}
            height={badgeDimensions[size].height}
            priority
            className="rounded-xl object-contain drop-shadow-sm"
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
        <div className="relative w-full h-full rounded-full overflow-hidden shadow-[0_0_12px_rgba(245,158,11,0.4)] border border-amber-500/70 transition-transform duration-300 hover:scale-105">
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
    <div className={`flex items-center gap-2 sm:gap-2.5 select-none group min-w-0 ${className}`}>
      {/* Medallion */}
      <div className={`relative ${iconDimensions[size].className} flex-shrink-0`}>
        <div className="relative w-full h-full rounded-xl overflow-hidden shadow-[0_0_10px_rgba(245,158,11,0.35)] border border-amber-500/50 transition-transform duration-300 group-hover:scale-105 bg-neutral-900 flex items-center justify-center">
          <Image
            src="/images/easy-cheesy-badge.svg"
            alt="Easy Cheesy Logo"
            fill
            sizes="48px"
            priority
            className="object-contain p-0.5"
          />
        </div>
      </div>

      {/* Typography */}
      <div className="flex flex-col justify-center leading-none min-w-0">
        <div className="flex items-center gap-1 sm:gap-1.5 whitespace-nowrap">
          <span
            className={`font-display font-black tracking-wide uppercase text-amber-400 group-hover:text-amber-300 transition-colors drop-shadow-sm ${titleSizes[size]}`}
          >
            EASY
          </span>
          <span
            className={`font-display font-black tracking-wide uppercase text-orange-500 group-hover:text-orange-400 transition-colors drop-shadow-sm ${titleSizes[size]}`}
          >
            CHEESY
          </span>
        </div>
        {showTagline && (
          <div className="flex items-center gap-1 mt-0.5 whitespace-nowrap">
            <span
              className={`font-bold uppercase tracking-wider text-amber-300/90 font-sans truncate ${tagSizes[size]}`}
            >
              Love at First Bite
            </span>
            <span className="hidden sm:inline text-neutral-500 text-[9px]">•</span>
            <span
              className={`hidden sm:inline font-semibold uppercase tracking-wider text-neutral-400 font-sans ${tagSizes[size]}`}
            >
              Kasur
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
