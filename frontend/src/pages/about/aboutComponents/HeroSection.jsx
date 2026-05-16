// import { motion } from 'framer-motion';
// import { MapPin, Mail, Phone, GraduationCap, Code2, Users } from 'lucide-react';

// const stats = [
//   { value: '4+', label: 'Years Experience', icon: Code2 },
//   { value: '200+', label: 'Students Trained', icon: Users },
//   { value: '4', label: 'Companies', icon: GraduationCap },
// ];

// export default function HeroSection() {
//   return (
//     <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pb-20">
//       {/* Animated background glow */}
//       <div className="absolute inset-0 pointer-events-none">
//         <motion.div
//           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
//           style={{
//             background: 'radial-gradient(ellipse at center, rgba(255,106,0,0.15) 0%, rgba(255,136,0,0.08) 40%, transparent 70%)',
//           }}
//           animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
//           transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
//         />
//         <motion.div
//           className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full"
//           style={{
//             background: 'radial-gradient(ellipse at center, rgba(255,106,0,0.08) 0%, transparent 70%)',
//           }}
//           animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.7, 0.4] }}
//           transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
//         />
//       </div>

//       {/* Grid overlay */}
//       <div
//         className="absolute inset-0 pointer-events-none opacity-[0.03]"
//         style={{
//           backgroundImage: 'linear-gradient(rgba(255,106,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,106,0,0.5) 1px, transparent 1px)',
//           backgroundSize: '60px 60px',
//         }}
//       />

//       <div className="relative z-10 max-w-6xl w-full mx-auto">
//         {/* Eyebrow */}
//         <motion.div
//           className="flex justify-center mb-6"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <span className="px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-medium tracking-widest uppercase">
//             About Me
//           </span>
//         </motion.div>

//         {/* Main heading */}
//         <motion.h1
//           className="text-center text-5xl sm:text-7xl lg:text-8xl font-black text-white leading-none mb-6"
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.1 }}
//         >
//           Lakshay{' '}
//           <span
//             className="text-transparent bg-clip-text"
//             style={{ backgroundImage: 'linear-gradient(90deg, #ff6a00, #ff8800)' }}
//           >
//             Yadav
//           </span>
//         </motion.h1>

//         {/* Role chips */}
//         <motion.div
//           className="flex flex-wrap justify-center gap-2 mb-8"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//         >
//           {['Full Stack Developer', 'Tech Educator', 'Mentor', 'Public Speaker'].map((role) => (
//             <span
//               key={role}
//               className="px-3 py-1 rounded-full text-sm bg-white/5 border border-white/10 text-gray-300"
//             >
//               {role}
//             </span>
//           ))}
//         </motion.div>

//         {/* Bio */}
//         <motion.p
//           className="text-center text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed mb-12"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//         >
//           Dynamic IT professional with over 4 years of hands-on experience as a Frontend and Full Stack Developer,
//           mastering Java, Spring Boot, DSA, C/C++, MERN stack, and WordPress. Passionate mentor empowering aspiring
//           developers through practical, industry-aligned training.
//         </motion.p>

//         {/* Info cards */}
//         <motion.div
//           className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto mb-12"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//         >
//           {[
//             { icon: MapPin, text: 'Jaipur, Rajasthan' },
//             { icon: Mail, text: 'yadavlakshya86@gmail.com' },
//             { icon: Phone, text: '8112204612' },
//             { icon: GraduationCap, text: 'B.Tech, Amity University' },
//           ].map(({ icon: Icon, text }) => (
//             <div
//               key={text}
//               className="flex flex-col items-center gap-2 p-3 rounded-xl border border-white/8 bg-white/4 backdrop-blur-sm"
//             >
//               <Icon size={16} className="text-orange-400 shrink-0" />
//               <span className="text-gray-400 text-xs text-center leading-snug">{text}</span>
//             </div>
//           ))}
//         </motion.div>

