import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Frontend Developer",
    company: "CrossPoles Network",
    location: "Jaipur",
    period: "Jan 2021 – Mar 2022",
    description: [
      "Spearheaded development of a dynamic virtual event platform using React.js with responsive and interactive UI tailored to client specifications.",
      "Implemented real-time video streaming, attendee engagement tools, and customizable event dashboards ensuring seamless cross-device experience.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "React.js"],
  },
  {
    role: "Full Stack Developer",
    company: "J Bulls Infotech",
    location: "Ahmedabad",
    period: "Mar 2022 – Feb 2023",
    description: [
      'Led full-stack development of "EventHub Pro" — a comprehensive event management web app for organizers to streamline planning, ticketing, and attendee interactions.',
      "Utilized MongoDB for scalable data storage, Express.js and Node.js for robust backend APIs handling user authentication and event workflows.",
    ],
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
  },
  {
    role: "Full Stack Developer",
    company: "Code Epsilon Pvt Ltd",
    location: "Ahmedabad",
    period: "Apr 2023 – Dec 2024",
    description: [
      'Built "GeoCX" — a robust monitoring platform overseeing ~100 engineering sites in the UK via web and mobile apps with real-time worker tracking and geofencing.',
      "Implemented JWT authentication, GPS-based alerts, analytics, and performance optimizations for reliability and compliance in high-stakes environments.",
    ],
    tech: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "JWT",
      "Geofencing",
      "GPS APIs",
    ],
    highlight: "US & UK Clients",
  },
  {
    role: "Tech Educator & Mentor",
    company: "Groot Academy and Software",
    location: "Jaipur",
    period: "Dec 2024 – Present",
    description: [
      "Trained 200+ students in C/C++, Java, Spring Boot, DSA, and MERN stack through hands-on sessions with real-world project builds.",
      "Provided career counseling, resume building, and interview prep — helping students secure roles at top IT firms. Introduced AI tools and microservices.",
    ],
    tech: ["C/C++", "Java", "Spring Boot", "DSA", "MERN Stack", "AI Tools"],
    highlight: "200+ Students",
  },
];

function SpotlightCard({ exp, index }) {
  const cardRef = useRef(null);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, opacity: 0 });
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const animFrameRef = useRef(0);

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;

    cancelAnimationFrame(animFrameRef.current);

    animFrameRef.current = requestAnimationFrame(() => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();

      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      const rotateX =
        ((e.clientY - rect.top - rect.height / 2) / rect.height) * -10;
      const rotateY =
        ((e.clientX - rect.left - rect.width / 2) / rect.width) * 10;

      setSpotlight({ x, y, opacity: 1 });
      setTilt({ rotateX, rotateY });
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setSpotlight((s) => ({ ...s, opacity: 0 }));
    setTilt({ rotateX: 0, rotateY: 0 });
  }, []);

  return (
    <motion.div
      ref={cardRef}
      className="group relative"
      style={{ perspective: "1000px" }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        type: "spring",
        stiffness: 70,
        damping: 18,
        delay: index * 0.1,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: tilt.rotateX,
        rotateY: tilt.rotateY,
        transition: { type: "spring", stiffness: 200, damping: 30 },
      }}
    >
      <div
        className="relative rounded-2xl p-6 border border-white/10 overflow-hidden transition-all duration-300 group-hover:border-orange-500/40 h-full"
        style={{
          background: "rgba(12,12,12,0.9)",
          backdropFilter: "blur(16px)",
          boxShadow: "0 0 0 1px rgba(255,255,255,0.04)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Spotlight */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 200px at ${spotlight.x}% ${spotlight.y}%, rgba(255,106,0,0.15), transparent 70%)`,
            opacity: spotlight.opacity,
          }}
        />

        {/* Border glow */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(ellipse at ${spotlight.x}% 0%, rgba(255,106,0,0.12) 0%, transparent 50%)`,
          }}
        />

        <div className="relative z-10">
          {exp.highlight && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-500/20 border border-orange-500/40 text-orange-300 mb-4">
              {exp.highlight}
            </span>
          )}

          <h3 className="text-white text-xl font-bold mb-1">{exp.role}</h3>
          <p className="text-orange-400 font-semibold text-sm mb-2">
            {exp.company}
          </p>

          <div className="flex flex-wrap gap-3 mb-4">
            <div className="flex items-center gap-1 text-gray-500 text-xs">
              <Calendar size={12} />
              <span>{exp.period}</span>
            </div>
            <div className="flex items-center gap-1 text-gray-500 text-xs">
              <MapPin size={12} />
              <span>{exp.location}</span>
            </div>
          </div>

          <ul className="space-y-2 mb-5">
            {exp.description.map((desc, i) => (
              <li key={i} className="flex gap-2 text-gray-400 text-sm">
                <span className="text-orange-500 mt-1">›</span>
                <span>{desc}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-1.5">
            {exp.tech.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-full text-xs border border-white/10 bg-white/5 text-gray-300 group-hover:border-orange-500/25 transition"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ExperienceSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at right, rgba(255,106,0,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm uppercase">
            Work History
          </span>

          <h2 className="mt-4 text-4xl font-black text-white">
            Professional{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
              Experience
            </span>
          </h2>

          <p className="mt-3 text-gray-500 text-lg">
            Hover over any card for interaction
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {experiences.map((exp, i) => (
            <SpotlightCard key={i} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}