import React from "react";
import { tiger, instagram, youtube, linkedin } from "../assets/images";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden px-6 py-16 text-white">
      {/* Glass Container */}
      <div className="relative mx-auto max-w-7xl rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
        <div className="grid gap-12 px-4 py-12 sm:px-6 md:grid-cols-3 md:px-8 lg:grid-cols-5">
          
          {/* Logo + Socials */}
          <div className="flex flex-col justify-between">
            <div>
              <Link to="/">
                <img
                  src={tiger}
                  alt="Rao Coding School"
                  className="mb-4 w-24"
                />
              </Link>

              <p className="max-w-xs text-sm leading-7 text-gray-400">
                Building futuristic digital experiences with modern design.
              </p>
            </div>

            {/* Social Icons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-lg transition-all duration-300 hover:scale-110 hover:border-cyan-400/50 hover:bg-cyan-400/10"
              >
                <img src={youtube} className="w-2/3" alt="YouTube" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-lg transition-all duration-300 hover:scale-110 hover:border-cyan-400/50 hover:bg-cyan-400/10"
              >
                <img src={linkedin} className="w-2/3" alt="LinkedIn" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-lg transition-all duration-300 hover:scale-110 hover:border-cyan-400/50 hover:bg-cyan-400/10"
              >
                <img src={instagram} className="w-2/3" alt="Instagram" />
              </a>
            </div>
          </div>

          {/* About */}
          <div>
            <h2 className="mb-6 text-lg font-semibold tracking-wide text-white">
              ABOUT
            </h2>

            <ul className="space-y-4 text-gray-400">
              <li>
                <Link
                  to="/about"
                  className="transition-all duration-300 hover:translate-x-1 hover:text-cyan-400"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/support"
                  className="transition-all duration-300 hover:translate-x-1 hover:text-cyan-400"
                >
                  Support
                </Link>
              </li>

              <li>
                <Link
                  to="/terms"
                  className="transition-all duration-300 hover:translate-x-1 hover:text-cyan-400"
                >
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link
                  to="/privacy"
                  className="transition-all duration-300 hover:translate-x-1 hover:text-cyan-400"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  to="/faq"
                  className="transition-all duration-300 hover:translate-x-1 hover:text-cyan-400"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Student */}
          <div>
            <h2 className="mb-6 text-lg font-semibold tracking-wide text-white">
              STUDENT
            </h2>

            <ul className="space-y-4 text-gray-400">
              <li>
                <Link
                  to="/courses"
                  className="transition-all duration-300 hover:translate-x-1 hover:text-purple-400"
                >
                  Browse Courses
                </Link>
              </li>

              <li>
                <Link
                  to="/students"
                  className="transition-all duration-300 hover:translate-x-1 hover:text-purple-400"
                >
                  Success Stories
                </Link>
              </li>

              <li>
                <Link
                  to="/community"
                  className="transition-all duration-300 hover:translate-x-1 hover:text-purple-400"
                >
                  Join Community
                </Link>
              </li>

              <li>
                <Link
                  to="/certificates"
                  className="transition-all duration-300 hover:translate-x-1 hover:text-purple-400"
                >
                  Certificates
                </Link>
              </li>

              <li>
                <Link
                  to="/career-guidance"
                  className="transition-all duration-300 hover:translate-x-1 hover:text-purple-400"
                >
                  Career Guidance
                </Link>
              </li>
            </ul>
          </div>

          {/* Client */}
          <div>
            <h2 className="mb-6 text-lg font-semibold tracking-wide text-white">
              CLIENT
            </h2>

            <ul className="space-y-4 text-gray-400">
              <li>
                <Link
                  to="/services"
                  className="transition-all duration-300 hover:translate-x-1 hover:text-purple-400"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="/students"
                  className="transition-all duration-300 hover:translate-x-1 hover:text-purple-400"
                >
                  Project Gallery
                </Link>
              </li>

              <li>
                <Link
                  to="/reviews"
                  className="transition-all duration-300 hover:translate-x-1 hover:text-purple-400"
                >
                  Client Reviews
                </Link>
              </li>

              <li>
                <Link
                  to="/start-project"
                  className="transition-all duration-300 hover:translate-x-1 hover:text-purple-400"
                >
                  Start a Project
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="mb-6 text-lg font-semibold tracking-wide text-white">
              CONTACT
            </h2>

            <div className="space-y-5 text-gray-400">
              <div>
                <p className="text-white">Online: 11am - 8pm</p>
                <a
                  href="tel:+911234567890"
                  className="mt-1 block hover:text-cyan-400"
                >
                  +91 XXXXX XXXXX
                </a>
              </div>

              <div>
                <a
                  href="mailto:raocodingschool@gmail.com"
                  className="hover:text-cyan-400"
                >
                  raocodingschool@gmail.com
                </a>
              </div>

              <div>
                <p>
                  Sector-1
                  <br />
                  Mansarovar,
                  <br />
                  Jaipur (Raj)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 px-8 py-5 text-center text-sm text-gray-500">
          © 2026 Rao Coding School. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;