import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Building2, Briefcase, MapPin, ArrowRight } from 'lucide-react';

const alumniData = [
  { id: 1, name: "Sarah Jenkins", year: 2024, company: "Google", role: "Software Engineer", logo: "G", location: "Mountain View, CA" },
  { id: 2, name: "Alex Rivera", year: 2024, company: "Meta", role: "Product Designer", logo: "M", location: "Menlo Park, CA" },
  { id: 3, name: "Emiko Tanaka", year: 2023, company: "Microsoft", role: "Data Scientist", logo: "MS", location: "Redmond, WA" },
  { id: 4, name: "David Kim", year: 2023, company: "Amazon", role: "Cloud Architect", logo: "A", location: "Seattle, WA" },
  { id: 5, name: "Rachel Green", year: 2022, company: "Netflix", role: "UI/UX Engineer", logo: "N", location: "Los Gatos, CA" },
  { id: 6, name: "James Wilson", year: 2022, company: "Apple", role: "iOS Developer", logo: "", location: "Cupertino, CA" },
];

export default function AlumniGridArchive() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("All");

  const years = ["All", ...new Set(alumniData.map(alumni => alumni.year))].sort((a, b) => b - a);

  const filteredAlumni = alumniData.filter(alumni => {
    const matchesSearch = 
      alumni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alumni.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alumni.role.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesYear = selectedYear === "All" || alumni.year.toString() === selectedYear.toString();

    return matchesSearch && matchesYear;
  });

  const onMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <section className="bg-black text-gray-300 py-28 sm:py-36 px-4 sm:px-6 lg:px-8 border-t border-zinc-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading - About Page Style */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <span className="px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs sm:text-sm font-semibold tracking-widest uppercase">
            Alumni Network & Outcomes
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-black text-white tracking-tight">
            Where Talent Goes{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
              Beyond Senior.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
            Skip the boilerplate tutorials. Deep dive into raw production systems, algorithmic primitives, and architecture standards trusted by global engineering hubs.
          </p>
        </div>

        {/* Control Panel: Filters & Search */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center pb-6 mb-10 border-b border-white/10">
          {/* Year Tabs */}
          <div className="flex flex-wrap gap-1.5 bg-white/[0.03] p-1.5 rounded-2xl border border-white/10 self-start">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  selectedYear === year
                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-[0_0_15px_rgba(249,115,22,0.4)]'
                    : 'text-neutral-400 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                {year === "All" ? "All Eras" : `'${year.toString().slice(-2)}`}
              </button>
            ))}
          </div>

          {/* Clean Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search by name, role, company..."
              className="w-full pl-10 pr-4 py-2.5 bg-white/[0.03] text-xs sm:text-sm text-white placeholder-neutral-500 border border-white/10 rounded-2xl focus:outline-none focus:border-orange-500 transition-colors"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Alumni Grid Layout with Spotlight Cards */}
        {filteredAlumni.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
            {filteredAlumni.map((alumni, index) => (
              <motion.div 
                key={alumni.id} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                onMouseMove={onMouseMove}
                className="group relative bg-[#090909] rounded-3xl border border-white/10 hover:border-orange-500/40 hover:bg-[#0c0c0c] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              >
                {/* Spotlight cursor glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
                  style={{
                    background:
                      "radial-gradient(260px circle at var(--mx,0px) var(--my,0px), rgba(249,115,22,0.12), transparent 80%)",
                  }}
                />

                <div className="relative z-10">
                  {/* Card Header Info */}
                  <div className="flex justify-between items-center mb-5">
                    <span className="text-xs font-mono font-bold tracking-wider text-orange-400 bg-orange-500/10 border border-orange-500/25 px-3 py-1 rounded-full">
                      // {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-xs text-neutral-400 font-mono font-medium">
                      CLASS OF {alumni.year}
                    </span>
                  </div>

                  {/* Placement Target */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-orange-400 transition-colors mb-3">
                    {alumni.name}
                  </h3>
                  
                  <div className="space-y-1.5 text-xs sm:text-sm font-light">
                    <p className="text-neutral-400">
                      Role: <span className="text-neutral-200 font-medium">{alumni.role}</span>
                    </p>
                    <p className="text-neutral-400">
                      Company: <span className="text-white font-medium">{alumni.company}</span>
                    </p>
                  </div>
                </div>

                {/* Card Footer Block */}
                <div className="relative z-10 mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-neutral-400 font-mono tracking-wide uppercase flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-orange-400" />
                    <span>{alumni.location}</span>
                  </span>
                  
                  {/* Circle Action Arrow */}
                  <div className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-neutral-400 group-hover:border-orange-500/40 group-hover:text-orange-400 group-hover:bg-orange-500/10 transition-all duration-300">
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="text-center py-20 bg-[#0a0a0a] rounded-2xl border border-dashed border-zinc-900">
            <p className="text-zinc-500 text-sm font-mono">No matching student profiles found for "{searchTerm}".</p>
          </div>
        )}

      </div>
    </section>
  );
}