import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';

const guarantees = [
  'Dedicated mentorship',
  'Career guidance',
  'Mock interviews',
  'Resume support',
  'LinkedIn optimization',
  'Portfolio reviews',
  'Internship assistance',
  'Continuous motivation',
];

export default function WhyRaoCodingSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative py-28 bg-black overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      <motion.div
        className="absolute left-1/2 -translate-x-1/2 top-0 w-[800px] h-[400px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'rgba(255,122,0,0.04)' }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-orange-500/20 mb-6"
          >
            <span className="text-xs font-medium text-orange-400 tracking-widest uppercase">
              Our Promise
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white leading-tight"
          >
            We Don't Promise Jobs.
            <br />
            <span className="text-gradient-orange">We Promise Support.</span>
          </motion.h2>
        </div>

        {/* Main glass card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative rounded-3xl p-8 md:p-12 overflow-hidden animated-border"
          style={{
            background: 'rgba(255,255,255,0.02)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,122,0,0.15)',
            boxShadow: '0 0 60px rgba(255,122,0,0.08)',
          }}
        >
          {/* Inner glow */}
          <div
            className="absolute inset-0 pointer-events-none rounded-3xl"
            style={{
              background:
                'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(255,122,0,0.06) 0%, transparent 70%)',
            }}
          />

          {/* Honesty note */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-start gap-3 p-4 rounded-xl mb-8"
            style={{
              background: 'rgba(255,122,0,0.06)',
              border: '1px solid rgba(255,122,0,0.15)',
            }}
          >
            <AlertCircle size={18} className="text-orange-400 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-[#A1A1AA] leading-relaxed">
              At Rao Coding School, we believe in{' '}
              <span className="text-orange-400 font-semibold">transparency</span>. We cannot
              guarantee jobs because hiring decisions are made by companies. What we{' '}
              <span className="text-white font-semibold">can</span> guarantee is:
            </p>
          </motion.div>

          {/* Guarantees grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
            {guarantees.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.06 }}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/[0.03] transition-colors"
              >
                <CheckCircle2 size={16} className="text-orange-400 flex-shrink-0" />
                <span className="text-[#E5E5E5] text-sm">{item}</span>
              </motion.div>
            ))}
          </div>

          {/* Goal statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex items-center gap-4 p-5 rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(255,122,0,0.1), rgba(255,140,0,0.05))',
              border: '1px solid rgba(255,122,0,0.2)',
            }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(255,122,0,0.15)' }}
            >
              <ShieldCheck size={20} className="text-orange-400" />
            </div>
            <p className="text-sm text-[#E5E5E5] leading-relaxed">
              Our goal is simple:{' '}
              <span className="text-white font-semibold">
                Help students become genuinely employable.
              </span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
