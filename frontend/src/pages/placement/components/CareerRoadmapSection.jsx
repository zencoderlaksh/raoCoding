import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  BookOpen,
  Layers,
  FileText,
//   Linkedin,
  Mic,
  Send,
  Users,
  Rocket,
} from "lucide-react";

const steps = [
  {
    step: 1,
    title: "Learn Industry Skills",
    desc: "Master in-demand technologies with practical, project-based learning.",
    icon: BookOpen,
  },
  {
    step: 2,
    title: "Build Projects",
    desc: "Create real-world projects that demonstrate your technical abilities.",
    icon: Layers,
  },
  {
    step: 3,
    title: "Optimize Resume",
    desc: "Craft an ATS-friendly resume that stands out to recruiters.",
    icon: FileText,
  },
//   {
//     step: 4,
//     title: "Strengthen LinkedIn",
//     desc: "Build a compelling LinkedIn presence that attracts opportunities.",
//     icon: Linkedin,
//   },
  {
    step: 5,
    title: "Mock Interviews",
    desc: "Practice with live sessions and get detailed performance feedback.",
    icon: Mic,
  },
  {
    step: 6,
    title: "Internship Applications",
    desc: "Apply strategically with guidance on targeting the right roles.",
    icon: Send,
  },
  {
    step: 7,
    title: "Job Interviews",
    desc: "Face real interviews with confidence built through preparation.",
    icon: Users,
  },
  {
    step: 8,
    title: "Career Launch",
    desc: "Step into your professional career as an industry-ready developer.",
    icon: Rocket,
  },
];

function RoadmapStep({ step, index, total }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const Icon = step.icon;
  const isLast = index === total - 1;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="relative flex flex-col items-center"
    >
      {/* Connector line */}
      {!isLast && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: index * 0.08 + 0.3 }}
          className="absolute top-7 left-1/2 w-full h-px origin-left hidden lg:block"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,122,0,0.5), rgba(255,122,0,0.1))",
          }}
        />
      )}

      {/* Step circle */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center mb-4 cursor-default"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,122,0,0.2), rgba(255,140,0,0.1))",
          border: "1px solid rgba(255,122,0,0.4)",
          boxShadow: "0 0 20px rgba(255,122,0,0.2)",
        }}
      >
        <Icon size={22} className="text-orange-400" />
        <span
          className="absolute -top-1 -right-1 w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center"
          style={{ background: "#FF7A00", color: "#000" }}
        >
          {step.step}
        </span>
      </motion.div>

      {/* Text */}
      <div className="text-center max-w-[120px]">
        <h4 className="text-sm font-semibold text-white mb-1 leading-tight">
          {step.title}
        </h4>
        <p className="text-xs text-[#A1A1AA] leading-relaxed">{step.desc}</p>
      </div>
    </motion.div>
  );
}

export default function CareerRoadmapSection() {
  const headingRef = useRef(null);
  const inView = useInView(headingRef, { once: true });

  return (
    <section className="relative py-28 bg-[#050505] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-25 pointer-events-none" />

      {/* Center glow */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(255,122,0,0.04)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-orange-500/20 mb-6"
          >
            <span className="text-xs font-medium text-orange-400 tracking-widest uppercase">
              Your Journey
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white leading-tight"
          >
            From Learner To{" "}
            <span className="text-gradient-orange">Professional</span>
          </motion.h2>
        </div>

        {/* Desktop horizontal timeline */}
        <div className="hidden lg:grid grid-cols-8 gap-4 mb-6">
          {steps.map((step, i) => (
            <RoadmapStep
              key={step.step}
              step={step}
              index={i}
              total={steps.length}
            />
          ))}
        </div>

        {/* Mobile vertical timeline */}
        <div className="lg:hidden space-y-4 max-w-md mx-auto">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="flex items-start gap-4 p-4 rounded-xl glass-card border border-white/[0.06] hover:border-orange-500/20 transition-colors"
              >
                <div
                  className="relative flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    background: "rgba(255,122,0,0.1)",
                    border: "1px solid rgba(255,122,0,0.3)",
                  }}
                >
                  <Icon size={18} className="text-orange-400" />
                  <span
                    className="absolute -top-1 -right-1 w-4 h-4 rounded-full text-[9px] font-bold flex items-center justify-center"
                    style={{ background: "#FF7A00", color: "#000" }}
                  >
                    {step.step}
                  </span>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">
                    {step.title}
                  </h4>
                  <p className="text-xs text-[#A1A1AA] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Progress bar visual */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 hidden lg:block"
        >
          <div className="relative h-1.5 rounded-full bg-white/5 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.6, ease: "easeOut" }}
              className="absolute left-0 top-0 h-full rounded-full"
              style={{
                background: "linear-gradient(90deg, #FF7A00, #FF8C00, #FFB347)",
              }}
            />
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-xs text-[#A1A1AA]">Start</span>
            <span className="text-xs text-orange-400 font-medium">
              Career Launch
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
