import React, { useState } from "react";
import { motion } from "framer-motion";
import { logo } from '../assets/images';
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth, useClerk } from "@clerk/clerk-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { isSignedIn } = useAuth();
  const { signOut } = useClerk();

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
    { name: "Placement", path: "/placement" },
    { name: "Courses", path: "/courses" },
    { name: "Book a Meeting", path: "/meeting" },
    { name: "Client", path: "/client" },
  ];

  return (
    <nav className="w-full relative top-0 left-0 z-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 lg:gap-4">
        
        {/* Logo */}
        <div className="flex items-center flex-shrink-0 cursor-pointer" onClick={() => navigate("/")}>
          <img
            src={logo}
            alt="Logo"
            className="h-20 sm:h-24 lg:h-28 mt-2 sm:mt-4 object-contain"
          />
        </div>

        {/* Glass Navbar for Desktop (lg+) */}
        <div className="hidden lg:flex items-center justify-center gap-1.5 xl:gap-3 px-3 xl:px-5 py-2.5 rounded-xl border border-white/20 bg-white/10 backdrop-blur-2xl shadow-2xl flex-shrink">
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
        <div className="hidden lg:flex items-center gap-3">
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
              onClick={() => { navigate("/placement"); setMenuOpen(false); }}
              className={`cursor-pointer ${getMobileLinkClass("/placement")}`}
            >
              Placement
            </span>

            <span
              onClick={() => { navigate("/courses"); setMenuOpen(false); }}
              className={`cursor-pointer ${getMobileLinkClass("/courses")}`}
            >
              Courses
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
    </nav>
  );
};

export default Navbar;