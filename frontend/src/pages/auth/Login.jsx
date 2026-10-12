import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Phone,
} from "lucide-react";
import { FaGoogle } from "react-icons/fa";
import { SignIn as ClerkSignIn } from "@clerk/clerk-react";
import toast from "react-hot-toast";
import { logo } from "@/assets/images";
import { useAuth } from "@/context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { loginNormal } = useAuth();
  const [authMethod, setAuthMethod] = useState("normal"); // "normal" | "clerk"

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleNormalLogin = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (!identifier.trim() || !password) {
      toast.error("Please enter your email/phone and password.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          identifier: identifier.trim(),
          password,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast.success(`Welcome back, ${data.data.username}!`);
        loginNormal(data.data, data.data.token);
        navigate("/");
      } else {
        setErrorMsg(data.message || "Invalid credentials. Please try again.");
        toast.error(data.message || "Invalid credentials.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setErrorMsg("Network error. Could not connect to server.");
      toast.error("Server connection error.");
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
        className="relative z-10 w-full max-w-lg rounded-[32px] bg-zinc-950/90 border border-zinc-800/80 shadow-2xl p-6 sm:p-10 backdrop-blur-2xl"
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
            <span>WELCOME BACK</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
            Sign In to <em className="font-serif italic text-orange-400">RAO Portal</em>
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-zinc-400 font-light">
            Access your courses, client projects, and mentorship sessions.
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
            <span>Standard Login</span>
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

        {errorMsg && (
          <div className="mb-6 p-3 rounded-xl bg-red-500/15 border border-red-500/40 text-xs text-red-300 text-center">
            {errorMsg}
          </div>
        )}

        {/* ── METHOD 1: NORMAL LOGIN ── */}
        {authMethod === "normal" ? (
          <form onSubmit={handleNormalLogin} className="space-y-4">
            {/* Email or Phone */}
            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                Email Address or Phone Number <span className="text-orange-400">*</span>
              </label>
              <div className="relative">
                <Mail size={16} className="absolute left-3.5 top-3.5 text-zinc-500" />
                <input
                  type="text"
                  placeholder="name@email.com or 10-digit mobile number"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  className="w-full rounded-xl bg-zinc-900/90 border border-zinc-800 pl-10 pr-4 py-3 text-sm text-white placeholder-zinc-500 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-medium text-zinc-300">
                  Password <span className="text-orange-400">*</span>
                </label>
                <Link
                  to="/contact"
                  className="text-[11px] text-zinc-400 hover:text-orange-400 transition-colors"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Lock size={16} className="absolute left-3.5 top-3.5 text-zinc-500" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-xl bg-zinc-900/90 border border-zinc-800 pl-10 pr-10 py-3 text-sm text-white placeholder-zinc-500 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-3.5 text-zinc-500 hover:text-white"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
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
                  <span>Sign In</span>
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>
        ) : (
          /* ── METHOD 2: CLERK LOGIN ── */
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-300 leading-relaxed">
              <span className="font-semibold text-white block mb-1">
                ⚡ Clerk Social Sign In
              </span>
              Authenticate smoothly using your connected Clerk or Google credentials.
            </div>

            <div className="flex justify-center items-center py-4">
              <ClerkSignIn
                routing="path"
                path="/login"
                signUpUrl="/signup"
                afterSignInUrl="/onboarding"
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
            Don't have an account yet?{" "}
            <Link
              to="/signup"
              className="text-orange-400 font-semibold hover:text-orange-300 transition-colors"
            >
              Create Account →
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}