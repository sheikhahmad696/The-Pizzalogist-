import React, { useState } from "react";
import { ArrowUpRight, MessageCircle, Instagram, Facebook } from "lucide-react";
import { BRAND_INFO } from "../data/brandData";

export const SocialSection: React.FC = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-[#0b0b0d] overflow-hidden border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-[#e11d48]" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-rose-400 font-semibold">
              COMMUNITY & STORIES
            </span>
            <span className="w-6 h-[2px] bg-[#e11d48]" />
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight text-[#faf7f2]">
            FOLLOW THE PIZZA JOURNEY.
          </h2>

          <p className="mt-3 sm:mt-4 text-stone-400 text-sm sm:text-base md:text-lg">
            Catch behind-the-scenes pizza making, hot oven drops, and founder stories on our official channels.
          </p>
        </div>

        {/* Large Interactive Social Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Instagram Button */}
          <MagneticSocialCard
            href={BRAND_INFO.instagramUrl}
            icon={<Instagram className="w-8 h-8 text-rose-400" />}
            platform="Instagram"
            handle="@pizzalogist_"
            description="Behind-the-scenes, cheese pulls, and oven drops."
            accentColor="hover:border-rose-500/60 hover:shadow-rose-950/50"
            buttonLabel="FOLLOW ON INSTAGRAM"
          />

          {/* Facebook Button */}
          <MagneticSocialCard
            href={BRAND_INFO.facebookUrl}
            icon={
              <div className="relative w-9 h-9 rounded-full overflow-hidden border border-blue-400">
                <img
                  src="/images/founder.jpg"
                  alt="Ahmad Mustafa Facebook"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            }
            platform="Facebook Official"
            handle="Àhmàd' Můśt'āfā (CEO)"
            description="Owner and founder of @Pizzalogist · Updates & community stories."
            accentColor="hover:border-blue-500/60 hover:shadow-blue-950/50"
            buttonLabel="CONNECT ON FACEBOOK"
          />

          {/* WhatsApp Direct Community */}
          <MagneticSocialCard
            href={BRAND_INFO.whatsappUrl}
            icon={<MessageCircle className="w-8 h-8 text-emerald-400" />}
            platform="WhatsApp"
            handle="+92 306 2102317"
            description="Direct orders, branch desk, and priority customer care."
            accentColor="hover:border-emerald-500/60 hover:shadow-emerald-950/50"
            buttonLabel="CHAT ON WHATSAPP"
          />
        </div>
      </div>
    </section>
  );
};

interface MagneticSocialCardProps {
  href: string;
  icon: React.ReactNode;
  platform: string;
  handle: string;
  description: string;
  accentColor: string;
  buttonLabel: string;
}

const MagneticSocialCard: React.FC<MagneticSocialCardProps> = ({
  href,
  icon,
  platform,
  handle,
  description,
  accentColor,
  buttonLabel,
}) => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 14;
    setOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate(${offset.x}px, ${offset.y}px)`,
      }}
      className={`group relative p-8 rounded-3xl bg-[#141419] border border-white/[0.08] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 shadow-xl ${accentColor}`}
    >
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 group-hover:scale-110 transition-transform">
            {icon}
          </div>
          <ArrowUpRight className="w-5 h-5 text-stone-500 group-hover:text-white transition-colors group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>

        <span className="text-xs font-mono uppercase tracking-widest text-stone-400">
          {platform}
        </span>
        <h3 className="font-display font-bold text-2xl text-white mt-1 mb-2">
          {handle}
        </h3>
        <p className="text-xs text-stone-400 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono font-semibold tracking-wider text-rose-400 group-hover:text-white transition-colors">
        <span>{buttonLabel}</span>
        <span>→</span>
      </div>
    </a>
  );
};
