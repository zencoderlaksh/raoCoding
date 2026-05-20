import React from "react";
import {tiger,instagram,youtube,linkedin} from '../assets/images'
import { Link } from "react-router-dom";

const Footer=()=> {
  return (
    <footer className="relative overflow-hidden px-6 py-16 text-white">
      
      {/* Glass Container */}
      <div className="relative mx-auto max-w-7xl rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
        
        <div className="grid gap-12 px-4 sm:px-6 md:px-8 py-12 md:grid-cols-3 lg:grid-cols-5">

          {/* Logo + Socials */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="mb-4 text-5xl font-black tracking-widest text-white">
                <img src={tiger} alt="" />
              </h1>

              <p className="max-w-xs text-sm leading-7 text-gray-400">
                Building futuristic digital experiences with modern design.
              </p>
            </div>

            {/* Social Icons */}
            <div className="mt-8 flex flex-wrap gap-4">
              
              {/* Replace these with your own icons */}
              <div className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-lg transition-all duration-300 hover:scale-110 hover:border-cyan-400/50 hover:bg-cyan-400/10">
                <img src={youtube} className="w-2/3" alt="" />
              </div>

              <div className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-lg transition-all duration-300 hover:scale-110 hover:border-cyan-400/50 hover:bg-cyan-400/10">
                <img src={linkedin} className="w-2/3" alt="" />
              </div>

              <div className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-lg transition-all duration-300 hover:scale-110 hover:border-cyan-400/50 hover:bg-cyan-400/10">
                <img src={instagram} className="w-2/3" alt="" />
              </div>
            </div>
          </div>

          {/* About */}
          <div>
            <h2 className="mb-6 text-lg font-semibold tracking-wide text-white">
              ABOUT
            </h2>

            <ul className="space-y-4 text-gray-400">
              {[
                "About Us",
                "Support",
                "Terms & Conditions",
                "Privacy Policy",
                "FAQ",
              ].map((item, index) => (
                <li
                  key={index}
                  className="cursor-pointer transition-all duration-300 hover:translate-x-1 hover:text-cyan-400"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Student */}
          <div>
            <h2 className="mb-6 text-lg font-semibold tracking-wide text-white">
              STUDENT
            </h2>

            <ul className="space-y-4 text-gray-400">
              {[
                "Browse Courses",
                "Success Stories",
                "Join Community",
                "Certificates",
                "Career Guidance",
              ].map((item, index) => (
                <li
                  key={index}
                  className="cursor-pointer transition-all duration-300 hover:translate-x-1 hover:text-purple-400"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Client */}
          <div>
            <h2 className="mb-6 text-lg font-semibold tracking-wide text-white">
              CLIENT
            </h2>

            <ul className="space-y-4 text-gray-400">
              {[
                "Services",
                "Project Gallery",
                "Client Reviews",
                "Start a Project",
              ].map((item, index) => (
                <li
                  key={index}
                  className="cursor-pointer transition-all duration-300 hover:translate-x-1 hover:text-purple-400"
                >
                  {item}
                </li>
              ))}
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
                <p className="mt-1">+91 XXXXX XXXXX</p>
              </div>

              <div>
                <p>raocodingschool@gmail.com</p>
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
}
export default Footer;