import React, { useState } from "react";
import { Phone, MessageCircle, MapPin, ArrowUpRight } from "lucide-react";
import { BRANCHES, Branch, BRAND_INFO } from "../data/brandData";

interface BranchSectionProps {
  onSelectBranchForOrder: (branch: Branch) => void;
}

export const BranchSection: React.FC<BranchSectionProps> = ({
  onSelectBranchForOrder,
}) => {
  const [hoveredBranch, setHoveredBranch] = useState<string | null>(null);

  return (
    <section id="branches" className="relative py-24 lg:py-36 bg-[#0b0b0d] overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-rose-950/20 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4 sm:gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <span className="w-5 sm:w-6 h-[2px] bg-[#e11d48]" />
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] text-rose-400 font-semibold">
                LOCATIONS & DELIVERY
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight text-[#faf7f2]">
              THREE SPOTS. <br className="sm:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e11d48] to-[#f59e0b]">
                ONE OBSESSION.
              </span>
            </h2>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-stone-400 font-medium max-w-md">
            Hot, fresh, and lightning-fast across Bahawalpur. Call your nearest kitchen
            or chat with our order desk directly on WhatsApp.
          </p>
        </div>

        {/* 3 Premium Branch Panels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {BRANCHES.map((branch) => {
            const isHovered = hoveredBranch === branch.id;
            return (
              <div
                key={branch.id}
                onMouseEnter={() => setHoveredBranch(branch.id)}
                onMouseLeave={() => setHoveredBranch(null)}
                className={`relative rounded-3xl bg-[#141419] border transition-all duration-300 p-5 sm:p-8 flex flex-col justify-between overflow-hidden group ${
                  isHovered
                    ? "border-rose-500/50 -translate-y-2 shadow-2xl shadow-rose-950/40 bg-[#17171e]"
                    : "border-white/[0.08] shadow-lg shadow-black/40"
                }`}
              >
                {/* Moving background light effect on hover */}
                <div
                  className={`absolute -top-24 -right-24 w-52 h-52 rounded-full bg-gradient-to-br from-[#e11d48]/25 to-amber-500/10 blur-2xl transition-opacity duration-500 pointer-events-none ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                />

                {/* Top: Large Number & Location Icon */}
                <div>
                  <div className="flex items-start justify-between mb-4 sm:mb-6">
                    <span
                      className={`font-display font-black text-4xl sm:text-6xl tracking-tighter text-stone-700/60 transition-all duration-300 ${
                        isHovered
                          ? "text-[#e11d48] scale-110 translate-x-1"
                          : ""
                      }`}
                    >
                      {branch.number}
                    </span>

                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs text-stone-300 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                      <span>Bahawalpur</span>
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-xl sm:text-2xl lg:text-3xl text-white mb-2 group-hover:text-rose-400 transition-colors">
                    {branch.name}
                  </h3>

                  <p className="text-sm text-stone-400 flex items-center gap-2 mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>{branch.address}</span>
                  </p>
                </div>

                {/* Bottom: Contact Actions */}
                <div className="space-y-3 pt-6 border-t border-white/[0.06] relative z-10">
                  {/* Clickable Phone Number (tel:) */}
                  <a
                    href={`tel:${branch.phoneRaw}`}
                    className="w-full py-3.5 px-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white font-mono text-sm tracking-wider flex items-center justify-between transition-colors group/tel"
                  >
                    <div className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-rose-500 group-hover/tel:rotate-12 transition-transform" />
                      <span className="font-semibold">{branch.phoneDisplay}</span>
                    </div>
                    <span className="text-[11px] font-sans font-medium uppercase tracking-wider text-stone-400 group-hover/tel:text-white">
                      Call Now
                    </span>
                  </a>

                  {/* WhatsApp Direct Order Button */}
                  <a
                    href={`${BRAND_INFO.whatsappUrl}?text=${encodeURIComponent(
                      branch.whatsappMessage
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366] text-[#25D366] hover:text-black font-semibold text-xs tracking-wider uppercase flex items-center justify-between transition-all duration-300 group/wa shadow-sm"
                  >
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4" />
                      <span>ORDER VIA WHATSAPP</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/wa:translate-x-0.5 group-hover/wa:-translate-y-0.5" />
                  </a>

                  <button
                    onClick={() => onSelectBranchForOrder(branch)}
                    className="w-full py-2 text-center text-[11px] font-mono tracking-widest uppercase text-stone-400 hover:text-rose-400 transition-colors"
                  >
                    Select this branch for quick checkout
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
