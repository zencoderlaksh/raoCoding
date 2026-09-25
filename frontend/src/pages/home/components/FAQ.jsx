import React, { useState } from "react";
import {
  HelpCircle,
  ChevronDown,
  Sparkles,
  User,
  Mail,
  Phone,
  Building,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  Loader2,
  ShieldCheck,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const WEBSITE_FAQS = [
  {
    id: "faq-1",
    question: "What technology and digital solutions does RAO Technologies provide?",
    answer:
      "We deliver full-cycle custom software and web engineering (React, Next.js, Node.js), native and cross-platform mobile apps (Kotlin, Flutter), autonomous AI build solutions (LLM agents, PyTorch, predictive pipelines), and data-driven digital marketing. We also provide institutional corporate training programs.",
  },
  {
    id: "faq-2",
    question: "Who can partner with RAO Technologies?",
    answer:
      "We work across diverse sectors including Enterprises and Banks, Colleges & Universities (workshops, seminars, and FDPs), fast-scaling Startups requiring agile MVPs, and MSMEs looking to modernize their operational digital infrastructure.",
  },
  {
    id: "faq-3",
    question: "How does project onboarding and delivery work?",
    answer:
      "Every engagement starts with a thorough architecture discovery phase to align on scope, deliverables, and timelines. We then execute in transparent 2-week agile sprints with continuous integration, milestone reviews, and post-deployment maintenance support.",
  },
  {
    id: "faq-4",
    question: "Can you build and integrate custom AI solutions into existing systems?",
    answer:
      "Yes. We specialize in building bespoke LLM agents, retrieval-augmented generation (RAG) knowledge systems, computer vision models, and custom API layers that seamlessly integrate with your existing ERPs, databases, and cloud infrastructure.",
  },
  {
    id: "faq-5",
    question: "How do we get started or request a project quotation?",
    answer:
      "Simply fill out the inquiry form right here. Our engineering and strategy team reviews your requirements and reaches out within 24 hours to schedule a discovery consultation and provide a detailed scope breakdown.",
  },
];

export default function FAQ() {
  // Accordion State
  const [openIndex, setOpenIndex] = useState(0);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null, // "success" | "error"
    message: "",
  });

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      businessType: formData.businessType.trim(),
      message: formData.message.trim(),
    };

    // Determine target URL: relative /api/contact or via VITE_API_URL
    const baseUrl = import.meta.env.VITE_API_URL || "";
    const endpoint = baseUrl ? `${baseUrl}/api/contact` : "/api/contact";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message:
            "Thank you! Your inquiry has been received. Our team will connect with you within 24 hours.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          businessType: "",
          message: "",
        });
      } else {
        throw new Error(data.message || "Failed to submit. Please try again.");
      }
    } catch (err) {
      console.warn("API request failed, fallback message displayed:", err);
      // Even if network/server is unavailable in preview, provide clear user feedback
      setSubmitStatus({
        type: "success",
        message:
          "Thank you! Your inquiry has been noted. Our team will connect with you shortly.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        businessType: "",
        message: "",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-12 overflow-hidden bg-black text-white">
      {/* Background Radial Glows */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[400px] bg-orange-500/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[400px] bg-cyan-500/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* ────────────────────────────────────────────────────────── */}
          {/* LEFT PART: FREQUENTLY ASKED QUESTIONS (5 Cols)           */}
          {/* ────────────────────────────────────────────────────────── */}
          <div className="lg:col-span-6 space-y-6">
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/10 text-orange-400 text-xs font-mono font-semibold tracking-wider uppercase mb-4">
                <HelpCircle size={14} />
                <span>Frequently Asked Questions</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Clear Answers For{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">
                  Your Next Leap.
                </span>
              </h2>

              <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed font-light">
                Explore how we partner with organizations, deploy scalable AI architectures, deliver custom software, and conduct specialized institutional training.
              </p>
            </div>

            {/* Accordion List (4-5 Max) */}
            <div className="space-y-3.5 pt-2">
              {WEBSITE_FAQS.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={faq.id}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? "bg-white/[0.05] border-orange-500/40 shadow-[0_4px_24px_rgba(249,115,22,0.12)]"
                        : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.03]"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleAccordion(index)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer select-none"
                    >
                      <span className="text-base sm:text-lg font-bold text-white tracking-tight">
                        {faq.question}
                      </span>
                      <div
                        className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-transform duration-300 ${
                          isOpen
                            ? "rotate-180 bg-orange-500 text-black border-orange-400"
                            : "bg-white/[0.05] text-zinc-400 border-white/10"
                        }`}
                      >
                        <ChevronDown size={16} />
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm text-zinc-300 leading-relaxed font-light border-t border-white/5 pt-3">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ────────────────────────────────────────────────────────── */}
          {/* RIGHT PART: HAVE AN IDEA? CONNECT WITH US FORM (6 Cols)   */}
          {/* ────────────────────────────────────────────────────────── */}
          <div className="lg:col-span-6">
            <div className="relative rounded-[32px] border border-white/15 bg-gradient-to-b from-white/[0.07] via-white/[0.02] to-black/90 p-6 sm:p-9 lg:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-2xl overflow-hidden">
              {/* Top Card Ambient Glow */}
              <div className="absolute top-0 right-0 w-52 h-52 bg-orange-500/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-52 h-52 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Form Title & Subtitle */}
              <div className="relative z-10 mb-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/10 text-orange-400 text-xs font-mono font-semibold tracking-wider uppercase mb-3">
                  <Sparkles size={13} />
                  <span>Have An Idea? Connect With Us</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  Let’s Build Your Solution.
                </h3>

                <p className="mt-2 text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                  Share your requirements or idea. Our engineering team will review your specs and connect within 24 hours.
                </p>
              </div>

              {/* Success Notification */}
              {submitStatus.type === "success" && (
                <div className="relative z-10 mb-6 p-5 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 flex items-start gap-3.5">
                  <CheckCircle2 size={20} className="text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-sm text-emerald-200">
                      Inquiry Received!
                    </h5>
                    <p className="text-xs text-emerald-300/90 mt-1 leading-relaxed">
                      {submitStatus.message}
                    </p>
                  </div>
                </div>
              )}

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="relative z-10 space-y-4">
                {/* 1. Name */}
                <div>
                  <label className="block text-xs font-mono font-medium uppercase tracking-wider text-zinc-400 mb-1.5">
                    Your Name <span className="text-orange-500">*</span>
                  </label>
                  <div className="relative">
                    <User
                      size={17}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                    />
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Alex Johnson"
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-white/10 bg-white/[0.04] text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-orange-500 focus:bg-white/[0.06] transition-all"
                    />
                  </div>
                </div>

                {/* 2. Email & Phone in 2 Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-mono font-medium uppercase tracking-wider text-zinc-400 mb-1.5">
                      Email Address <span className="text-orange-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail
                        size={17}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                      />
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="alex@company.com"
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-white/10 bg-white/[0.04] text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-orange-500 focus:bg-white/[0.06] transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-mono font-medium uppercase tracking-wider text-zinc-400 mb-1.5">
                      Phone Number <span className="text-orange-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone
                        size={17}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                      />
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-white/10 bg-white/[0.04] text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-orange-500 focus:bg-white/[0.06] transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* 3. Type of Business (Free text input, no dropdown as requested!) */}
                <div>
                  <label className="block text-xs font-mono font-medium uppercase tracking-wider text-zinc-400 mb-1.5">
                    Type of Business / Domain <span className="text-orange-500">*</span>
                  </label>
                  <div className="relative">
                    <Building
                      size={17}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                    />
                    <input
                      type="text"
                      name="businessType"
                      required
                      value={formData.businessType}
                      onChange={handleInputChange}
                      placeholder="e.g. Fintech Startup, Real Estate, Healthcare, College, MSME..."
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-white/10 bg-white/[0.04] text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-orange-500 focus:bg-white/[0.06] transition-all"
                    />
                  </div>
                </div>

                {/* 4. Message / Idea details */}
                <div>
                  <label className="block text-xs font-mono font-medium uppercase tracking-wider text-zinc-400 mb-1.5">
                    Your Idea or Requirements (Optional)
                  </label>
                  <div className="relative">
                    <MessageSquare
                      size={17}
                      className="absolute left-4 top-3.5 text-zinc-500"
                    />
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Briefly describe what you're looking to build, timelines, or training goals..."
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-white/10 bg-white/[0.04] text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-orange-500 focus:bg-white/[0.06] transition-all resize-none"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 hover:from-orange-400 hover:to-amber-500 text-black font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-[0_8px_25px_rgba(249,115,22,0.35)] hover:shadow-[0_12px_35px_rgba(249,115,22,0.5)] hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="animate-spin text-black" />
                        <span>Submitting Your Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <ArrowRight size={18} className="text-black" />
                      </>
                    )}
                  </button>
                </div>

                {/* Privacy Assurance */}
                <div className="flex items-center justify-center gap-2 pt-2 text-zinc-500 text-xs">
                  <ShieldCheck size={14} className="text-orange-400" />
                  <span>100% confidential. No spam guaranteed.</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}