import React, { useState } from "react";
import { BRAND_ASSETS } from "../data/brandData";

interface BrandLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showTagline?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = "",
  size = "md",
  showTagline = false,
}) => {
  const [imgSrc, setImgSrc] = useState(BRAND_ASSETS.logoUploaded);

  const iconSizes = {
    sm: "w-7 h-7 sm:w-8 sm:h-8",
    md: "w-9 h-9 sm:w-11 sm:h-11",
    lg: "w-12 h-12 sm:w-16 sm:h-16",
    xl: "w-16 h-16 sm:w-24 sm:h-24",
  };

  const textSizes = {
    sm: "text-xs sm:text-sm md:text-base tracking-wider",
    md: "text-sm sm:text-base md:text-xl tracking-wider",
    lg: "text-lg sm:text-2xl md:text-3xl tracking-widest",
    xl: "text-2xl sm:text-3xl md:text-5xl tracking-widest",
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Official Cartoon Chef Mascot Logo */}
      <div
        className={`relative ${iconSizes[size]} shrink-0 rounded-2xl bg-gradient-to-br from-[#e11d48] to-[#9f1239] p-0.5 shadow-lg shadow-rose-950/50 flex items-center justify-center overflow-hidden group`}
      >
        <div className="w-full h-full bg-[#0d0d10] rounded-[14px] overflow-hidden flex items-center justify-center relative">
          <img
            src={imgSrc}
            onError={() => {
              if (imgSrc !== BRAND_ASSETS.logoLocal) {
                setImgSrc(BRAND_ASSETS.logoLocal);
              }
            }}
            alt="The Pizzalogist Official Chef Mascot Logo"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <span
          className={`font-display font-extrabold text-[#faf7f2] leading-none uppercase ${textSizes[size]}`}
          style={{ letterSpacing: "-0.02em" }}
        >
          THE PIZZALOGIST
        </span>
        {showTagline && (
          <span className="text-[11px] font-medium tracking-widest text-[#f59e0b] uppercase mt-1">
            The Pizza Specialist
          </span>
        )}
      </div>
    </div>
  );
};
