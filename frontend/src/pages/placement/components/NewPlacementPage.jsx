import {
  motion, useScroll, useTransform, useInView,
  useMotionValue, useSpring, animate, AnimatePresence
} from "framer-motion";
import { useRef, useEffect, useState, useCallback } from "react";
import {
  Briefcase, Target, Users, Building2,
  FileCheck, MessageSquare, Star,
  ArrowRight, CheckCircle2, Sparkles, Code2, Brain, Video,
  Mic, Play, Quote, ArrowUpRight, Zap, Trophy,
} from "lucide-react";
import "./style.css";
import DaySimulator from "./DaySimulator";
import CurriculumAccordion from "./CurriculumAccordion";
import AlumniArchive from "./AlumniPlacementWall";

const EASE = [0.22, 1, 0.36, 1];
const ORANGE = "#FF7A00";
const ORANGE2 = "#FF8C00";

/* ─── Magnetic Button ─── */
function MagneticBtn({ children, className, style, onClick }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18 });
  const sy = useSpring(y, { stiffness: 200, damping: 18 });

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * 0.35);
    y.set((e.clientY - r.top - r.height / 2) * 0.35);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.button
      ref={ref} style={{ x: sx, y: sy, ...style }}
      onMouseMove={onMove} onMouseLeave={onLeave}
      whileTap={{ scale: 0.95 }}
      className={className}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}

/* ─── Cursor Glow ─── */
function CursorGlow() {
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);
  const sx = useSpring(x, { stiffness: 80, damping: 20 });
  const sy = useSpring(y, { stiffness: 80, damping: 20 });

  useEffect(() => {
    const move = (e) => { x.set(e.clientX); y.set(e.clientY); };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      style={{
        position: "fixed", top: 0, left: 0, pointerEvents: "none",
        zIndex: 9999,
        x: sx, y: sy,
        translateX: "-50%", translateY: "-50%",
        width: 600, height: 600,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(255,122,0,0.06) 0%, transparent 65%)",
      }}
    />
  );
}

/* ─── Animated counter ─── */
function Counter({ to, prefix = "", suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, { duration: 2.2, ease: EASE, onUpdate: (v) => setVal(Math.round(v)) });
    return () => c.stop();
  }, [inView, to]);
  return <span ref={ref}>{prefix}{val.toLocaleString()}{suffix}</span>;
}

/* ─── Scramble text ─── */
function ScrambleText({ text, trigger }) {
  const [display, setDisplay] = useState(text);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  useEffect(() => {
    if (!trigger) return;
    let iter = 0;
    const iv = setInterval(() => {
      setDisplay(text.split("").map((c, i) =>
        i < iter ? c : c === " " ? " " : chars[Math.floor(Math.random() * chars.length)]
      ).join(""));
      iter += 0.5;
      if (iter >= text.length) clearInterval(iv);
    }, 35);
    return () => clearInterval(iv);
  }, [trigger]);
  return <span>{display}</span>;
}

/* ════════════════════════════════════════════ */
export default function PlacementPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden antialiased" style={{ background: "#000" }}>
      <CursorGlow />
    
      <Hero />
      <MarqueeStrip />

    
      <DaySimulator />
      <JourneyTimeline />

    
      <CurriculumAccordion />
      <Features />

  
      <AlumniArchive />
      <Stats />

  
      <MockInterviewArena />
      <SuccessStories />
      <FinalCTA />
    </div>
  );
}


