import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  Briefcase, Target, Users, Award, TrendingUp, Building2,
  GraduationCap, FileCheck, MessageSquare, Rocket, Star,
  ArrowRight, CheckCircle2, Sparkles, Code2, Brain, Video,
  Mic, Play, Quote, ArrowUpRight, Zap, Trophy,
} from "lucide-react";

import "./style.css";


const EASE = [0.22, 1, 0.36, 1];

export default function PlacementPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden antialiased">
      <Nav />
      <Hero />
      <JourneyTimeline />
      <Features />
      <Stats />
      <MockInterviewArena />
      <SuccessStories />
      <FinalCTA />
      <Footer />
    </div>
  );
}

/* ============ NAV ============ */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: EASE }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong py-3" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-[image:var(--gradient-aurora)] grid place-items-center shadow-[var(--shadow-glow)]">
            <Sparkles className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-semibold tracking-tight">RaoCoding<span className="font-display italic text-primary">School</span></span>
        </div>
        <div className="hidden md:flex items-center gap-9 text-sm text-muted-foreground">
          <a href="#journey" className="hover:text-foreground transition-colors">Journey</a>
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#arena" className="hover:text-foreground transition-colors">Mock Arena</a>
          <a href="#stories" className="hover:text-foreground transition-colors">Stories</a>
        </div>
        <button className="group px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:scale-105 transition flex items-center gap-1.5">
          Apply Now
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform" />
        </button>
      </div>
    </motion.nav>
  );
}

/* ============ HERO ============ */
function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Grid backdrop */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(1 0 0 / 1) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      {/* Floating glows */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 left-10 w-80 h-80 rounded-full bg-primary/30 blur-[100px]"
      />
      <motion.div
        animate={{ y: [0, 40, 0], x: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 w-[500px] h-[500px] rounded-full bg-accent/20 blur-[120px]"
      />

      <motion.div style={{ y, opacity }} className="relative max-w-6xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-strong mb-10"
        >
          <span className="relative flex w-2 h-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
            Cohort 12 · Applications open
          </span>
        </motion.div>

        <h1 className="text-[clamp(2.5rem,8vw,7rem)] font-semibold tracking-[-0.04em] leading-[0.95]">
          {["Your", "career,", "engineered"].map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15 + i * 0.1, ease: EASE }}
              className="inline-block mr-3"
            >
              {word}
            </motion.span>
          ))}
          <br />
          <motion.span
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: EASE }}
            className="font-display italic text-gradient inline-block"
          >
            from day one.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-10 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          Personalized mentorship, weekly mock interviews, and a direct pipeline
          to <span className="text-foreground">500+ hiring partners</span> — until you sign your offer letter.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="mt-12 flex flex-wrap gap-4 justify-center items-center"
        >
          <button className="group relative px-7 py-4 rounded-full bg-primary text-primary-foreground font-medium shadow-[var(--shadow-glow)] hover:scale-[1.03] transition-transform flex items-center gap-2">
            Begin your journey
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="group px-7 py-4 rounded-full glass font-medium hover:bg-white/10 transition flex items-center gap-2">
            <Play className="w-4 h-4 fill-current" />
            Watch how it works
          </button>
        </motion.div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-20 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-xs uppercase tracking-[0.2em] text-muted-foreground/60"
        >
          <span>Google</span>
          <span>·</span>
          <span>Microsoft</span>
          <span>·</span>
          <span>Razorpay</span>
          <span>·</span>
          <span>Swiggy</span>
          <span>·</span>
          <span>Cred</span>
          <span>·</span>
          <span>Postman</span>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ============ JOURNEY TIMELINE ============ */
