import React, { useState } from "react";
import { motion } from "framer-motion";
import { logo } from '../assets/images';
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Helper to check if the path is active
  const isActive = (path) => location.pathname === path;

  // Dynamic class for desktop links
  const getDesktopLinkClass = (path) =>
    `relative text-sm lg:text-lg font-medium overflow-hidden px-2 py-1 cursor-pointer ${
      isActive(path) ? "text-white" : "text-[#b3b2b3]"
    }`;

  // Dynamic class for mobile links
  const getMobileLinkClass = (path) =>
    `text-lg hover:text-orange-400 transition ${
      isActive(path) ? "text-white font-semibold" : "text-[#b3b2b3]"
    }`;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Book a Meeting", path: "/meeting" },
    {name:"Client",path:"/client"}
  ];

  return (
    <nav className="w-full relative top-0 left-0 z-50 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Logo */}
        <div className="flex items-center flex-shrink-0 cursor-pointer" onClick={() => navigate("/")}>
          <img
            src={logo}
            alt="Logo"
            className="h-28 mt-4 object-contain"
          />
        </div>

        {/* Glass Navbar */}
        <div className="hidden md:flex items-center justify-center gap-10 lg:gap-14 w-[550px] lg:w-[750px] py-4 rounded-xl border border-white/20 bg-white/10 backdrop-blur-2xl shadow-2xl flex-shrink">
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

        {/* Desktop Button */}
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
            variants={{
              rest: { y: 0 },
              hover: { y: -30 },
            }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="block"
          >
            Login
          </motion.span>

          <motion.span
            variants={{
              rest: { y: 30 },
              hover: { y: 0 },
            }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="absolute left-0 top-1 text-orange-400 block"
          >
            Login
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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white flex-shrink-0"
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

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 animate-fadeIn">
          <div className="flex flex-col gap-5 px-6 py-6 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-2xl shadow-2xl">
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
              className={`cursor-pointer ${getMobileLinkClass("/contact")}`}
            >
              Client
            </span>

            <button 
              onClick={() => { navigate("/contact"); setMenuOpen(false); }}
              className="cursor-pointer mt-2 px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 transition text-white font-medium"
            >
              Book a Meeting
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;