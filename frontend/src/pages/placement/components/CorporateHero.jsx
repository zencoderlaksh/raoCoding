import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Clock,
  CheckCircle2,
  XCircle,
  Zap,
  BarChart3,
  ShieldCheck,
  Award,
} from "lucide-react";
import Button from "../../../components/Button";

const INSTITUTIONS = [
  { label: "Commercial Banks", icon: Building2 },
  { label: "NBFCs & Microfinance", icon: TrendingUp },
  { label: "Corporate MNCs & FinTechs", icon: Zap },
  { label: "Audit, Risk & Treasury", icon: ShieldCheck },
];

const BEFORE_PAIN = [
  {
    title: "Excel Crash = Weekend Barbad",
    desc: "40-tab spreadsheets aur manual VLOOKUP errors. Ek formula hila aur 4 ghante ki mehnat gayab.",
  },
  {
    title: "Monotonous Client Presentations",
    desc: "Boardroom ya client meeting mein hesitation, lambi boring slides aur weak storytelling.",
  },
  {
    title: "10,000 Transactions Ka Manual Check",
    desc: "End-of-day bank reconciliation mein raat ke 11 bajj jaate hain aur tally phir bhi nahi milta.",
  },
  {
    title: "'Python & AI Humare Bas Ki Baat Nahi'",
    desc: "Team choti choti data queries ke liye IT developers aur data team ki approval ka wait karti hai.",
  },
];

const AFTER_GAIN = [
  {
    title: "1-Click Automated Power BI Visuals",
    desc: "Real-time interactive CXO dashboards jo branch performance aur NPAs live display karein.",
  },
  {
    title: "Crisp Executive Presence & Pitching",
    desc: "High-impact storytelling, professional email communication aur instant client trust building.",
  },
  {
    title: "Python Script: 12 Seconds Mein Reconcile",
    desc: "Automated statement parsing & anomaly detection. Jo kaam 6 ghante leta tha, ab instant done.",
  },
  {
    title: "Data-Driven Bankers & Operations Ninjas",
    desc: "Finance & operations team khud predictive models aur automated workflows deploy karti hai.",
  },
];

export default function CorporateHero() {
  const [realityMode, setRealityMode] = useState("after"); // 'before' | 'after'

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 bg-black px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Dynamic ambient radial glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-orange-500/15 via-amber-500/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Top Hinglish Badge */}
        <div className="flex justify-center mb-6">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-[0_0_20px_rgba(249,115,22,0.15)]"
          >
            <Building2 className="w-4 h-4 text-orange-400" />
            <span>Dedicated For Banks, NBFCs & Corporates</span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span className="hidden sm:inline text-amber-300">0% Boring PPTs, 100% Real ROI</span>
          </motion.div>
        </div>

        {/* Catchy Main Headline */}
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.08]"
          >
            Purane Excel Se Thak Gaye? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
              Apni Team Ko Banao 10x Smarter.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base sm:text-xl text-neutral-300 font-light leading-relaxed max-w-3xl mx-auto px-2"
          >
            Banks, FinTechs aur Enterprises ke liye tailor-made programs. Power BI dashboards, Python automation, Executive Communication aur Modern Banking Ops—hum sikhate hain wahi, jo team ke daily kaam mein visible ROI laaye!
          </motion.p>

          {/* Institution Pills */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3"
          >
            {INSTITUTIONS.map((inst, idx) => {
              const Icon = inst.icon;
              return (
                <div
                  key={idx}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-neutral-300 hover:border-orange-500/40 hover:text-white transition-all cursor-default"
                >
                  <Icon className="w-3.5 h-3.5 text-orange-400" />
                  <span>{inst.label}</span>
                </div>
              );
            })}
          </motion.div>

          {/* Action CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <div onClick={() => scrollToSection("corporate-cta")}>
              <Button text="Team Ka Custom Plan Banao" showIcon={true} />
            </div>
            <button
              onClick={() => scrollToSection("corporate-tracks")}
              className="px-6 py-3 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 hover:border-orange-500/50 text-white font-medium text-sm sm:text-base transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>5 Power Tracks Dekhein</span>
              <ArrowRight className="w-4 h-4 text-orange-400" />
            </button>
          </motion.div>
        </div>

        {/* INTERACTIVE REALITY CHECK WIDGET: Before vs After RAO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 sm:mt-24 max-w-5xl mx-auto"
        >
          {/* Switcher Header */}
          <div className="p-6 sm:p-8 rounded-3xl border border-white/10 bg-[#0a0a0a]/90 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative overflow-hidden">
            {/* Top Switcher Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <span className="text-xs uppercase tracking-widest text-orange-400 font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Reality Check Simulator
                </span>
                <h3 className="text-lg sm:text-2xl font-bold text-white mt-1">
                  Roz Ka Office Struggle vs RAO Supercharged Team
                </h3>
              </div>

              {/* Interactive Toggle Pill */}
              <div className="flex items-center p-1.5 rounded-full bg-white/5 border border-white/10">
                <button
                  onClick={() => setRealityMode("before")}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                    realityMode === "before"
                      ? "bg-red-500/20 text-red-300 border border-red-500/40 shadow-sm"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  <XCircle className="w-4 h-4 text-red-400" />
                  <span>Purana Tarika (Before)</span>
                </button>
                <button
                  onClick={() => setRealityMode("after")}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                    realityMode === "after"
                      ? "bg-orange-500 text-black shadow-[0_0_20px_rgba(249,115,22,0.5)] font-bold"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  <Zap className="w-4 h-4 text-black" />
                  <span>RAO Mode (After)</span>
                </button>
              </div>
            </div>

            {/* Toggleable Content Grid */}
            <div className="mt-8">
              <AnimatePresence mode="wait">
                {realityMode === "before" ? (
                  <motion.div
                    key="before"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.35 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
                  >
                    {BEFORE_PAIN.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-5 sm:p-6 rounded-2xl bg-red-950/20 border border-red-900/30 flex items-start gap-4 transition-all"
                      >
                        <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center flex-shrink-0 text-red-400">
                          <XCircle className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-base sm:text-lg font-bold text-red-200">
                            {item.title}
                          </h4>
                          <p className="mt-1.5 text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    key="after"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.35 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
                  >
                    {AFTER_GAIN.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-5 sm:p-6 rounded-2xl bg-orange-950/20 border border-orange-500/30 flex items-start gap-4 transition-all hover:border-orange-500/50"
                      >
                        <div className="w-10 h-10 rounded-xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center flex-shrink-0 text-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.3)]">
                          <CheckCircle2 className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                            <span>{item.title}</span>
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 font-mono">
                              10x SPEED
                            </span>
                          </h4>
                          <p className="mt-1.5 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Quick Proof Ribbon */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-neutral-400 font-light">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-neutral-300 font-medium">98% Corporate Attendance Record</span>
                <span>(Kyuki sessions actually interesting hote hain)</span>
              </div>
              <div className="flex items-center gap-4 text-orange-400 font-medium">
                <span>⏱️ Average 65% Time Saved in Daily MIS</span>
                <span>•</span>
                <span>🏆 Custom Certificate for Every Employee</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
