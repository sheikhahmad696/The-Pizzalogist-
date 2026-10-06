import React, { useEffect, useRef, useState } from "react";

export const FullscreenPizzaMoment: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress from 0 (when entering from bottom) to 1 (when exiting top)
      const totalDist = windowHeight + rect.height;
      const currentDist = windowHeight - rect.top;
      const progress = Math.max(0, Math.min(1, currentDist / totalDist));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Compute rotation (-25deg to +25deg) and scale (0.85 to 1.15)
  const rotation = (scrollProgress - 0.5) * 50;
  const scale = 0.9 + scrollProgress * 0.25;
  const textTranslateY = (scrollProgress - 0.5) * -40;

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[90vh] lg:min-h-screen w-full bg-[#070709] overflow-hidden flex items-center justify-center py-20"
      aria-label="Cinematic Pizza Experience"
    >
      {/* Dynamic Red / Orange Glow that follows rotation */}
      <div
        className="absolute w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] rounded-full bg-gradient-to-tr from-rose-600/30 via-orange-600/20 to-amber-500/10 blur-[150px] pointer-events-none transition-transform duration-100 ease-out"
        style={{
          transform: `scale(${scale * 1.1}) rotate(${rotation * 0.5}deg)`,
        }}
      />

      {/* Behind Huge Pizza Image with parallax rotation & scale */}
      <div
        className="absolute w-[240px] sm:w-[420px] md:w-[600px] lg:w-[800px] max-w-[85vw] aspect-square rounded-full overflow-hidden shadow-2xl shadow-rose-950/60 pointer-events-none opacity-80 mix-blend-lighten transition-transform duration-100 ease-out"
        style={{
          transform: `scale(${scale}) rotate(${rotation}deg)`,
        }}
      >
        <img
          src="/src/assets/images/hero_cinematic_pizza_1791273235156.jpg"
          alt="Cinematic Artisanal Pizza"
          className="w-full h-full object-cover rounded-full"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-radial from-transparent via-[#070709]/40 to-[#070709] rounded-full" />
      </div>

      {/* Foreground Huge Centered Typography */}
      <div
        className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center select-none transition-transform duration-100 ease-out"
        style={{
          transform: `translateY(${textTranslateY}px)`,
        }}
      >
        <span className="text-[11px] sm:text-xs md:text-sm font-mono tracking-[0.25em] uppercase text-amber-400 font-bold mb-3 sm:mb-4 drop-shadow-md">
          THE BAHAWALPUR STANDARDS
        </span>

        <h2 className="font-display font-black text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl uppercase tracking-tighter leading-[0.95] text-white">
          <span className="block drop-shadow-2xl">MORE CHEESE.</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-amber-400 to-orange-500 drop-shadow-2xl py-1">
            MORE FLAVOUR.
          </span>
          <span className="block drop-shadow-2xl text-stone-100">MORE PIZZA.</span>
        </h2>

        <p className="mt-6 sm:mt-8 text-xs sm:text-sm md:text-base font-medium text-stone-300 max-w-md backdrop-blur-md bg-black/50 py-2 sm:py-2.5 px-4 sm:px-6 rounded-full border border-white/10 shadow-lg">
          No shortcuts. Pure woodstone heat, authentic spices, and zero compromise.
        </p>
      </div>

      {/* Top & Bottom dark fades for seamless blending */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#0e0e12] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#0b0b0d] to-transparent pointer-events-none" />
    </section>
  );
};
