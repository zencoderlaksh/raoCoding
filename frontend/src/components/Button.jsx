import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import { ArrowRight } from "lucide-react";

export default function AnimatedButton() {
  return (
    <div className="mb-12">
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
      className="relative overflow-hidden px-6 py-3 rounded-xl bg-orange-500 text-white font-medium"
    >
      {/* Top Content */}
      <motion.span
        variants={{
          rest: { y: 0 },
          hover: { y: -40 },
        }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="flex items-center gap-2"
      >
        Start Journey
        <ArrowRight size={18} />
      </motion.span>

      {/* Bottom Content */}
      <motion.span
        variants={{
          rest: { y: 40 },
          hover: { y: 0 },
        }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="absolute inset-0 flex items-center justify-center gap-2 text-white"
      >
        Start Journey
        <ArrowRight size={18} />
      </motion.span>
    </motion.button>
    </div>
  );
}