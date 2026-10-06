import React from "react";
import { Sparkles, MapPin, Award } from "lucide-react";
import { BRAND_INFO, FOUNDER_INFO } from "../data/brandData";

export const BrandStory: React.FC = () => {
  return (
    <section id="story" className="relative py-24 lg:py-36 overflow-hidden bg-[#0b0b0d]">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-rose-900/15 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Lead Tag */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-[2px] bg-[#e11d48]" />
          <span className="text-xs font-mono tracking-[0.25em] uppercase text-rose-400 font-semibold">
            OUR STORY & HERITAGE
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Headline & Story */}
          <div className="lg:col-span-7 flex flex-col">
            <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-[#faf7f2] uppercase leading-[0.95] mb-6 sm:mb-8">
              LOCAL ROOTS. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e11d48] to-[#f59e0b]">
                LOUD FLAVOUR.
              </span>
            </h2>

            <div className="space-y-4 sm:space-y-6 text-stone-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
              <p className="font-medium text-white text-base sm:text-lg md:text-xl">
                “The Pizzalogist is a proud Bahawalpuri pizza brand built around one simple obsession — making seriously memorable pizza.”
              </p>
              <p className="text-stone-400 text-xs sm:text-sm md:text-base">
                Born on the vibrant streets of Bahawalpur, we rejected the idea that great pizza must come from bland international chains. We engineered our own proprietary dough fermentation, infused local Pakistani culinary bold spices, and loaded every single pie with real premium cheeses.
              </p>
            </div>

            {/* Editorial Quote Box */}
            <div className="mt-8 sm:mt-10 p-5 sm:p-8 rounded-2xl bg-[#141418] border border-white/[0.08] relative group">
              <div className="absolute -left-2 top-6 w-1 h-12 bg-gradient-to-b from-[#e11d48] to-amber-500 rounded-full" />
              <p className="font-display font-bold text-lg sm:text-2xl md:text-3xl text-[#faf7f2] leading-snug tracking-tight">
                “Good pizza doesn't need an introduction. <br className="hidden sm:inline" />
                <span className="text-[#f59e0b]">It needs another slice.”</span>
              </p>
              <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-stone-400 font-medium pt-3 border-t border-white/[0.06]">
                <span className="text-stone-300 font-semibold">{FOUNDER_INFO.name} — Founder & Owner</span>
                <span className="text-rose-400 font-mono">EST. BAHAWALPUR</span>
              </div>
            </div>

            {/* Quick badges */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-6 sm:mt-8 pt-6 border-t border-white/[0.08]">
              <div>
                <span className="block text-xl sm:text-2xl font-black font-display text-white">100%</span>
                <span className="text-[10px] sm:text-xs text-stone-400 uppercase tracking-wider">Fresh Dough</span>
              </div>
              <div>
                <span className="block text-xl sm:text-2xl font-black font-display text-[#e11d48]">3</span>
                <span className="text-[10px] sm:text-xs text-stone-400 uppercase tracking-wider">City Branches</span>
              </div>
              <div>
                <span className="block text-xl sm:text-2xl font-black font-display text-[#f59e0b]">Pure</span>
                <span className="text-[10px] sm:text-xs text-stone-400 uppercase tracking-wider">Bahawalpuri</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Masked Editorial Card with Overlapping Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Masked Image Reveal Frame */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#121216] aspect-[4/5] group">
                <img
                  src="/images/team.jpg"
                  alt="Ahmad Mustafa and The Pizzalogist Team in Bahawalpur"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold">
                    LOCAL ROOTS & CRAFT
                  </span>
                  <h3 className="font-display font-bold text-xl text-white mt-1">
                    Craftsmanship in every crust.
                  </h3>
                  <p className="text-xs text-stone-300 mt-1">
                    Ahmad Mustafa & the team serving 3 branches across Bahawalpur.
                  </p>
                </div>
              </div>

              {/* Overlapping Circular Badge: "MADE IN BAHAWALPUR" */}
              <div className="absolute -bottom-4 -left-2 sm:-bottom-8 sm:-left-8 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-[#e11d48] to-[#9f1239] p-0.5 sm:p-1 shadow-2xl shadow-rose-950/80 z-20 select-none animate-pulse duration-[3000ms]">
                <div className="w-full h-full rounded-full bg-[#0d0d11] border border-rose-500/30 flex flex-col items-center justify-center text-center p-2">
                  <MapPin className="w-4 h-4 text-amber-400 mb-1" />
                  <span className="text-[10px] font-mono tracking-widest uppercase text-stone-300 font-semibold leading-tight">
                    MADE IN
                  </span>
                  <span className="font-display font-extrabold text-xs sm:text-sm text-white tracking-wider leading-tight">
                    BAHAWALPUR
                  </span>
                  <span className="text-[9px] text-rose-400 mt-0.5">❤️</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
