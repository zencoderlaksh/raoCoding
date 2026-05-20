import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import {
  Clock3, Video, FolderKanban, CheckCircle2, Award,
  ChevronDown, Star, Users, Zap, Trophy, BookOpen,
  TrendingUp, Code2, Flame,
} from "lucide-react";

/* ─────────────────────────── CountUp ─────────────────────────── */
const CountUp = ({ end, suffix = "" }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 20);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 20);
    return () => clearInterval(timer);
  }, [end]);
  return <span>{count}{suffix}</span>;
};

/* ─────────────────────────── StarRating ──────────────────────── */
const StarRating = ({ rating }) => (
  <div className="flex gap-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={14}
        className={i < rating ? "text-orange-400 fill-orange-400" : "text-gray-600"}
      />
    ))}
  </div>
);

/* ─────────────────────────── CurriculumItem ─────────────────── */
const CurriculumItem = ({ item, index }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-orange-500/30 transition-colors duration-300"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full p-6 flex items-center justify-between"
      >
        <div className="text-left">
          <div className="flex items-center gap-3 mb-1">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-orange-500/20 text-orange-400">
              MODULE {index + 1}
            </span>
            <span className="text-xs text-gray-500">{item.topics.length} topics</span>
          </div>
          <h3 className="text-xl font-semibold text-white">{item.title}</h3>
        </div>
        <motion.div animate={{ rotate: open ? 180 : 0 }}>
          <ChevronDown className="text-orange-500" size={28} />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        className="overflow-hidden"
      >
        <ul className="px-8 pb-8 grid grid-cols-2 gap-3">
          {item.topics.map((topic, i) => (
            <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0"></div>
              {topic}
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

/* ─────────────────────────── FAQItem ─────────────────────────── */
const FAQItem = ({ question, answer, index }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-colors duration-300"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-6 py-5 flex items-center justify-between"
      >
        <span className="text-lg font-semibold text-left">{question}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }}>
          <ChevronDown className="text-orange-500 flex-shrink-0" />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="px-6 pb-5 text-gray-400 leading-relaxed">{answer}</p>
      </motion.div>
    </motion.div>
  );
};

/* ─────────────────────── TechBadge ───────────────────────────── */
const TechBadge = ({ tech, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.06 }}
    whileHover={{ scale: 1.08, y: -4 }}
    className="relative group flex flex-col items-center justify-center gap-2 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/40 transition-all duration-300 cursor-default"
  >
    <div
      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"
      style={{ background: tech.color }}
    />
    <span className="text-3xl">{tech.icon}</span>
    <span className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">
      {tech.name}
    </span>
    <div
      className="w-8 h-0.5 rounded-full opacity-60"
      style={{ background: tech.color }}
    />
  </motion.div>
);

/* ──────────────────── JourneyTimeline (bonus section) ────────── */
const journeySteps = [
  { icon: <BookOpen size={22} />, label: "Enroll", desc: "Pick your course and get instant access" },
  { icon: <Code2 size={22} />, label: "Learn", desc: "Follow structured modules at your own pace" },
  { icon: <Flame size={22} />, label: "Build", desc: "Create real projects for your portfolio" },
  { icon: <Trophy size={22} />, label: "Certify", desc: "Earn your industry-recognised certificate" },
  { icon: <TrendingUp size={22} />, label: "Get Hired", desc: "Land your dream job or freelance gig" },
];