/* ─── HERO ─── */
const FLIP_EASE = [0.16, 1, 0.3, 1];
function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Framer Motion variants for 3D tumbling/flipping reveals
  const flipLineVariant = {
    hidden: { 
      rotateX: 85, // Angled back away from camera
      y: "100%",   // Below the viewing window
      opacity: 0 
    },
    visible: (customDelay) => ({
      rotateX: 0,
      y: "0%",
      opacity: 1,
      transition: {
        duration: 1.4,
        ease: FLIP_EASE,
        delay: customDelay,
      },
    }),
  };

  const fadeVariant = {
    hidden: { opacity: 0, y: 15 },
    visible: (customDelay) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: FLIP_EASE,
        delay: customDelay,
      },
    }),
  };

  return (
   
//     <section className="relative min-h-screen overflow-hidden bg-[#080808] text-white">
//       {/* Background Glow */}
//       <div
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           background:
//             "radial-gradient(circle at 50% 20%, rgba(255,122,0,.12), transparent 55%)",
//         }}
//       />

//       {/* Decorative Lines */}
//       <div className="absolute top-0 left-[12%] h-full w-px bg-white/5" />
//       <div className="absolute top-0 right-[12%] h-full w-px bg-white/5" />

//       <div className="relative z-10 max-w-7xl mx-auto px-8">
//         <div className="min-h-screen flex flex-col justify-center">
//           {/* Label */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             className="mb-16"
//           >
//             <span className="uppercase tracking-[0.4em] text-xs text-white/35">
//               {/* Rao Coding School */}
//             </span>
//           </motion.div>

//           {/* Main Content */}
//           <motion.div
//             initial={{ opacity: 0, y: 35 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.9 }}
//             className="max-w-5xl"
//           >
//             <h1
//               className="
//     text-5xl
   
//     sm:text-6xl
//     md:text-7xl
//     lg:text-[92px]
//     font-light
//     leading-[1]
//     tracking-[-0.04em]
//   "
//               style={{
//                 fontFamily: '"Cormorant Garamond", sans-serif',
//               }}
//             >
//               You can learn coding
//               <br />
//               anywhere.
//             </h1>

//             <div className="mt-8">
//               <span
//                 className="
//                   text-[70px]
//                   sm:text-[90px]
//                   md:text-[120px]
//                   lg:text-[140px]
//                   leading-none
//                   text-orange-400
//                 "
//                 style={{
//                   fontFamily: "Parisienne, cursive",
//                 }}
//               >
//                 Building a career
//               </span>
//             </div>

//             <h2
//               className="
//                 text-4xl
//                 sm:text-5xl
//                 md:text-6xl
//                 lg:text-7xl
//                 font-light
//                 mt-2
//                 tracking-[-0.04em]
//               "
//                 style={{
//                 fontFamily: '"Cormorant Garamond", sans-serif',
//               }}
//             >
//               is different.
//             </h2>
//           </motion.div>

//           {/* Description */}
//           <motion.div
//             initial={{ opacity: 0, y: 25 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="mt-14 max-w-xl"
//           >
//             <p
//               className="
//                 text-lg
//                 md:text-xl
//                 text-white/45
//                 leading-relaxed
//               "
//             >
//               Projects. Portfolios. Internships. Interviews. We help students
//               bridge the gap between learning to code and becoming
//               industry-ready developers.
//             </p>
//           </motion.div>

//           {/* CTA */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.35 }}
//             className="mt-12 flex flex-wrap gap-4"
//           >
//             <button
//               className="
//                 group
//                 bg-orange-500
//                 hover:bg-orange-400
//                 text-black
//                 px-8
//                 py-4
//                 rounded-full
//                 flex
//                 items-center
//                 gap-2
//                 font-medium
//                 transition-all
//               "
//             >
//               Start Your Journey
//               <ArrowRight
//                 size={18}
//                 className="group-hover:translate-x-1 transition-transform"
//               />
//             </button>

//             <button
//               className="
//                 px-8
//                 py-4
//                 rounded-full
//                 border
//                 border-white/10
//                 text-white/70
//                 hover:text-white
//                 hover:border-white/20
//                 transition-all
//               "
//             >
//               Explore Programs
//             </button>
//           </motion.div>

//           {/* Bottom Quote */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.6 }}
//             className="mt-24"
//           >
//             <p
//               className="
//                 text-white/25
//                 italic
//                 text-lg
//                 max-w-lg
//               "
//               style={{
//                 fontFamily: "Cormorant Garamond, serif",
//               }}
//             >
//               "Every developer starts with curiosity. The difference is having
//               the right guidance."
//             </p>
//           </motion.div>

//           {/* Scroll Hint */}
//           <div className="mt-16 text-white/20 text-sm tracking-wide">
//             {/* Scroll to discover the roadmap ↓ */}
//           </div>
//         </div>
//       </div>
//     </section>

<section ref={ref} className="relative min-h-screen overflow-hidden bg-[#080808] text-white">
      {/* Background Glow */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 20%, rgba(255,122,0,.12), transparent 55%)",
          }}
        />
      </motion.div>

      {/* Decorative Lines */}
      <div className="absolute top-0 left-[12%] h-full w-px bg-white/5" />
      <div className="absolute top-0 right-[12%] h-full w-px bg-white/5" />

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="min-h-screen flex flex-col justify-center">
          
          {/* Label */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeVariant}
            className="mb-16"
          >
            <span className="uppercase mb-10 tracking-[0.4em] text-xs text-white/35">
              {/* ◆ Rao Coding School */}
            </span>
          </motion.div>

          {/* Main Typography Content with CSS Perspective */}
          <div 
            className="max-w-5xl select-none"
            style={{ 
              perspective: "1000px",          // CRITICAL: Gives depth to the 3D space
              transformStyle: "preserve-3d"  // Ensures inner components render in 3D
            }}
          >
            
            {/* Line 1 */}
            <div className="overflow-hidden py-3 -my-3 origin-bottom" style={{ transformStyle: "preserve-3d" }}>
              <motion.h1
                custom={0.1}
                initial="hidden"
                animate="visible"
                variants={flipLineVariant}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-[92px] font-light leading-[1.05] tracking-[-0.04em] origin-bottom block"
                style={{ fontFamily: '"Cormorant Garamond", serif' }}
              >
                You can learn coding
              </motion.h1>
            </div>

            {/* Line 2 */}
            <div className="overflow-hidden py-3 -my-3 origin-bottom" style={{ transformStyle: "preserve-3d" }}>
              <motion.h1
                custom={0.22}
                initial="hidden"
                animate="visible"
                variants={flipLineVariant}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-[92px] font-light leading-[1.05] tracking-[-0.04em] origin-bottom block"
                style={{ fontFamily: '"Cormorant Garamond", serif' }}
              >
                anywhere.
              </motion.h1>
            </div>

            {/* Script Line */}
            <div className="overflow-hidden h-[100px] sm:h-[130px] md:h-[160px] lg:h-[185px] mt-4 flex items-end origin-bottom" style={{ transformStyle: "preserve-3d" }}>
              <motion.span
                custom={0.34}
                initial="hidden"
                animate="visible"
                variants={flipLineVariant}
                className="text-[70px] sm:text-[90px] md:text-[120px] lg:text-[140px] leading-none text-orange-400 block origin-bottom"
                style={{ fontFamily: "Parisienne, cursive" }}
              >
                Building a career
              </motion.span>
            </div>

            {/* Line 3 */}
            <div className="overflow-hidden py-3 -my-3 mt-4 origin-bottom" style={{ transformStyle: "preserve-3d" }}>
              <motion.h2
                custom={0.46}
                initial="hidden"
                animate="visible"
                variants={flipLineVariant}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-[-0.04em] origin-bottom block"
                style={{ fontFamily: '"Cormorant Garamond", serif' }}
              >
                is different.
              </motion.h2>
            </div>
          </div>

          {/* Paragraph Text Description */}
          <motion.div
            custom={0.6}
            initial="hidden"
            animate="visible"
            variants={fadeVariant}
            className="mt-14 max-w-xl"
          >
            <p className="text-lg md:text-xl text-white/45 leading-relaxed">
              Projects. Portfolios. Internships. Interviews. We help students
              bridge the gap between learning to code and becoming
              industry-ready developers.
            </p>
          </motion.div>

          {/* Calls To Action buttons */}
          <motion.div
            custom={0.7}
            initial="hidden"
            animate="visible"
            variants={fadeVariant}
            className="mt-12 flex flex-wrap gap-4"
          >
            <button className="group bg-orange-500 hover:bg-orange-400 text-black px-8 py-4 rounded-full flex items-center gap-2 font-medium transition-all duration-300">
              Start Your Journey
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </button>

            <button className="px-8 py-4 rounded-full border border-white/10 text-white/70 hover:text-white hover:border-white/20 transition-all duration-300">
              Explore Programs
            </button>
          </motion.div>

          {/* Bottom Context Quote */}
          <motion.div
            custom={0.82}
            initial="hidden"
            animate="visible"
            variants={fadeVariant}
            className="mt-24"
          >
            <p
              className="text-white/25 italic text-lg max-w-lg mb-14"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              "Every developer starts with curiosity. The difference is having
              the right guidance."
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

