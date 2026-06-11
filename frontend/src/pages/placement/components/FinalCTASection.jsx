import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { Calendar, ArrowRight, Sparkles, Star } from 'lucide-react';

function Particle({ style }) {
  return (
    <motion.div
      className="absolute w-1 h-1 rounded-full bg-orange-500/60 pointer-events-none"
      style={style}
      animate={{
        y: [0, -80, 0],
        opacity: [0, 1, 0],
        scale: [0, 1.5, 0],
      }}
      transition={{
        duration: 3 + Math.random() * 3,
        repeat: Infinity,
        delay: Math.random() * 3,
        ease: 'easeInOut',
      }}
    />
  );
}

export default function FinalCTASection() {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 25 });
  const [particles] = useState(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${5 + Math.random() * 90}%`,
      top: `${10 + Math.random() * 80}%`,
    }))
  );

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handle = (e) => {
      const rect = el.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left - rect.width / 2);
      mouseY.set(e.clientY - rect.top - rect.height / 2);
    };
    el.addEventListener('mousemove', handle);
    return () => el.removeEventListener('mousemove', handle);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={containerRef}
      className="relative py-32 overflow-hidden"
      style={{ background: '#000' }}
    >
      {/* Animated bg gradient */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(255,122,0,0.12) 0%, transparent 70%)',
            'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(255,140,0,0.18) 0%, transparent 70%)',
            'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(255,122,0,0.12) 0%, transparent 70%)',
          ],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Mouse follow */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          x: springX,
          y: springY,
          background: 'radial-gradient(circle, rgba(255,122,0,0.1) 0%, transparent 70%)',
          left: '50%',
          top: '50%',
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Particles */}
      {particles.map((p) => (
        <Particle key={p.id} style={{ left: p.left, top: p.top }} />
      ))}

      {/* Grid */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      {/* Decorative orbs */}
      <motion.div
        className="absolute -left-32 top-1/2 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'rgba(255,122,0,0.1)' }}
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute -right-32 top-1/2 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'rgba(255,140,0,0.08)' }}
        animate={{ scale: [1.3, 1, 1.3] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-orange-500/30 mb-8"
          style={{ boxShadow: '0 0 20px rgba(255,122,0,0.2)' }}
        >
          <Star size={13} className="text-orange-400" fill="currentColor" />
          <span className="text-xs font-medium text-orange-400 tracking-widest uppercase">
            Start Your Journey
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
        >
          Ready To Build
          <br />
          <span className="text-gradient-orange">Your Career?</span>
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-[#A1A1AA] max-w-xl mx-auto leading-relaxed mb-12"
        >
          Join a community that focuses on your{' '}
          <span className="text-[#E5E5E5]">future</span>, not just your course completion.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="group relative flex items-center gap-3 px-9 py-4 rounded-xl text-black font-semibold text-base overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #FF7A00, #FF8C00)',
              boxShadow: '0 0 30px rgba(255,122,0,0.4), 0 0 60px rgba(255,122,0,0.2)',
            }}
          >
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: 'linear-gradient(135deg, #FF8C00, #FFB347)' }}
            />
            <span className="relative flex items-center gap-3">
              <Calendar size={18} />
              Book Free Career Consultation
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, borderColor: 'rgba(255,122,0,0.5)' }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center gap-3 px-9 py-4 rounded-xl glass-card border border-white/10 text-white font-semibold text-base transition-all duration-300"
          >
            <Sparkles size={18} className="text-orange-400" />
            Start Learning Today
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform text-orange-400"
            />
          </motion.button>
        </motion.div>

        {/* Trust note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 text-xs text-[#A1A1AA]"
        >
          No commitment required. Free consultation. Real guidance.
        </motion.p>
      </div>
    </section>
  );
}
