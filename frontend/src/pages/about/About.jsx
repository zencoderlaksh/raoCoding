import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Target,
  Compass,
  Sparkles,
  Code2,
  Cpu,
  GraduationCap,
  ShieldCheck,
  Briefcase,
  Layers,
  ArrowRight,
  Quote,
  CheckCircle2,
  HeartHandshake,
  Lightbulb,
} from "lucide-react";

/* ── Interactive Counter Component ── */
function Counter({ from = 0, to, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(from, to, {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(value) {
        setCount(Math.floor(value));
      },
    });
    return () => controls.stop();
  }, [isInView, from, to]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 50, suffix: "+", label: "Enterprise & Client Deliverables", icon: Briefcase },
  { value: 30, suffix: "+", label: "Partner Universities & Campuses", icon: GraduationCap },
  { value: 10, suffix: "k+", label: "Engineers & Learners Trained", icon: Code2 },
  { value: 99, suffix: ".4%", label: "Client & Partner Satisfaction", icon: ShieldCheck },
];

const coreValues = [
  {
    icon: Code2,
    color: "#06b6d4",
    title: "Engineering Over Hype",
    description:
      "We write clean, production-grade code and design resilient architectures that perform under real enterprise scale. No shortcuts, no unnecessary complexity.",
  },
  {
    icon: Cpu,
    color: "#f97316",
    title: "Applied AI That Delivers",
    description:
      "Artificial intelligence must solve concrete operational bottlenecks. We build practical, secure LLM agent workflows, data models, and automations with tangible ROI.",
  },
  {
    icon: GraduationCap,
    color: "#10b981",
    title: "Mastery Through Real Work",
    description:
      "Whether upskilling corporate engineering teams or mentoring college students, we believe in hands-on proof-of-work, live codebases, and deep conceptual understanding.",
  },
  {
    icon: HeartHandshake,
    color: "#a855f7",
    title: "Radical Transparency",
    description:
      "Honest timelines, clear communication, and zero hidden technical debt. We treat every client, university partner, and learner as a long-term collaborator.",
  },
];

