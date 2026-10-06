import React from "react";
import { BrandLogo } from "./BrandLogo";
import { BRAND_INFO, BRANCHES } from "../data/brandData";
import { Phone, Mail, Instagram, Facebook, MessageCircle, MapPin, Heart } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#070709] border-t border-white/[0.08] pt-20 pb-12 overflow-hidden text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/[0.06]">
          {/* Brand Info & Positioning */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <BrandLogo size="md" showTagline={true} />
            <p className="mt-4 text-xs font-semibold text-rose-500 tracking-wider uppercase flex items-center gap-1.5">
              <span>Proud Bahawalpuri Brand</span>
              <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
            </p>
            <p className="mt-4 text-stone-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Artisanal pizza redefined for Bahawalpur. Woodstone crusts, authentic bold spices, and uncompromised quality crafted by founder Ahmad Mustafa.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/[0.04] hover:bg-rose-600/20 hover:text-rose-400 border border-white/10 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={BRAND_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/[0.04] hover:bg-blue-600/20 hover:text-blue-400 border border-white/10 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={BRAND_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/[0.04] hover:bg-emerald-600/20 hover:text-emerald-400 border border-white/10 flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2">
            <h4 className="font-mono text-xs uppercase tracking-widest text-white font-bold mb-4">
              NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <button
                  onClick={() => scrollTo("#story")}
                  className="hover:text-rose-400 transition-colors"
                >
                  Our Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("#signatures")}
                  className="hover:text-rose-400 transition-colors"
                >
                  Signatures Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("#branches")}
                  className="hover:text-rose-400 transition-colors"
                >
                  Branches
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("#founder")}
                  className="hover:text-rose-400 transition-colors"
                >
                  The Founder
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("#contact")}
                  className="hover:text-rose-400 transition-colors"
                >
                  Order / Contact
                </button>
              </li>
            </ul>
          </div>

          {/* 3 Branches */}
          <div className="lg:col-span-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-white font-bold mb-4">
              BAHAWALPUR BRANCHES
            </h4>
            <ul className="space-y-3.5 text-xs">
              {BRANCHES.map((b) => (
                <li key={b.id} className="flex flex-col">
                  <span className="font-semibold text-white flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-rose-500 shrink-0" />
                    {b.name}
                  </span>
                  <a
                    href={`tel:${b.phoneRaw}`}
                    className="font-mono text-stone-400 hover:text-rose-400 transition-colors mt-0.5 ml-4"
                  >
                    {b.phoneDisplay}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact & Inquiries */}
          <div className="lg:col-span-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-white font-bold mb-4">
              DIRECT DESK
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <span className="text-stone-400 block font-mono text-[11px]">Direct WhatsApp:</span>
                <a
                  href={BRAND_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#25D366] font-mono font-medium flex items-center gap-1.5 mt-0.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>{BRAND_INFO.mainWhatsAppNumber}</span>
                </a>
              </li>
              <li>
                <span className="text-stone-400 block font-mono text-[11px]">Email Inquiries:</span>
                <a
                  href={`mailto:${BRAND_INFO.email}`}
                  className="text-white hover:text-rose-400 font-mono font-medium flex items-center gap-1.5 mt-0.5"
                >
                  <Mail className="w-3.5 h-3.5 text-rose-500" />
                  <span>{BRAND_INFO.email}</span>
                </a>
              </li>
              <li className="pt-2">
                <span className="text-[11px] text-stone-400 block">
                  Location: Bahawalpur, Punjab, Pakistan
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p className="font-mono">
            © {new Date().getFullYear()} The Pizzalogist. All rights reserved.
          </p>
          <p className="text-stone-400 font-medium flex items-center gap-1">
            <span>Built with extra cheese.</span>
            <span>🧀</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
