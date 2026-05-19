import { Sparkles } from "lucide-react";

export default function PremiumButton({ text }) {
  return (
    <button
      className="
        group relative flex items-center justify-center
        w-full sm:w-fit
        min-h-[52px] sm:min-h-[60px]
        overflow-hidden
        rounded-2xl
        border border-orange-500/20
        bg-black/70
        px-4 py-3 sm:px-6
        backdrop-blur-md
        transition-all duration-300
        hover:border-orange-400
        active:scale-[0.98]
      "
    >
      {/* Glow */}
      <span className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-orange-400/20 to-orange-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
        
        {/* Icon */}
        <span className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-orange-400/20 bg-orange-500/15 shrink-0">
          <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-orange-400 transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110" />
        </span>

        {/* Text */}
        <span
          className="
            text-xs
            sm:text-sm
            md:text-base
            lg:text-lg
            font-semibold
            tracking-wide
            text-center
          "
        >
          {text}
        </span>
      </span>

      {/* Bottom Shine */}
      <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-orange-400 transition-all duration-500 group-hover:w-full" />
    </button>
  );
}