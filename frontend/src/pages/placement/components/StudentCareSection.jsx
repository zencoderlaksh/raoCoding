import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart, HelpCircle, Flame, Layout, Send, TrendingUp } from 'lucide-react';

const supportCards = [
  {
    icon: HelpCircle,
    title: 'Career Confusion',
    desc: "Not sure which path to take? We'll help you map your journey.",
    delay: 0,
  },
  {
    icon: Flame,
    title: 'Interview Fear',
    desc: 'We turn anxiety into confidence with structured practice.',
    delay: 0.1,
  },
  {
    icon: Heart,
    title: 'Self-Doubt',
    desc: 'Every developer felt this. We help you push through it.',
    delay: 0.2,
  },
  {
    icon: Layout,
    title: 'Portfolio Building',
    desc: 'We guide you to build projects that actually impress recruiters.',
    delay: 0.3,
  },
  {
    icon: Send,
    title: 'Internship Preparation',
    desc: 'From application to offer — we support every step.',
    delay: 0.4,
  },
  {
    icon: TrendingUp,
    title: 'Professional Growth',
    desc: 'Continuous mentorship as you grow in your career.',
    delay: 0.5,
  },
];

function SupportCard({ card, inView }) {
  const Icon = card.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: card.delay }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group relative p-6 rounded-2xl glass-card border border-white/[0.06] hover:border-orange-500/25 transition-all duration-500 cursor-default"
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,122,0,0.06) 0%, transparent 70%)' }}
      />

      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
        style={{
          background: 'rgba(255,122,0,0.1)',
          border: '1px solid rgba(255,122,0,0.2)',
        }}
      >
        <Icon size={20} className="text-orange-400" />
      </div>

      <h4 className="text-base font-semibold text-white mb-2 group-hover:text-orange-300 transition-colors duration-300">
        {card.title}
      </h4>
      <p className="text-sm text-[#A1A1AA] leading-relaxed">{card.desc}</p>
    </motion.div>
  );
}

export default function StudentCareSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative py-28 bg-[#050505] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      <motion.div
        className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'rgba(255,122,0,0.04)' }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-orange-500/20 mb-6"
          >
            <span className="text-xs font-medium text-orange-400 tracking-widest uppercase">
              Student Support
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Your Success{' '}
            <span className="text-gradient-orange">Matters To Us</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#A1A1AA] text-lg max-w-xl mx-auto"
          >
            You're not just another enrollment number.
            <br />
            <span className="text-[#E5E5E5]">We support students through every challenge.</span>
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {supportCards.map((card) => (
            <SupportCard key={card.title} card={card} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
