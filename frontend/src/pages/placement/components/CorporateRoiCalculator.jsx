import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Calculator,
  Clock,
  TrendingUp,
  ShieldAlert,
  Sparkles,
  Users,
  CheckCircle2,
  ArrowRight,
  Zap,
  Building,
  Laptop,
  Briefcase,
} from "lucide-react";

const TRACK_MULTIPLIERS = {
  powerbi: {
    name: "Power BI & MIS",
    hoursPerEmployee: 28,
    speedMultiplier: "4.5x",
    errorReduction: "92%",
    impactSummary: "End of month reporting jo 4 din leti thi, ab 2 ghante mein automated generate hoti hai.",
  },
  python: {
    name: "Python Automation",
    hoursPerEmployee: 35,
    speedMultiplier: "6.0x",
    errorReduction: "98%",
    impactSummary: "10,000+ multi-bank statement reconciliations ab ek click mein tally ho jaati hain.",
  },
  comm: {
    name: "Executive Communication",
    hoursPerEmployee: 18,
    speedMultiplier: "3.2x",
    errorReduction: "85%",
    impactSummary: "Crisp emails, confident boardroom presentation aur client escalations ka smooth resolution.",
  },
  datascience: {
    name: "Data Science & Risk",
    hoursPerEmployee: 24,
    speedMultiplier: "3.8x",
    errorReduction: "89%",
    impactSummary: "Customer churn prediction aur NPA credit default ka proactive early warning system.",
  },
};

const DELIVERY_MODES = [
  { id: "onsite", label: "Aapke Office / Branch Mein", icon: Building },
  { id: "virtual", label: "Live Interactive Virtual", icon: Laptop },
  { id: "sprint", label: "2-Day Weekend Sprint", icon: Zap },
];

export default function CorporateRoiCalculator() {
  const [teamSize, setTeamSize] = useState(30);
  const [activeTrack, setActiveTrack] = useState("powerbi");
  const [deliveryMode, setDeliveryMode] = useState("onsite");

  const currentStats = TRACK_MULTIPLIERS[activeTrack];
  const totalMonthlyHours = teamSize * currentStats.hoursPerEmployee;
  const annualHours = totalMonthlyHours * 12;

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="corporate-calculator"
      className="relative py-28 sm:py-36 bg-black px-4 sm:px-6 lg:px-8 border-t border-zinc-900 overflow-hidden"
    >
      {/* Background ambient radial gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4 shadow-sm">
            <Calculator className="w-3.5 h-3.5 text-orange-400" />
            <span>Real Enterprise Math</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight px-1">
            Training Pe Kharcha Nahi,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
              Business Ka Massive Profit!
            </span>
          </h2>

          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-neutral-300 font-light leading-relaxed max-w-2xl mx-auto px-2">
            Calculate karein: Agar aapki team modern skills seekh le, toh har mahine kitne ghante aur resources bachange. Slider ko drag karein aur live ROI dekhein:
          </p>
        </div>

        {/* INTERACTIVE CALCULATOR CONSOLE */}
        <div className="max-w-5xl mx-auto bg-[#090909] border border-orange-500/30 rounded-3xl p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Interactive Inputs (6 cols) */}
            <div className="lg:col-span-6 space-y-7">
              {/* 1. Team Size Slider */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-300 font-mono flex items-center gap-2">
                    <Users className="w-4 h-4 text-orange-400" />
                    <span>Aapki Team Size Kitni Hai?</span>
                  </label>
                  <span className="px-3.5 py-1 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-400 text-sm font-black font-mono">
                    {teamSize} Employees
                  </span>
                </div>

                <input
                  type="range"
                  min="5"
                  max="250"
                  step="5"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full h-2.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
                />

                <div className="flex justify-between text-[11px] text-neutral-500 font-mono mt-1.5">
                  <span>5 (Core Team)</span>
                  <span>50 (Branch)</span>
                  <span>100 (Department)</span>
                  <span>250+ (Enterprise)</span>
                </div>
              </div>

              {/* 2. Primary Program Track Selector */}
              <div>
                <label className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-300 font-mono mb-3">
                  Kaunse Skill Set Pe Focus Karna Hai?
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {Object.entries(TRACK_MULTIPLIERS).map(([key, data]) => (
                    <button
                      key={key}
                      onClick={() => setActiveTrack(key)}
                      className={`p-3 rounded-xl border text-left text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                        activeTrack === key
                          ? "bg-orange-500 text-black border-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.4)] font-bold"
                          : "bg-white/5 border-white/10 text-neutral-300 hover:border-white/20 hover:text-white"
                      }`}
                    >
                      {data.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Delivery Format Mode */}
              <div>
                <label className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-300 font-mono mb-2.5">
                  Training Delivery Preference:
                </label>
                <div className="flex flex-wrap gap-2">
                  {DELIVERY_MODES.map((mode) => {
                    const Icon = mode.icon;
                    return (
                      <button
                        key={mode.id}
                        onClick={() => setDeliveryMode(mode.id)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-medium border flex items-center gap-2 transition-all cursor-pointer ${
                          deliveryMode === mode.id
                            ? "bg-white/15 border-orange-400 text-white shadow-sm"
                            : "bg-white/5 border-white/10 text-neutral-400 hover:text-white"
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5 text-orange-400" />
                        <span>{mode.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column: Live Dynamic Impact Output (6 cols) */}
            <div className="lg:col-span-6 bg-black/60 border border-white/10 rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs uppercase font-mono tracking-widest text-orange-400 font-semibold block mb-1">
                  // Live Estimated Impact
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  Monthly Productivity Unlocked
                </h3>
              </div>

              {/* Big Metric Display */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-orange-500/15 via-amber-500/10 to-transparent border border-orange-500/30">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300 font-mono">
                    {totalMonthlyHours.toLocaleString()}+
                  </span>
                  <span className="text-lg font-bold text-white">Ghante / Mahina</span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-300 mt-1 font-light">
                  Manual spreadsheet struggle aur repetitive work se bacha kar direct productive business mein invest honge.
                </p>
                <div className="mt-3 pt-3 border-t border-white/10 text-[11px] font-mono text-orange-300">
                  ⚡ Saal bhar ka total: <span className="font-bold text-white">{annualHours.toLocaleString()}+ hours</span> saved across the organization!
                </div>
              </div>

              {/* Grid of Micro-Metrics */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[11px] uppercase font-mono text-neutral-400 block mb-0.5">
                    Turnaround Speed
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-white font-mono">
                    {currentStats.speedMultiplier}
                  </span>
                  <span className="block text-[11px] text-emerald-400 mt-0.5">Faster Reporting</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[11px] uppercase font-mono text-neutral-400 block mb-0.5">
                    Manual Errors Drop
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-white font-mono">
                    {currentStats.errorReduction}
                  </span>
                  <span className="block text-[11px] text-emerald-400 mt-0.5">Fewer Audit Glitches</span>
                </div>
              </div>

              {/* Real Executive Takeaway Box */}
              <div className="p-3.5 rounded-xl bg-orange-950/20 border border-orange-500/20 text-xs text-neutral-300 font-light leading-relaxed">
                <span className="font-bold text-orange-400 block mb-0.5">💡 Ground Reality:</span>
                "{currentStats.impactSummary}"
              </div>

              {/* Action Button */}
              <button
                onClick={() => scrollToSection("corporate-cta")}
                className="w-full py-3.5 px-6 rounded-xl bg-orange-500 hover:bg-orange-600 text-black font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(249,115,22,0.4)] cursor-pointer"
              >
                <span>Is Estimate Pe Batch Schedule Karein</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
