import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Send,
  MessageCircle,
  Sparkles,
  CheckCircle2,
  Building,
  Phone,
  Mail,
  User,
  ShieldCheck,
  Award,
  Clock,
  Briefcase,
  AlertCircle,
} from "lucide-react";

const REQUIREMENT_OPTIONS = [
  "Customized Syllabus Chahiye",
  "Bulk Corporate Quotation",
  "1-Day Demo / Pilot Workshop",
  "On-Premise Trainer Chahiye",
  "Weekend Executive Sprint",
];

const TRUST_PILLARS = [
  {
    icon: Building,
    title: "BFSI & Banking Aligned",
    desc: "Real financial data sets, live reconciliations aur compliance standards.",
  },
  {
    icon: Clock,
    title: "Flexible Batch Schedules",
    desc: "Post-banking hours ya weekend sprints—operational work interrupt nahi hoga.",
  },
  {
    icon: Award,
    title: "Verified Certifications",
    desc: "Har participating employee ko industry recognized competency credential.",
  },
  {
    icon: ShieldCheck,
    title: "30-Day Post-Training Support",
    desc: "Training ke baad live office doubts solve karne ke liye dedicated mentor access.",
  },
];

export default function CorporateCTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    teamSize: "20-50",
    requirement: "Customized Syllabus Chahiye",
    notes: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  // Listen for custom track selection event from Section 2
  useEffect(() => {
    const handleTrackSelect = (e) => {
      if (e.detail?.trackName) {
        setFormData((prev) => ({
          ...prev,
          notes: `Interested in Track: ${e.detail.trackName}`,
        }));
      }
    };

    window.addEventListener("select-corporate-track", handleTrackSelect);
    return () => window.removeEventListener("select-corporate-track", handleTrackSelect);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const baseUrl = import.meta.env.VITE_API_URL || "";
      const endpoint = baseUrl ? `${baseUrl}/api/contact` : "/api/contact";

      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        businessType: `Corporate Training (${formData.company} - ${formData.teamSize} employees)`,
        message: `Requirement: ${formData.requirement}. Company: ${formData.company}. Team Size: ${formData.teamSize}. Notes: ${formData.notes}`,
      };

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          type: "success",
          message: "Badhai ho! Aapki inquiry receive ho gayi hai. Humari enterprise team 2 ghante ke andar aapse connect karegi.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          teamSize: "20-50",
          requirement: "Customized Syllabus Chahiye",
          notes: "",
        });
      } else {
        setStatus({
          type: "error",
          message: data.message || "Kuch dikkat aayi. Kripya direct WhatsApp par message karein.",
        });
      }
    } catch (err) {
      console.error(err);
      setStatus({
        type: "error",
        message: "Server se connect nahi ho paya. Kripya WhatsApp par contact karein.",
      });
    } finally {
      setLoading(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello RAO Team! Humari company/bank ke liye Corporate Training program explore karna hai (Power BI / Python / Communication / Banking Ops). Please share details.`
  );

  return (
    <section
      id="corporate-cta"
      className="relative py-28 sm:py-36 bg-[#040404] px-4 sm:px-6 lg:px-8 border-t border-zinc-900 overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-orange-400" />
            <span>Zero Sales Pressure • 100% Value</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight px-1">
            Chalo, Ek Cup Chai Pe <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
              Team Ka Upskilling Roadmap Final Karein?
            </span>
          </h2>

          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-neutral-300 font-light leading-relaxed max-w-2xl mx-auto px-2">
            Chahe 10 logo ka Power BI batch ho ya 100+ bankers ka full-scale transformation. We customize everything around your operational schedule.
          </p>
        </div>

        {/* MAIN INTERACTIVE CONNECT CARD */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#090909] border border-orange-500/30 rounded-3xl p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-xl">
            <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
              Free Training Blueprint & Quotation Maango
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 font-light mb-6">
              Aapki requirements batayein—hum customized curriculum aur tentative budget 2 hours mein share karenge.
            </p>

            {/* Interactive Requirement Pills */}
            <div className="mb-6">
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 font-mono mb-2.5">
                Aapka Primary Goal:
              </label>
              <div className="flex flex-wrap gap-2">
                {REQUIREMENT_OPTIONS.map((opt, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setFormData({ ...formData, requirement: opt })}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all cursor-pointer ${
                      formData.requirement === opt
                        ? "bg-orange-500 text-black border-orange-400 font-bold shadow-sm"
                        : "bg-white/5 border-white/10 text-neutral-300 hover:border-white/20"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-400 mb-1">
                    Aapka Naam *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white text-sm focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-400 mb-1">
                    Official Email *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="rahul@bankname.com"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white text-sm focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-400 mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white text-sm focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-400 mb-1">
                    Bank / Organization Name *
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. HDFC Bank / FinTech Corp"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white text-sm focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-neutral-400 mb-1">
                  Team Size (Approx)
                </label>
                <select
                  name="teamSize"
                  value={formData.teamSize}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white text-sm focus:outline-none focus:border-orange-500 transition-colors"
                >
                  <option value="5-15">5-15 Employees (Pilot Batch)</option>
                  <option value="15-30">15-30 Employees (Branch / Team)</option>
                  <option value="30-75">30-75 Employees (Department Level)</option>
                  <option value="75-200+">75-200+ Employees (Enterprise Scale)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-neutral-400 mb-1">
                  Specific Requirement Ya Query (Optional)
                </label>
                <textarea
                  name="notes"
                  rows="3"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="e.g. We need Power BI and Python for our operations team of 25 people..."
                  className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white text-sm focus:outline-none focus:border-orange-500 transition-colors resize-none"
                />
              </div>

              {/* Status Message */}
              {status.message && (
                <div
                  className={`p-3.5 rounded-xl text-xs sm:text-sm flex items-start gap-2.5 ${
                    status.type === "success"
                      ? "bg-emerald-950/40 text-emerald-300 border border-emerald-500/40"
                      : "bg-red-950/40 text-red-300 border border-red-500/40"
                  }`}
                >
                  {status.type === "success" ? (
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  )}
                  <span>{status.message}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 px-6 rounded-xl bg-orange-500 hover:bg-orange-600 text-black font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(249,115,22,0.4)] cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <span>Submitting Blueprint Request...</span>
                ) : (
                  <>
                    <span>Submit & Get Custom Training Blueprint</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Column: Direct WhatsApp + Trust Pillars (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick WhatsApp Action Box */}
            <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-emerald-950/30 via-[#0a0a0a] to-[#090909] border border-emerald-500/30 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 shadow-sm">
                <MessageCircle className="w-6 h-6" />
              </div>
              <span className="text-[11px] uppercase font-mono tracking-widest text-emerald-400 font-bold block mb-1">
                // Fast-Track Discussion
              </span>
              <h4 className="text-xl font-bold text-white mb-2">
                Seedha WhatsApp Pe Baat Karein?
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 font-light mb-5 leading-relaxed">
                Form bharne ka time nahi hai? Direct humare corporate training lead se chat karein aur 10 minutes mein syllabus PDF paayein.
              </p>
              <a
                href={`https://wa.me/917906803735?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-black font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.4)] cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Instant WhatsApp Connect</span>
              </a>
            </div>

            {/* 4 Trust Pillars */}
            <div className="p-6 rounded-3xl bg-[#090909] border border-white/10 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 font-mono mb-2">
                Why Banks & Corporates Trust RAO:
              </h4>
              {TRUST_PILLARS.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0 text-orange-400 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="text-xs sm:text-sm font-bold text-white">
                        {pillar.title}
                      </h5>
                      <p className="text-[11px] sm:text-xs text-neutral-400 font-light mt-0.5">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