const JourneyTimeline = () => (
  <section className="mt-32">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="text-5xl font-bold mb-4">Your Learning Journey</h2>
      <p className="text-gray-400 mb-16 text-lg max-w-xl">
        A clear path from zero to career-ready in five focused stages.
      </p>
    </motion.div>

    <div className="relative">
      {/* connecting line */}
      <div className="absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent hidden md:block" />

      <div className="grid md:grid-cols-5 gap-6">
        {journeySteps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="flex flex-col items-center text-center group"
          >
            <div className="relative mb-6">
              <div className="w-20 h-20 rounded-full bg-white/5 border-2 border-orange-500/40 group-hover:border-orange-500 group-hover:bg-orange-500/10 transition-all duration-300 flex items-center justify-center text-orange-400 group-hover:text-orange-300">
                {step.icon}
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-orange-500 text-black text-xs font-black flex items-center justify-center">
                {i + 1}
              </div>
            </div>
            <h4 className="font-bold text-lg mb-2">{step.label}</h4>
            <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────────── MAIN COMPONENT ─────────────────────── */
const CourseDetails = ({
  image, title, description, price, originalPrice, discount,
  tags, duration, lectures, projects,
  curriculum, learnings, prerequisites, technologies,
  certificateText, certificateImage,
  teacher, feedbacks, faqs,
}) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!scrollRef.current) return;
    const locoScroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.08,
    });
    return () => locoScroll.destroy();
  }, []);

  return (
    <div
      ref={scrollRef}
      data-scroll-container
      className=" text-white overflow-hidden relative"
    >
      {/* ambient blobs */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-orange-500/15 blur-[200px] rounded-full pointer-events-none" />
      <div className="absolute right-0 top-[30%] w-[500px] h-[500px] bg-purple-600/15 blur-[200px] rounded-full pointer-events-none" />
      <div className="absolute left-1/4 bottom-1/4 w-[400px] h-[400px] bg-blue-600/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="relative z-10 px-5 md:px-16 py-16">

        {/* ── HERO ── */}
        <section className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex flex-wrap gap-3 mb-6">
              {tags.map((tag, i) => (
                <div key={i} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium">
                  {tag}
                </div>
              ))}
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">{title}</h1>
            <p className="mt-8 text-gray-400 text-lg leading-relaxed">{description}</p>
            <div className="flex items-center gap-5 mt-10 flex-wrap">
              <h2 className="text-5xl font-bold text-orange-500">₹{price}</h2>
              <span className="line-through text-2xl text-gray-500">₹{originalPrice}</span>
              <div className="px-5 py-2 rounded-xl bg-orange-500 text-black font-bold">{discount}% OFF</div>
            </div>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="mt-8 px-10 py-4 bg-orange-500 hover:bg-orange-400 text-black font-bold rounded-2xl text-lg transition-colors duration-300 flex items-center gap-3"
            >
              <Zap size={20} />
              Enroll Now
            </motion.button>
          </motion.div>
          <motion.img
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            src={image}
            alt={title}
            loading="lazy"
            className="w-full rounded-[40px] border border-white/10"
          />
        </section>

        {/* ── STATS ── */}
        <section className="grid md:grid-cols-3 gap-8 mt-10">
          {[
            { Icon: Clock3, end: parseInt(duration), suffix: "+", label: "Months Duration" },
            { Icon: Video, end: parseInt(lectures), suffix: "+", label: "Lectures" },
            { Icon: FolderKanban, end: parseInt(projects), suffix: "+", label: "Projects" },
          ].map(({ Icon, end, suffix, label }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:border-orange-500/30 transition-colors duration-300"
            >
              <Icon className="text-orange-500 mb-5" size={40} />
              <h2 className="text-5xl font-bold"><CountUp end={end} suffix={suffix} /></h2>
              <p className="mt-3 text-gray-400">{label}</p>
            </motion.div>
          ))}
        </section>

        {/* ── CURRICULUM ── */}
        <section className="mt-32">
          <h2 className="text-5xl font-bold mb-12">Course Curriculum</h2>
          <div className="space-y-5">
            {curriculum.map((item, index) => (
              <CurriculumItem key={index} item={item} index={index} />
            ))}
          </div>
        </section>

        {/* ── WHAT YOU WILL LEARN ── */}
        <section className="mt-32">
          <h2 className="text-5xl font-bold mb-12">What You Will Learn</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {learnings.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/30 transition-colors duration-300"
              >
                <CheckCircle2 className="text-orange-500 flex-shrink-0" />
                <span className="font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── TECHNOLOGIES ── */}
        <section className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-3">Technologies You'll Master</h2>
            <p className="text-gray-400 mb-10 text-lg">
              Industry-standard tools used by top engineering teams worldwide.
            </p>
          </motion.div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
            {technologies.map((tech, index) => (
              <TechBadge key={index} tech={tech} index={index} />
            ))}
          </div>
        </section>

        {/* ── JOURNEY TIMELINE (bonus section) ── */}
        <JourneyTimeline />

        {/* ── CERTIFICATE ── */}
        <section className="mt-32">
          <div className="relative overflow-hidden grid lg:grid-cols-2 gap-10 items-center bg-gradient-to-br from-white/5 to-orange-500/5 border border-white/10 rounded-[40px] p-10 lg:p-14">
            {/* decorative glow */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-orange-500/20 blur-[100px] rounded-full pointer-events-none" />
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center">
                  <Award className="text-orange-400" size={28} />
                </div>
                <div>
                  <p className="text-xs text-orange-400 font-semibold uppercase tracking-widest">Industry Recognised</p>
                  <h2 className="text-3xl font-bold">Earn Certificate</h2>
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">{certificateText}</p>
              <div className="flex flex-wrap gap-3">
                {["LinkedIn Ready", "PDF Format", "Lifetime Valid", "QR Verified"].map((badge, i) => (
                  <span key={i} className="px-4 py-1.5 rounded-full text-sm font-semibold bg-orange-500/10 border border-orange-500/30 text-orange-300">
                    ✓ {badge}
                  </span>
                ))}
              </div>
            </motion.div>
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              src={certificateImage}
              alt="certificate"
              loading="lazy"
              className="rounded-[30px] border border-white/10 shadow-2xl"
            />
          </div>
        </section>

        {/* ── INSTRUCTOR (redesigned) ── */}
        <section className="mt-32">
          <h2 className="text-5xl font-bold mb-12">Meet Your Instructor</h2>
          <div className="grid lg:grid-cols-5 gap-0 rounded-[40px] overflow-hidden border border-white/10 bg-white/5">
            {/* left: image panel */}
            <div className="lg:col-span-2 bg-gradient-to-br from-orange-500/20 to-purple-600/20 flex items-end justify-center pt-10 min-h-[420px] relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent to-black/40" />
              <img
                src={teacher.image}
                alt={teacher.name}
                loading="lazy"
                className="relative z-10 w-56 h-56 object-cover rounded-full border-4 border-orange-500/50 mb-26"
              />
            </div>
            {/* right: info panel */}
            <div className="lg:col-span-3 p-10 flex flex-col justify-center">
              <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-2">{teacher.role}</p>
              <h3 className="text-4xl font-bold mb-4">{teacher.name}</h3>
              <p className="text-gray-300 leading-relaxed mb-8">{teacher.bio}</p>

              {/* stats row */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { icon: <Users size={16} />, value: teacher.students, label: "Students" },
                  { icon: <Star size={16} />, value: teacher.rating, label: "Rating" },
                  { icon: <Clock3 size={16} />, value: teacher.experience, label: "Experience" },
                ].map((stat, i) => (
                  <div key={i} className="text-center p-4 rounded-2xl bg-white/5 border border-white/10">
                    <div className="flex items-center justify-center gap-1.5 text-orange-400 mb-1">{stat.icon}</div>
                    <p className="font-bold text-xl">{stat.value}</p>
                    <p className="text-gray-500 text-xs">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* badges */}
              <div className="flex flex-wrap gap-2">
                {teacher.badges.map((badge, i) => (
                  <span key={i} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
                    🏅 {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FEEDBACK ── */}
        <section className="mt-32 overflow-hidden">
          <h2 className="text-5xl font-bold mb-4">Feedback From Our Students</h2>
          <p className="text-gray-400 text-lg mb-14">Real stories from real learners who changed their careers.</p>

          {/* row 1 — scrolls left */}
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            className="flex gap-6 w-max mb-6"
          >
            {[...feedbacks, ...feedbacks].map((item, index) => (
              <div key={index} className="w-[360px] p-7 rounded-[28px] bg-white/5 border border-white/10 hover:border-orange-500/30 transition-colors duration-300 flex-shrink-0">
                <div className="flex items-center gap-4 mb-5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full border-2 border-orange-500/40 bg-white/10"
                  />
                  <div>
                    <h4 className="font-bold text-base">{item.name}</h4>
                    <p className="text-orange-400 text-xs">{item.role}</p>
                  </div>
                  <div className="ml-auto">
                    <StarRating rating={item.rating} />
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm">"{item.message}"</p>
              </div>
            ))}
          </motion.div>

          {/* row 2 — scrolls right */}
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
            className="flex gap-6 w-max"
          >
            {[...feedbacks.slice().reverse(), ...feedbacks.slice().reverse()].map((item, index) => (
              <div key={index} className="w-[360px] p-7 rounded-[28px] bg-white/5 border border-white/10 flex-shrink-0">
                <div className="flex items-center gap-4 mb-5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full border-2 border-purple-500/40 bg-white/10"
                  />
                  <div>
                    <h4 className="font-bold text-base">{item.name}</h4>
                    <p className="text-purple-400 text-xs">{item.role}</p>
                  </div>
                  <div className="ml-auto">
                    <StarRating rating={item.rating} />
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm">"{item.message}"</p>
              </div>
            ))}
          </motion.div>
        </section>

        {/* ── FAQ ── */}
        <section className="mt-32 mb-10 flex flex-col items-center">
          <h2 className="text-5xl font-bold mb-12">Frequently Asked Questions</h2>
          <div className="space-y-5 max-w-3xl">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default CourseDetails;