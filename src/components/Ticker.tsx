import React from "react";

const TICKER_ITEMS = [
  { text: "THE PIZZA SPECIALIST", color: "text-[#faf7f2]" },
  { text: "PROUD BAHAWALPURI BRAND", color: "text-[#e11d48]" },
  { text: "BIG FLAVOUR", color: "text-[#faf7f2]" },
  { text: "THREE BRANCHES", color: "text-[#e11d48]" },
  { text: "MADE WITH LOVE", color: "text-[#faf7f2]" },
  { text: "PIZZA OBSESSION", color: "text-[#e11d48]" },
];

export const Ticker: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden bg-[#0e0e12] border-y border-white/[0.08] py-4 select-none">
      {/* Edge gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0e0e12] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0e0e12] to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee whitespace-nowrap items-center">
        {/* Render twice for continuous loop */}
        {[...Array(2)].map((_, loopIdx) => (
          <div key={loopIdx} className="flex items-center gap-8 px-4">
            {TICKER_ITEMS.map((item, idx) => (
              <React.Fragment key={`${loopIdx}-${idx}`}>
                <span
                  className={`font-display font-extrabold text-xl sm:text-2xl md:text-3xl tracking-wider uppercase transition-colors ${item.color}`}
                >
                  {item.text}
                </span>
                <span className="text-[#f59e0b] text-xl font-bold select-none">•</span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
