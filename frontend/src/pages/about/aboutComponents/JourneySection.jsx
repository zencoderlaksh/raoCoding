import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, MapPin } from 'lucide-react';

const journeyItems = [
  {
    year: 'Jan 2021',
    endYear: 'Mar 2022',
    title: 'Frontend Developer',
    org: 'CrossPoles Network',
    location: 'Jaipur',
    icon: Briefcase,
    color: '#ff6a00',
    description:
      'Spearheaded the development of a dynamic virtual event platform using React.js, creating responsive and interactive user interfaces. Collaborated with cross-functional teams to implement real-time video streaming, attendee engagement tools, and customizable event dashboards.',
    tags: ['HTML', 'CSS', 'JavaScript', 'React.js'],
  },
  {
    year: 'Mar 2022',
    endYear: 'Feb 2023',
    title: 'Full Stack Developer',
    org: 'J Bulls Infotech',
    location: 'Ahmedabad',
    icon: Briefcase,
    color: '#ff8800',
    description:
      'Led full-stack development of "EventHub Pro," a comprehensive event management web app for organizers to streamline planning, ticketing, and attendee interactions. Utilized MongoDB, Express.js, and Node.js for robust backend APIs handling user authentication.',
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
  },
  {
    year: 'Apr 2023',
    endYear: 'Dec 2024',
    title: 'Full Stack Developer',
    org: 'Code Epsilon Pvt Ltd',
    location: 'Ahmedabad',
    icon: Briefcase,
    color: '#ff6a00',
    description:
      'Contributed to projects for US and UK clients including "GeoCX" — a robust monitoring platform overseeing nearly 100 engineering sites. Built full-stack features with geofencing, real-time worker tracking, task assignments, and JWT authentication.',
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'GPS/Geofencing'],
  },
  {
    year: 'Dec 2024',
    endYear: 'Present',
    title: 'Tech Educator & Mentor',
    org: 'Groot Academy and Software',
    location: 'Jaipur',
    icon: GraduationCap,
    color: '#ff8800',
    description:
      'Trained over 200 students in C/C++, Java, Spring Boot, DSA, and MERN stack through hands-on sessions with real-world projects. Provided career counseling, resume building, and interview preparation. Introduced cutting-edge AI tools and trending technologies.',
    tags: ['C/C++', 'Java', 'Spring Boot', 'DSA', 'MERN Stack', 'AI Tools'],
  },
  {
    year: 'Apr 2025',
    endYear: 'Present',
    title: 'Java Full Stack Instructor',
    org: 'JECRC University',
    location: 'Jaipur',
    icon: Award,
    color: '#ff6a00',
    description:
      'Working as Java Full Stack Instructor, delivering industry-aligned curriculum covering backend architectures, data structures, algorithms, and full-stack ecosystems to university students.',
    tags: ['Java', 'Full Stack', 'DSA', 'Spring Boot'],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 80, damping: 18 },
  },
};

export default function JourneySection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 w-px h-full"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,106,0,0.3), transparent)' }}
      />

      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-medium tracking-widest uppercase">
            Timeline
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-black text-white">
            Our{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(90deg, #ff6a00, #ff8800)' }}
            >
              Journey
            </span>
          </h2>
          <p className="mt-3 text-gray-500 text-lg max-w-xl mx-auto">
            From developer to educator — a path built on passion, code, and community.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* Vertical line */}
          <div
            className="hidden sm:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(to bottom, rgba(255,106,0,0.5), rgba(255,136,0,0.2), transparent)' }}
          />

          {journeyItems.map((item, index) => {
            const Icon = item.icon;
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                className={`relative flex flex-col sm:flex-row items-start sm:items-center mb-10 ${
                  isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
                variants={itemVariants}
              >
                {/* Card */}
                <motion.div
                  className={`w-full sm:w-[calc(50%-2.5rem)] group relative ${
                    isLeft ? 'sm:mr-auto sm:pr-8' : 'sm:ml-auto sm:pl-8'
                  }`}
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                >
                  <div
                    className="relative rounded-2xl p-6 border border-white/10 overflow-hidden transition-all duration-300 group-hover:border-orange-500/40"
                    style={{
                      background: 'rgba(15,15,15,0.8)',
                      backdropFilter: 'blur(12px)',
                      boxShadow: '0 0 0 1px rgba(255,255,255,0.04)',
                    }}
                  >
                    {/* Hover glow */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: 'radial-gradient(ellipse at top left, rgba(255,106,0,0.08) 0%, transparent 60%)',
                      }}
                    />

                    <div className="relative z-10">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div>
                          <h3 className="text-white font-bold text-lg leading-tight">{item.title}</h3>
                          <p className="text-orange-400 font-medium text-sm mt-0.5">{item.org}</p>
                        </div>
                        <div className="flex flex-col items-end shrink-0">
                          <span className="text-xs text-gray-500 whitespace-nowrap">{item.year}</span>
                          <span className="text-xs text-gray-600 whitespace-nowrap">{item.endYear}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 mb-3">
                        <MapPin size={12} className="text-gray-600" />
                        <span className="text-gray-600 text-xs">{item.location}</span>
                      </div>

                      <p className="text-gray-400 text-sm leading-relaxed mb-4">{item.description}</p>

                      <div className="flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-0.5 rounded-full text-xs font-medium border border-orange-500/25 bg-orange-500/10 text-orange-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Timeline dot */}
                <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                  <motion.div
                    className="w-10 h-10 rounded-full border-2 border-orange-500 flex items-center justify-center z-10"
                    style={{ background: '#0a0a0a', boxShadow: '0 0 20px rgba(255,106,0,0.4)' }}
                    whileHover={{ scale: 1.2 }}
                  >
                    <Icon size={16} className="text-orange-400" />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
