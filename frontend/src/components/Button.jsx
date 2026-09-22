import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function AnimatedButton({
  text = "Start Journey",
  showIcon = true,
  variant = "primary",
  className = "",
}) {
  if (variant === "secondary") {
    return (
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
        className={`px-6 py-3 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 text-white font-medium backdrop-blur-lg transition-all flex items-center justify-center gap-2 cursor-pointer ${className}`}
      >
        <span>{text}</span>
        {showIcon && <ArrowRight size={18} />}
      </motion.button>
    );
  }

  return (
    <motion.button
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={{
        rest: {
          scale: 1,
          boxShadow: "0px 0px 0px rgba(249,115,22,0)",
        },
        hover: {
          scale: 1.06,
          boxShadow: "0px 0px 25px rgba(249,115,22,0.7)",
        },
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`relative overflow-hidden px-6 py-3 rounded-xl bg-orange-500 text-white font-medium cursor-pointer ${className}`}
    >
      {/* Top Content */}
      <motion.span
        variants={{
          rest: { y: 0 },
          hover: { y: -40 },
        }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="flex items-center justify-center gap-2 whitespace-nowrap"
      >
        <span>{text}</span>
        {showIcon && <ArrowRight size={18} />}
      </motion.span>

      {/* Bottom Content */}
      <motion.span
        variants={{
          rest: { y: 40 },
          hover: { y: 0 },
        }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="absolute inset-0 flex items-center justify-center gap-2 text-white whitespace-nowrap"
      >
        <span>{text}</span>
        {showIcon && <ArrowRight size={18} />}
      </motion.span>
    </motion.button>
  );
}