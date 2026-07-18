import {
  motion,
  AnimatePresence,
  useInView,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";

import { useEffect, useRef, useState } from "react";
import PreviousProjects from "./PreviousProjects";
import TeamSection from "./TeamSection";
import QuotesGrid from "./QuotesGrid";
import brandStrategyImg from "../../../assets/Brand-Strategy.png";
import uiImg from "../../../assets/UI.png";
import webDevImg from "../../../assets/Web Development.png";
import cyberSecurityImg from "../../../assets/CyberSecurity.png";
import eCommerceImg from "../../../assets/E-commerce.png";

const EASE = [0.22, 1, 0.36, 1];


/* ─────────────────────────────────────────────
   REVEAL
───────────────────────────────────────────── */

function Reveal({
  children,
  delay = 0,
  dir = "up",
  className = "",
  as = "div",
}) {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-10%",
  });

  const initial = {
    up: { y: 80, opacity: 0 },
    down: { y: -80, opacity: 0 },
    left: { x: -80, opacity: 0 },
    right: { x: 80, opacity: 0 },
    scale: { scale: 0.8, opacity: 0 },
  };

  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      ref={ref}
      initial={initial[dir]}
      animate={
        inView
          ? {
              x: 0,
              y: 0,
              scale: 1,
              opacity: 1,
            }
          : {}
      }
      transition={{
        duration: 1,
        delay,
        ease: EASE,
      }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

/* ─────────────────────────────────────────────
   COUNTER
───────────────────────────────────────────── */

function Counter({ to, suffix = "" }) {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
  });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;

    const duration = 1800;
    const increment = to / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= to) {
        setCount(to);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const SERVICES = [
  {
    title: "Brand Strategy",
    count: "01",
    icon: "✦",
    size: "tall", // Row 1 & 2 (Col 1)
    img: brandStrategyImg,
  },
  {
    title: "Web Development",
    count: "02",
    icon: "◉",
    size: "wide", // Row 1 (Col 2-3)
    img: webDevImg,
  },
  {
    title: "UX Design",
    count: "03",
    icon: "▣",
    size: "sq", // Row 1 (Col 4)
    img: uiImg,
  },
  {
    title: "eCommerce",
    count: "04",
    icon: "◈",
    size: "sq", // Row 2 (Col 2)
    img: eCommerceImg,
  },
  {
    title: "Mobile Apps",
    count: "05",
    icon: "📱",
    size: "wide", // New Item 1 -> Row 2 (Col 3-4)
    img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "SEO Optimization",
    count: "06",
    icon: "📈",
    size: "wide", // New Item 2 -> Row 3 (Col 1-2)
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Cyber Security",
    count: "07",
    icon: "🛡️",
    size: "wide", // New Item 3 -> Row 3 (Col 3-4)
    img: cyberSecurityImg,
  },
];

const WORK = [
  {
    title: "Porter Analytics",
    year: "2025",
    tag: "SaaS · Product",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Touché",
    year: "2025",
    tag: "Beauty · Brand",
    img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Aria Atelier",
    year: "2024",
    tag: "Fashion · Commerce",
    img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1400&auto=format&fit=crop",
  },
];

// const QUOTES = [
//   {
//     q: "RAO transformed our entire product experience.",
//     a: "Maya Iyer",
//     r: "Head of Product",
//   },
//   {
//     q: "Incredible design quality and execution.",
//     a: "Leon Hart",
//     r: "Founder",
//   },
//   {
//     q: "One of the best studios we've worked with.",
//     a: "Sara Okwu",
//     r: "CMO",
//   },
// ];

const FAQS = [
  {
    q: "How long does a project take?",
    a: "Usually between 4-12 weeks.",
  },
  {
    q: "Do you work globally?",
    a: "Yes, worldwide.",
  },
  {
    q: "What's your pricing model?",
    a: "Fixed pricing with milestones.",
  },
];

/* ─────────────────────────────────────────────
   SERVICE CARD
───────────────────────────────────────────── */

function ServiceCard({ s, i }) {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-15%",
  });

  const gridClasses = {
    wide: "md:col-span-2",
    tall: "md:row-span-2",
    sq: "",
    wide3: "md:col-span-3",
  };

  return (
    <motion.div
      ref={ref}
      initial={{ y: 100, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{
        duration: 1,
        delay: i * 0.1,
        ease: EASE,
      }}
      whileHover={{ y: -10 }}
      className={`relative overflow-hidden rounded-[24px] bg-[#151515] min-h-[280px] ${gridClasses[s.size]}`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center brightness-[0.55] transition-transform duration-700 hover:scale-110"
        style={{
          backgroundImage: `url(${s.img})`,
        }}
      />

      <div className="absolute top-6 left-6 right-6 z-10 flex items-start justify-between">
        <h3 className="text-[32px] font-light font-serif">{s.title}</h3>

        <span className="text-sm">/{s.count}</span>
      </div>

      <div className="absolute bottom-6 left-6 z-10 text-[34px] text-[#ff5a28]">
        {s.icon}
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   WORK CARD
───────────────────────────────────────────── */

function WorkRow({ w }) {
  return (
    <motion.div
      whileHover="hover"
      className="group relative w-[85vw] md:w-[42vw] h-[72vh] rounded-[32px] overflow-hidden flex-shrink-0 bg-[#111]"
    >
      {/* IMAGE */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center brightness-[0.7]"
        style={{
          backgroundImage: `url(${w.img})`,
        }}
        variants={{
          hover: {
            scale: 1.06,
          },
        }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent z-10" />

      {/* TOP */}
      <div className="absolute top-8 left-8 right-8 z-20 flex items-center justify-between text-[11px] uppercase tracking-[0.22em]">
        <span className="text-white/70">
          {w.tag}
        </span>

        <span className="text-white/40">
          {w.year}
        </span>
      </div>

      {/* TITLE */}
      <motion.h3
        variants={{
          hover: {
            x: 20,
          },
        }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute left-8 bottom-10 z-20 text-[clamp(44px,5vw,88px)] leading-[0.92] tracking-[-0.05em] font-serif font-light"
      >
        {w.title}
      </motion.h3>

      {/* ARROW */}
      <motion.div
        variants={{
          hover: {
            x: 10,
            y: -10,
          },
        }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute right-10 bottom-10 z-20 text-[#ff5a28] text-5xl"
      >
        ↗
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   FAQ
───────────────────────────────────────────── */

function FaqItem({ f }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-8 flex items-center justify-between text-left"
      >
        <span className="text-lg">{f.q}</span>

        <motion.span
          animate={{
            rotate: open ? 45 : 0,
          }}
          className="text-[#ff5a28] text-3xl"
        >
          +
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-white/70 leading-8">{f.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ───────────── CURSOR ───────────── */
function Cursor() {
  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);

  const [label, setLabel] = useState("");
  const [hovered, setHovered] = useState(false);

  const sx = useSpring(mx, {
    stiffness: 400,
    damping: 30,
  });

  const sy = useSpring(my, {
    stiffness: 400,
    damping: 30,
  });

  const tx = useSpring(mx, {
    stiffness: 90,
    damping: 20,
  });

  const ty = useSpring(my, {
    stiffness: 90,
    damping: 20,
  });

  useEffect(() => {
    const move = (e) => {
      mx.set(e.clientX);
      my.set(e.clientY);
    };

    const over = (e) => {
      const el = e.target.closest("[data-cursor]");

      if (el) {
        setHovered(true);
        setLabel(el.dataset.cursor || "");
      } else {
        setHovered(false);
        setLabel("");
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [mx, my]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-[42px] h-[42px] rounded-full border border-white/40 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2"
        style={{
          x: tx,
          y: ty,
          scale: hovered ? 2.6 : 1,
        }}
      />

      <motion.div
        className="fixed top-0 left-0 w-[14px] h-[14px] rounded-full bg-[#ff5a28] pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference flex items-center justify-center"
        style={{
          x: sx,
          y: sy,
          scale: hovered ? 0.3 : 1,
        }}
      >
        <AnimatePresence>
          {label && (
            <motion.span
              initial={{
                opacity: 0,
                y: 6,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: 6,
              }}
              className="absolute -top-8 left-5 text-[10px] uppercase tracking-[0.12em] whitespace-nowrap text-white"
            >
              {label}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
/* ─────────────────────────────────────────────
   MAIN
───────────────────────────────────────────── */

export default function ClientPage() {





  const [step, setStep] = useState(0);

  const [sent, setSent] = useState(false);

  return (
    <div className="bg-[#0a0a0a] text-[#f5f1ea] overflow-x-hidden cursor-none">
      <Cursor />
      {/* SERVICES */}

      <section className="px-[6vw] py-[120px]">
        <div className="flex flex-wrap items-end justify-between gap-10 mb-16">
          <Reveal>
            <span className="uppercase tracking-[0.2em] text-[11px] text-[#ff5a28]">
              ◍ SERVICES
            </span>
          </Reveal>

          <Reveal>
            <h2 className="text-[clamp(42px,6vw,100px)] leading-[0.95] tracking-[-0.04em] font-serif font-light">
              Everything your brand
              <br />
              <em>needs under one roof.</em>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[280px] gap-4">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.title} s={s} i={i} />
          ))}
        </div>
      </section>


      {/* PreviousProjects */}
      <PreviousProjects />

      {/* TeamSection */}
      <TeamSection />



   {/* WORK SECTION */}
 

      {/* STATS */}

      <section className="grid grid-cols-2 md:grid-cols-4 gap-10 px-[6vw] py-[120px] bg-black">
        {[
          {
            n: 120,
            s: "+",
            l: "Projects",
          },
          {
            n: 38,
            s: "",
            l: "Clients",
          },
          {
            n: 14,
            s: "",
            l: "Awards",
          },
          {
            n: 96,
            s: "%",
            l: "Retention",
          },
        ].map((s, i) => (
          <Reveal key={s.l} delay={i * 0.1} className="text-center">
            <div className="text-[clamp(54px,7vw,120px)] text-[#ff5a28] font-serif font-light">
              <Counter to={s.n} suffix={s.s} />
            </div>

            <div className="mt-3 uppercase tracking-[0.2em] text-[11px] opacity-60">
              {s.l}
            </div>
          </Reveal>
        ))}
      </section>

      {/* TESTIMONIALS */}

      <section className="px-[6vw] py-[40px]">
        <div className="flex flex-wrap items-end justify-between gap-10 mb-16">
          <Reveal>
            <span className="uppercase tracking-[0.2em] text-[11px] text-[#ff5a28]">
              ❝ TESTIMONIALS
            </span>
          </Reveal>

          <Reveal>
            <h2 className="text-[clamp(42px,6vw,100px)] leading-[0.95] tracking-[-0.04em] font-serif font-light">
              What clients
              <br />
              <em>say about us.</em>
            </h2>
          </Reveal>
        </div>



      </section>
      <QuotesGrid />

      {/* FAQ */}

      <section className="px-[6vw] py-[120px]">
        <div className="flex flex-wrap items-end justify-between gap-10 mb-16">
          <Reveal>
            <span className="uppercase tracking-[0.2em] text-[11px] text-[#ff5a28]">
              ◇ FAQ
            </span>
          </Reveal>

          <Reveal>
            <h2 className="text-[clamp(42px,6vw,100px)] leading-[0.95] tracking-[-0.04em] font-serif font-light">
              Things people
              <br />
              <em>often ask.</em>
            </h2>
          </Reveal>
        </div>

        <div className="max-w-[1000px] mx-auto">
          {FAQS.map((f, i) => (
            <FaqItem key={i} f={f} />
          ))}
        </div>
      </section>

      {/* CONTACT */}

     {/* CONTACT SECTION */}
<section className="w-full lg:w-[98%] mx-auto bg-black text-[#f3efe8] px-6 md:px-10 lg:px-14 py-10 md:py-14 overflow-hidden">
  <div className="grid grid-cols-1 xl:grid-cols-[1.15fr_1fr] gap-5 items-center">

    {/* LEFT SIDE */}
    <div className="pt-2">

      {/* LABEL */}
      <div className="flex items-center gap-3 mb-10">
        <span className="text-[#ff5a28] text-sm">
          ✦
        </span>

        <span className="uppercase tracking-[0.42em] text-[11px] text-[#ff5a28] font-medium">
          Get In Touch
        </span>
      </div>

      {/* HEADING */}
      <h1 className="font-serif font-light leading-[0.9] tracking-[-0.05em] text-[clamp(52px,7vw,120px)]">
        Have a project
        <br />

        <em className="italic font-light">
          in mind?
        </em>
      </h1>

      {/* DESCRIPTION */}
      <p className="mt-10 max-w-[540px] text-[#8d8d8d] text-[18px] md:text-[22px] leading-[1.7]">
        Tell us about it in 4 quick steps. We respond within
        48 hours with a tailored proposal — no fluff.
      </p>

      {/* INFO ROWS */}
      <div className="mt-20 border-t border-white/10 space-y-5">

        {/* EMAIL */}
        <div className="grid grid-cols-[90px_1fr] md:grid-cols-[130px_1fr]   border-b border-white/10">
          <span className="uppercase tracking-[0.35em] text-[10px] text-[#666] pt-2">
            Email
          </span>

          <a
            href="mailto:laksh@rao.studio"
            className="font-serif text-[26px] md:text-[42px] leading-none hover:text-[#ff5a28] transition-colors duration-300"
          >
            laksh@rao.studio
          </a>
        </div>

        {/* LOCATION */}
        <div className="grid grid-cols-[90px_1fr] md:grid-cols-[130px_1fr]  border-b border-white/10">
          <span className="uppercase tracking-[0.35em] text-[10px] text-[#666] pt-2">
            Based
          </span>

          <h3 className="font-serif text-[26px] md:text-[42px] leading-none">
            Jaipur, IN
          </h3>
        </div>

        {/* SOCIAL */}
        <div className="grid grid-cols-[90px_1fr] md:grid-cols-[130px_1fr]  border-b border-white/10">
          <span className="uppercase tracking-[0.35em] text-[10px] text-[#666] pt-2">
            Social
          </span>

          <a
            href="#"
            className="font-serif text-[26px] md:text-[42px] leading-none hover:text-[#ff5a28] transition-colors duration-300"
          >
            @rao.studio
          </a>
        </div>
      </div>
    </div>

    {/* RIGHT SIDE FORM */}
    <div className="relative rounded-[34px] border border-white/10 bg-[#050505] p-8 md:p-12 min-h-[760px] flex flex-col justify-between">

      {/* PROGRESS */}
      <div className="flex gap-3">
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className={`h-[10px] rounded-full transition-all duration-300 ${
              i <= step
                ? "w-[56px] bg-[#ff5a28]"
                : "w-[40px] bg-white/10"
            }`}
          />
        ))}
      </div>

      {/* FORM CONTENT */}
      <AnimatePresence mode="wait">

        {sent ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="flex-1 flex flex-col items-center justify-center text-center"
          >
            <div className="text-7xl text-[#ff5a28]">
              ✓
            </div>

            <h3 className="mt-8 text-4xl font-serif">
              Message received.
            </h3>

            <p className="mt-4 text-white/50">
              We’ll get back to you within 48 hours.
            </p>
          </motion.div>
        ) : (
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.45 }}
            className="flex-1 flex flex-col justify-center"
          >

            {/* STEP 1 */}
            {step === 0 && (
              <>
                <span className="uppercase tracking-[0.38em] text-[12px] text-[#ff5a28]">
                  01 — What's your name?
                </span>

                <div className="mt-16">
                  <input
                    type="text"
                    placeholder="Jane Doe"
                    className="w-full bg-transparent border-b border-white/10 pb-8 text-[40px] md:text-[58px] font-serif text-white placeholder:text-white/20 outline-none"
                  />
                </div>
              </>
            )}

            {/* STEP 2 */}
            {step === 1 && (
              <>
                <span className="uppercase tracking-[0.38em] text-[12px] text-[#ff5a28]">
                  02 — What's your email?
                </span>

                <div className="mt-16">
                  <input
                    type="email"
                    placeholder="hello@email.com"
                    className="w-full bg-transparent border-b border-white/10 pb-8 text-[40px] md:text-[58px] font-serif text-white placeholder:text-white/20 outline-none"
                  />
                </div>
              </>
            )}

            {/* STEP 3 */}
            {step === 2 && (
              <>
                <span className="uppercase tracking-[0.38em] text-[12px] text-[#ff5a28]">
                  03 — What's your budget?
                </span>

                <div className="mt-16 flex flex-wrap gap-4">
                  {["<10k", "10-25k", "25-50k", "50k+"].map((b) => (
                    <button
                      key={b}
                      className="px-6 py-4 rounded-full border border-white/10 text-lg hover:border-[#ff5a28] hover:text-[#ff5a28] transition-all duration-300"
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </>
            )}

            {/* STEP 4 */}
            {step === 3 && (
              <>
                <span className="uppercase tracking-[0.38em] text-[12px] text-[#ff5a28]">
                  04 — Tell us about your project
                </span>

                <div className="mt-16">
                  <textarea
                    rows={5}
                    placeholder="Tell us about your vision..."
                    className="w-full bg-transparent border-b border-white/10 pb-8 text-[28px] md:text-[42px] font-serif text-white placeholder:text-white/20 outline-none resize-none"
                  />
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* BOTTOM */}
      {!sent && (
        <div>

          {/* BUTTONS */}
          <div className="flex items-center justify-between">

            <button
              onClick={() => setStep((s) => Math.max(s - 1, 0))}
              className="h-[74px] px-10 rounded-full border border-white/10 text-white/30 text-xl hover:text-white transition"
            >
              ← Back
            </button>

            {step < 3 ? (
              <button
                onClick={() => setStep((s) => Math.min(s + 1, 3))}
                className="h-[74px] px-12 rounded-full bg-[#ff5a28] text-black text-2xl font-medium hover:scale-[1.03] transition-transform"
              >
                Next →
              </button>
            ) : (
              <button
                onClick={() => setSent(true)}
                className="h-[74px] px-12 rounded-full bg-[#ff5a28] text-black text-2xl font-medium hover:scale-[1.03] transition-transform"
              >
                Send →
              </button>
            )}
          </div>

          {/* FOOTER TEXT */}
          <div className="mt-14 text-center uppercase tracking-[0.35em] text-[10px] text-white/20">
            No commitment · NDA available · 48h response
          </div>
        </div>
      )}
    </div>
  </div>
</section>

      {/* END */}

      <section className="px-[6vw] pt-[180px] pb-20 text-center">
        <Reveal>
          <h2 className="text-[clamp(60px,10vw,180px)] leading-[0.92] font-serif font-light">
            Let's build
            <br />
            <em>something great.</em>
          </h2>
        </Reveal>

        <button className="mt-16 px-8 py-5 rounded-full bg-[#ff5a28] text-black">
          laksh@rao.studio →
        </button>

        <span className="block mt-10 opacity-40">© 2026 RAO Studio</span>
      </section>
    </div>
  );
}
