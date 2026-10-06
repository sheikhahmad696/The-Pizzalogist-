import React, { useState } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import { ScrollProgress } from "./components/ScrollProgress";
import { CustomCursor } from "./components/CustomCursor";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Ticker } from "./components/Ticker";
import { BrandStory } from "./components/BrandStory";
import { SignatureMenu } from "./components/SignatureMenu";
import { FullscreenPizzaMoment } from "./components/FullscreenPizzaMoment";
import { BranchSection } from "./components/BranchSection";
import { FounderSection } from "./components/FounderSection";
import { SocialSection } from "./components/SocialSection";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { OrderModal } from "./components/OrderModal";
import { Branch, MenuItem, BRAND_INFO } from "./data/brandData";
import { MessageCircle } from "lucide-react";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState<Branch | null>(null);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const handleOpenOrderModal = () => {
    setSelectedBranch(null);
    setSelectedItem(null);
    setIsOrderModalOpen(true);
  };

  const handleSelectBranchForOrder = (branch: Branch) => {
    setSelectedBranch(branch);
    setIsOrderModalOpen(true);
  };

  const handleSelectItemForOrder = (item: MenuItem) => {
    setSelectedItem(item);
    setIsOrderModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#0b0b0d] text-[#faf7f2] font-sans antialiased selection:bg-[#e11d48] selection:text-white">
      {/* Noise Texture Layer */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Loading Intro Transition */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* Top Scroll Progress Bar */}
      <ScrollProgress />

      {/* Custom Desktop Cursor */}
      <CustomCursor />

      {/* Sticky Navigation */}
      <Navbar onOpenOrderModal={handleOpenOrderModal} />

      {/* Main Content Layout */}
      <main>
        {/* Fullscreen Hero Section */}
        <Hero onOpenOrderModal={handleOpenOrderModal} />

        {/* Infinite Running Marquee */}
        <Ticker />

        {/* Editorial Brand Story & Roots */}
        <BrandStory />

        {/* Signature Pizza Menu Showcase */}
        <SignatureMenu onSelectItemForOrder={handleSelectItemForOrder} />

        {/* Fullscreen Visual Cinematic Moment */}
        <FullscreenPizzaMoment />

        {/* 3 City Branches Showcase */}
        <BranchSection onSelectBranchForOrder={handleSelectBranchForOrder} />

        {/* Founder Story & Numerical Milestones */}
        <FounderSection />

        {/* Social Presence & Community */}
        <SocialSection />

        {/* Final Conversion CTA */}
        <CTA onOpenOrderModal={handleOpenOrderModal} />
      </main>

      {/* High-End Footer */}
      <Footer />

      {/* Floating Instant WhatsApp Button */}
      <aside aria-label="Direct WhatsApp Order Button" className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40">
        <a
          href={BRAND_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 p-3 sm:px-4 sm:py-3 rounded-full bg-[#25D366] text-black font-bold text-xs uppercase tracking-wider shadow-2xl shadow-emerald-950/70 hover:scale-105 active:scale-95 transition-all duration-300"
          aria-label="Direct WhatsApp Order"
        >
          <MessageCircle className="w-5 h-5 fill-black text-transparent" />
          <span className="hidden sm:inline font-mono">ORDER DIRECT</span>
        </a>
      </aside>

      {/* Interactive Quick Order / Branch Modal */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        initialBranch={selectedBranch}
        initialItem={selectedItem}
      />
    </div>
  );
}
