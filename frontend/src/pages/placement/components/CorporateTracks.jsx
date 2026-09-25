import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart3,
  Code2,
  MessageSquareQuote,
  Cpu,
  Building2,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Sliders,
  Layers,
  Zap,
  TrendingUp,
  FileSpreadsheet,
} from "lucide-react";

export const TRACKS_DATA = [
  {
    id: "power-bi",
    name: "Power BI & Executive MIS",
    hinglishTitle: "Data Toh Hai, Visual Magic Kaha Hai?",
    badge: "Excel Ke Chakravyuh Se Mukti",
    icon: BarChart3,
    color: "from-orange-500 to-amber-500",
    overview:
      "Spreadsheets ke 40 tabs mein koi executive decision nahi hota. Hum aapki team ko banate hain Power BI Masters jo real-time dynamic dashboards create karein—taki board meeting mein numbers khud bolein.",
    deliverable:
      "Interactive Branch Profitability & NPA Risk Dashboard with drill-down KPIs",
    roi: "80% Time Saved in Daily & Monthly MIS Generation",
    curriculum: [
      "DAX Formulas & Power Query: Messy banking data ko clean & automated banana",
      "Real-time Executive Dashboards: Multi-branch KPI & portfolio tracking",
      "Interactive Drill-downs: Country to branch to account level visual scrutiny",
      "Automated Scheduled Refresh: Subah 9 baje fresh data ready bina kisi manual effort ke",
    ],
    tools: ["Power BI", "DAX", "Power Query", "Excel Advanced", "SQL Data Warehousing"],
    projectType: "Live Bank Portfolio Monitoring Dashboard",
  },
  {
    id: "python-banking",
    name: "Python For Banking & Automation",
    hinglishTitle: "Ghanto Ka Kaam, 2 Clicks Mein Done!",
    badge: "Zero IT Dependency",
    icon: Code2,
    color: "from-emerald-400 to-teal-500",
    overview:
      "Daily manual bank statement reconciliations aur repetitive data processing se team ko azaadi dilao. Finance & Ops professionals bina IT engineer bane Python se apna daily kaam 10x fast kar sakte hain.",
    deliverable:
      "Automated Multi-Bank Reconciliation Engine & Anomaly Detection Script",
    roi: "10,000 Transactions Reconciled in Just 12 Seconds",
    curriculum: [
      "Python Basics for Non-Techies: Syntax aur logic bina kisi coding phobia ke",
      "Pandas & NumPy For Finance: 10 Lakh records ko 3 seconds mein filter & merge karna",
      "Automated Statement Reconciliation: Bank vs Ledger discrepancy auto-highlighting",
      "Automated Email Alerts: Anomaly ya limit breach hote hi auto notification trigger",
    ],
    tools: ["Python 3.12", "Pandas", "NumPy", "OpenPyXL", "Automated Scripting"],
    projectType: "Autonomous Ledger-Bank Reconciliation Tool",
  },
  {
    id: "communication",
    name: "Corporate Communication & Pitching",
    hinglishTitle: "Client Ko Imprez Karo, Deal Close Karo!",
    badge: "Executive Presence",
    icon: MessageSquareQuote,
    color: "from-blue-400 to-indigo-500",
    overview:
      "Knowledge kitni bhi ho, agar presentation aur client communication weak hai toh deals haath se nikal jaati hain. Hum sikhate hain boardroom storytelling, escalation management aur crisp email etiquette.",
    deliverable:
      "High-Stakes Client Proposal Framework & Boardroom Pitch Playbook",
    roi: "3.2x Higher Deal Conversion & Client Satisfaction",
    curriculum: [
      "Boardroom Storytelling: Complex financial data ko crisp, persuasive narrative mein convert karna",
      "Email & Business Writing: Shorter, sharper emails jo instant executive response draw karein",
      "Escalation & Dispute Handling: Gusse wale client ya audit objections ko peacefully handle karna",
      "Cross-Departmental Collaboration: Sales, Ops aur Risk teams ke beech seamless coordination",
    ],
    tools: ["Executive Presence", "STAR Framework", "Negotiation Playbook", "Email Etiquette"],
    projectType: "Live High-Stakes Client Presentation Defense",
  },
  {
    id: "data-science",
    name: "Data Science & Predictive BFSI",
    hinglishTitle: "Tukke Nahi, Pure Data-Backed Faisle!",
    badge: "Credit Risk & Churn Intelligence",
    icon: Cpu,
    color: "from-purple-400 to-pink-500",
    overview:
      "Banking data ka asli fayda tab hai jab aap aane wale kal ko predict kar sakein. Sikhein kaise machine learning algorithms se loan default risk pehle hi identify karein aur customer churn rokein.",
    deliverable:
      "Live Predictive Credit Risk Scoring & Customer Default Classification Model",
    roi: "Up to 34% Early Detection of Potential Default Accounts",
    curriculum: [
      "Predictive Analytics Essentials: Historical banking data se future trends spot karna",
      "Credit Scoring & Default Models: Machine learning algorithms for risk assessment",
      "Customer Churn Prediction: Kaunse high-value accounts leave kar sakte hain aur unhe kaise rokein",
      "Model Interpretability: RBI & Compliance guidelines ke mutabiq explainable AI",
    ],
    tools: ["Scikit-Learn", "Python", "Predictive Modeling", "Matplotlib", "Seaborn"],
    projectType: "Credit Card Fraud & Churn Prediction Pipeline",
  },
  {
    id: "banking-ops",
    name: "Modern Banking Operations & AML",
    hinglishTitle: "Smart Banking, Zero Audit Ka Darr!",
    badge: "Compliance & Fintech Ready",
    icon: Building2,
    color: "from-amber-400 to-orange-500",
    overview:
      "Traditional core banking se modern API-driven fintech ecosystem tak. Understand digital lending workflows, automated KYC/AML checks, UPI architecture, and statutory compliance guidelines.",
    deliverable:
      "Standard Operating Procedure (SOP) & AML Suspicious Activity Monitoring System",
    roi: "99.8% Audit Compliance & Risk Flagging Accuracy",
    curriculum: [
      "Modern Core Banking Architecture: CBS systems, payment gateways, NEFT/RTGS/UPI flow",
      "AML & Fraud Surveillance: Suspicious transaction pattern recognition & STR filing",
      "FinTech & Open Banking APIs: Neo-banking models aur account aggregator ecosystem",
      "Statutory Audit Preparedness: RBI guidelines adherence aur internal control frameworks",
    ],
    tools: ["CBS Workflows", "AML Compliance", "Fintech APIs", "Regulatory Frameworks"],
    projectType: "Branch Operational Audit & Compliance Matrix",
  },
];

