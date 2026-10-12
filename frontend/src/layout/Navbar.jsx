import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { logo } from '../assets/images';
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import UserAvatar from "@/components/UserAvatar";
import { User, LogOut, LayoutDashboard, BookOpen, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();
  const { user, isAuthenticated, logout } = useAuth();

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProfileDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setProfileDropdownOpen(false);
  }, [location.pathname]);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    // Check if user scrolled past top boundary
    const isPastTop = latest > 35;
    setScrolled(prev => (prev !== isPastTop ? isPastTop : prev));

    // Smart hide on scroll down, reveal on scroll up
    if (latest > 100 && latest > previous + 6) {
      setHidden(prev => (!prev ? true : prev));
    } else if (latest < previous - 6 || latest <= 40) {
      setHidden(prev => (prev ? false : prev));
    }
  });

  // Helper to check if the path is active
  const isActive = (path) => location.pathname === path;

  // Dynamic class for desktop links
  const getDesktopLinkClass = (path) =>
    `relative text-xs xl:text-sm font-medium whitespace-nowrap overflow-hidden px-2 xl:px-3 py-1 cursor-pointer ${
      isActive(path) ? "text-white font-semibold" : "text-[#b3b2b3] hover:text-white"
    }`;

  // Dynamic class for mobile links
  const getMobileLinkClass = (path) =>
    `text-lg hover:text-orange-400 transition ${
      isActive(path) ? "text-white font-semibold" : "text-[#b3b2b3]"
    }`;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "College Bootcamp", path: "/college-bootcamp" },
    { name: "Corporate Trainings", path: "/corporate-trainings" },
    { name: "Book a Meeting", path: "/meeting" },
    { name: "Client", path: "/client" },
  ];

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden && !menuOpen ? "hidden" : "visible"}
      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
      className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-10 ${
        scrolled
          ? "bg-black/75 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-3 sm:py-3.5"
          : "bg-gradient-to-b from-black/90 via-black/40 to-transparent backdrop-blur-[2px] pt-4 sm:pt-6 pb-4 sm:pb-5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 lg:gap-4">
        
        {/* Logo with warm backlight glow */}
        <div
          className="relative group flex items-center flex-shrink-0 cursor-pointer min-w-[160px] lg:min-w-[200px]"
          onClick={() => navigate("/")}
        >
          {/* Luminous ambient glow behind logo */}
          <div className="absolute -inset-x-3 -inset-y-1.5 bg-gradient-to-r from-orange-500/25 via-amber-400/20 to-purple-500/20 rounded-2xl blur-md pointer-events-none opacity-85 group-hover:opacity-100 transition-opacity duration-300" />

          <img
            src={logo}
            alt="RAO Technologies"
            className="relative z-10 h-10 sm:h-11 md:h-12 w-auto object-contain filter drop-shadow-[0_2px_12px_rgba(255,90,40,0.35)] hover:scale-105 transition-all duration-300"
          />
        </div>

        {/* Glass Navbar */}
        <div className="hidden lg:flex items-center justify-center gap-2 xl:gap-4 px-4 xl:px-6 py-2.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-2xl shadow-2xl flex-shrink">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              onClick={(e) => {
                e.preventDefault();
                navigate(link.path);
              }}
              initial="rest"
              whileHover="hover"
              animate="rest"
              className={getDesktopLinkClass(link.path)}
            >
              <motion.span
                variants={{
                  rest: { y: 0 },
                  hover: { y: -30 },
                }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="block"
              >
                {link.name}
              </motion.span>

              <motion.span
                variants={{
                  rest: { y: 30 },
                  hover: { y: 0 },
                }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="absolute left-0 top-1 text-orange-400 block"
              >
                {link.name}
              </motion.span>

              <motion.div
                variants={{
                  rest: { scaleX: 0 },
                  hover: { scaleX: 1 },
                }}
                transition={{ duration: 0.4 }}
                className="absolute bottom-0 left-0 w-full h-[2px] bg-orange-400 origin-left"
              />
            </motion.a>
          ))}
        </div>

        {/* Desktop Buttons / Auth Status */}
        <div className="hidden lg:flex items-center justify-end gap-2.5 min-w-[160px] lg:min-w-[200px]">
          {isAuthenticated ? (
            <div className="relative" ref={dropdownRef}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setProfileDropdownOpen((prev) => !prev)}
                className="group flex items-center gap-2 p-1 pl-1 pr-2 rounded-full bg-zinc-900/90 hover:bg-zinc-800/90 border border-zinc-700/80 hover:border-orange-500/80 transition-all duration-200 cursor-pointer shadow-lg shadow-black/40"
                aria-label="User Profile Menu"
              >
                {/* Profile Picture instead of Name */}
                <UserAvatar
                  user={user}
                  size="sm"
                  showStatus={true}
                  ring={true}
                  alt={user?.username || "Profile"}
                />

                <ChevronDown
                  size={14}
                  className={`text-zinc-400 group-hover:text-orange-400 transition-transform duration-200 ${
                    profileDropdownOpen ? "rotate-180 text-orange-400" : ""
                  }`}
                />
              </motion.button>

              {/* Profile Dropdown Menu */}
              <AnimatePresence>
                {profileDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="absolute right-0 mt-2.5 w-64 rounded-2xl bg-zinc-950/95 border border-zinc-800/90 shadow-[0_12px_40px_rgba(0,0,0,0.8)] backdrop-blur-2xl p-3 z-50 text-white"
                  >
                    {/* User Info Header */}
                    <div className="flex items-center gap-3 p-2 rounded-xl bg-white/[0.03] border border-white/5 mb-2">
                      <UserAvatar user={user} size="md" showStatus={true} />
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-white truncate">
                          {user?.username || "My Account"}
                        </p>
                        <p className="text-[11px] text-zinc-400 truncate">
                          {user?.email || "Signed In"}
                        </p>
                        <span className="inline-block mt-0.5 text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-orange-500/15 text-orange-400 border border-orange-500/30">
                          {user?.role === "admin" || user?.isAdmin ? "Admin" : "Member"}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <button
                        onClick={() => {
                          setProfileDropdownOpen(false);
                          navigate("/profile");
                        }}
                        className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 rounded-xl transition cursor-pointer"
                      >
                        <User size={15} className="text-orange-400" />
                        <span>My Profile</span>
                      </button>

                      <button
                        onClick={() => {
                          setProfileDropdownOpen(false);
                          navigate("/corporate-trainings");
                        }}
                        className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 rounded-xl transition cursor-pointer"
                      >
                        <BookOpen size={15} className="text-amber-400" />
                        <span>Browse Courses</span>
                      </button>

                      {(user?.isAdmin || user?.role === "admin") && (
                        <button
                          onClick={() => {
                            setProfileDropdownOpen(false);
                            navigate("/admin");
                          }}
                          className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 rounded-xl transition cursor-pointer"
                        >
                          <LayoutDashboard size={15} className="text-orange-500" />
                          <span>Admin Dashboard</span>
                        </button>
                      )}

                      <div className="my-1 border-t border-zinc-800/80" />

                      <button
                        onClick={() => {
                          setProfileDropdownOpen(false);
                          logout();
                        }}
                        className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-xl transition cursor-pointer"
                      >
                        <LogOut size={15} />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={() => navigate("/login")}
                className="text-xs text-zinc-300 hover:text-white transition-colors cursor-pointer px-2.5 py-1.5 font-medium"
              >
                Log In
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-black text-xs font-semibold shadow-md shadow-orange-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                Sign Up
              </button>
            </div>
          )}
        </div>

        {/* Mobile/Tablet Menu Button (shows below lg) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white flex-shrink-0 p-2 cursor-pointer"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu (shows on screens < lg) */}
      {menuOpen && (
        <div className="lg:hidden mt-4 animate-fadeIn">
          <div className="flex flex-col gap-4 px-6 py-6 rounded-3xl border border-white/20 bg-black/95 backdrop-blur-2xl shadow-2xl">
            {navLinks.map((link) => (
              <span
                key={link.path}
                onClick={() => { navigate(link.path); setMenuOpen(false); }}
                className={`cursor-pointer ${getMobileLinkClass(link.path)}`}
              >
                {link.name}
              </span>
            ))}

            <div className="pt-3 border-t border-zinc-800">
              {isAuthenticated ? (
                <div className="p-3.5 rounded-2xl bg-zinc-900/90 border border-zinc-800 flex items-center justify-between gap-3">
                  <div
                    onClick={() => {
                      navigate("/profile");
                      setMenuOpen(false);
                    }}
                    className="flex items-center gap-3 cursor-pointer min-w-0"
                  >
                    <UserAvatar
                      user={user}
                      size="md"
                      showStatus={true}
                      alt={user?.username || "Profile"}
                    />
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-white truncate">
                        {user?.username || "User"}
                      </p>
                      <p className="text-xs text-orange-400">View Profile &rarr;</p>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      logout();
                      setMenuOpen(false);
                    }}
                    className="text-xs text-zinc-400 hover:text-red-400 p-2 rounded-xl bg-zinc-800/80 cursor-pointer"
                    title="Logout"
                  >
                    <LogOut size={16} />
                  </button>
                </div>
              ) : (
                <div className="flex gap-3 pt-1">
                  <button
                    onClick={() => { navigate("/login"); setMenuOpen(false); }}
                    className="flex-1 py-2.5 rounded-xl border border-zinc-700 bg-zinc-900 text-white font-medium text-sm"
                  >
                    Log In
                  </button>
                  <button
                    onClick={() => { navigate("/signup"); setMenuOpen(false); }}
                    className="flex-1 py-2.5 rounded-xl bg-orange-500 text-black font-semibold text-sm"
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </div>

            <button 
              onClick={() => { navigate("/contact"); setMenuOpen(false); }}
              className="cursor-pointer mt-2 px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 transition text-white font-medium"
            >
              Book a Meeting
            </button>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;