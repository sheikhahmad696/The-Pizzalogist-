import React from "react";
import { MessageCircle, Phone, ArrowUpRight, Flame } from "lucide-react";
import { BRAND_INFO, BRANCHES } from "../data/brandData";

interface CTAProps {
  onOpenOrderModal: () => void;
}

export const CTA: React.FC<CTAProps> = ({ onOpenOrderModal }) => {
  return (
    <section
      id="contact"
      className="relative py-28 lg:py-40 overflow-hidden bg-gradient-to-b from-[#0b0b0d] via-[#1a080c] to-[#09090b] border-t border-rose-950/40"
    >
      {/* Background Volumetric Radiance */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(225,29,72,0.25)_0%,_rgba(11,11,13,0)_70%)] pointer-events-none" />

      {/* Animated Pizza Embers & Particles in the background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
        <span className="absolute top-12 left-[15%] text-2xl animate-bounce duration-[4000ms] opacity-30">🍕</span>
        <span className="absolute bottom-16 right-[12%] text-3xl animate-pulse duration-[3000ms] opacity-25">🌶️</span>
        <span className="absolute top-1/3 right-[22%] text-2xl animate-bounce duration-[6000ms] opacity-20">🧀</span>
        <span className="absolute bottom-1/4 left-[20%] text-xl animate-pulse duration-[5000ms] opacity-25">🔥</span>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Kicker */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-950/70 border border-rose-500/30 text-rose-400 text-xs font-mono tracking-widest uppercase mb-6">
          <Flame className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
          <span>BAHAWALPUR'S FAVORITE SLICE</span>
        </div>

        {/* Large Typography */}
        <h2 className="font-display font-black text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tight leading-[0.95] text-white uppercase mb-6 sm:mb-8">
          YOUR NEXT SLICE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#faf7f2] via-[#f59e0b] to-[#e11d48]">
            IS WAITING.
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-base sm:text-lg md:text-xl text-stone-300 max-w-2xl mx-auto mb-8 sm:mb-12 font-medium">
          “Call your nearest branch or order directly on WhatsApp.”
        </p>

        {/* Action Buttons: WhatsApp visually dominant */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-5 max-w-xl mx-auto">
          {/* Dominant WhatsApp button */}
          <a
            href={BRAND_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-slate-950 font-extrabold text-xs sm:text-base tracking-wider uppercase hover:shadow-2xl hover:shadow-[#25D366]/40 transition-all duration-300 flex items-center justify-center gap-2.5 sm:gap-3 active:scale-95 group"
          >
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-slate-950 text-transparent" />
            <span>ORDER ON WHATSAPP</span>
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>

          {/* Quick Call modal or nearest branch launcher */}
          <button
            onClick={onOpenOrderModal}
            className="w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-5 rounded-xl sm:rounded-2xl bg-white/[0.08] hover:bg-white/[0.14] border border-white/20 text-white font-bold text-xs sm:text-base tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 active:scale-95"
          >
            <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-400" />
            <span>CALL NOW</span>
          </button>
        </div>

        {/* 3 Quick Phone Hotlines */}
        <div className="mt-14 pt-8 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-left">
          {BRANCHES.map((b) => (
            <a
              key={b.id}
              href={`tel:${b.phoneRaw}`}
              className="p-3.5 rounded-xl bg-black/40 border border-white/[0.06] hover:border-rose-500/40 transition-colors flex flex-col group"
            >
              <span className="text-[11px] font-mono text-stone-400 uppercase">
                {b.name}
              </span>
              <span className="text-sm font-mono font-bold text-white group-hover:text-rose-400 transition-colors mt-0.5">
                {b.phoneDisplay}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
