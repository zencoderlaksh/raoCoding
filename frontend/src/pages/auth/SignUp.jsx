import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Lock,
  Eye,
  EyeOff,
  Briefcase,
  GraduationCap,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { FaGoogle, FaWhatsapp } from "react-icons/fa";
import { SignUp as ClerkSignUp, useUser, useClerk } from "@clerk/clerk-react";
import toast from "react-hot-toast";
import { logo } from "@/assets/images";
import { useAuth } from "@/context/AuthContext";
import CitySelect from "@/components/CitySelect";

const REQUIREMENT_OPTIONS = [
  {
    id: "project",
    label: "Client Project",
    tagline: "Software, Mobile App, AI Architecture",
    icon: Briefcase,
    color: "#f97316",
    badge: "Enterprise",
  },
  {
    id: "course",
    label: "Tech Course",
    tagline: "Full-Stack, MERN, AI, DevOps Bootcamps",
    icon: GraduationCap,
    color: "#eab308",
    badge: "Learning",
  },
  {
    id: "counselling",
    label: "Counselling",
    tagline: "1-on-1 Career Mentorship & Tech Advice",
    icon: MessageSquare,
    color: "#10b981",
    badge: "Mentorship",
  },
];

export default function SignUp() {
  const navigate = useNavigate();
  const { loginNormal } = useAuth();
  const [authMethod, setAuthMethod] = useState("normal"); // "normal" | "clerk"

  // Form State
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phoneNo: "",
    city: "",
    requirementType: "course",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // MANDATORY PHONE NUMBER
    if (!formData.phoneNo.trim()) {
      newErrors.phoneNo = "Phone number is mandatory";
    } else {
      const cleanPhone = formData.phoneNo.replace(/\D/g, "");
      if (cleanPhone.length < 10) {
        newErrors.phoneNo = "Phone number must be at least 10 digits";
      }
    }

    // MANDATORY CITY
    if (!formData.city.trim()) {
      newErrors.city = "City is mandatory";
    }

    // MANDATORY REQUIREMENT TYPE
    if (!formData.requirementType) {
      newErrors.requirementType = "Please select your requirement type";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNormalSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fill in all mandatory fields correctly.");
      return;
    }

    setLoading(true);

    try {
      const payload = {
        username: formData.username,
        email: formData.email,
        phoneNo: formData.phoneNo,
        city: formData.city,
        requirementType: formData.requirementType,
        password: formData.password,
      };

      let response = await fetch("/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      // Cold-start auto-retry: Render free-tier wake up retry
      let retries = 0;
      while (response.status === 503 && retries < 2) {
        retries++;
        toast.loading(`Connecting to server (${retries}/2)...`, { id: "server-wake" });
        await new Promise((r) => setTimeout(r, 3500));
        response = await fetch("/api/users/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }
      toast.dismiss("server-wake");

      const data = await response.json();

      if (response.ok && data.success) {
        toast.success(`Welcome to RAO Technologies, ${data.data.username}!`);
        loginNormal(data.data, data.data.token);
        navigate("/");
      } else {
        toast.error(data.message || "Failed to create account.");
      }
    } catch (err) {
      console.error("Registration error:", err);
      toast.error("Connection error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white px-4 py-16 sm:px-6 lg:px-8 selection:bg-orange-500 selection:text-black">
      {/* Background Ambient Lights */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-orange-600/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[170px] pointer-events-none" />

      {/* Main Card Container */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-xl rounded-[32px] bg-zinc-950/90 border border-zinc-800/80 shadow-2xl p-6 sm:p-10 backdrop-blur-2xl"
      >
        {/* Brand Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-block mb-4 group">
            <img
              src={logo}
              alt="RAO Technologies"
              className="h-10 sm:h-12 w-auto mx-auto object-contain drop-shadow-[0_2px_12px_rgba(255,90,40,0.35)] group-hover:scale-105 transition-transform"
            />
          </Link>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 text-xs font-mono mb-2">
            <Sparkles size={13} />
            <span>CREATE YOUR ACCOUNT</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
            Join <em className="font-serif italic text-orange-400">RAO Technologies</em>
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-zinc-400 font-light">
            Empowering tech careers, software architectures & digital solutions.
          </p>
        </div>

        {/* Dual Auth Switcher Tabs */}
        <div className="grid grid-cols-2 p-1 rounded-2xl bg-zinc-900 border border-zinc-800 mb-8">
          <button
            type="button"
            onClick={() => setAuthMethod("normal")}
            className={`py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer flex items-center justify-center gap-2 ${
              authMethod === "normal"
                ? "bg-orange-500 text-black font-semibold shadow-lg shadow-orange-500/25"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <span>Standard Sign Up</span>
          </button>

          <button
            type="button"
            onClick={() => setAuthMethod("clerk")}
            className={`py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer flex items-center justify-center gap-2 ${
              authMethod === "clerk"
                ? "bg-white text-black font-semibold shadow-lg"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <FaGoogle size={13} />
            <span>Clerk / Google</span>
          </button>
        </div>

        {/* ── METHOD 1: NORMAL REGISTRATION ── */}
        {authMethod === "normal" ? (
          <form onSubmit={handleNormalSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                Full Name <span className="text-orange-400">*</span>
              </label>
              <div className="relative">
                <User size={16} className="absolute left-3.5 top-3.5 text-zinc-500" />
                <input
                  type="text"
                  placeholder="e.g. Laksh Rao"
                  value={formData.username}
                  onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                  }
                  className={`w-full rounded-xl bg-zinc-900/90 border ${
                    errors.username ? "border-red-500" : "border-zinc-800"
                  } pl-10 pr-4 py-3 text-sm text-white placeholder-zinc-500 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all`}
                />
              </div>
              {errors.username && (
                <p className="mt-1 text-xs text-red-400">{errors.username}</p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                Email Address <span className="text-orange-400">*</span>
              </label>
              <div className="relative">
                <Mail size={16} className="absolute left-3.5 top-3.5 text-zinc-500" />
                <input
                  type="email"
                  placeholder="laksh@company.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={`w-full rounded-xl bg-zinc-900/90 border ${
                    errors.email ? "border-red-500" : "border-zinc-800"
                  } pl-10 pr-4 py-3 text-sm text-white placeholder-zinc-500 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all`}
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-xs text-red-400">{errors.email}</p>
              )}
            </div>

            {/* Phone Number (MANDATORY) & City (MANDATORY) in 2 Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Phone Number */}
              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                  Phone Number <span className="text-orange-400 font-bold">*</span>{" "}
                  <span className="text-[10px] text-zinc-500">(Mandatory)</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-3.5 text-xs font-mono text-orange-400 font-semibold">
                    +91
                  </span>
                  <input
                    type="tel"
                    placeholder="Enter 10-digit mobile number"
                    value={formData.phoneNo}
                    onChange={(e) =>
                      setFormData({ ...formData, phoneNo: e.target.value })
                    }
                    required
                    className={`w-full rounded-xl bg-zinc-900/90 border ${
                      errors.phoneNo ? "border-red-500" : "border-zinc-800"
                    } pl-12 pr-4 py-3 text-sm text-white placeholder-zinc-500 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all`}
                  />
                </div>
                {errors.phoneNo && (
                  <p className="mt-1 text-xs text-red-400">{errors.phoneNo}</p>
                )}
              </div>

              {/* City */}
              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                  City <span className="text-orange-400 font-bold">*</span>{" "}
                  <span className="text-[10px] text-zinc-500">(Mandatory)</span>
                </label>
                <CitySelect
                  value={formData.city}
                  onChange={(val) => {
                    setFormData({ ...formData, city: val });
                    if (errors.city) {
                      setErrors((prev) => ({ ...prev, city: "" }));
                    }
                  }}
                  error={errors.city}
                  placeholder="Select city from dropdown..."
                />
                {errors.city && (
                  <p className="mt-1 text-xs text-red-400">{errors.city}</p>
                )}
              </div>
            </div>

            {/* REQUIREMENT TYPE (MANDATORY: project, course, counselling) */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-xs font-medium text-zinc-300">
                  Requirement Type <span className="text-orange-400 font-bold">*</span>{" "}
                  <span className="text-[10px] text-zinc-500">(Select one)</span>
                </label>
                <span className="text-[10px] font-mono uppercase text-orange-400">
                  {formData.requirementType}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {REQUIREMENT_OPTIONS.map((opt) => {
                  const IconComp = opt.icon;
                  const isSelected = formData.requirementType === opt.id;
                  return (
                    <div
                      key={opt.id}
                      onClick={() =>
                        setFormData({ ...formData, requirementType: opt.id })
                      }
                      className={`relative rounded-xl p-3 border transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? "bg-orange-500/10 border-orange-500 shadow-md shadow-orange-500/15"
                          : "bg-zinc-900/60 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <div
                          className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                            isSelected
                              ? "bg-orange-500 text-black"
                              : "bg-zinc-800 text-zinc-400"
                          }`}
                        >
                          <IconComp size={15} />
                        </div>
                        {isSelected && (
                          <CheckCircle2 size={14} className="text-orange-400" />
                        )}
                      </div>

                      <div>
                        <h4
                          className={`text-xs font-semibold ${
                            isSelected ? "text-orange-300" : "text-white"
                          }`}
                        >
                          {opt.label}
                        </h4>
                        <p className="text-[10px] text-zinc-400 leading-tight mt-0.5">
                          {opt.tagline}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              {errors.requirementType && (
                <p className="mt-1 text-xs text-red-400">
                  {errors.requirementType}
                </p>
              )}
            </div>

            {/* Password & Confirm Password in 2 Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                  Password <span className="text-orange-400">*</span>
                </label>
                <div className="relative">
                  <Lock size={16} className="absolute left-3.5 top-3.5 text-zinc-500" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    className={`w-full rounded-xl bg-zinc-900/90 border ${
                      errors.password ? "border-red-500" : "border-zinc-800"
                    } pl-10 pr-10 py-3 text-sm text-white placeholder-zinc-500 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-3.5 text-zinc-500 hover:text-white"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-1 text-xs text-red-400">{errors.password}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                  Confirm Password <span className="text-orange-400">*</span>
                </label>
                <div className="relative">
                  <Lock size={16} className="absolute left-3.5 top-3.5 text-zinc-500" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        confirmPassword: e.target.value,
                      })
                    }
                    className={`w-full rounded-xl bg-zinc-900/90 border ${
                      errors.confirmPassword
                        ? "border-red-500"
                        : "border-zinc-800"
                    } pl-10 pr-4 py-3 text-sm text-white placeholder-zinc-500 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all`}
                  />
                </div>
                {errors.confirmPassword && (
                  <p className="mt-1 text-xs text-red-400">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full mt-4 py-3.5 px-6 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-black font-bold text-sm tracking-wide shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <span>Create Account</span>
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>
        ) : (
          /* ── METHOD 2: CLERK AUTHENTICATION ── */
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-300 leading-relaxed">
              <span className="font-semibold text-white block mb-1">
                ⚡ Clerk Social & Single Sign-On
              </span>
              Authenticate securely with your Google or Clerk account. After signing in, you will be prompted to confirm your mandatory phone number, city, and requirement type.
            </div>

            <div className="flex justify-center items-center py-4">
              <ClerkSignUp
                routing="path"
                path="/signup"
                signInUrl="/login"
                afterSignUpUrl="/onboarding"
                appearance={{
                  elements: {
                    rootBox: "w-full",
                    card: "bg-transparent shadow-none border-none text-white",
                    headerTitle: "text-white font-bold",
                    headerSubtitle: "text-zinc-400",
                    socialButtonsBlockButton:
                      "bg-zinc-900 border border-zinc-700 text-white hover:bg-zinc-800",
                    formButtonPrimary:
                      "bg-orange-500 hover:bg-orange-600 text-black font-semibold",
                    footerActionLink: "text-orange-400 hover:text-orange-300",
                  },
                }}
              />
            </div>
          </div>
        )}

        {/* Card Footer Link */}
        <div className="mt-8 pt-6 border-t border-zinc-800/80 text-center">
          <p className="text-xs text-zinc-400">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-orange-400 font-semibold hover:text-orange-300 transition-colors"
            >
              Sign In here →
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
