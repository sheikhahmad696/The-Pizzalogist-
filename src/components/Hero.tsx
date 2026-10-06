import React, { useState, useEffect } from "react";
import { ArrowUpRight, Phone, Flame, Heart } from "lucide-react";
import { BRAND_INFO } from "../data/brandData";

interface HeroProps {
  onOpenOrderModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOrderModal }) => {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 24;
      const y = (e.clientY / innerHeight - 0.5) * 24;
      setMouseOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-28 pb-16 lg:pt-32 lg:pb-24">
      {/* Volumetric background lights and deep dark radial gradients */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] bg-gradient-to-tr from-rose-600/25 via-orange-600/20 to-transparent rounded-full blur-[130px] pointer-events-none -z-10"
        style={{
          transform: `translate(calc(-50% + ${mouseOffset.x * 0.4}px), calc(-50% + ${mouseOffset.y * 0.4}px))`,
        }}
      />
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#0b0b0d] to-transparent pointer-events-none -z-10" />
      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#0b0b0d] to-transparent pointer-events-none -z-10" />

      {/* Floating emojis with independent floating animations */}
      <div
        className="absolute top-32 left-[8%] md:left-[14%] text-3xl md:text-4xl pointer-events-none select-none z-10 animate-bounce duration-[4000ms]"
        style={{
          transform: `translate(${mouseOffset.x * -0.7}px, ${mouseOffset.y * -0.7}px)`,
        }}
        aria-hidden="true"
      >
        🍕
      </div>
      <div
        className="absolute top-44 right-[10%] md:right-[15%] text-2xl md:text-3xl pointer-events-none select-none z-10 animate-pulse duration-[3500ms]"
        style={{
          transform: `translate(${mouseOffset.x * 0.9}px, ${mouseOffset.y * 0.9}px)`,
        }}
        aria-hidden="true"
      >
        🌶️
      </div>
      <div
        className="absolute bottom-28 left-[12%] md:left-[18%] text-2xl md:text-3xl pointer-events-none select-none z-10 animate-bounce duration-[5000ms]"
        style={{
          transform: `translate(${mouseOffset.x * 0.6}px, ${mouseOffset.y * 0.6}px)`,
        }}
        aria-hidden="true"
      >
        🧀
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bold Typography & Brand Messaging */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Top Brand Badges */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-950/60 border border-rose-500/30 text-rose-400 text-xs font-semibold tracking-wider uppercase">
                <Flame className="w-3.5 h-3.5" />
                THE PIZZA SPECIALIST
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-900/80 border border-stone-800 text-stone-300 text-xs font-medium tracking-wider">
                <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
                Proud Bahawalpuri Brand
              </span>
            </div>

            {/* Sub-kicker */}
            <p className="text-xs sm:text-sm font-mono tracking-[0.28em] uppercase text-rose-400 font-semibold mb-2">
              THE PIZZALOGIST PRESENTS
            </p>

            {/* Giant Oversized Typography */}
            <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tight leading-[0.92] text-[#faf7f2] uppercase mb-5 sm:mb-6 text-balance">
              PIZZA. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#faf7f2] via-[#f59e0b] to-[#e11d48]">
                REIMAGINED.
              </span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-stone-300 max-w-xl font-normal leading-relaxed mb-6 sm:mb-8">
              Bahawalpur’s premier artisanal pizza movement. Blistered golden crusts,
              luxurious molten cheese pulls, and explosive local flavours created by
              founder Ahmad Mustafa across three iconic city locations.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <button
                onClick={onOpenOrderModal}
                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-[#e11d48] to-[#ea580c] text-white font-bold text-xs sm:text-sm tracking-wider uppercase hover:from-[#be123c] hover:to-[#c2410c] shadow-2xl shadow-rose-900/50 transition-all duration-300 flex items-center justify-center gap-2 group active:scale-95"
              >
                <span>ORDER ON WHATSAPP</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>

              <button
                onClick={() => scrollToSection("signatures")}
                className="w-full sm:w-auto px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-stone-900/80 hover:bg-stone-800 border border-stone-800 text-[#faf7f2] font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>EXPLORE MENU</span>
              </button>
            </div>

            {/* Trust markers */}
            <div className="mt-10 pt-6 border-t border-white/[0.08] flex items-center gap-6 text-xs text-stone-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-medium text-stone-300">3 Branches Active</span>
              </div>
              <span className="text-stone-600">/</span>
              <span>Model Town A · Commercial Area · Dewan Wali Pulli</span>
            </div>
          </div>

          {/* Right Column: Hero Cinematic Artwork & Rotating Circular Badge */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Parallax Container */}
            <div
              className="relative w-full max-w-[500px] aspect-square flex items-center justify-center transition-transform duration-300 ease-out"
              style={{
                transform: `translate(${mouseOffset.x * 0.5}px, ${mouseOffset.y * 0.5}px)`,
              }}
            >
              {/* Outer Glow Halo */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-rose-600/30 via-amber-500/20 to-transparent blur-2xl -z-10" />

              {/* Pizza Visual Container with Cut-out/Framing */}
              <div className="relative w-[92%] h-[92%] rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/90 group bg-[#141418]">
                <img
                  src="/src/assets/images/hero_cinematic_pizza_1791273235156.jpg"
                  alt="The Pizzalogist Signature Artisanal Pizza"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                {/* Subtle cinematic gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                {/* Overlaid Pill-free title mark */}
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div>
                    <span className="text-[11px] font-mono tracking-widest text-amber-400 uppercase font-semibold block">
                      CRAFTED FRESH DAILY
                    </span>
                    <span className="font-display font-bold text-lg text-white">
                      Woodstone Crust & Secret Spices
                    </span>
                  </div>
                  <span className="text-xs font-mono text-stone-400">BWP, PK</span>
                </div>
              </div>

              {/* Rotating Circular Text Element */}
              <div className="absolute -top-3 -right-3 sm:-top-6 sm:-right-6 w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 pointer-events-none z-30 select-none">
                <div className="relative w-full h-full flex items-center justify-center animate-spin-slow">
                  <svg
                    viewBox="0 0 160 160"
                    className="w-full h-full"
                    fill="currentColor"
                  >
                    <path
                      id="circlePath"
                      d="M 80, 80 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                      fill="none"
                    />
                    <text
                      className="text-[11px] font-mono tracking-[0.24em] uppercase fill-[#faf7f2] font-bold"
                    >
                      <textPath href="#circlePath" startOffset="0%">
                        THE PIZZA SPECIALIST • BAHAWALPUR • EST. WITH LOVE •
                      </textPath>
                    </text>
                  </svg>
                  {/* Center Emblem in Rotating Badge */}
                  <div className="absolute inset-0 m-auto w-9 h-9 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-rose-500/40 bg-[#0d0d10] flex items-center justify-center shadow-lg shadow-rose-900/60">
                    <img
                      src="25dd5bc0-6a45-4b7d-a03e-485c8af13b32.png"
                      onError={(e) => {
                        e.currentTarget.src = "/src/assets/images/pizzalogist_chef_mascot_logo_1791274455818.jpg";
                      }}
                      alt="The Pizzalogist Mascot"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