//         {/* Stats */}
//         <motion.div
//           className="flex justify-center gap-6 sm:gap-12"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.5 }}
//         >
//           {stats.map(({ value, label, icon: Icon }, i) => (
//             <motion.div
//               key={label}
//               className="flex flex-col items-center gap-1"
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
//             >
//               <Icon size={20} className="text-orange-500 mb-1" />
//               <span className="text-3xl sm:text-4xl font-black text-white">{value}</span>
//               <span className="text-gray-500 text-xs text-center">{label}</span>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>

//       {/* Scroll indicator */}
//       <motion.div
//         className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.2 }}
//       >
//         <span className="text-gray-600 text-xs tracking-widest uppercase">Scroll</span>
//         <motion.div
//           className="w-px h-8 bg-gradient-to-b from-orange-500 to-transparent"
//           animate={{ scaleY: [0, 1, 0], originY: 0 }}
//           transition={{ duration: 1.5, repeat: Infinity }}
//         />
//       </motion.div>
//     </section>
//   );
// }









import { motion, useInView, animate } from "framer-motion";
import "@fontsource/syne";
import "@fontsource/space-grotesk";
import "@fontsource/dancing-script";
import {
  MapPin,
  Mail,
  Phone,
  GraduationCap,
  Code2,
  Users,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 4, suffix: "+", label: "Years Experience", icon: Code2 },
  { value: 200, suffix: "+", label: "Students Trained", icon: Users },
  { value: 4, suffix: "", label: "Companies", icon: GraduationCap },
];

/* ================= COUNTER ================= */

