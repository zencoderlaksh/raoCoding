import React from "react";
import { Link } from "react-router-dom";
import {
  Star,
  Rocket,
  Globe,
  GraduationCap,
  FolderKanban,
} from "lucide-react";

import HeroButton from "../../../components/HeroButton";
import { computer, two, three, four, five, six } from "@/assets/images";

const Magic = () => {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-20 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-[180px]" />
      <div className="absolute bottom-0 right-20 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[180px]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl text-orange-400 text-sm">
            <Rocket size={16} />
            Premium Learning Experience
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">
            Learn.
            
            Build.
            
            Scale.
          </h1>

          <p className="mt-6 text-zinc-400 max-w-2xl mx-auto text-lg">
            Join thousands of developers mastering modern technologies,
            building real-world projects and accelerating their careers.
          </p>
        </div>

        {/* HERO CARD */}
        <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-3xl mb-10 shadow-[0_20px_80px_rgba(0,0,0,0.5)]">
          <img
            src={computer}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

          <div className="relative z-10 px-8 md:px-16 py-20 md:py-28 max-w-3xl">
            <span className="text-orange-400 font-medium">
              Future Ready Skills
            </span>

            <h2 className="text-4xl md:text-7xl font-bold text-white mt-4 leading-tight">
              Transform Your
              <span className="block text-orange-400">
                Coding Journey
              </span>
            </h2>

            <p className="text-zinc-300 mt-6 text-lg">
              Learn from experts, work on real projects and become industry
              ready with practical experience.
            </p>

            <div className="mt-8">
              <Link to="/login">
                <HeroButton text="Explore Courses" />
              </Link>
            </div>
          </div>
        </div>

        {/* FEATURE GRID */}
        <div className="grid lg:grid-cols-2 gap-8 mb-10">
          {/* Community */}
          <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-3xl">
            <img
              src={two}
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-110 transition duration-700"
            />

            <div className="relative p-8 md:p-10">
              <div className="flex items-center gap-2 text-orange-400 mb-4">
                <Star size={18} fill="currentColor" />
                <span>1 Crore+ Coders</span>
              </div>

              <h3 className="text-3xl font-bold text-white">
                Coding Community
              </h3>

              <p className="text-zinc-400 mt-4">
                Connect, learn and grow with one of the largest developer
                communities.
              </p>
            </div>
          </div>

          {/* Global Reach */}
          <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-3xl">
            <img
              src={three}
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-110 transition duration-700"
            />

            <div className="relative p-8 md:p-10">
              <div className="text-6xl font-bold text-orange-400">
                1000+
              </div>

              <h3 className="text-3xl font-bold text-white mt-4">
                Global Clients
              </h3>

              <p className="text-zinc-400 mt-4">
                Trusted by businesses worldwide for high-quality development
                solutions.
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM CARDS */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Mentor */}
          <div className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-3xl">
            <div className="h-56 overflow-hidden">
              <img
                src={five}
                alt=""
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />
            </div>

            <div className="p-8">
              <div className="flex items-center gap-2 text-orange-400">
                <GraduationCap size={18} />
                Mentorship
              </div>

              <h3 className="text-2xl font-bold text-white mt-4">
                Expert Mentors
              </h3>

              <p className="text-zinc-400 mt-3">
                Learn directly from professionals working in top companies.
              </p>
            </div>
          </div>

          {/* Projects */}
          <div className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-3xl">
            <div className="h-56 overflow-hidden">
              <img
                src={six}
                alt=""
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />
            </div>

            <div className="p-8">
              <div className="flex items-center gap-2 text-orange-400">
                <FolderKanban size={18} />
                Projects
              </div>

              <h3 className="text-2xl font-bold text-white mt-4">
                Real Projects
              </h3>

              <p className="text-zinc-400 mt-3">
                Build practical skills through industry-level project work.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-3xl">
            <img
              src={four}
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />

            <div className="relative h-full flex flex-col justify-between p-8 min-h-[420px]">
              <div className="flex items-center gap-2 text-orange-400">
                <Globe size={18} />
                Custom Solutions
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Ready To Build Something Amazing?
                </h3>

                <p className="text-zinc-300 mb-6">
                  Let's create powerful digital experiences together.
                </p>

                <Link to="/login">
                  <HeroButton text="Get In Touch" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Magic;