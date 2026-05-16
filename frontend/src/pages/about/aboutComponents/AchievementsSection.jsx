import { motion } from 'framer-motion';
import { Award, Mic, BookOpen, Code, Users, Star } from 'lucide-react';

const achievements = [
  {
    icon: Award,
    title: 'Java Full Stack Instructor',
    org: 'JECRC University',
    desc: 'Working as Java Full Stack Instructor since April 2025.',
  },
  {
    icon: Star,
    title: 'Full Stack Trainer Certification',
    org: 'TOPS Technologies, Ahmedabad',
    desc: 'Certified Trainer in Full Stack Development.',
  },
  {
    icon: BookOpen,
    title: 'Frontend & Backend Certificates',
    org: 'Sheriyans Coding School',
    desc: 'Achieved dual certifications in Frontend and Backend development.',
  },
];

const roles = [
  { icon: Mic, label: 'Public Speaker' },
  { icon: Users, label: 'Career Counsellor' },
  { icon: BookOpen, label: 'Mentor' },
  { icon: Code, label: 'Developer' },
  { icon: Award, label: 'Trainer & Instructor' },
];

export default function AchievementsSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-medium tracking-widest uppercase">
            Milestones
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-black text-white">
            Achievements &{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(90deg, #ff6a00, #ff8800)' }}
            >
              Roles
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Achievements */}
          <div className="space-y-4">
            {achievements.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  className="flex gap-4 p-5 rounded-2xl border border-white/10 bg-white/3 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{
                    borderColor: 'rgba(255,106,0,0.35)',
                    backgroundColor: 'rgba(255,106,0,0.05)',
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-orange-500/15 border border-orange-500/25 flex items-center justify-center">
                    <Icon size={18} className="text-orange-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm leading-snug">{item.title}</p>
                    <p className="text-orange-400/70 text-xs mt-0.5">{item.org}</p>
                    <p className="text-gray-500 text-xs mt-1">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Roles */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Roles I Play</h3>
            <div className="grid grid-cols-2 gap-3">
              {roles.map((role, i) => {
                const Icon = role.icon;
                return (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-white/3 group cursor-default"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    whileHover={{
                      scale: 1.03,
                      borderColor: 'rgba(255,106,0,0.4)',
                      backgroundColor: 'rgba(255,106,0,0.07)',
                      transition: { type: 'spring', stiffness: 300, damping: 20 },
                    }}
                  >
                    <Icon size={18} className="text-orange-400 shrink-0" />
                    <span className="text-gray-300 text-sm font-medium">{role.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