function Counter({ from = 0, to, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(from, to, {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(value) {
        setCount(Math.floor(value));
      },
    });

    return () => controls.stop();
  }, [isInView, from, to]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function HeroSection() {
 
  return (
    <section className="relative min-h-screen overflow-hidden bg-black flex items-center justify-center px-4 py-24">

      {/* ================= BACKGROUND ================= */}

      {/* giant breathing glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          opacity: [0.4, 1, 0.4],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div
          className="absolute top-1/2 left-1/2 w-[1000px] h-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(255,106,0,0.15) 0%, rgba(255,106,0,0.06) 35%, transparent 70%)",
          }}
        />
      </motion.div>

      {/* animated top orb */}
      <motion.div
        className="absolute top-[10%] right-[10%] w-[300px] h-[300px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,136,0,0.15) 0%, transparent 70%)",
        }}
        animate={{
          y: [-40, 40, -40],
          x: [-20, 20, -20],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* animated bottom orb */}
      <motion.div
        className="absolute bottom-[10%] left-[10%] w-[250px] h-[250px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,106,0,0.12) 0%, transparent 70%)",
        }}
        animate={{
          y: [30, -30, 30],
          x: [20, -20, 20],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,106,0,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,106,0,0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* noise texture */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.1' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 max-w-7xl w-full mx-auto">

        {/* top badge */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-8"
        >
          <div className="px-5 py-2 rounded-full border border-orange-500/20 bg-orange-500/10 backdrop-blur-xl">
            <span className="text-orange-400 text-xs sm:text-sm tracking-[0.3em] uppercase">
              About Me
            </span>
          </div>
        </motion.div>

        {/* ================= NAME ================= */}

        <div className="overflow-hidden">

          <motion.h1
            initial={{ y: 140, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-center font-black leading-[0.85] tracking-tight"
          >
            <motion.span
    style={{
  fontFamily: "'Dancing Script', cursive",
  fontWeight: 700,
  letterSpacing: "0.02em",
}}
              animate={{
                textShadow: [
                  "0 0 0px rgba(255,106,0,0)",
                  "0 0 30px rgba(255,106,0,0.35)",
                  "0 0 0px rgba(255,106,0,0)",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="block text-white text-5xl sm:text-7xl md:text-8xl lg:text-[9rem]"
            >
              Lakshay
            </motion.span>

            <motion.span
   style={{
//   fontFamily: "Dancing Script, cursive",
  fontWeight: 700,
  letterSpacing: "0.02em",
   backgroundImage:
                  "linear-gradient(90deg, #ff6a00 0%, #ff9500 100%)",
}}
              initial={{ x: 120, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 1,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="block text-transparent bg-clip-text text-5xl sm:text-7xl md:text-8xl lg:text-[9rem]"
            //   style={{
            //     backgroundImage:
            //       "linear-gradient(90deg, #ff6a00 0%, #ff9500 100%)",
            //   }}
            >
              Yadav
            </motion.span>
          </motion.h1>
        </div>

        {/* glowing line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.4,
          }}
          className="origin-center h-px w-[220px] sm:w-[300px] mx-auto mt-8"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(255,106,0,0.8), transparent)",
          }}
        />

        {/* ================= ROLES ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
          className="flex flex-wrap justify-center gap-3 mt-10"
        >
          {[
            "Full Stack Developer",
            "Tech Educator",
            "Mentor",
            "Public Speaker",
          ].map((role, i) => (
            <motion.div
              key={role}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.6 + i * 0.08,
              }}
              whileHover={{
                y: -6,
                scale: 1.05,
              }}
              className="relative overflow-hidden px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-xl"
            >
              <motion.div
                className="absolute inset-0 opacity-0 hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,106,0,0.15), transparent)",
                }}
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <span className="relative z-10 text-sm text-gray-300">
                {role}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* ================= BIO ================= */}

        <motion.p
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 1,
            delay: 0.8,
          }}
          className="max-w-4xl mx-auto mt-10 text-center text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed px-2"
        >
          Dynamic IT professional with over 4 years of hands-on
          experience as a Frontend and Full Stack Developer,
          mastering Java, Spring Boot, DSA, C/C++, MERN stack,
          and WordPress. Passionate mentor empowering aspiring
          developers through practical, industry-aligned training.
        </motion.p>

        {/* ================= INFO CARDS ================= */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16 max-w-6xl mx-auto">

          {[
            { icon: MapPin, text: "Jaipur, Rajasthan" },
            { icon: Mail, text: "yadavlakshya86@gmail.com" },
            { icon: Phone, text: "8112204612" },
            { icon: GraduationCap, text: "B.Tech, Amity University" },
          ].map(({ icon: Icon, text }, i) => (
            <motion.div
              key={text}
              initial={{
                opacity: 0,
                y: 80,
                rotateX: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
                rotateX: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 1 + i * 0.12,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6"
            >

              {/* animated border glow */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(120deg, transparent, rgba(255,106,0,0.12), transparent)",
                }}
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <div className="relative z-10 flex flex-col items-center text-center gap-4">
                <motion.div
                  whileHover={{
                    rotate: 10,
                    scale: 1.1,
                  }}
                  className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center"
                >
                  <Icon size={22} className="text-orange-400" />
                </motion.div>

                <span className="text-gray-300 text-sm break-all">
                  {text}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= STATS ================= */}

        <div className="flex flex-wrap justify-center gap-8 sm:gap-16 mt-20">

          {stats.map(({ value, suffix, label, icon: Icon }, i) => (
            <motion.div
              key={label}
              initial={{
                opacity: 0,
                scale: 0.5,
                y: 50,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 1.3 + i * 0.15,
                type: "spring",
              }}
              whileHover={{
                scale: 1.08,
                y: -8,
              }}
              className="relative flex flex-col items-center"
            >

              {/* pulse glow */}
              <motion.div
                className="absolute inset-0 rounded-full blur-2xl"
                animate={{
                  opacity: [0.2, 0.5, 0.2],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                style={{
                  background:
                    "radial-gradient(circle, rgba(255,106,0,0.2), transparent)",
                }}
              />

              <motion.div
                whileHover={{
                  rotate: 8,
                }}
                className="relative z-10 mb-4 w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center backdrop-blur-xl"
              >
                <Icon size={26} className="text-orange-500" />
              </motion.div>

              <span className="relative z-10 text-5xl sm:text-6xl font-black text-white">
                <Counter to={value} suffix={suffix} />
              </span>

              <span className="relative z-10 mt-2 text-gray-500 text-xs sm:text-sm tracking-wide text-center">
                {label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ================= SCROLL INDICATOR ================= */}

      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        {/* <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-gray-600">
          Scroll
        </span> */}

        <motion.div
          className="w-px h-12 bg-gradient-to-b from-orange-500 to-transparent"
          animate={{
            scaleY: [0, 1, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
          }}
        />
      </motion.div>
    </section>
  );
}