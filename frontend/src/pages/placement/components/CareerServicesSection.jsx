import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FileText,
//   Linkedin,
  Code2,
  Mic,
  Globe,
  Briefcase,
  ChevronRight,
} from 'lucide-react';

const services = [
  {
    icon: FileText,
    title: 'Resume Building',
    tagline: 'ATS-friendly resume creation.',
    points: ['Resume reviews', 'Industry templates', 'Recruiter-focused optimization'],
    color: '#FF7A00',
  },
//   {
//     icon: Linkedin,
//     title: 'LinkedIn Optimization',
//     tagline: 'Build a profile recruiters actually notice.',
//     points: ['LinkedIn branding', 'Profile optimization', 'Networking strategies'],
//     color: '#FF8C00',
//   },
  {
    icon: Code2,
    title: 'Interview Preparation',
    tagline: 'Crack technical and HR interviews confidently.',
    points: ['DSA preparation', 'System design basics', 'HR rounds & communication coaching'],
    color: '#FF7A00',
  },
  {
    icon: Mic,
    title: 'Mock Interviews',
    tagline: 'Practice before the real opportunity arrives.',
    points: ['Live mock sessions', 'Detailed feedback', 'Confidence building'],
    color: '#FF8C00',
  },
  {
    icon: Globe,
    title: 'Portfolio Guidance',
    tagline: 'Build proof of your skills.',
    points: ['Real-world projects', 'GitHub optimization', 'Deployment & personal branding'],
    color: '#FF7A00',
  },
  {
    icon: Briefcase,
    title: 'Internship Assistance',
    tagline: 'Gain practical industry experience.',
    points: ['Internship guidance', 'Application support', 'Opportunity discovery'],
    color: '#FF8C00',
  },
];

function ServiceCard({ service, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.01 }}
      className="group relative rounded-2xl p-6 glass-card border border-white/[0.06] hover:border-orange-500/30 transition-all duration-500 overflow-hidden cursor-default"
    >
      {/* Card hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,122,0,0.08) 0%, transparent 70%)`,
        }}
      />

      {/* Animated top border */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(90deg, transparent, ${service.color}, transparent)`,
        }}
      />

      {/* Icon */}
      <motion.div
        whileHover={{ rotate: [0, -10, 10, 0] }}
        transition={{ duration: 0.4 }}
        className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-5"
        style={{
          background: `rgba(255,122,0,0.1)`,
          border: `1px solid rgba(255,122,0,0.2)`,
        }}
      >
        <Icon size={22} className="text-orange-400" />
      </motion.div>

      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-orange-300 transition-colors duration-300">
        {service.title}
      </h3>
      <p className="text-[#A1A1AA] text-sm mb-4 leading-relaxed">{service.tagline}</p>

      <ul className="space-y-2">
        {service.points.map((point) => (
          <li key={point} className="flex items-center gap-2 text-sm text-[#A1A1AA]">
            <ChevronRight size={13} className="text-orange-500 flex-shrink-0" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function CareerServicesSection() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true });

  return (
    <section className="relative py-28 bg-[#050505] overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      {/* Side orb */}
      <motion.div
        className="absolute -left-40 top-1/2 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'rgba(255,122,0,0.06)' }}
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-orange-500/20 mb-6"
          >
            <span className="text-xs font-medium text-orange-400 tracking-widest uppercase">
              Career Services
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
          >
            Everything You Need To{' '}
            <span className="text-gradient-orange">Become Employable</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#A1A1AA] text-lg max-w-xl mx-auto"
          >
            A great career requires much more than completing a course.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
