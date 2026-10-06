import React, { useEffect, useRef, useState } from "react";
import { FOUNDER_INFO, BRAND_INFO } from "../data/brandData";
import { Award, Flame, Heart } from "lucide-react";

export const FounderSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [branchesCount, setBranchesCount] = useState(0);
  const [brandCount, setBrandCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let bTimer = setInterval(() => {
      setBranchesCount((prev) => {
        if (prev < 3) return prev + 1;
        clearInterval(bTimer);
        return 3;
      });
    }, 200);

    let brTimer = setInterval(() => {
      setBrandCount((prev) => {
        if (prev < 1) return prev + 1;
        clearInterval(brTimer);
        return 1;
      });
    }, 300);

    return () => {
      clearInterval(bTimer);
      clearInterval(brTimer);
    };
  }, [isVisible]);

  return (
    <section
      id="founder"
      ref={sectionRef}
      className="relative py-24 lg:py-36 bg-[#0e0e12] overflow-hidden border-t border-white/[0.06]"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-2 sm:mb-3">
          <span className="w-5 sm:w-6 h-[2px] bg-[#e11d48]" />
          <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] text-rose-400 font-semibold">
            LEADERSHIP & VISION
          </span>
        </div>

        <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight text-[#faf7f2] mb-8 sm:mb-16">
          THE MAN BEHIND THE PIZZA.
        </h2>

        {/* Split Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left: Founder Photo with Cinematic Mask Reveal */}
          <div className="lg:col-span-5 relative">
            <div
              className={`relative mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#141419] transition-all duration-1000 ease-out group ${
                isVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-12 scale-95"
              }`}
            >
              <div className="aspect-[3/4] w-full overflow-hidden">
                <img
                  src="/images/Founder"
                  alt="Ahmad Mustafa - Founder & Owner of The Pizzalogist"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0d] via-black/30 to-transparent" />

              {/* Mascot Stamp Floating on Founder Portrait */}
              <div className="absolute top-3 right-3 sm:top-5 sm:right-5 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl p-0.5 bg-gradient-to-tr from-[#e11d48] to-[#f59e0b] shadow-xl shadow-black/80 overflow-hidden">
                <div className="w-full h-full rounded-[14px] bg-[#0c0c10] overflow-hidden">
                  <img
                    src="/images/logo.jpg"
                    alt="The Pizzalogist Official Mascot"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Founder Tag Card */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#0b0b0d]/85 backdrop-blur-md border border-white/10 shadow-xl">
                <div className="flex items-center gap-2">
                  <p className="font-display font-extrabold text-lg sm:text-2xl text-white">
                    {FOUNDER_INFO.name}
                  </p>
                  <span className="inline-flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-blue-500 text-white text-[9px] sm:text-[10px] font-bold" title="Verified Owner">
                    ✓
                  </span>
                </div>
                <div className="flex items-center justify-between text-[11px] sm:text-xs mt-1">
                  <span className="text-amber-400 font-semibold tracking-wide">
                    {FOUNDER_INFO.role} & CEO
                  </span>
                  <span className="text-stone-300 font-mono">The Pizzalogist</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Biography, Quote & Animated Statistics */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="space-y-4 sm:space-y-6 text-stone-300 text-sm sm:text-base md:text-lg leading-relaxed">
              <p className="font-medium text-white text-base sm:text-xl md:text-2xl leading-snug">
                “When you truly respect the craft of pizza, every detail matters — the hydration of the dough, the blistering heat of the oven, and the fire in every bite.”
              </p>

              <p className="text-stone-400 text-xs sm:text-sm md:text-base">
                Ahmad Mustafa set out with a relentless goal: build Bahawalpur's definitive pizza institution. Driven by an obsession with texture and flavor depth, he transformed a neighborhood passion into a thriving 3-branch culinary powerhouse that proudly represents Bahawalpuri pride.
              </p>
            </div>

            {/* Statistics Counters */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 sm:pt-10 mt-6 sm:mt-10 border-t border-white/[0.08]">
              {/* Stat 1 */}
              <div className="flex flex-col">
                <span className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-[#e11d48] tracking-tight tabular-nums">
                  {branchesCount}
                </span>
                <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-stone-300 mt-1 sm:mt-2 font-bold">
                  BRANCHES
                </span>
                <span className="text-[9px] sm:text-[11px] text-stone-400 mt-0.5">Bahawalpur</span>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col">
                <span className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-[#f59e0b] tracking-tight tabular-nums">
                  {brandCount}
                </span>
                <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-stone-300 mt-1 sm:mt-2 font-bold">
                  BAHAWALPUR
                </span>
                <span className="text-[9px] sm:text-[11px] text-stone-400 mt-0.5">Homegrown</span>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col">
                <span className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight">
                  ∞
                </span>
                <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-stone-300 mt-1 sm:mt-2 font-bold">
                  PIZZA MOMENTS
                </span>
                <span className="text-[9px] sm:text-[11px] text-stone-400 mt-0.5">With Love</span>
              </div>
            </div>

            {/* Founder Note Badge */}
            <div className="mt-10 p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
              </div>
              <p className="text-xs text-stone-300">
                <strong className="text-white">Built by Ahmad Mustafa for Bahawalpur.</strong> Every slice is prepared fresh upon order to guarantee oven-hot perfection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
