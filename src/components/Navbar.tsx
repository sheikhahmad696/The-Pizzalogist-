import React, { useEffect, useState } from "react";
import { BrandLogo } from "./BrandLogo";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  onOpenOrderModal: () => void;
}

const NAV_LINKS = [
  { label: "OUR STORY", href: "#story" },
  { label: "SIGNATURES", href: "#signatures" },
  { label: "BRANCHES", href: "#branches" },
  { label: "FOUNDER", href: "#founder" },
  { label: "CONTACT", href: "#contact" },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrderModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Active section detection
      const sections = ["story", "signatures", "branches", "founder", "contact"];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          return;
        }
      }
      setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0b0b0d]/85 backdrop-blur-md border-b border-white/[0.08] shadow-2xl shadow-black/80 py-3.5"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Wordmark & Emblem */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="group flex items-center focus:outline-none"
            aria-label="The Pizzalogist Home"
          >
            <BrandLogo size="sm" showTagline={false} />
          </a>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-7 lg:gap-9 text-xs font-semibold tracking-wider text-stone-300"
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className={`relative py-1 uppercase transition-colors whitespace-nowrap ${
                    isActive ? "text-[#faf7f2]" : "hover:text-[#faf7f2] text-stone-400"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#e11d48] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          {/* Action Zone: ORDER NOW button & Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onOpenOrderModal}
              className="relative group overflow-hidden px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-lg bg-[#e11d48] text-white font-semibold text-[11px] sm:text-xs tracking-wider uppercase transition-all duration-300 hover:bg-[#be123c] shadow-lg shadow-rose-900/30 flex items-center gap-1 sm:gap-1.5 whitespace-nowrap active:scale-95"
            >
              <span>ORDER NOW</span>
              <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 sm:p-2 text-stone-300 hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500/50"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Animated Fullscreen Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#0b0b0d]/98 backdrop-blur-xl md:hidden transition-all duration-400 flex flex-col justify-between p-6 pt-28 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="flex flex-col gap-6">
          <p className="text-[11px] font-mono tracking-widest text-rose-500 uppercase">
            Navigation Menu
          </p>

          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link, idx) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                style={{ transitionDelay: `${idx * 60}ms` }}
                className={`text-left font-display font-black text-2xl tracking-tight text-stone-200 hover:text-rose-500 py-1 border-b border-stone-800/60 flex items-center justify-between transition-transform ${
                  mobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                }`}
              >
                <span>{link.label}</span>
                <span className="text-xs font-mono text-stone-500 font-normal">
                  0{idx + 1}
                </span>
              </button>
            ))}
          </nav>
        </div>

        {/* Mobile Menu Footer Action */}
        <div className="flex flex-col gap-3 pt-6 border-t border-stone-800/80">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenOrderModal();
            }}
            className="w-full py-3.5 bg-gradient-to-r from-[#e11d48] to-[#ea580c] text-white font-bold text-sm tracking-wider uppercase rounded-xl shadow-xl shadow-rose-900/40 flex items-center justify-center gap-2"
          >
            <span>ORDER DIRECT (WHATSAPP)</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
          <div className="flex items-center justify-between text-xs text-stone-400 pt-2">
            <span>3 Branches in Bahawalpur</span>
            <span className="text-rose-400 font-medium">Proud Bahawalpuri ❤️</span>
          </div>
        </div>
      </div>
    </>
  );
};
