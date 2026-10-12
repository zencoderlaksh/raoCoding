import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  ChevronDown,
  Search,
  Check,
  X,
  Plus,
  Pencil,
  Sparkles,
} from "lucide-react";

export const CITIES_DATA = [
  { name: "Jaipur", tag: "HQ", popular: true },
  { name: "Delhi NCR", tag: "Hub", popular: true },
  { name: "Bengaluru", tag: "Tech", popular: true },
  { name: "Mumbai", tag: "Metro", popular: true },
  { name: "Pune", tag: "Tech", popular: true },
  { name: "Hyderabad", tag: "Tech", popular: true },
  { name: "Noida", tag: "IT Hub", popular: true },
  { name: "Gurgaon", tag: "Corp Hub", popular: true },
  { name: "Ahmedabad", popular: false },
  { name: "Kolkata", popular: false },
  { name: "Chennai", popular: false },
  { name: "Chandigarh", popular: false },
  { name: "Indore", popular: false },
  { name: "Lucknow", popular: false },
  { name: "Kota", tag: "Edu Hub", popular: false },
  { name: "Jodhpur", popular: false },
  { name: "Udaipur", popular: false },
  { name: "Bhopal", popular: false },
  { name: "Patna", popular: false },
  { name: "Surat", popular: false },
  { name: "Nagpur", popular: false },
  { name: "Dehradun", popular: false },
  { name: "Kochi", popular: false },
  { name: "Bhubaneswar", popular: false },
  { name: "Vadodara", popular: false },
  { name: "Visakhapatnam", popular: false },
  { name: "Ranchi", popular: false },
  { name: "Raipur", popular: false },
  { name: "Coimbatore", popular: false },
  { name: "Agra", popular: false },
  { name: "Varanasi", popular: false },
  { name: "Amritsar", popular: false },
  { name: "Ajmer", popular: false },
  { name: "Sikar", popular: false },
  { name: "Alwar", popular: false },
  { name: "Bikaner", popular: false },
  { name: "Meerut", popular: false },
];

const TOP_HUBS = ["Jaipur", "Delhi NCR", "Bengaluru", "Mumbai", "Pune", "Hyderabad"];

