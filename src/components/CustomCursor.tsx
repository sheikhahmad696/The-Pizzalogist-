import React, { useEffect, useState } from "react";

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable if pointing device is mouse (not touch)
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.closest("button") ||
          target.closest("a") ||
          target.closest("input") ||
          target.hasAttribute("data-interactive"))
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    let frameId: number;
    const loop = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.18,
        y: prev.y + (pos.y - prev.y) * 0.18,
      }));
      frameId = requestAnimationFrame(loop);
    };
    frameId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(frameId);
    };
  }, [pos.x, pos.y, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[120] overflow-hidden hidden md:block">
      {/* Outer ring */}
      <div
        className="fixed rounded-full border border-rose-500/40 -translate-x-1/2 -translate-y-1/2 transition-[width,height,background-color,border-color] duration-200 ease-out"
        style={{
          left: `${trailingPos.x}px`,
          top: `${trailingPos.y}px`,
          width: isHovering ? "48px" : "32px",
          height: isHovering ? "48px" : "32px",
          backgroundColor: isHovering ? "rgba(225, 29, 72, 0.12)" : "transparent",
          borderColor: isHovering ? "#e11d48" : "rgba(244, 63, 94, 0.4)",
        }}
      />
      {/* Center dot */}
      <div
        className="fixed w-1.5 h-1.5 rounded-full bg-[#faf7f2] -translate-x-1/2 -translate-y-1/2 transition-[transform,background-color] duration-150 ease-out shadow-[0_0_8px_#e11d48]"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          transform: isHovering
            ? "translate(-50%, -50%) scale(1.5)"
            : "translate(-50%, -50%) scale(1)",
        }}
      />
    </div>
  );
};
