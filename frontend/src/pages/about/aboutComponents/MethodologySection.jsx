import React from "react";
import { motion } from "framer-motion";
import { Search, PenTool, Code2, LineChart } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Search,
    title: "Discovery & Problem Diagnosis",
    desc: "We analyze the root bottlenecks of your business workflow or curriculum objectives. No generic solutions—we map precise technical requirements and success criteria.",
  },
  {
    icon: PenTool,
    step: "02",
    title: "Architecture & AI Blueprinting",
    desc: "We design robust system architectures, choose the optimal modern tech stack, and select the right applied AI models for speed, scalability, and long-term maintainability.",
  },
  {
    step: "03",
    icon: Code2,
    title: "Agile Build & Hands-On Delivery",
    desc: "Rapid, milestone-driven development sprints for client software, or immersive, production-focused coding sessions for campus and corporate workshops.",
  },
  {
    step: "04",
    icon: LineChart,
    title: "Scale, Deploy & Continuous Growth",
    desc: "Production cloud deployments with automated monitoring, or post-workshop student evaluation, career tracking, and continuous organizational enablement.",
  },
];

export default function MethodologySection() {
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs sm:text-sm font-semibold tracking-widest uppercase">
            Our Methodology
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-black text-white tracking-tight">
            How We Deliver Results
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
            A battle-tested 4-step framework that ensures transparency, engineering precision, and measurable outcomes for every client project and training initiative.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative p-8 rounded-3xl bg-[#090909] border border-white/10 hover:border-orange-500/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-3xl sm:text-4xl font-black text-white/20 group-hover:text-orange-400/50 transition-colors">
                      {st.step}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-black transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                    {st.title}
                  </h3>
                  <p className="text-sm text-neutral-400 font-light leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