export default function CitySelect({
  value = "",
  onChange,
  error,
  placeholder = "Select your city",
  className = "",
  id = "city",
  name = "city",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [manualMode, setManualMode] = useState(false);
  const containerRef = useRef(null);
  const searchInputRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    }
  }, [isOpen]);

  const handleSelect = (cityName) => {
    onChange(cityName);
    setIsOpen(false);
    setSearch("");
  };

  const handleClear = (e) => {
    e.stopPropagation();
    onChange("");
  };

  const filteredCities = CITIES_DATA.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase().trim())
  );

  const exactMatch = CITIES_DATA.some(
    (c) => c.name.toLowerCase() === search.trim().toLowerCase()
  );

  const selectedCityObj = CITIES_DATA.find((c) => c.name === value);

  // MANUAL TYPING MODE
  if (manualMode) {
    return (
      <div className={`relative ${className}`} ref={containerRef}>
        <MapPin
          size={16}
          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-orange-400 pointer-events-none"
        />
        <input
          id={id}
          name={name}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Type your city name (e.g. Ajmer, Shimla)..."
          autoFocus
          className={`w-full rounded-xl bg-zinc-900/90 border ${
            error ? "border-red-500" : "border-zinc-800"
          } pl-10 pr-28 py-3 text-sm text-white placeholder-zinc-500 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all`}
        />
        <button
          type="button"
          onClick={() => {
            setManualMode(false);
            setIsOpen(true);
          }}
          className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[11px] font-medium text-orange-400 hover:text-orange-300 bg-orange-500/10 hover:bg-orange-500/20 px-2.5 py-1 rounded-lg border border-orange-500/30 transition-all flex items-center gap-1 cursor-pointer"
          title="Switch back to dropdown list"
        >
          <ChevronDown size={12} />
          <span>List</span>
        </button>
      </div>
    );
  }

  // DROPDOWN MODE
  return (
    <div className={`relative ${className}`} ref={containerRef}>
      {/* Trigger Button */}
      <div
        id={id}
        role="button"
        tabIndex={0}
        onClick={() => setIsOpen((prev) => !prev)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsOpen((prev) => !prev);
          }
        }}
        className={`w-full rounded-xl bg-zinc-900/90 border ${
          error
            ? "border-red-500"
            : isOpen
            ? "border-orange-500 ring-1 ring-orange-500"
            : "border-zinc-800 hover:border-zinc-700"
        } pl-10 pr-10 py-3 text-sm text-white outline-none transition-all flex items-center justify-between cursor-pointer select-none`}
      >
        <MapPin
          size={16}
          className={`absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors ${
            value ? "text-orange-400" : "text-zinc-500"
          }`}
        />

        <div className="flex items-center gap-2 truncate">
          {value ? (
            <>
              <span className="text-white font-medium truncate">{value}</span>
              {selectedCityObj?.tag && (
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded font-mono uppercase ${
                    selectedCityObj.tag === "HQ"
                      ? "bg-orange-500/20 text-orange-300 border border-orange-500/30 font-semibold"
                      : "bg-zinc-800 text-zinc-400"
                  }`}
                >
                  {selectedCityObj.tag}
                </span>
              )}
            </>
          ) : (
            <span className="text-zinc-500">{placeholder}</span>
          )}
        </div>

        <div className="absolute right-3.5 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
          {value && (
            <button
              type="button"
              onClick={handleClear}
              className="text-zinc-500 hover:text-zinc-300 p-0.5 rounded-full hover:bg-zinc-800 transition-colors"
              title="Clear selection"
            >
              <X size={14} />
            </button>
          )}
          <ChevronDown
            size={16}
            className={`transition-transform duration-200 ${
              isOpen ? "rotate-180 text-orange-400" : "text-zinc-500"
            }`}
          />
        </div>
      </div>

      {/* Floating Dropdown Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 left-0 right-0 top-full mt-2 bg-zinc-900 border border-zinc-700/90 rounded-2xl shadow-2xl shadow-black/90 backdrop-blur-xl p-2.5 overflow-hidden"
          >
            {/* Search Input */}
            <div className="relative mb-2">
              <Search
                size={14}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none"
              />
              <input
                ref={searchInputRef}
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search city or type new..."
                className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl pl-8 pr-8 py-2 text-xs text-white placeholder-zinc-500 outline-none focus:border-orange-500 transition-all"
              />
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"
                >
                  <X size={12} />
                </button>
              )}
            </div>

            {/* Quick Top Hubs (Shown when not actively searching) */}
            {!search && (
              <div className="mb-2 pb-2 border-b border-zinc-800/80">
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block mb-1.5 px-1">
                  Popular Hubs
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {TOP_HUBS.map((cityName) => (
                    <button
                      key={cityName}
                      type="button"
                      onClick={() => handleSelect(cityName)}
                      className={`text-[11px] px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${
                        value === cityName
                          ? "bg-orange-500 text-black font-semibold border-orange-500 shadow-sm shadow-orange-500/20"
                          : "bg-zinc-800/70 border-zinc-700/60 text-zinc-300 hover:bg-zinc-800 hover:text-white hover:border-zinc-600"
                      }`}
                    >
                      {cityName}
                      {cityName === "Jaipur" && (
                        <span className="ml-1 text-[9px] font-bold text-amber-300">
                          ★ HQ
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Add Custom City Option when searched text is not in list */}
            {search.trim() && !exactMatch && (
              <div className="mb-2 pb-1.5 border-b border-zinc-800/80">
                <button
                  type="button"
                  onClick={() => handleSelect(search.trim())}
                  className="w-full flex items-center justify-between px-2.5 py-2 rounded-xl bg-orange-500/10 border border-orange-500/30 text-orange-300 hover:bg-orange-500/20 text-xs text-left transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-2 truncate">
                    <Plus size={14} className="text-orange-400 flex-shrink-0" />
                    <span className="truncate">
                      Use <strong>"{search.trim()}"</strong> as my city
                    </span>
                  </div>
                  <span className="text-[10px] text-orange-400/90 font-mono uppercase font-semibold flex-shrink-0">
                    Select
                  </span>
                </button>
              </div>
            )}

            {/* Scrollable City List */}
            <div className="max-h-48 overflow-y-auto space-y-0.5 pr-1">
              {filteredCities.length > 0 ? (
                filteredCities.map((item) => {
                  const isSelected = value === item.name;
                  return (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => handleSelect(item.name)}
                      className={`w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-xs text-left transition-all cursor-pointer ${
                        isSelected
                          ? "bg-orange-500/15 text-orange-400 font-semibold border border-orange-500/30"
                          : "text-zinc-200 hover:bg-zinc-800/80 hover:text-white"
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate">
                        <MapPin
                          size={13}
                          className={
                            isSelected ? "text-orange-400" : "text-zinc-500"
                          }
                        />
                        <span className="truncate">{item.name}</span>
                      </div>
                      <div className="flex items-center gap-1.5 flex-shrink-0">
                        {item.tag && (
                          <span
                            className={`text-[10px] px-1.5 py-0.5 rounded font-mono uppercase ${
                              item.tag === "HQ"
                                ? "bg-orange-500/20 text-orange-300 border border-orange-500/30 font-semibold"
                                : "bg-zinc-800 text-zinc-400"
                            }`}
                          >
                            {item.tag}
                          </span>
                        )}
                        {isSelected && (
                          <Check size={14} className="text-orange-400" />
                        )}
                      </div>
                    </button>
                  );
                })
              ) : (
                <div className="py-2.5 text-center text-xs text-zinc-500">
                  No standard city found matching "{search}"
                </div>
              )}
            </div>

            {/* Bottom bar: Manual entry option */}
            <div className="mt-2 pt-2 border-t border-zinc-800/80 flex items-center justify-between text-[11px] px-1">
              <button
                type="button"
                onClick={() => {
                  setManualMode(true);
                  setIsOpen(false);
                }}
                className="text-zinc-400 hover:text-orange-400 flex items-center gap-1.5 transition-colors cursor-pointer py-0.5"
              >
                <Pencil size={12} />
                <span>Type other city manually</span>
              </button>
              <span className="text-[10px] text-zinc-500 font-mono">
                {filteredCities.length} cities
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
