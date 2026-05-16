import { motion } from 'framer-motion';

const techStack = [
  { name: 'C Language', level: 90 },
  { name: 'C++ Language', level: 88 },
  { name: 'Java Core + Advanced', level: 92 },
  { name: 'Spring Boot', level: 85 },
  { name: 'MERN Stack', level: 90 },
  { name: 'DSA', level: 87 },
];

const tools = [
  'Github', 'Gitlab', 'VS Code', 'IntelliJ', 'Cursor',
  'MySQL', 'MongoDB', 'Netlify', 'Vercel', 'Heroku', 'Render',
  'Canva', 'Figma', 'Adobe Photoshop',
  'ChatGPT', 'Grok', 'Gemini', 'Claude', 'GitHub Copilot',
];

export default function TechStackSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at left, rgba(255,106,0,0.07) 0%, transparent 60%)',
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
          <span className="px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-medium tracking-widest uppercase">
            Skills
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-black text-white">
            Tech{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(90deg, #ff6a00, #ff8800)' }}
            >
              Stack
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Skills with bars */}
          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-white font-bold text-lg mb-6">Core Competencies</h3>
            {techStack.map((skill, i) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1.5">
                  <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                  <span className="text-orange-400 text-sm font-mono">{skill.level}%</span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: 'linear-gradient(90deg, #ff6a00, #ff8800)' }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.1, ease: 'easeOut' }}
                  />
                </div>
              </div>
            ))}
          </motion.div>

          {/* Tools cloud */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-white font-bold text-lg mb-6">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool, i) => (
                <motion.span
                  key={tool}
                  className="px-3 py-1.5 rounded-lg text-sm border border-white/10 bg-white/4 text-gray-300 cursor-default"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  whileHover={{
                    borderColor: 'rgba(255,106,0,0.5)',
                    backgroundColor: 'rgba(255,106,0,0.1)',
                    color: '#ff8800',
                    scale: 1.05,
                    transition: { duration: 0.15 },
                  }}
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
