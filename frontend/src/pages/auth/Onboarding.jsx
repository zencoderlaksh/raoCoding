import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  MessageSquare,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { useUser, useClerk } from "@clerk/clerk-react";
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
  },
  {
    id: "course",
    label: "Tech Course",
    tagline: "Full-Stack, MERN, AI, DevOps Bootcamps",
    icon: GraduationCap,
    color: "#eab308",
  },
  {
    id: "counselling",
    label: "Counselling",
    tagline: "1-on-1 Career Mentorship & Tech Advice",
    icon: MessageSquare,
    color: "#10b981",
  },
];

export default function Onboarding() {
  const navigate = useNavigate();
  const { user: clerkUser, isLoaded, isSignedIn } = useUser();
  const { user: authUser, updateProfile } = useAuth();

  const [phoneNo, setPhoneNo] = useState("");
  const [city, setCity] = useState("");
  const [requirementType, setRequirementType] = useState("course");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Pre-populate if already in metadata or context
    if (clerkUser) {
      if (clerkUser.publicMetadata?.phoneNo) {
        setPhoneNo(clerkUser.publicMetadata.phoneNo);
      }
      if (clerkUser.publicMetadata?.city) {
        setCity(clerkUser.publicMetadata.city);
      }
      if (clerkUser.publicMetadata?.requirementType) {
        setRequirementType(clerkUser.publicMetadata.requirementType);
      }
    }
  }, [clerkUser]);

  const validate = () => {
    const errs = {};

    // MANDATORY PHONE
    if (!phoneNo.trim()) {
      errs.phoneNo = "Phone number is mandatory";
    } else {
      const clean = phoneNo.replace(/\D/g, "");
      if (clean.length < 10) {
        errs.phoneNo = "Please provide at least 10 digits";
      }
    }

    // MANDATORY CITY
    if (!city.trim()) {
      errs.city = "City is mandatory";
    }

    // MANDATORY REQUIREMENT TYPE
    if (!requirementType) {
      errs.requirementType = "Please select your requirement type";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      toast.error("Please complete all mandatory fields.");
      return;
    }

    setLoading(true);

    try {
      const email =
        clerkUser?.primaryEmailAddress?.emailAddress ||
        authUser?.email ||
        "user@raocoding.com";
      const username =
        clerkUser?.fullName || clerkUser?.username || authUser?.username || "User";
      const clerkId = clerkUser?.id || "";

      const response = await fetch("/api/users/clerk-sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          clerkId,
          email,
          username,
          phoneNo: phoneNo.trim(),
          city: city.trim(),
          requirementType,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast.success("Profile setup complete!");
        if (updateProfile) {
          updateProfile({
            phoneNo: phoneNo.trim(),
            city: city.trim(),
            requirementType,
          });
        }
        navigate("/");
      } else {
        toast.error(data.message || "Failed to update profile.");
      }
    } catch (err) {
      console.error("Onboarding error:", err);
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white px-4 py-16 sm:px-6 lg:px-8 selection:bg-orange-500 selection:text-black">
      {/* Background Ambient Lights */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-orange-600/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[170px] pointer-events-none" />

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-xl rounded-[32px] bg-zinc-950/90 border border-zinc-800/80 shadow-2xl p-6 sm:p-10 backdrop-blur-2xl"
      >
        {/* Header */}
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
            <span>MANDATORY DETAILS</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
            Complete Your <em className="font-serif italic text-orange-400">Profile</em>
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-zinc-400 font-light">
            Please provide your contact phone, city, and interest area to personalize your experience.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Phone Number (Mandatory) */}
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
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
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

          {/* City (Mandatory) */}
          <div>
            <label className="block text-xs font-medium text-zinc-300 mb-1.5">
              City <span className="text-orange-400 font-bold">*</span>{" "}
              <span className="text-[10px] text-zinc-500">(Mandatory)</span>
            </label>
            <CitySelect
              value={city}
              onChange={(val) => {
                setCity(val);
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

          {/* Requirement Type (Mandatory) */}
          <div>
            <label className="block text-xs font-medium text-zinc-300 mb-2">
              Requirement Type <span className="text-orange-400 font-bold">*</span>{" "}
              <span className="text-[10px] text-zinc-500">(Select your goal)</span>
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {REQUIREMENT_OPTIONS.map((opt) => {
                const IconComp = opt.icon;
                const isSelected = requirementType === opt.id;
                return (
                  <div
                    key={opt.id}
                    onClick={() => setRequirementType(opt.id)}
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

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-4 py-3.5 px-6 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-black font-bold text-sm tracking-wide shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <span>Complete Setup & Enter</span>
                <ArrowRight size={16} />
              </>
            )}
          </button>
        </form>
      </motion.div>
    </div>
  );
}