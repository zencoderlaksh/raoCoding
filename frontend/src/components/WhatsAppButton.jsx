import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { logo } from "@/assets/images";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, MessageCircle, X } from "lucide-react";

const WHATSAPP_PHONE = "918112204612";
const DEFAULT_MESSAGE =
  "Hello RAO Technologies! I would like to discuss a project / training requirement.";

const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
    DEFAULT_MESSAGE
  )}`;

  return (
    <aside
      aria-label="Contact RAO Technologies via WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-auto"
    >
      {/* Interactive Floating Chat Tooltip Popover */}
      <AnimatePresence>
        {showTooltip && !isDismissed && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="mb-3.5 w-72 sm:w-80 rounded-2xl bg-zinc-950/95 border border-zinc-800 p-4 shadow-2xl backdrop-blur-xl text-white relative overflow-hidden"
          >
            {/* Top ambient green glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/15 rounded-full blur-2xl pointer-events-none" />

            {/* Header with RAO Logo & Close button */}
            <div className="flex items-center justify-between pb-2.5 border-b border-zinc-800/80 mb-2.5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-700/80 p-1 flex items-center justify-center overflow-hidden">
                  <img
                    src={logo}
                    alt="RAO Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white tracking-wide">
                    RAO Technologies
                  </h4>
                  <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Online & Ready</span>
                  </div>
                </div>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowTooltip(false);
                  setIsDismissed(true);
                }}
                className="w-6 h-6 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                title="Dismiss"
              >
                <X size={12} />
              </button>
            </div>

            {/* Message Bubble */}
            <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800/80 text-xs text-zinc-300 leading-relaxed font-light mb-3">
              👋 Hi there! Have questions about our custom digital architecture, client projects, or corporate bootcamps? Chat with us directly on WhatsApp!
            </div>

            {/* Action Button inside Tooltip */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 px-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-medium text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <FaWhatsapp size={15} />
              <span>Start WhatsApp Conversation</span>
              <ArrowUpRight size={13} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Trigger Button */}
      <div
        className="relative group cursor-pointer"
        onMouseEnter={() => {
          if (!isDismissed) setShowTooltip(true);
        }}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {/* Radar Ping Rings */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none" />
        <span className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-emerald-500/40 via-green-500/30 to-amber-500/30 blur-sm group-hover:blur-md transition-all duration-300 pointer-events-none" />

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-b from-zinc-900 to-black border border-emerald-500/50 p-1.5 shadow-[0_0_25px_rgba(16,185,129,0.35)] group-hover:shadow-[0_0_35px_rgba(16,185,129,0.6)] group-hover:scale-105 active:scale-95 transition-all duration-300 no-underline"
          title="Chat with RAO Technologies on WhatsApp"
        >
          {/* RAO Logo in Center Avatar */}
          <div className="w-full h-full rounded-full bg-zinc-950 flex items-center justify-center overflow-hidden border border-zinc-800 p-1.5 group-hover:border-emerald-500/50 transition-colors">
            <img
              src={logo}
              alt="RAO Technologies"
              className="w-full h-full object-contain filter drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]"
            />
          </div>

          {/* Overlapping Official WhatsApp Green Emblem Badge */}
          <div className="absolute -bottom-1 -right-1 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg border-2 border-black group-hover:scale-110 transition-transform">
            <FaWhatsapp className="text-sm sm:text-base" />
          </div>
        </a>
      </div>
    </aside>
  );
};

export default WhatsAppButton;