const pillars = [
  {
    number: "01",
    title: "Custom Enterprise Software & Web",
    description:
      "Architecting scalable web platforms, high-concurrency cloud APIs, and responsive mobile applications that drive business efficiency and customer engagement.",
    tags: ["React & Next.js", "Node.js & Microservices", "PostgreSQL & NoSQL", "Cloud DevOps"],
    color: "#f97316",
    linkText: "Explore Business Solutions",
    linkTo: "/client",
  },
  {
    number: "02",
    title: "Applied AI & Automation Systems",
    description:
      "Designing custom generative AI pipelines, autonomous agents, and predictive machine learning models that integrate seamlessly into existing enterprise workflows.",
    tags: ["Autonomous Agents", "Custom LLMs & RAG", "Process Automation", "Computer Vision"],
    color: "#06b6d4",
    linkText: "Learn About AI Integration",
    linkTo: "/client",
  },
  {
    number: "03",
    title: "Campus Bootcamps & Talent Academy",
    description:
      "Partnering with colleges and universities to deliver intensive coding bootcamps, faculty development, and placement roadmaps that transform students into engineers.",
    tags: ["Full-Stack Bootcamps", "DSA & Coding Interviews", "Faculty Development", "Placement Support"],
    color: "#a855f7",
    linkText: "Explore Campus Bootcamps",
    linkTo: "/college-bootcamp",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#070709] text-white selection:bg-orange-500 selection:text-black overflow-hidden font-[sans-serif]">
      {/* ────────────────────────────────────────────────────────── */}
      {/* 1. HERO SECTION: Purpose, Identity & Trust Metrics        */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-12 flex flex-col items-center justify-center text-center">
        {/* Ambient Top Glows */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-orange-500/10 rounded-full blur-[180px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto z-10">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/10 text-orange-400 text-xs sm:text-sm font-mono font-semibold tracking-wider uppercase mb-6 backdrop-blur-md">
            <Sparkles size={14} />
            <span>ABOUT RAO TECHNOLOGIES</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] mb-6">
            Bridging Human Potential With{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500">
              Modern Technology.
            </span>
          </h1>

          {/* Core Elevator Paragraph */}
          <p className="text-zinc-400 text-base sm:text-xl font-light leading-relaxed max-w-3xl mx-auto mb-10">
            We are a technology innovation and engineering organization dedicated to delivering bespoke software solutions, applied AI systems, and experiential technical training that empowers businesses and individuals to build for what's next.
          </p>
        </div>

        {/* 4 Clean Stats Blocks */}
        <div className="relative max-w-5xl mx-auto w-full grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-4 z-10">
          {stats.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300 text-left"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-4">
                  <Icon size={18} />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-1">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <p className="text-xs text-zinc-400 font-light leading-snug">{s.label}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* 2. MISSION & VISION: The Anchor Dual-Pillar Section        */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-12 border-t border-white/5 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent">
        <div className="relative max-w-6xl mx-auto z-10">
          <div className="text-center mb-14">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-orange-400 block mb-2">
              PURPOSE & DIRECTION
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              The Conviction That Drives Us
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card 1: Our Mission */}
            <div className="p-8 sm:p-10 rounded-[32px] bg-gradient-to-b from-white/[0.06] via-white/[0.02] to-black/80 border border-orange-500/30 shadow-[0_15px_50px_rgba(249,115,22,0.1)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-44 h-44 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400">
                  <Target size={24} />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-orange-400 font-semibold block">
                    Core Mission
                  </span>
                  <h3 className="text-2xl font-bold text-white tracking-tight">Our Mission</h3>
                </div>
              </div>

              <blockquote className="text-lg sm:text-xl font-medium text-zinc-200 leading-relaxed mb-6 italic border-l-2 border-orange-500 pl-4">
                "To democratize high-impact engineering and emerging AI technologies by building scalable digital systems for modern businesses and cultivating elite, industry-ready talent through experiential learning."
              </blockquote>

              <p className="text-zinc-400 text-sm leading-relaxed font-light mb-8">
                We eliminate the traditional divide between theoretical academics and production engineering. For organizations, we turn complex problems into robust technology. For students and colleges, we turn learners into fearless builders.
              </p>

              <div className="space-y-2.5 pt-4 border-t border-white/10">
                {[
                  "Clean, resilient architectures engineered to scale",
                  "Applied AI pipelines addressing concrete business workflows",
                  "Experiential curriculum built on real-world production codebases",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-300">
                    <CheckCircle2 size={16} className="text-orange-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 2: Our Vision */}
            <div className="p-8 sm:p-10 rounded-[32px] bg-gradient-to-b from-white/[0.06] via-white/[0.02] to-black/80 border border-amber-500/30 shadow-[0_15px_50px_rgba(234,179,8,0.1)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-44 h-44 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Compass size={24} />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold block">
                    Future Trajectory
                  </span>
                  <h3 className="text-2xl font-bold text-white tracking-tight">Our Vision</h3>
                </div>
              </div>

              <blockquote className="text-lg sm:text-xl font-medium text-zinc-200 leading-relaxed mb-6 italic border-l-2 border-amber-500 pl-4">
                "To become the global bridge where groundbreaking technology engineering and transformative human capability converge — enabling every organization and individual to build for what's next."
              </blockquote>

              <p className="text-zinc-400 text-sm leading-relaxed font-light mb-8">
                We envision an interconnected tech landscape where businesses harness AI and cloud scale effortlessly, and ambitious learners from any background gain immediate access to senior engineering mentorship, career clarity, and global opportunities.
              </p>

              <div className="space-y-2.5 pt-4 border-t border-white/10">
                {[
                  "Global footprint across enterprise development and university campuses",
                  "Pioneering proprietary AI tooling that accelerates delivery timelines",
                  "Fostering continuous lifelong technical mastery and leadership",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-300">
                    <CheckCircle2 size={16} className="text-amber-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* 3. CORE VALUES: What Guides Our Execution                  */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-12 border-t border-white/5">
        <div className="relative max-w-6xl mx-auto z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-orange-400 block mb-2">
              FOUNDATIONAL PILLARS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              The Standards of Our Craft
            </h2>
            <p className="mt-3 text-zinc-400 text-base font-light">
              We operate on principles that prioritize long-term value, technical precision, and genuine human impact over short-term buzz.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-[26px] bg-white/[0.03] border border-white/10 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div
                      className="w-12 h-12 rounded-2xl border border-white/10 bg-white/[0.04] flex items-center justify-center mb-5"
                      style={{ color: val.color }}
                    >
                      <Icon size={22} />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 tracking-tight">
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* 4. THE TRIAD OF WHAT WE DO: Clear & Curated Capabilities   */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-12 border-t border-white/5 bg-gradient-to-b from-transparent via-white/[0.015] to-transparent">
        <div className="relative max-w-6xl mx-auto z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-orange-400 block mb-2">
              WHAT WE DELIVER
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Three Pillars of Unified Impact
            </h2>
            <p className="mt-3 text-zinc-400 text-base font-light">
              By combining production software development with cutting-edge AI and immersive education, we create an ecosystem where learning powers engineering, and engineering sharpens learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {pillars.map((p, idx) => (
              <div
                key={idx}
                className="p-7 sm:p-8 rounded-[28px] bg-gradient-to-b from-white/[0.05] via-white/[0.02] to-black/80 border border-white/10 hover:border-white/20 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span
                    className="text-xs font-mono font-bold tracking-widest uppercase mb-4 block"
                    style={{ color: p.color }}
                  >
                    Pillar {p.number}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight">
                    {p.title}
                  </h3>
                  <p className="text-zinc-400 text-sm font-light leading-relaxed mb-6">
                    {p.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {p.tags.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-zinc-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to={p.linkTo}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-white hover:text-orange-400 transition-colors pt-4 border-t border-white/10"
                >
                  <span>{p.linkText}</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* 5. LEADERSHIP NOTE: The Story Behind RAO Technologies       */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-12 border-t border-white/5">
        <div className="relative max-w-4xl mx-auto z-10">
          <div className="p-8 sm:p-12 rounded-[32px] bg-gradient-to-b from-white/[0.06] via-white/[0.02] to-black/90 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] relative overflow-hidden">
            <Quote className="absolute top-8 right-8 text-white/5 w-24 h-24 pointer-events-none" />

            <div className="flex items-center gap-2 text-xs font-mono text-orange-400 uppercase tracking-widest mb-6">
              <Lightbulb size={14} />
              <span>A NOTE FROM OUR LEADERSHIP</span>
            </div>

            <p className="text-lg sm:text-xl text-zinc-200 font-light leading-relaxed mb-6">
              "We founded RAO Technologies with a singular conviction: true technological progress happens when powerful software meets empowered minds. Too often, software development is disconnected from the business context it serves, and technical education is disconnected from the realities of modern production."
            </p>

            <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed mb-8">
              "We built RAO to bridge both. Whether we are architecting high-frequency platforms for fintech leaders, automating operations for MSMEs, or guiding college students through their first production capstone — our goal is to build technology that creates genuine, lasting value."
            </p>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between flex-wrap gap-4">
              <div>
                <h4 className="text-white font-bold text-base">RAO Technologies Team</h4>
                <p className="text-zinc-500 text-xs font-mono">Founders & Engineering Leadership</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono text-zinc-400">Headquartered in India • Serving Globally</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* 6. CALL TO ACTION: Clean, Inspiring Closing                */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-12 border-t border-white/10">
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Ready to Build What's Next?
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed mb-8">
            Whether you're looking to build custom digital solutions, adopt applied AI workflows, or transform your campus engineering curriculum — let's partner and create real impact.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="py-3.5 px-7 rounded-xl bg-orange-500 hover:bg-orange-400 text-black font-bold text-sm flex items-center gap-2 shadow-lg shadow-orange-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Partner With Us</span>
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/corporate-trainings"
              className="py-3.5 px-7 rounded-xl bg-white/[0.05] hover:bg-white/10 border border-white/10 text-white font-semibold text-sm transition-all"
            >
              <span>Corporate Trainings</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
