import React, { useState, useEffect } from "react";
import { X, Phone, MessageCircle, MapPin, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { BRANCHES, Branch, MenuItem, SIGNATURE_ITEMS, BRAND_INFO } from "../data/brandData";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialBranch?: Branch | null;
  initialItem?: MenuItem | null;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  initialBranch = null,
  initialItem = null,
}) => {
  const [selectedBranch, setSelectedBranch] = useState<Branch>(
    initialBranch || BRANCHES[0]
  );
  const [selectedItemTitle, setSelectedItemTitle] = useState<string>(
    initialItem ? initialItem.title : "Any Signature Pizza"
  );
  const [orderType, setOrderType] = useState<"delivery" | "takeaway">("delivery");

  useEffect(() => {
    if (initialBranch) setSelectedBranch(initialBranch);
  }, [initialBranch]);

  useEffect(() => {
    if (initialItem) setSelectedItemTitle(initialItem.title);
  }, [initialItem]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const orderMessage = `Salam The Pizzalogist! I would like to place an order for:
• Branch: ${selectedBranch.name}
• Order Type: ${orderType.toUpperCase()}
• Item/Craving: ${selectedItemTitle}
Please share today's menu options and delivery timing.`;

  const whatsappHref = `${BRAND_INFO.whatsappUrl}?text=${encodeURIComponent(
    orderMessage
  )}`;

  return (
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl rounded-2xl sm:rounded-3xl bg-[#121217] border border-white/10 p-5 sm:p-8 shadow-2xl shadow-rose-950/50 z-10 max-h-[92vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-start justify-between pb-3 sm:pb-4 border-b border-white/[0.08]">
          <div>
            <span className="text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-rose-500 font-semibold">
              QUICK ORDER DESK
            </span>
            <h3
              id="order-modal-title"
              className="font-display font-black text-xl sm:text-3xl text-white mt-0.5"
            >
              Order from Bahawalpur
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-stone-400 hover:text-white transition-colors"
            aria-label="Close order dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step 1: Select Branch */}
        <div className="mt-5 sm:mt-6">
          <label className="block text-[11px] sm:text-xs font-mono uppercase tracking-wider text-stone-300 mb-2.5 font-semibold">
            1. Select Nearest Branch
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
            {BRANCHES.map((b) => {
              const isSelected = selectedBranch.id === b.id;
              return (
                <button
                  key={b.id}
                  type="button"
                  onClick={() => setSelectedBranch(b)}
                  className={`p-3 sm:p-3.5 rounded-xl sm:rounded-2xl text-left border transition-all ${
                    isSelected
                      ? "bg-rose-950/60 border-rose-500 shadow-md shadow-rose-950/40"
                      : "bg-[#18181f] border-white/[0.06] hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-stone-400">
                      {b.number}
                    </span>
                    {isSelected && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-rose-500" />
                    )}
                  </div>
                  <p className="font-display font-bold text-xs sm:text-sm text-white mt-1">
                    {b.name.replace(" Branch", "")}
                  </p>
                  <p className="text-[10px] sm:text-[11px] font-mono text-stone-400 mt-0.5">
                    {b.phoneDisplay}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Order Type */}
        <div className="mt-6">
          <label className="block text-xs font-mono uppercase tracking-wider text-stone-300 mb-2 font-semibold">
            2. Delivery or Takeaway
          </label>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setOrderType("delivery")}
              className={`flex-1 py-2.5 rounded-xl text-xs font-semibold tracking-wider uppercase border transition-all ${
                orderType === "delivery"
                  ? "bg-[#e11d48] border-[#e11d48] text-white"
                  : "bg-[#18181f] border-white/10 text-stone-400 hover:text-white"
              }`}
            >
              🛵 Home Delivery
            </button>
            <button
              type="button"
              onClick={() => setOrderType("takeaway")}
              className={`flex-1 py-2.5 rounded-xl text-xs font-semibold tracking-wider uppercase border transition-all ${
                orderType === "takeaway"
                  ? "bg-[#e11d48] border-[#e11d48] text-white"
                  : "bg-[#18181f] border-white/10 text-stone-400 hover:text-white"
              }`}
            >
              🏪 Self Pickup / Takeaway
            </button>
          </div>
        </div>

        {/* Step 3: Preferred Craving */}
        <div className="mt-6">
          <label className="block text-xs font-mono uppercase tracking-wider text-stone-300 mb-2 font-semibold">
            3. Selected Pizza / Craving
          </label>
          <select
            value={selectedItemTitle}
            onChange={(e) => setSelectedItemTitle(e.target.value)}
            className="w-full bg-[#18181f] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-rose-500"
          >
            <option value="Any Signature Pizza">Any Signature Pizza (Send Menu)</option>
            {SIGNATURE_ITEMS.map((item) => (
              <option key={item.id} value={item.title}>
                {item.title} — {item.category}
              </option>
            ))}
          </select>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row gap-3">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-4 px-6 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-slate-950 font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-[#25D366]/30 transition-all active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-slate-950 text-transparent" />
            <span>SEND TO WHATSAPP</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <a
            href={`tel:${selectedBranch.phoneRaw}`}
            className="py-4 px-6 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-white font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 transition-all"
          >
            <Phone className="w-4 h-4 text-rose-500" />
            <span>CALL BRANCH ({selectedBranch.phoneDisplay})</span>
          </a>
        </div>
      </div>
    </div>
  );
};