export default function CorporateTracks() {
  const [selectedTrack, setSelectedTrack] = useState(TRACKS_DATA[0]);

  const handleSelectTrack = (track) => {
    setSelectedTrack(track);
  };

  const handleEnrollClick = (trackName) => {
    const el = document.getElementById("corporate-cta");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      // dispatch a custom event or let user know
      const event = new CustomEvent("select-corporate-track", {
        detail: { trackName },
      });
      window.dispatchEvent(event);
    }
  };

  return (
    <section
      id="corporate-tracks"
      className="relative py-28 sm:py-36 bg-[#040404] px-4 sm:px-6 lg:px-8 border-t border-zinc-900 overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-orange-400" />
            <span>5 Core Enterprise Superpowers</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight px-1">
            Yeh 5 Skills Jo Har Bank & Corporate Ko{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
              10x Aage Le Jaayengi.
            </span>
          </h2>

          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-neutral-300 font-light leading-relaxed max-w-2xl mx-auto px-2">
            Bas theoretical lectures nahi—real banking datasets, live dashboard simulation aur hands-on boardroom scenarios. Click karein aur track inspect karein:
          </p>
        </div>

        {/* INTERACTIVE TRACK COCKPIT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Left Column: Interactive Track Selectors (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3 sm:gap-4">
            {TRACKS_DATA.map((track) => {
              const isSelected = selectedTrack.id === track.id;
              const Icon = track.icon;

              return (
                <button
                  key={track.id}
                  onClick={() => handleSelectTrack(track)}
                  className={`text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 relative overflow-hidden group cursor-pointer ${
                    isSelected
                      ? "bg-gradient-to-r from-orange-500/15 via-[#120e0a] to-[#0a0a0a] border-orange-500/60 shadow-[0_10px_30px_rgba(249,115,22,0.15)]"
                      : "bg-[#0a0a0a] border-white/10 hover:border-white/20 hover:bg-[#0f0f0f]"
                  }`}
                >
                  {/* Active highlight vertical bar */}
                  {isSelected && (
                    <motion.div
                      layoutId="activeTrackBar"
                      className="absolute left-0 top-0 bottom-0 w-1.5 bg-orange-500 shadow-[0_0_12px_#ff5a28]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}

                  <div
                    className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all ${
                      isSelected
                        ? "bg-orange-500 text-black shadow-[0_0_15px_rgba(249,115,22,0.5)] font-bold"
                        : "bg-white/5 border border-white/10 text-neutral-400 group-hover:text-white group-hover:border-orange-500/30"
                    }`}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-orange-400 font-mono">
                        {track.badge}
                      </span>
                    </div>
                    <h3
                      className={`text-base sm:text-lg font-bold leading-snug transition-colors truncate ${
                        isSelected ? "text-white" : "text-neutral-300 group-hover:text-white"
                      }`}
                    >
                      {track.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 font-light mt-0.5 line-clamp-1 italic">
                      "{track.hinglishTitle}"
                    </p>
                  </div>

                  <div
                    className={`self-center p-1 rounded-full transition-transform ${
                      isSelected
                        ? "text-orange-400 translate-x-1"
                        : "text-neutral-600 group-hover:text-neutral-400"
                    }`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Live Interactive Track Stage (7 cols) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTrack.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="p-6 sm:p-8 rounded-3xl border border-orange-500/30 bg-[#090909] backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.7)] relative overflow-hidden"
              >
                {/* Subtle top ambient bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${selectedTrack.color}`}
                />

                {/* Header of Stage */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs uppercase tracking-widest text-orange-400 font-semibold font-mono">
                        Track Blueprint
                      </span>
                      <span className="text-white/20">•</span>
                      <span className="text-xs text-neutral-400">{selectedTrack.badge}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white">
                      {selectedTrack.name}
                    </h3>
                    <p className="text-sm sm:text-base text-orange-400 font-medium mt-1 italic">
                      "{selectedTrack.hinglishTitle}"
                    </p>
                  </div>

                  {/* Measurable ROI Badge */}
                  <div className="px-4 py-2.5 rounded-2xl bg-orange-500/10 border border-orange-500/30 flex items-center gap-2 self-start sm:self-center shadow-sm">
                    <TrendingUp className="w-4 h-4 text-orange-400 flex-shrink-0" />
                    <div>
                      <span className="block text-[10px] uppercase font-mono text-orange-300 font-semibold">
                        Measurable Impact
                      </span>
                      <span className="text-xs font-bold text-white leading-none">
                        {selectedTrack.roi}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Track Overview */}
                <p className="mt-6 text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                  {selectedTrack.overview}
                </p>

                {/* Deliverable Box */}
                <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center flex-shrink-0 text-orange-400 mt-0.5">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-orange-400 font-mono">
                      What Your Team Builds & Deploys
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-white mt-0.5">
                      {selectedTrack.deliverable}
                    </h4>
                  </div>
                </div>

                {/* Core Curriculum: Kya Seekhegi Team */}
                <div className="mt-6">
                  <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-400 font-mono mb-3 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-orange-400" />
                    <span>Syllabus Highlights (Pure Hands-on Execution)</span>
                  </h4>
                  <div className="space-y-2.5">
                    {selectedTrack.curriculum.map((point, pIdx) => (
                      <div
                        key={pIdx}
                        className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300 font-light p-2.5 rounded-xl bg-black/40 border border-white/5 hover:border-white/10 transition-colors"
                      >
                        <CheckCircle2 className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools Grid */}
                <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="block text-[11px] uppercase font-mono text-neutral-400 mb-2 font-semibold">
                      Tools & Stack Mastered:
                    </span>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {selectedTrack.tools.map((tool, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-neutral-300 font-mono"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => handleEnrollClick(selectedTrack.name)}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-black font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(249,115,22,0.4)] cursor-pointer"
                  >
                    <span>Is Track Ka Custom Plan Maango</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
