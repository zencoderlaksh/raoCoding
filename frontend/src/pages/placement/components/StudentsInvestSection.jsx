import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle2, Briefcase, Star, Zap, TrendingUp, Shield, Award, GitBranch } from 'lucide-react';

const dreams = [
  'Getting internships',
  'Landing their first job',
  'Building confidence',
  'Becoming financially independent',
  'Creating a better future',
];

const orbitItems = [
  { label: 'Better Resume', icon: Award, angle: 0 },
  { label: 'Strong LinkedIn', icon: Briefcase, angle: 60 },
  { label: 'Interview Confidence', icon: Star, angle: 120 },
  { label: 'Internship Opportunities', icon: Zap, angle: 180 },
  { label: 'Industry Projects', icon: GitBranch, angle: 240 },
  { label: 'Career Growth', icon: TrendingUp, angle: 300 },
];

function OrbitItem({ item, index }) {
  const rad = (item.angle * Math.PI) / 180;
  const radius = 145;
  const x = Math.cos(rad) * radius;
  const y = Math.sin(rad) * radius;
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
      style={{ left: `calc(50% + ${x}px - 52px)`, top: `calc(50% + ${y}px - 24px)` }}
      className="absolute"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="flex items-center gap-2 px-3 py-2 rounded-xl glass-card border border-orange-500/20 cursor-default whitespace-nowrap"
        style={{ boxShadow: '0 0 12px rgba(255,122,0,0.15)' }}
      >
        <Icon size={13} className="text-orange-400 flex-shrink-0" />
        <span className="text-xs font-medium text-white">{item.label}</span>
      </motion.div>
    </motion.div>
  );
}

function CareerVisual() {
  return (
    <div className="relative w-full max-w-[420px] mx-auto" style={{ height: 420 }}>
      {/* Orbit rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-8 rounded-full border border-orange-500/10"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-16 rounded-full border border-orange-500/15"
      />

      {/* Animated connection lines */}
      <svg className="absolute inset-0 w-full h-full" style={{ overflow: 'visible' }}>
        {orbitItems.map((item, i) => {
          const rad = (item.angle * Math.PI) / 180;
          const r = 145;
          const cx = 210, cy = 210;
          return (
            <motion.line
              key={i}
              x1={cx}
              y1={cy}
              x2={cx + Math.cos(rad) * r}
              y2={cy + Math.sin(rad) * r}
              stroke="rgba(255,122,0,0.2)"
              strokeWidth="1"
              strokeDasharray="4 4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 + i * 0.1 }}
            />
          );
        })}
      </svg>

      {/* Center developer card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
      >
        <motion.div
          animate={{ boxShadow: ['0 0 20px rgba(255,122,0,0.3)', '0 0 40px rgba(255,122,0,0.6)', '0 0 20px rgba(255,122,0,0.3)'] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="w-20 h-20 rounded-2xl glass-card border border-orange-500/40 flex flex-col items-center justify-center gap-1"
        >
          <Shield size={24} className="text-orange-400" />
          <span className="text-[10px] font-semibold text-orange-400 text-center leading-tight">
            You
          </span>
        </motion.div>
      </motion.div>

      {/* Orbit items */}
      {orbitItems.map((item, i) => (
        <OrbitItem key={item.label} item={item} index={i} />
      ))}
    </div>
  );
}

export default function StudentsInvestSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative py-28 bg-black overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <motion.div
        className="absolute right-0 top-1/3 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'rgba(255,122,0,0.05)' }}
        animate={{ scale: [1, 1.4, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-orange-500/20 mb-8"
            >
              <span className="text-xs font-medium text-orange-400 tracking-widest uppercase">
                Our Philosophy
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
            >
              Students Don't Buy Courses.
              <br />
              <span className="text-gradient-orange">They Invest In Careers.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#A1A1AA] text-base leading-relaxed mb-6"
            >
              Students don't wake up dreaming about buying another course.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-[#E5E5E5] font-medium mb-5"
            >
              They dream about:
            </motion.p>

            <ul className="space-y-3 mb-8">
              {dreams.map((dream, i) => (
                <motion.li
                  key={dream}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <motion.div
                    animate={inView ? { scale: [0, 1.2, 1] } : {}}
                    transition={{ duration: 0.4, delay: 0.35 + i * 0.08 }}
                  >
                    <CheckCircle2 size={18} className="text-orange-400 flex-shrink-0" />
                  </motion.div>
                  <span className="text-[#E5E5E5] text-sm">{dream}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="p-5 rounded-2xl glass-card border border-orange-500/15"
            >
              <p className="text-[#A1A1AA] text-sm leading-relaxed">
                That's why our focus goes{' '}
                <span className="text-orange-400 font-semibold">beyond teaching</span>. We focus on
                helping students become{' '}
                <span className="text-white font-semibold">industry-ready professionals</span>.
              </p>
            </motion.div>
          </div>

          {/* Right side — career visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center justify-center"
          >
            <CareerVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
