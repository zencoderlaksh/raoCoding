import React from "react";
import { Link } from "react-router-dom";
import { logo, instagram, youtube, linkedin, x } from "../assets/images";

const Footer = () => {
  return (
    <footer className="relative w-full bg-black border-t border-white/10 text-white overflow-hidden pt-16 sm:pt-20 lg:pt-24 pb-0">
      {/* Subtle Warm Amber/Orange Ambient Glow at Top */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[radial-gradient(ellipse_at_top,rgba(251,146,60,0.08),transparent_70%)]" />

      {/* Main Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 lg:gap-14">
          
          {/* Column 1: Brand Logo & Social Icons */}
          <div className="flex flex-col items-start justify-between sm:justify-start">
            <Link to="/" className="inline-block mb-8 group">
              <img
                src={logo}
                alt="RAO Technologies"
                className="h-10 sm:h-12 w-auto object-contain brightness-110 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {/* Social Icons matching the website theme */}
            <div className="flex items-center gap-3.5">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-orange-400/50 hover:bg-orange-500/10"
              >
                <img src={youtube} className="w-5 h-5 object-contain" alt="YouTube" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-orange-400/50 hover:bg-orange-500/10"
              >
                <img src={linkedin} className="w-5 h-5 object-contain" alt="LinkedIn" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-orange-400/50 hover:bg-orange-500/10"
              >
                <img src={instagram} className="w-5 h-5 object-contain" alt="Instagram" />
              </a>

              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-orange-400/50 hover:bg-orange-500/10"
              >
                <img src={x} className="w-4 h-4 object-contain" alt="X" />
              </a>
            </div>
          </div>

          {/* Column 2: ABOUT */}
          <div>
            <h3 className="mb-6 text-base sm:text-lg font-bold tracking-wider text-white uppercase">
              ABOUT
            </h3>
            <ul className="space-y-3.5 text-sm sm:text-base font-normal text-neutral-400">
              <li>
                <Link to="/about" className="hover:text-orange-400 transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-orange-400 transition-colors duration-200">
                  Support
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-orange-400 transition-colors duration-200">
                  Terms and Condition
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-orange-400 transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/students" className="hover:text-orange-400 transition-colors duration-200">
                  Submit Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: COMPANY */}
          <div>
            <h3 className="mb-6 text-base sm:text-lg font-bold tracking-wider text-white uppercase">
              COMPANY
            </h3>
            <ul className="space-y-3.5 text-sm sm:text-base font-normal text-neutral-400">
              <li>
                <Link to="/client" className="hover:text-orange-400 transition-colors duration-200">
                  Hire From Us
                </Link>
              </li>
              <li>
                <Link to="/community" className="hover:text-orange-400 transition-colors duration-200">
                  Discord
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-orange-400 transition-colors duration-200">
                  Pricing and Refund
                </Link>
              </li>
              <li>
                <Link to="/career" className="hover:text-orange-400 transition-colors duration-200">
                  Jobs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: CONTACT */}
          <div>
            <h3 className="mb-6 text-base sm:text-lg font-bold tracking-wider text-white uppercase">
              CONTACT
            </h3>
            <div className="space-y-5 text-sm sm:text-base text-neutral-400">
              <div>
                <p className="font-bold text-white text-base">Online: 11am - 8pm</p>
                <a
                  href="tel:+919993478545"
                  className="mt-1 block hover:text-orange-400 transition-colors duration-200"
                >
                  +91 9993478545
                </a>
              </div>

              <div>
                <p className="font-bold text-white text-base">Offline: 11am - 8pm</p>
                <a
                  href="tel:+919691778470"
                  className="mt-1 block hover:text-orange-400 transition-colors duration-200"
                >
                  +91 9691778470
                </a>
              </div>

              <div>
                <a
                  href="mailto:raocodingschool@gmail.com"
                  className="hover:text-orange-400 transition-colors duration-200 break-all font-medium text-neutral-300"
                >
                  raocodingschool@gmail.com
                </a>
              </div>

              <div>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  Sector-1, Mansarovar,
                  <br />
                  Jaipur, Rajasthan 302020
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Massive subtle watermark text styled to theme */}
      <div className="relative w-full overflow-hidden select-none pointer-events-none mt-12 sm:mt-16 lg:mt-20 flex justify-center items-end leading-none">
        <span
          className="text-[21vw] font-black tracking-tighter text-white/[0.04] uppercase leading-none select-none"
          style={{
            fontFamily: "'Space Grotesk', 'Geist Variable', sans-serif"
          }}
        >
          RAO
        </span>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="relative z-10 border-t border-white/5 py-5 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} RAO Technologies. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;