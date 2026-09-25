import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { logo } from '../assets/images';
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth, useClerk } from "@clerk/clerk-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { isSignedIn } = useAuth();
  const { signOut } = useClerk();

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    // Check if user scrolled past top boundary
    if (latest > 35) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    // Smart hide on scroll down, reveal on scroll up
    if (latest > 100 && latest > previous + 6) {
      setHidden(true); // scrolling down
    } else if (latest < previous - 6 || latest <= 40) {
      setHidden(false); // scrolling up or back at top
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
          {/* Luminous ambient glow behind logo so it never feels invisible */}
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

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center justify-end gap-3 min-w-[160px] lg:min-w-[180px]">
          {!isSignedIn ? (
            <motion.a
              onClick={(e) => {
                e.preventDefault();
                navigate("/login");
              }}
              initial="rest"
              whileHover="hover"
              animate="rest"
              className={getDesktopLinkClass("/login")}
            >
              <motion.span
                variants={{ rest: { y: 0 }, hover: { y: -30 } }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="block"
              >
                Login
              </motion.span>
              <motion.span
                variants={{ rest: { y: 30 }, hover: { y: 0 } }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="absolute left-0 top-1 text-orange-400 block"
              >
                Login
              </motion.span>
              <motion.div
                variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
                transition={{ duration: 0.4 }}
                className="absolute bottom-0 left-0 w-full h-[2px] bg-orange-400 origin-left"
              />
            </motion.a>
          ) : (
            <>
              <motion.a
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/profile");
                }}
                initial="rest"
                whileHover="hover"
                animate="rest"
                className={getDesktopLinkClass("/profile")}
              >
                <motion.span
                  variants={{ rest: { y: 0 }, hover: { y: -30 } }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="block"
                >
                  Profile
                </motion.span>
                <motion.span
                  variants={{ rest: { y: 30 }, hover: { y: 0 } }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="absolute left-0 top-1 text-orange-400 block"
                >
                  Profile
                </motion.span>
                <motion.div
                  variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
                  transition={{ duration: 0.4 }}
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-orange-400 origin-left"
                />
              </motion.a>
              <button
                onClick={() => signOut(() => navigate("/"))}
                className="px-3.5 py-1.5 text-xs xl:text-sm font-medium text-white bg-red-600/80 hover:bg-red-600 rounded-lg transition"
              >
                Logout
              </button>
            </>
          )}
        </div>

        {/* Mobile/Tablet Menu Button (shows below lg) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white flex-shrink-0 p-2"
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
          <div className="flex flex-col gap-5 px-6 py-6 rounded-3xl border border-white/20 bg-black/90 backdrop-blur-2xl shadow-2xl">
            <span
              onClick={() => { navigate("/"); setMenuOpen(false); }}
              className={`cursor-pointer ${getMobileLinkClass("/")}`}
            >
              Home
            </span>

            <span
              onClick={() => { navigate("/about"); setMenuOpen(false); }}
              className={`cursor-pointer ${getMobileLinkClass("/about")}`}
            >
              About
            </span>

            <span
              onClick={() => { navigate("/college-bootcamp"); setMenuOpen(false); }}
              className={`cursor-pointer ${getMobileLinkClass("/college-bootcamp")}`}
            >
              College Bootcamp
            </span>

            <span
              onClick={() => { navigate("/corporate-trainings"); setMenuOpen(false); }}
              className={`cursor-pointer ${getMobileLinkClass("/corporate-trainings")}`}
            >
              Corporate Trainings
            </span>

            <span
              onClick={() => { navigate("/contact"); setMenuOpen(false); }}
              className={`cursor-pointer ${getMobileLinkClass("/contact")}`}
            >
              Contact
            </span>

            <span
              onClick={() => { navigate("/client"); setMenuOpen(false); }}
              className={`cursor-pointer ${getMobileLinkClass("/client")}`}
            >
              Client
            </span>

            {isSignedIn && (
              <span
                onClick={() => { navigate("/profile"); setMenuOpen(false); }}
                className={`cursor-pointer ${getMobileLinkClass("/profile")}`}
              >
                Profile
              </span>
            )}

            <button 
              onClick={() => { navigate("/contact"); setMenuOpen(false); }}
              className="cursor-pointer mt-2 px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 transition text-white font-medium"
            >
              Book a Meeting
            </button>

            {isSignedIn && (
              <button 
                onClick={() => {
                  signOut(() => {
                    navigate("/");
                    setMenuOpen(false);
                  });
                }}
                className="cursor-pointer mt-2 px-6 py-3 rounded-full bg-red-600/80 hover:bg-red-600 transition text-white font-medium"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;