const JOURNEY = [
  { week: "Week 01", title: "Foundation Audit", desc: "Diagnostic assessment + personalized roadmap built with your dedicated career coach.", icon: Target },
  { week: "Week 04", title: "Portfolio Sprint", desc: "Ship 3 production-grade projects with code reviews from senior engineers at FAANG.", icon: Code2 },
  { week: "Week 08", title: "Interview Mastery", desc: "Weekly DSA, system design & behavioral mocks. Recorded, reviewed, refined.", icon: Brain },
  { week: "Week 12", title: "Paid Internship", desc: "Matched with vetted startups & MNCs. Real teams, real shipping, real paycheck.", icon: Briefcase },
  { week: "Week 16", title: "Offer Letter", desc: "Dedicated drives, warm referrals & negotiation support until you sign.", icon: Trophy },
];

function JourneyTimeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.5", "end 0.5"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="journey" className="py-32 md:py-48 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <div className="inline-block text-xs uppercase tracking-[0.3em] text-primary mb-6">
            ◆ The Journey
          </div>
          <h2 className="text-5xl md:text-7xl font-semibold tracking-[-0.03em] leading-[1.05]">
            A 16-week arc, <br />
            <span className="font-display italic text-gradient">precisely engineered.</span>
          </h2>
          <p className="mt-8 text-lg text-muted-foreground max-w-xl mx-auto">
            Not a course. A career operating system.
          </p>
        </motion.div>

        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-8 md:left-1/2 top-0 w-px bg-gradient-to-b from-primary via-primary-glow to-accent md:-translate-x-1/2 shadow-[0_0_20px_oklch(0.78_0.17_85_/_0.6)]"
          />

          <div className="space-y-20">
            {JOURNEY.map((step, i) => (
              <TimelineItem key={step.week} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ step, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className={`relative md:grid md:grid-cols-2 md:gap-12 items-center ${isLeft ? "" : "md:[direction:rtl]"}`}>
      {/* Dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
        className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary md:-translate-x-1/2 z-10 shadow-[0_0_30px_oklch(0.78_0.17_85_/_0.8)] ring-4 ring-background"
      />

      <motion.div
        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, ease: EASE }}
        className={`pl-20 md:pl-0 ${isLeft ? "md:pr-16 md:text-right" : "md:pl-16"}`}
        style={{ direction: "ltr" }}
      >
        <div className="text-xs font-mono-num uppercase tracking-[0.2em] text-primary mb-3">
          {step.week}
        </div>
        <h3 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">
          {step.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: isLeft ? 40 : -40, scale: 0.9 }}
        animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
        className={`pl-20 md:pl-0 mt-8 md:mt-0 ${isLeft ? "" : "md:pr-16"}`}
        style={{ direction: "ltr" }}
      >
        <div className="aspect-[4/3] rounded-3xl bg-[image:var(--gradient-card)] border border-border p-8 grid place-items-center relative overflow-hidden group">
          <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity"
               style={{ background: "var(--gradient-glow)" }} />
          <step.icon className="w-24 h-24 text-primary relative z-10 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.2} />
          <div className="absolute top-4 right-4 font-mono-num text-xs text-muted-foreground/40">
            {String(index + 1).padStart(2, "0")} / {String(JOURNEY.length).padStart(2, "0")}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ============ FEATURES (Interactive Bento) ============ */
function Features() {
  return (
    <section id="features" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
          className="max-w-3xl mb-20"
        >
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-6">◆ Features</div>
          <h2 className="text-5xl md:text-7xl font-semibold tracking-[-0.03em] leading-[1.05]">
            Built for ambitious <br />
            <span className="font-display italic text-gradient">outcomes.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[260px]">
          <FeatureCard className="md:col-span-2 md:row-span-2" icon={Users} title="1-on-1 mentorship from FAANG engineers" desc="Weekly deep-dives with engineers who shipped at Google, Meta & Stripe. Not group calls — your mentor, your goals." size="lg" />
          <FeatureCard icon={Video} title="Recorded mock interviews" desc="Every mock recorded, transcribed, and annotated." />
          <FeatureCard icon={Brain} title="AI-powered DSA coach" desc="Adaptive problems calibrated to your weak spots." />
          <FeatureCard icon={Building2} title="Direct hiring pipelines" desc="500+ partner companies. No cold applications." />
          <FeatureCard icon={FileCheck} title="Portfolio that ships" desc="Production-grade projects reviewed line by line." />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, desc, className = "", size = "md" }) {
  const ref = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const x = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const y = useSpring(mouseY, { stiffness: 150, damping: 20 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: EASE }}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        mouseX.set(e.clientX - r.left);
        mouseY.set(e.clientY - r.top);
      }}
      className={`relative p-7 md:p-9 rounded-3xl bg-[image:var(--gradient-card)] border border-border overflow-hidden group hover:border-primary/30 transition-colors ${className}`}
    >
      <motion.div
        style={{
          background: "radial-gradient(400px circle at var(--mx) var(--my), oklch(0.78 0.17 85 / 0.15), transparent 40%)",
          "--mx": useTransform(x, (v) => `${v}px`),
          "--my": useTransform(y, (v) => `${v}px`),
        }}
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
      />
      <div className="relative h-full flex flex-col">
        <div className={`rounded-2xl bg-primary/10 grid place-items-center ${size === "lg" ? "w-16 h-16" : "w-12 h-12"}`}>
          <Icon className={`text-primary ${size === "lg" ? "w-7 h-7" : "w-5 h-5"}`} strokeWidth={1.5} />
        </div>
        <div className="mt-auto pt-8">
          <h3 className={`font-semibold tracking-tight ${size === "lg" ? "text-3xl md:text-4xl" : "text-xl"}`}>
            {title}
          </h3>
          <p className={`text-muted-foreground mt-3 ${size === "lg" ? "text-base max-w-md" : "text-sm"}`}>
            {desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ============ STATS ============ */
const STATS = [
  { value: 98, suffix: "%", label: "Placement rate", sub: "across last 6 cohorts" },
  { value: 18, prefix: "₹", suffix: "L", label: "Highest package", sub: "freshman, 2025 batch" },
  { value: 500, suffix: "+", label: "Hiring partners", sub: "actively recruiting" },
  { value: 2500, suffix: "+", label: "Engineers placed", sub: "since 2021" },
];

function Counter({ to, prefix = "", suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 2,
      ease: EASE,
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return <span ref={ref} className="font-mono-num">{prefix}{val}{suffix}</span>;
}

function Stats() {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto relative">
        <div className="absolute inset-0 -m-20" style={{ background: "var(--gradient-glow)", opacity: 0.4 }} />
        <div className="relative glass-strong rounded-[2.5rem] p-10 md:p-16 border border-border">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-2xl mx-auto"
          >
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-6">◆ The numbers</div>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-[-0.03em]">
              Outcomes we <span className="font-display italic text-gradient">stand behind.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
                className="text-center md:text-left md:px-6 md:border-r border-border last:border-r-0"
              >
                <div className="text-5xl md:text-7xl font-semibold tracking-[-0.04em] text-gradient">
                  <Counter to={s.value} prefix={s.prefix} suffix={s.suffix} />
                </div>
                <div className="mt-4 text-sm font-medium">{s.label}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ MOCK INTERVIEW ARENA ============ */
const MOCK_ROUNDS = [
  { type: "DSA", count: "120+", color: "primary", icon: Code2 },
  { type: "System Design", count: "40+", color: "accent", icon: Brain },
  { type: "Behavioral", count: "60+", color: "primary", icon: MessageSquare },
];

function MockInterviewArena() {
  return (
    <section id="arena" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20"
           style={{ background: "var(--gradient-glow)" }} />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-6">◆ Mock Arena</div>
            <h2 className="text-5xl md:text-6xl font-semibold tracking-[-0.03em] leading-[1.05]">
              Interview reps <br />
              <span className="font-display italic text-gradient">until it's reflex.</span>
            </h2>
            <p className="mt-8 text-lg text-muted-foreground max-w-md leading-relaxed">
              Every Saturday: live mock interviews with engineers from your target companies.
              Recorded. Transcribed. Scored. Repeated.
            </p>

            <div className="mt-10 space-y-4">
              {[
                "Pair-programming rounds with senior engineers",
                "AI-scored behavioral responses with sentiment analysis",
                "Full system design whiteboarding sessions",
                "Negotiation simulations against real recruiter scripts",
              ].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mock UI mockup */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: EASE }}
            className="relative"
          >
            <div className="absolute -inset-8 rounded-[2rem]" style={{ background: "var(--gradient-glow)", opacity: 0.6 }} />
            <div className="relative glass-strong rounded-3xl p-6 border border-border shadow-[var(--shadow-elegant)]">
              {/* Window chrome */}
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-primary/60" />
                  <div className="w-3 h-3 rounded-full bg-success/60" />
                </div>
                <div className="font-mono-num text-xs text-muted-foreground">mock-session.live</div>
                <motion.div
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="flex items-center gap-1.5 text-xs text-destructive"
                >
                  <span className="w-2 h-2 rounded-full bg-destructive" />
                  REC
                </motion.div>
              </div>

              {/* Video tiles */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="aspect-video rounded-xl bg-secondary relative overflow-hidden">
                  <div className="absolute inset-0 grid place-items-center text-4xl font-display">A</div>
                  <div className="absolute bottom-2 left-2 text-xs font-mono-num glass px-2 py-0.5 rounded">You</div>
                  <Mic className="absolute bottom-2 right-2 w-3.5 h-3.5 text-primary" />
                </div>
                <div className="aspect-video rounded-xl bg-secondary relative overflow-hidden">
                  <div className="absolute inset-0 grid place-items-center text-4xl font-display">S</div>
                  <div className="absolute bottom-2 left-2 text-xs font-mono-num glass px-2 py-0.5 rounded">Mentor · Stripe</div>
                </div>
              </div>

              {/* Live transcript */}
              <div className="mt-4 p-4 rounded-xl bg-secondary/50 border border-border">
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Live transcript</div>
                <p className="text-sm font-mono text-foreground/80 leading-relaxed">
                  "Walk me through how you'd design a real-time leaderboard for{" "}
                  <motion.span
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-primary"
                  >|</motion.span>
                </p>
              </div>

              {/* Score panel */}
              <div className="grid grid-cols-3 gap-3 mt-4">
                {[
                  { label: "Clarity", score: 92 },
                  { label: "Depth", score: 78 },
                  { label: "Pace", score: 85 },
                ].map((m) => (
                  <div key={m.label} className="p-3 rounded-xl bg-secondary/50 border border-border">
                    <div className="text-xs text-muted-foreground">{m.label}</div>
                    <div className="text-2xl font-mono-num text-primary font-semibold mt-1">{m.score}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating chips */}
            <div className="mt-6 flex flex-wrap gap-3">
              {MOCK_ROUNDS.map((r, i) => (
                <motion.div
                  key={r.type}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full glass-strong"
                >
                  <r.icon className="w-3.5 h-3.5 text-primary" />
                  <span className="text-sm">{r.type}</span>
                  <span className="text-xs font-mono-num text-muted-foreground">{r.count}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ============ SUCCESS STORIES ============ */
const STORIES = [
  { name: "Priya Sharma", role: "SDE-1", company: "Razorpay", pkg: "₹16 LPA", quote: "The mock interview rounds were brutal in the best way. By interview day I was 10x more prepared than any peer.", rating: 5 },
  { name: "Arjun Mehta", role: "Full-Stack Engineer", company: "Swiggy", pkg: "₹14 LPA", quote: "My mentor literally rewrote my approach to system design over weekends. Internship converted in 2 months.", rating: 5 },
  { name: "Neha Kapoor", role: "Frontend Engineer", company: "Cred", pkg: "₹18 LPA", quote: "Coming from a non-CS background, I never thought Cred was possible. The placement team saw it before I did.", rating: 5 },
  { name: "Rohan Iyer", role: "Backend Engineer", company: "Postman", pkg: "₹15 LPA", quote: "Three offers in one week. The negotiation playbook alone was worth the entire program.", rating: 5 },
];

function SuccessStories() {
  return (
    <section id="stories" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
        >
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-6">◆ Stories</div>
            <h2 className="text-5xl md:text-7xl font-semibold tracking-[-0.03em] leading-[1.05]">
              Engineers who <br />
              <span className="font-display italic text-gradient">made the jump.</span>
            </h2>
          </div>
          <a href="#" className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition">
            Read all 2,500+ stories
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {STORIES.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: EASE }}
              whileHover={{ y: -6 }}
              className="group relative p-8 md:p-10 rounded-3xl bg-[image:var(--gradient-card)] border border-border overflow-hidden"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-primary/10 group-hover:text-primary/20 transition" />
              <div className="flex gap-0.5 mb-6">
                {[...Array(s.rating)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="font-display text-2xl md:text-3xl leading-[1.3] text-foreground/90 mb-8">
                "{s.quote}"
              </blockquote>
              <div className="flex items-center justify-between pt-6 border-t border-border">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-[image:var(--gradient-aurora)] grid place-items-center font-display text-lg text-primary-foreground">
                    {s.name[0]}
                  </div>
                  <div>
                    <div className="font-medium">{s.name}</div>
                    <div className="text-xs text-muted-foreground">{s.role} · {s.company}</div>
                  </div>
                </div>
                <div className="font-mono-num text-sm px-3 py-1.5 rounded-full bg-primary/10 text-primary font-semibold">
                  {s.pkg}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ FINAL CTA ============ */
function FinalCTA() {
  return (
    <section className="py-32 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: EASE }}
        className="max-w-6xl mx-auto relative overflow-hidden rounded-[2.5rem] border border-border"
      >
        <div className="absolute inset-0" style={{ background: "var(--gradient-aurora)" }} />

        {/* Animated orbits */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full border border-white/10"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-60 -left-60 w-[800px] h-[800px] rounded-full border border-white/5"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full border border-white/5"
        />

        <div className="relative p-12 md:p-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background/20 backdrop-blur-md border border-white/20 mb-10"
          >
            <Zap className="w-3.5 h-3.5 text-primary-foreground" />
            <span className="text-xs uppercase tracking-[0.2em] text-primary-foreground font-medium">
              Cohort 12 · 47 seats left
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-8xl font-semibold tracking-[-0.04em] leading-[0.95] text-primary-foreground">
            Stop applying. <br />
            <span className="font-display italic">Start signing.</span>
          </h2>

          <p className="mt-10 text-lg md:text-xl text-primary-foreground/80 max-w-xl mx-auto">
            Book a free 30-minute strategy call with our placement director.
            No pitch — just an honest assessment of your path.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 flex flex-wrap gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="group px-8 py-4 rounded-full bg-background text-foreground font-medium inline-flex items-center gap-2 shadow-2xl"
            >
              Book your strategy call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <button className="px-8 py-4 rounded-full bg-background/10 backdrop-blur-md text-primary-foreground font-medium border border-white/20 hover:bg-background/20 transition">
              Download curriculum (PDF)
            </button>
          </motion.div>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-primary-foreground/70">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5" /> No payment until placed</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5" /> 100% placement assistance</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5" /> Lifetime alumni access</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ============ FOOTER ============ */
function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[image:var(--gradient-aurora)] grid place-items-center">
            <Sparkles className="w-3.5 h-3.5 text-primary-foreground" />
          </div>
          <span>© 2026 RaoCoding<span className="font-display italic text-foreground">School</span>. Crafted for ambitious engineers.</span>
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground transition">Privacy</a>
          <a href="#" className="hover:text-foreground transition">Terms</a>
          <a href="#" className="hover:text-foreground transition">Contact</a>
        </div>
      </div>
    </footer>
  );
}