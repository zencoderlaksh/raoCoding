import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Globe2, ShieldCheck, Zap } from "lucide-react";

const goals = [
  {
    icon: Globe2,
    title: "Nationwide Campus Footprint",
    desc: "Expanding our immersive coding and AI bootcamps to over 100+ university campuses, upskilling 50,000+ students annually.",
  },
  {
    icon: Zap,
    title: "Next-Gen AI Product Lab",
    desc: "Developing proprietary AI tooling and autonomous agent workflows that accelerate enterprise software delivery timelines by 4x.",
  },
  {
    icon: TrendingUp,
    title: "Enterprise Scaling Capabilities",
    desc: "Deepening partnerships with global companies to build, deploy, and maintain mission-critical cloud backends and web/mobile ecosystems.",
  },
  {
    icon: ShieldCheck,
    title: "Engineering Excellence Standard",
    desc: "Setting the gold standard for clean code, resilient infrastructure, security, and continuous developer mentorship.",
  },
];

export default function ScaleVisionSection() {
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs sm:text-sm font-semibold tracking-widest uppercase">
            Our Vision
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-black text-white tracking-tight">
            Built to Scale Higher
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
            We are not resting on past achievements. Our trajectory is set on scaling our enterprise client delivery, deepening college workshop impact, and advancing applied AI solutions across industries.
          </p>
        </div>

        {/* Goals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {goals.map((g, idx) => {
            const Icon = g.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-[#080808] border border-white/5 hover:border-orange-500/30 hover:bg-[#0b0b0b] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{g.title}</h3>
                <p className="text-sm text-neutral-400 font-light leading-relaxed">
                  {g.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
