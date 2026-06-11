import React, { useState } from 'react';

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

  return (
    <div className="bg-[#0b0b0b] text-gray-300 min-h-screen py-16 px-4 sm:px-6 lg:px-8 antialiased selection:bg-amber-500 selection:text-black">
      <div className="max-w-6xl mx-auto">
        
        {/* --- Header Section (Theme: image_a5d088.png) --- */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-amber-600 uppercase mb-4">
            <span className="text-[10px]">◆</span> Alumni Network
          </div>
          <h1 className="text-4xl sm:text-5xl font-medium text-white tracking-tight leading-tight max-w-3xl">
            Where talent goes <span className="font-serif italic text-amber-500 font-normal">beyond senior.</span>
          </h1>
          <p className="mt-4 text-base text-gray-500 max-w-2xl leading-relaxed">
            Skip the boilerplate tutorials. Deep dive into raw production systems, algorithmic primitives, and architecture standards trusted by global engineering hubs.
          </p>
        </div>

        {/* --- Control Panel: Filters & Search --- */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center pb-6 mb-10 border-b border-zinc-800/60">
          {/* Year Tabs */}
          <div className="flex flex-wrap gap-1 bg-zinc-900/50 p-1 rounded-lg border border-zinc-800/40 self-start">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-4 py-1.5 rounded-md text-xs font-medium tracking-wide transition-all ${
                  selectedYear === year
                    ? 'bg-amber-600/10 text-amber-500 border border-amber-500/20'
                    : 'text-gray-400 hover:text-white border border-transparent'
                }`}
              >
                {year === "All" ? "All Eras" : `'${year.toString().slice(-2)}`}
              </button>
            ))}
          </div>

          {/* Clean Search Input */}
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Filter by name, tech or company..."
              className="w-full pl-3 pr-8 py-2 bg-transparent text-sm text-white placeholder-gray-600 border-b border-zinc-800 focus:outline-none focus:border-amber-500 transition-colors"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span className="absolute right-2 top-2.5 text-gray-600 text-xs">⌘F</span>
          </div>
        </div>

        {/* --- Alumni Grid Layout --- */}
        {filteredAlumni.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAlumni.map((alumni, index) => (
              <div 
                key={alumni.id} 
                className="group relative bg-[#121212]/40 rounded-xl border border-zinc-900 hover:border-zinc-800 p-6 flex flex-col justify-between transition-all duration-300 hover:bg-zinc-900/20"
              >
                {/* Visual Top Glow Accent Line */}
                <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-amber-500/0 group-hover:via-amber-500/40 transition-all duration-500" />

                <div>
                  {/* Card Header Info */}
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] font-bold tracking-wider text-amber-600 bg-amber-950/20 border border-amber-900/30 px-2 py-0.5 rounded">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-xs text-zinc-500 font-mono">
                      CLASS OF {alumni.year}
                    </span>
                  </div>

                  {/* Placement Target */}
                  <h3 className="text-xl font-semibold text-white tracking-tight group-hover:text-amber-500 transition-colors duration-200">
                    {alumni.name}
                  </h3>
                  
                  <div className="mt-4 space-y-1">
                    <p className="text-sm font-medium text-zinc-400">
                      Role: <span className="text-amber-500/90">{alumni.role}</span>
                    </p>
                    <p className="text-sm font-medium text-zinc-400">
                      Company: <span className="text-white font-semibold">{alumni.company}</span>
                    </p>
                  </div>
                </div>

                {/* Card Footer Block */}
                <div className="mt-8 pt-4 border-t border-zinc-900/80 flex items-center justify-between">
                  <span className="text-xs text-zinc-600 font-mono tracking-wide uppercase">
                    {alumni.location}
                  </span>
                  
                  {/* Circle Action Arrow */}
                  <div className="w-8 h-8 rounded-full bg-zinc-900/80 border border-zinc-800/80 flex items-center justify-center text-zinc-500 group-hover:border-amber-500/30 group-hover:text-amber-500 transition-all duration-300">
                    <svg className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

              </div>
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="text-center py-20 bg-zinc-900/10 rounded-xl border border-dashed border-zinc-900">
            <p className="text-zinc-600 text-sm font-mono">No matching student profiles indexed in this view.</p>
          </div>
        )}

      </div>
    </div>
  );
}