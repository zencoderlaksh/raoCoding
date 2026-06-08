import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#080808] text-white">
      {/* Background Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 20%, rgba(255,122,0,.12), transparent 55%)",
        }}
      />

      {/* Decorative Lines */}
      <div className="absolute top-0 left-[12%] h-full w-px bg-white/5" />
      <div className="absolute top-0 right-[12%] h-full w-px bg-white/5" />

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="min-h-screen flex flex-col justify-center">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <span className="uppercase tracking-[0.4em] text-xs text-white/35">
              {/* Rao Coding School */}
            </span>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-5xl"
          >
            <h1
              className="
    text-5xl
   
    sm:text-6xl
    md:text-7xl
    lg:text-[92px]
    font-light
    leading-[1]
    tracking-[-0.04em]
  "
              style={{
                fontFamily: '"Cormorant Garamond", sans-serif',
              }}
            >
              You can learn coding
              <br />
              anywhere.
            </h1>

            <div className="mt-8">
              <span
                className="
                  text-[70px]
                  sm:text-[90px]
                  md:text-[120px]
                  lg:text-[140px]
                  leading-none
                  text-orange-400
                "
                style={{
                  fontFamily: "Parisienne, cursive",
                }}
              >
                Building a career
              </span>
            </div>

            <h2
              className="
                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                font-light
                mt-2
                tracking-[-0.04em]
              "
                style={{
                fontFamily: '"Cormorant Garamond", sans-serif',
              }}
            >
              is different.
            </h2>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-14 max-w-xl"
          >
            <p
              className="
                text-lg
                md:text-xl
                text-white/45
                leading-relaxed
              "
            >
              Projects. Portfolios. Internships. Interviews. We help students
              bridge the gap between learning to code and becoming
              industry-ready developers.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-12 flex flex-wrap gap-4"
          >
            <button
              className="
                group
                bg-orange-500
                hover:bg-orange-400
                text-black
                px-8
                py-4
                rounded-full
                flex
                items-center
                gap-2
                font-medium
                transition-all
              "
            >
              Start Your Journey
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>

            <button
              className="
                px-8
                py-4
                rounded-full
                border
                border-white/10
                text-white/70
                hover:text-white
                hover:border-white/20
                transition-all
              "
            >
              Explore Programs
            </button>
          </motion.div>

          {/* Bottom Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-24"
          >
            <p
              className="
                text-white/25
                italic
                text-lg
                max-w-lg
              "
              style={{
                fontFamily: "Cormorant Garamond, serif",
              }}
            >
              "Every developer starts with curiosity. The difference is having
              the right guidance."
            </p>
          </motion.div>

          {/* Scroll Hint */}
          <div className="mt-16 text-white/20 text-sm tracking-wide">
            Scroll to discover the roadmap ↓
          </div>
        </div>
      </div>
    </section>
  );
}
