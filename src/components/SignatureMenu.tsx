import React, { useState } from "react";
import { ArrowRight, Flame, Sparkles, MessageCircle } from "lucide-react";
import { SIGNATURE_ITEMS, MenuItem, BRAND_INFO } from "../data/brandData";

interface SignatureMenuProps {
  onSelectItemForOrder: (item: MenuItem) => void;
}

export const SignatureMenu: React.FC<SignatureMenuProps> = ({
  onSelectItemForOrder,
}) => {
  return (
    <section
      id="signatures"
      className="relative py-24 lg:py-36 bg-[#0e0e12] overflow-hidden border-t border-white/[0.06]"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-rose-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4 sm:gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <span className="w-5 sm:w-6 h-[2px] bg-[#e11d48]" />
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] text-rose-400 font-semibold">
                CURATED CREATIONS
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight text-[#faf7f2]">
              SIGNATURE CRAVINGS
            </h2>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-stone-400 font-medium max-w-md">
            “Made for serious pizza people.” Hand-stretched dough, proprietary herb
            infusion, and unapologetic portions.
          </p>
        </div>

        {/* Cards Grid on Desktop / Swipeable Carousel on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 overflow-x-auto pb-6 md:pb-0 scrollbar-none snap-x snap-mandatory">
          {SIGNATURE_ITEMS.map((item) => (
            <MenuCard
              key={item.id}
              item={item}
              onOrderClick={() => onSelectItemForOrder(item)}
            />
          ))}
        </div>

        {/* Bottom Menu Notice Rule (Respecting anti-hallucination constraint) */}
        <div className="mt-14 p-6 rounded-2xl bg-[#141419] border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-950/60 border border-rose-500/30 flex items-center justify-center shrink-0">
              <Flame className="w-5 h-5 text-rose-400" />
            </div>
            <div>
              <h4 className="font-display font-bold text-white text-base">
                Looking for today's full branch specialty menu?
              </h4>
              <p className="text-xs text-stone-400">
                Contact your nearest branch directly on WhatsApp for daily seasonal crusts and combo offers.
              </p>
            </div>
          </div>
          <a
            href={BRAND_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/40 text-[#25D366] font-semibold text-xs tracking-wider uppercase flex items-center gap-2 transition-all whitespace-nowrap active:scale-95"
          >
            <MessageCircle className="w-4 h-4" />
            <span>ASK TODAY'S SPECIALS</span>
          </a>
        </div>
      </div>
    </section>
  );
};

interface MenuCardProps {
  item: MenuItem;
  onOrderClick: () => void;
}

const MenuCard: React.FC<MenuCardProps> = ({ item, onOrderClick }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
      }}
      className="group relative flex flex-col justify-between rounded-3xl bg-[#141419] border border-white/[0.08] hover:border-rose-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-rose-950/40 overflow-hidden snap-center min-w-[280px]"
    >
      {/* Top Image Showcase */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0a0a0d]">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141419] via-transparent to-black/30" />

        {/* Clean text badge (Anti-pill discipline, high luxury editorial label) */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-md bg-[#0b0b0d]/80 backdrop-blur-md border border-white/10 text-[11px] font-mono tracking-wider uppercase text-amber-400 font-semibold">
            {item.badge}
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <span className="text-[11px] font-mono tracking-widest text-stone-400 uppercase font-medium">
            {item.category}
          </span>
          <h3 className="font-display font-bold text-2xl text-white mt-1 mb-2.5 group-hover:text-rose-400 transition-colors">
            {item.title}
          </h3>
          <p className="text-xs text-stone-300 leading-relaxed font-normal line-clamp-3">
            {item.description}
          </p>
        </div>

        {/* Card Action Footer */}
        <div className="pt-6 mt-4 border-t border-white/[0.06] flex items-center justify-between">
          <span className="text-xs font-mono uppercase tracking-widest text-[#f59e0b] font-semibold">
            EXPLORE
          </span>

          <button
            onClick={onOrderClick}
            className="w-10 h-10 rounded-xl bg-white/[0.05] group-hover:bg-[#e11d48] text-white flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:shadow-rose-900/50"
            aria-label={`Order ${item.title} on WhatsApp`}
          >
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