/* ─── MARQUEE ─── */
function MarqueeStrip() {
  const items = ["Foundation Audit", "Portfolio Sprint", "Interview Mastery", "Paid Internship", "Offer Letter", "FAANG Mentors", "Live Mock Arena", "1-on-1 Coaching"];
  const doubled = [...items, ...items];
  return (
    <div style={{ overflow: "hidden", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "14px 0", background: "rgba(255,122,0,0.03)" }}>
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        style={{ display: "flex", gap: 40, whiteSpace: "nowrap", width: "max-content" }}
      >
        {doubled.map((item, i) => (
          <span key={i} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700, color: "rgba(161,161,170,0.5)" }}>
            <span style={{ color: ORANGE, fontSize: 8 }}>◆</span>
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* ─── JOURNEY TIMELINE ─── */
const JOURNEY = [
  { week: "Week 01", title: "Foundation Audit", desc: "Diagnostic assessment + personalized roadmap built with your dedicated career coach.", icon: Target },
  { week: "Week 04", title: "Portfolio Sprint", desc: "Ship 3 production-grade projects with code reviews from senior engineers at FAANG.", icon: Code2 },
  { week: "Week 08", title: "Interview Mastery", desc: "Weekly DSA, system design & behavioral mocks. Recorded, reviewed, refined.", icon: Brain },
  { week: "Week 12", title: "Paid Internship", desc: "Matched with vetted startups & MNCs. Real teams, real shipping, real paycheck.", icon: Briefcase },
  { week: "Week 16", title: "Offer Letter", desc: "Dedicated drives, warm referrals & negotiation support until you sign.", icon: Trophy },
];

// function JourneyTimeline() {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start 0.7", "end 0.3"] });
//   const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

//   return (
//     <section id="journey" style={{ padding: "140px 32px", position: "relative" }}>
//       <div style={{ maxWidth: 1280, margin: "0 auto" }}>
//         {/* Section header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-80px" }}
//           transition={{ duration: 0.8, ease: EASE }}
//           style={{ textAlign: "center", maxWidth: 700, margin: "0 auto 100px" }}
//         >
//           <div style={{ fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", color: ORANGE, fontWeight: 700, marginBottom: 20 }}>◆ The Journey</div>
//           <h2 style={{ fontSize: "clamp(2.5rem,6vw,5.5rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1, margin: 0, color: "#fff" }}>
//             A 16-week arc,{" "}
//             <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 400, background: "linear-gradient(135deg,#FF7A00,#FF8C00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
//               precisely engineered.
//             </span>
//           </h2>
//           <p style={{ marginTop: 24, fontSize: 17, color: "#A1A1AA", lineHeight: 1.6 }}>Not a course. A career operating system.</p>
//         </motion.div>

//         {/* Timeline */}
//         <div ref={containerRef} style={{ position: "relative", maxWidth: 960, margin: "0 auto" }}>
//           {/* Animated line */}
//           <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 1, background: "rgba(255,255,255,0.07)" }} />
//           <motion.div
//             style={{
//               position: "absolute", left: 0, top: 0, width: 1, originY: 0,
//               scaleY: lineScaleY, background: `linear-gradient(to bottom, ${ORANGE}, ${ORANGE2})`,
//               boxShadow: `0 0 20px rgba(255,122,0,0.7)`,
//             }}
//           />

//           <div style={{ display: "flex", flexDirection: "column", gap: 72, paddingLeft: 64 }}>
//             {JOURNEY.map((step, i) => (
//               <TimelineItem key={step.week} step={step} index={i} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

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

// function TimelineItem({ step, index }) {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-80px" });
//   const [hovered, setHovered] = useState(false);

//   return (
//     <div ref={ref} style={{ position: "relative", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
//       {/* Dot */}
//       <motion.div
//         initial={{ scale: 0, opacity: 0 }}
//         animate={inView ? { scale: 1, opacity: 1 } : {}}
//         transition={{ duration: 0.5, delay: 0.15, ease: EASE }}
//         style={{
//           position: "absolute", left: -72, top: "50%", transform: "translateY(-50%)",
//           width: 16, height: 16, borderRadius: "50%",
//           background: ORANGE, boxShadow: `0 0 28px rgba(255,122,0,0.9)`,
//           border: "3px solid #000",
//         }}
//       />

//       {/* Text */}
//       <motion.div
//         initial={{ opacity: 0, x: -40 }}
//         animate={inView ? { opacity: 1, x: 0 } : {}}
//         transition={{ duration: 0.7, ease: EASE }}
//       >
//         <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
//           <span style={{ fontSize: 10, fontFamily: "var(--font-mono)", letterSpacing: "0.2em", color: ORANGE, fontWeight: 600, textTransform: "uppercase" }}>{step.week}</span>
//           <span style={{ fontSize: 10, fontFamily: "var(--font-mono)", color: "rgba(161,161,170,0.35)" }}>/ {step.num}</span>
//         </div>
//         <h3 style={{ fontSize: "clamp(1.6rem,3vw,2.4rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "#fff", margin: "0 0 12px" }}>
//           {step.title}
//         </h3>
//         <p style={{ color: "#A1A1AA", lineHeight: 1.65, fontSize: 15, margin: 0 }}>{step.desc}</p>
//       </motion.div>

//       {/* Card */}
//       <motion.div
//         initial={{ opacity: 0, x: 40, scale: 0.93 }}
//         animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
//         transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
//         onHoverStart={() => setHovered(true)}
//         onHoverEnd={() => setHovered(false)}
//         whileHover={{ y: -6 }}
//         style={{
//           aspectRatio: "4/3", borderRadius: 24,
//           background: "linear-gradient(145deg, rgba(255,122,0,0.07) 0%, rgba(10,10,10,0.9) 70%)",
//           border: `1px solid ${hovered ? "rgba(255,122,0,0.3)" : "rgba(255,255,255,0.07)"}`,
//           display: "grid", placeItems: "center", position: "relative", overflow: "hidden",
//           cursor: "default", transition: "border-color 0.3s",
//         }}
//       >
//         <motion.div
//           animate={{ opacity: hovered ? 0.5 : 0.15 }}
//           style={{
//             position: "absolute", inset: 0,
//             background: "radial-gradient(circle at 50% 50%, rgba(255,122,0,0.35), transparent 65%)",
//           }}
//         />
//         <motion.div animate={{ scale: hovered ? 1.12 : 1 }} transition={{ duration: 0.5, ease: EASE }}>
//           <step.icon size={80} strokeWidth={1.1} color={ORANGE} />
//         </motion.div>
//         <div style={{ position: "absolute", top: 14, right: 18, fontFamily: "var(--font-mono)", fontSize: 10, color: "rgba(161,161,170,0.3)", letterSpacing: "0.1em" }}>
//           {step.num} / 05
//         </div>
//         {/* Hover shimmer */}
//         <motion.div
//           animate={{ x: hovered ? "200%" : "-100%" }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//           style={{
//             position: "absolute", top: 0, bottom: 0, width: "40%",
//             background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent)",
//             transform: "skewX(-15deg)",
//           }}
//         />
//       </motion.div>
//     </div>
//   );
// }

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

/* ─── FEATURES ─── */


const FEATURES = [
  { 
    
    icon: Users, 
    title: "1-on-1 FAANG Mentors", 
    desc: "Your dedicated engineer from Google, Meta, or Stripe. Weekly deep-dives, not group lectures.", 
    span: "col-span-2 row-span-2", 
    size: "lg",
    // Deep global networking nodes & connectivity lines
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80"
  },
  { 
    icon: Video, 
    title: "Recorded Mocks", 
    desc: "Every session filmed, transcribed and annotated with AI scoring.", 
    span: "", 
    size: "sm",
    // Sleek dark camera lens glass reflections
    image: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?auto=format&fit=crop&w=600&q=80"
  },
  { 
    icon: Brain, 
    title: "AI DSA Coach", 
    desc: "Adaptive problems targeting your exact weak spots.", 
    span: "", 
    size: "sm",
    // Futuristic glowing neural matrix network
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=600&q=80"
  },
  { 
    icon: Building2, 
    title: "500+ Partners", 
    desc: "No cold apps — warm referrals to vetted companies.", 
    span: "", 
    size: "sm",
    // Geometric dark glass skyscraper facade
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
  },
  { 
    icon: FileCheck, 
    title: "Ships to Prod", 
    desc: "Projects reviewed line-by-line by senior engineers.", 
    span: "", 
    size: "sm",
    // Clean abstract code/terminal syntax layout
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80"
  },
    { 
    icon: FileCheck, 
    title: "Ships to Prod", 
    desc: "Projects reviewed line-by-line by senior engineers.", 
    span: "", 
    size: "sm",
    // Clean digital syntax architecture
    image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=600&auto=format&fit=crop"
  },
];



function Features() {
  return (
    <section id="features" style={{ padding: "120px 32px", backgroundColor: "#040404" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
          style={{ marginBottom: 64 }}
        >
          <div style={{ fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", color: ORANGE, fontWeight: 700, marginBottom: 18 }}>◆ Features</div>
          <h2 style={{ fontSize: "clamp(2.5rem,6vw,5.5rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1, margin: 0, color: "#fff" }}>
            Built for ambitious{" "}
            <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 400, background: "linear-gradient(135deg,#FF7A00,#FF8C00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              outcomes.
            </span>
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "repeat(2, 280px)", gap: 16 }}>
          {FEATURES.map((f, i) => (
            <FeatureCard key={i} {...f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}




function FeatureCard({ icon: Icon, title, desc, span, size, index, image }) {
  const [hovered, setHovered] = useState(false);
  const gridArea = index === 0 ? { gridColumn: "span 2", gridRow: "span 2" } : {};

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.07, ease: EASE }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        ...gridArea,
        padding: size === "lg" ? "44px 48px" : "28px 32px",
        borderRadius: 24,
        overflow: "hidden", 
        position: "relative",
        cursor: "default", 
        display: "flex", 
        flexDirection: "column",
        backgroundColor: "#0d0d0d", // Dark background fallback while loading
        
        // Border gets a clean highlight on hover
        border: `1px solid ${hovered ? "rgba(255, 122, 0, 0.5)" : "rgba(255, 255, 255, 0.08)"}`,
        boxShadow: hovered ? "0 20px 40px -15px rgba(0,0,0,0.8)" : "none",
        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      {/* NORMAL BACKGROUND LAYER (Isolated so only the image zooms on hover) */}
      <motion.div
        animate={{ 
          scale: hovered ? 1.05 : 1
        }}
        transition={{ duration: 0.6, ease: EASE }}
        style={{
          position: "absolute",
          top: 0, left: 0, right: 0, bottom: 0,
          zIndex: 0,
          backgroundImage: `url("${image}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          pointerEvents: "none",
        }}
      />

      {/* ICON LAYER */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <motion.div
          animate={{ 
            backgroundColor: hovered ? "rgba(255,122,0,0.3)" : "rgba(255,122,0,0.15)"
          }}
          transition={{ duration: 0.3 }}
          style={{
            width: size === "lg" ? 60 : 44, height: size === "lg" ? 60 : 44,
            borderRadius: 14, 
            display: "grid", placeItems: "center",
            border: "1px solid rgba(255,122,0,0.3)",
          }}
        >
          <Icon size={size === "lg" ? 26 : 18} color={ORANGE} strokeWidth={1.5} />
        </motion.div>
      </div>

      {/* TEXT CONTENT LAYER */}
      <div style={{ marginTop: "auto", paddingTop: 32, position: "relative", zIndex: 1 }}>
        <h3 style={{
          fontSize: size === "lg" ? "clamp(1.5rem,3vw,2.4rem)" : "1.1rem",
          fontWeight: 800, letterSpacing: "-0.03em", color: "#fff", margin: "0 0 10px",
          // High-contrast shadow to separate white text from bright images
          textShadow: "0 2px 8px rgba(0, 0, 0, 0.9), 0 1px 2px rgba(0, 0, 0, 0.9)"
        }}>
          {title}
        </h3>
        <p style={{ 
          color: "#F4F4F5", 
          fontSize: size === "lg" ? 16 : 13, 
          lineHeight: 1.6, 
          margin: 0, 
          maxWidth: size === "lg" ? 380 : "none",
          // High-contrast shadow to separate descriptions from bright images
          textShadow: "0 1px 4px rgba(0, 0, 0, 0.9)"
        }}>
          {desc}
        </p>
      </div>

      {/* ARROW ON HOVER */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -6, y: hovered ? 0 : 6 }}
        transition={{ duration: 0.3, ease: EASE }}
        style={{
          position: "absolute", bottom: size === "lg" ? 44 : 28, right: size === "lg" ? 48 : 32,
          color: ORANGE,
          zIndex: 1,
        }}
      >
        <ArrowUpRight size={size === "lg" ? 22 : 16} />
      </motion.div>
    </motion.div>
  );
}

/* ─── STATS ─── */
const STATS = [
  { value: 98, suffix: "%", label: "Placement rate", sub: "across last 6 cohorts" },
  { value: 18, prefix: "₹", suffix: "L", label: "Highest package", sub: "freshman, 2025 batch" },
  { value: 500, suffix: "+", label: "Hiring partners", sub: "actively recruiting" },
  { value: 2500, suffix: "+", label: "Engineers placed", sub: "since 2021" },
];

function Stats() {
  return (
    <section style={{ padding: "120px 32px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ position: "relative", borderRadius: 36, overflow: "hidden" }}>
          {/* Animated gradient bg */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(145deg, rgba(255,122,0,0.07) 0%, rgba(5,5,5,0.98) 55%)",
            border: "1px solid rgba(255,122,0,0.12)",
            borderRadius: 36,
          }} />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            style={{
              position: "absolute", top: "-80%", right: "-30%",
              width: 700, height: 700, borderRadius: "50%",
              background: "radial-gradient(circle, rgba(255,122,0,0.08) 0%, transparent 65%)",
            }}
          />

          <div style={{ position: "relative", zIndex: 1, padding: "72px 64px" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ textAlign: "center", marginBottom: 64 }}
            >
              <div style={{ fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", color: ORANGE, fontWeight: 700, marginBottom: 16 }}>◆ The numbers</div>
              <h2 style={{ fontSize: "clamp(2rem,5vw,4rem)", fontWeight: 800, letterSpacing: "-0.04em", color: "#fff", margin: 0 }}>
                Outcomes we{" "}
                <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 400, background: "linear-gradient(135deg,#FF7A00,#FF8C00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  stand behind.
                </span>
              </h2>
            </motion.div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 4 }}>
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
                  whileHover={{ scale: 1.03 }}
                  style={{
                    padding: "28px 32px",
                    borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none",
                    cursor: "default",
                  }}
                >
                  <div style={{
                    fontSize: "clamp(2.8rem,5vw,4.5rem)", fontWeight: 800, letterSpacing: "-0.05em",
                    background: "linear-gradient(135deg, #FF7A00, #FFA040)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                    fontFamily: "var(--font-mono)",
                  }}>
                    <Counter to={s.value} prefix={s.prefix} suffix={s.suffix} />
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#fff", marginTop: 10 }}>{s.label}</div>
                  <div style={{ fontSize: 12, color: "#A1A1AA", marginTop: 4 }}>{s.sub}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── MOCK INTERVIEW ARENA ─── */
function MockInterviewArena() {
  const [active, setActive] = useState(0);
  const features = [
    "Pair-programming with senior engineers",
    "AI-scored behavioral responses",
    "Full system design whiteboarding",
    "Negotiation simulations",
  ];

  return (
    <section id="arena" style={{ padding: "120px 32px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 800, height: 800, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,122,0,0.07) 0%, transparent 65%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
        {/* Left */}
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: EASE }}>
          <div style={{ fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", color: ORANGE, fontWeight: 700, marginBottom: 20 }}>◆ Mock Arena</div>
          <h2 style={{ fontSize: "clamp(2.2rem,5vw,4rem)", fontWeight: 800, letterSpacing: "-0.04em", color: "#fff", margin: "0 0 24px", lineHeight: 1.05 }}>
            Interview reps{" "}
            <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 400, background: "linear-gradient(135deg,#FF7A00,#FF8C00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              until it's reflex.
            </span>
          </h2>
          <p style={{ color: "#A1A1AA", fontSize: 16, lineHeight: 1.7, maxWidth: 420, margin: "0 0 40px" }}>
            Every Saturday: live mocks with engineers from your target companies. Recorded. Transcribed. Scored. Repeated.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {features.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onHoverStart={() => setActive(i)}
                style={{
                  display: "flex", alignItems: "center", gap: 12,
                  padding: "12px 16px", borderRadius: 12, cursor: "default",
                  background: active === i ? "rgba(255,122,0,0.08)" : "transparent",
                  border: `1px solid ${active === i ? "rgba(255,122,0,0.2)" : "transparent"}`,
                  transition: "all 0.25s",
                }}
              >
                <motion.div animate={{ scale: active === i ? 1.15 : 1 }}>
                  <CheckCircle2 size={16} color={active === i ? ORANGE : "#444"} />
                </motion.div>
                <span style={{ color: active === i ? "#fff" : "#A1A1AA", fontSize: 14, transition: "color 0.25s" }}>{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right — mock UI */}
        <motion.div initial={{ opacity: 0, y: 50, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: EASE }} style={{ position: "relative" }}>
          <div style={{ position: "absolute", inset: -32, borderRadius: 36, background: "radial-gradient(circle, rgba(255,122,0,0.15) 0%, transparent 65%)" }} />
          <motion.div
            whileHover={{ y: -4 }}
            style={{
              position: "relative", borderRadius: 24,
              background: "rgba(8,8,8,0.9)", backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.08)",
              padding: 24, boxShadow: "0 40px 80px rgba(0,0,0,0.8)",
            }}
          >
            {/* Chrome */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: 16, borderBottom: "1px solid rgba(255,255,255,0.07)", marginBottom: 16 }}>
              <div style={{ display: "flex", gap: 6 }}>
                {["#FF5F56","#FFBD2E","#27C93F"].map((c) => <div key={c} style={{ width: 11, height: 11, borderRadius: "50%", background: c, opacity: 0.7 }} />)}
              </div>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#A1A1AA" }}>mock-session.live</span>
              <motion.div animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.8, repeat: Infinity }} style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11, color: "#FF3B3B", fontWeight: 700 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#FF3B3B", display: "block" }} />
                REC
              </motion.div>
            </div>

            {/* Video tiles */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 14 }}>
              {[{ label: "You", letter: "A" }, { label: "Mentor · Stripe", letter: "S" }].map((v) => (
                <div key={v.label} style={{ aspectRatio: "16/9", borderRadius: 12, background: "#111", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", fontFamily: "var(--font-serif)", fontSize: 36, color: "rgba(255,255,255,0.15)", fontStyle: "italic" }}>{v.letter}</div>
                  <div style={{ position: "absolute", bottom: 8, left: 8, fontSize: 10, fontFamily: "var(--font-mono)", background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)", padding: "3px 8px", borderRadius: 6, color: "#ccc" }}>{v.label}</div>
                  {v.letter === "A" && <Mic size={12} color={ORANGE} style={{ position: "absolute", bottom: 8, right: 8 }} />}
                </div>
              ))}
            </div>

            {/* Transcript */}
            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12, padding: 14, marginBottom: 14 }}>
              <div style={{ fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A1A1AA", fontWeight: 700, marginBottom: 8 }}>Live transcript</div>
              <p style={{ fontSize: 13, fontFamily: "var(--font-mono)", color: "rgba(255,255,255,0.75)", lineHeight: 1.5, margin: 0 }}>
                "Walk me through how you'd design a real-time leaderboard for{" "}
                <motion.span animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1.4, repeat: Infinity }} style={{ color: ORANGE }}>|</motion.span>
              </p>
            </div>

            {/* Scores */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
              {[{ label: "Clarity", score: 92 }, { label: "Depth", score: 78 }, { label: "Pace", score: 85 }].map((m) => (
                <motion.div key={m.label} whileHover={{ scale: 1.05 }} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 10, padding: "12px 14px" }}>
                  <div style={{ fontSize: 10, color: "#A1A1AA", marginBottom: 4 }}>{m.label}</div>
                  <div style={{ fontSize: 24, fontFamily: "var(--font-mono)", fontWeight: 700, color: ORANGE }}>{m.score}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Chips */}
          <div style={{ display: "flex", gap: 10, marginTop: 18, flexWrap: "wrap" }}>
            {[{ icon: Code2, label: "DSA", count: "120+" }, { icon: Brain, label: "System Design", count: "40+" }, { icon: MessageSquare, label: "Behavioral", count: "60+" }].map((r, i) => (
              <motion.div key={r.label} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.6 + i * 0.1 }} whileHover={{ y: -2, scale: 1.03 }} style={{ display: "flex", alignItems: "center", gap: 7, padding: "8px 14px", borderRadius: 999, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)", backdropFilter: "blur(8px)" }}>
                <r.icon size={12} color={ORANGE} />
                <span style={{ fontSize: 12, color: "#fff", fontWeight: 600 }}>{r.label}</span>
                <span style={{ fontSize: 11, fontFamily: "var(--font-mono)", color: "#A1A1AA" }}>{r.count}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── SUCCESS STORIES ─── */
const STORIES = [
  { name: "Priya Sharma", role: "SDE-1", company: "Razorpay", pkg: "₹16 LPA", quote: "The mock interview rounds were brutal in the best way. By interview day I was 10x more prepared than any peer." },
  { name: "Arjun Mehta", role: "Full-Stack Engineer", company: "Swiggy", pkg: "₹14 LPA", quote: "My mentor literally rewrote my approach to system design over weekends. Internship converted in 2 months." },
  { name: "Neha Kapoor", role: "Frontend Engineer", company: "Cred", pkg: "₹18 LPA", quote: "Coming from a non-CS background, I never thought Cred was possible. The placement team saw it before I did." },
  { name: "Rohan Iyer", role: "Backend Engineer", company: "Postman", pkg: "₹15 LPA", quote: "Three offers in one week. The negotiation playbook alone was worth the entire program." },
];

function SuccessStories() {
  return (
    <section id="stories" style={{ padding: "120px 32px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: EASE }} style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 56, gap: 24, flexWrap: "wrap" }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", color: ORANGE, fontWeight: 700, marginBottom: 18 }}>◆ Stories</div>
            <h2 style={{ fontSize: "clamp(2.5rem,6vw,5rem)", fontWeight: 800, letterSpacing: "-0.04em", color: "#fff", margin: 0, lineHeight: 1.05 }}>
              Engineers who{" "}
              <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 400, background: "linear-gradient(135deg,#FF7A00,#FF8C00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                made the jump.
              </span>
            </h2>
          </div>
          <motion.a href="#" whileHover={{ x: 3 }} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "#A1A1AA", textDecoration: "none", fontWeight: 600 }}>
            All 2,500+ stories <ArrowUpRight size={14} />
          </motion.a>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 16 }}>
          {STORIES.map((s, i) => (
            <StoryCard key={s.name} story={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StoryCard({ story, index }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: EASE }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -8 }}
      style={{
        padding: "40px 44px", borderRadius: 24, position: "relative", overflow: "hidden",
        background: "linear-gradient(145deg, rgba(255,122,0,0.06) 0%, rgba(8,8,8,0.95) 70%)",
        border: `1px solid ${hovered ? "rgba(255,122,0,0.25)" : "rgba(255,255,255,0.07)"}`,
        cursor: "default", transition: "border-color 0.3s",
      }}
    >
      <motion.div
        animate={{ opacity: hovered ? 0.3 : 0.06 }}
        style={{ position: "absolute", top: -20, right: -20, color: ORANGE }}
      >
        <Quote size={96} />
      </motion.div>

      {/* Stars */}
      <div style={{ display: "flex", gap: 3, marginBottom: 22 }}>
        {[...Array(5)].map((_, j) => (
          <motion.div key={j} initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.08 + j * 0.06 }}>
            <Star size={13} fill={ORANGE} color={ORANGE} />
          </motion.div>
        ))}
      </div>

      <blockquote style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "clamp(1.1rem,2vw,1.4rem)", lineHeight: 1.4, color: "rgba(255,255,255,0.88)", margin: "0 0 32px" }}>
        "{story.quote}"
      </blockquote>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <motion.div
            animate={{ boxShadow: hovered ? "0 0 20px rgba(255,122,0,0.5)" : "0 0 0px rgba(255,122,0,0)" }}
            style={{ width: 42, height: 42, borderRadius: "50%", background: "linear-gradient(135deg,#FF7A00,#FF8C00)", display: "grid", placeItems: "center", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 18, color: "#000", fontWeight: 700 }}
          >
            {story.name[0]}
          </motion.div>
          <div>
            <div style={{ fontWeight: 700, color: "#fff", fontSize: 14 }}>{story.name}</div>
            <div style={{ fontSize: 12, color: "#A1A1AA" }}>{story.role} · {story.company}</div>
          </div>
        </div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 700, padding: "6px 14px", borderRadius: 999, background: "rgba(255,122,0,0.1)", color: ORANGE, border: "1px solid rgba(255,122,0,0.2)" }}>
          {story.pkg}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── FINAL CTA ─── */
function FinalCTA() {
  const [hoveringPrimary, setHoveringPrimary] = useState(false);
  return (
    <section style={{ padding: "120px 32px" }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: EASE }}
        style={{ maxWidth: 1200, margin: "0 auto", borderRadius: 40, overflow: "hidden", position: "relative" }}
      >
        {/* BG */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #FF7A00 0%, #FF8C00 50%, #FF6A00 100%)" }} />
        {/* Noise overlay */}
        <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' /></filter><rect width='100%25' height='100%25' filter='url(%23n)' /></svg>\")" }} />
        {/* Orbits */}
        {[600, 850, 1050].map((s, i) => (
          <motion.div key={s} animate={{ rotate: i % 2 === 0 ? 360 : -360 }} transition={{ duration: 50 + i * 20, repeat: Infinity, ease: "linear" }} style={{ position: "absolute", top: "50%", left: "50%", width: s, height: s, borderRadius: "50%", border: "1px solid rgba(0,0,0,0.1)", transform: "translate(-50%,-50%)" }} />
        ))}

        <div style={{ position: "relative", zIndex: 1, padding: "96px 80px", textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "7px 18px", borderRadius: 999, background: "rgba(0,0,0,0.15)", backdropFilter: "blur(8px)", border: "1px solid rgba(0,0,0,0.1)", marginBottom: 40 }}>
            <Zap size={13} color="#000" />
            <span style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 800, color: "#000" }}>MERN 12 · 47 seats left</span>
          </motion.div>

          <h2 style={{ fontSize: "clamp(3rem,9vw,8rem)", fontWeight: 800, letterSpacing: "-0.05em", lineHeight: 0.9, color: "#000", margin: "0 0 36px" }}>
            Stop applying.<br />
            <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 400 }}>Start signing.</span>
          </h2>

          <p style={{ fontSize: "clamp(1rem,2vw,1.2rem)", color: "rgba(0,0,0,0.65)", maxWidth: 480, margin: "0 auto 52px", lineHeight: 1.7 }}>
            A free 30-minute strategy call with our placement director. No pitch — just an honest assessment of your path.
          </p>

          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <MagneticBtn
              style={{
                padding: "18px 38px", borderRadius: 999, background: "#000",
                color: "#fff", fontWeight: 700, fontSize: 15, border: "none", cursor: "pointer",
                display: "flex", alignItems: "center", gap: 8,
                boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
              }}
            >
              Book your strategy call <ArrowRight size={16} />
            </MagneticBtn>
            <MagneticBtn
              style={{
                padding: "18px 38px", borderRadius: 999,
                background: "rgba(0,0,0,0.12)", backdropFilter: "blur(8px)",
                border: "1px solid rgba(0,0,0,0.18)",
                color: "#000", fontWeight: 700, fontSize: 15, cursor: "pointer",
              }}
            >
              Download curriculum
            </MagneticBtn>
          </div>

          <div style={{ marginTop: 56, display: "flex", alignItems: "center", justifyContent: "center", gap: 32, flexWrap: "wrap" }}>
            {["No payment until placed", "100% placement assistance", "Lifetime alumni access"].map((t) => (
              <span key={t} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 13, color: "rgba(0,0,0,0.6)", fontWeight: 600 }}>
                <CheckCircle2 size={14} color="rgba(0,0,0,0.5)" />{t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

