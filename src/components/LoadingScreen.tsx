import React, { useEffect, useState } from "react";
import { BrandLogo } from "./BrandLogo";

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<"intro" | "reveal" | "exit">("intro");

  useEffect(() => {
    // 0 -> 500ms: intro icon scale and ember glow
    const t1 = setTimeout(() => {
      setPhase("reveal");
    }, 600);

    // 600 -> 1200ms: reveal brand logo and title
    const t2 = setTimeout(() => {
      setPhase("exit");
    }, 1250);

    // 1450ms: remove loading screen from DOM
    const t3 = setTimeout(() => {
      onComplete();
    }, 1500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#070709] transition-all duration-500 ease-out pointer-events-auto ${
        phase === "exit" ? "opacity-0 -translate-y-6 pointer-events-none" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      {/* Background radial dramatic light */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(225,29,72,0.2)_0%,_rgba(11,11,13,0)_70%)] pointer-events-none" />

      <div className="relative flex flex-col items-center text-center px-4">
        {/* Animated glowing official mascot logo */}
        <div className="relative mb-6">
          <div className="w-24 h-24 rounded-3xl bg-gradient-to-tr from-[#e11d48] to-[#f59e0b] p-0.5 shadow-2xl shadow-rose-900/60 animate-pulse overflow-hidden">
            <div className="w-full h-full bg-[#0d0d10] rounded-[22px] overflow-hidden flex items-center justify-center">
              <img
                src="/images/logo.jpg"
                alt="The Pizzalogist"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <span className="absolute -inset-2 rounded-3xl bg-rose-600/30 blur-xl -z-10 animate-ping opacity-40" />
        </div>

        {/* Revealed Title */}
        <div
          className={`transition-all duration-500 transform ${
            phase !== "intro"
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <BrandLogo size="lg" showTagline={true} />
          <p className="mt-3 text-xs tracking-widest uppercase text-stone-400 font-medium">
            Proud Bahawalpuri Brand ❤️
          </p>
        </div>
      </div>
    </div>
  );
};
