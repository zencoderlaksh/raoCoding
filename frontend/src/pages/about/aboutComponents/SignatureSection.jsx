// import { motion } from 'framer-motion';
// import TextPressure from './TextPressure';
// // import TextPressure from '../../../components/TextPressure';

// export default function SignatureSection() {
//   return (
//     <section
//       className="relative overflow-hidden"
//     // className='relative overflow-hidden w-full h-screen flex items-center justify-center bg-black'
//       style={{ minHeight: '100vh', background: '#000' }}
//     >
//       {/* Noise texture overlay */}
//       <div
//         className="absolute inset-0 pointer-events-none z-10"
//         style={{
//           opacity: 0.04,
//           backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
//           backgroundRepeat: 'repeat',
//           backgroundSize: '128px 128px',
//         }}
//       />

//       {/* Orange glow behind text */}
//       <motion.div
//         className="absolute inset-0 pointer-events-none flex items-center justify-center"
//         animate={{ opacity: [0.6, 1, 0.6] }}
//         transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
//       >
//         <div
//           className="w-[800px] h-[400px]"
//           style={{
//             background: 'radial-gradient(ellipse at center, rgba(255,106,0,0.18) 0%, rgba(255,80,0,0.08) 40%, transparent 70%)',
//             filter: 'blur(40px)',
//           }}
//         />
//       </motion.div>

//       {/* Outer ring pulse */}
//       <motion.div
//         className="absolute inset-0 pointer-events-none flex items-center justify-center"
//         animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.95, 1.05, 0.95] }}
//         transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
//       >
//         <div
//           className="w-[600px] h-[200px] rounded-full border border-orange-500/15"
//           style={{ filter: 'blur(8px)' }}
//         />
//       </motion.div>

//       {/* Centered content */}
//       <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4">
//         {/* Eyebrow label */}
//         <motion.div
//           className="mb-8"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <span className="px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-medium tracking-widest uppercase">
//             Signature
//           </span>
//         </motion.div>

//         {/* TextPressure container */}
//         <motion.div
//           className="w-full"
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           <div style={{ position: 'relative', height: '300px', width: '100%' }}>
//             <TextPressure
//               text="RaoCoding"
//               flex
//               alpha={false}
//               stroke={false}
//               width
//               weight
//               italic
//               textColor="#ffffff"
//               strokeColor="#ff6a00"
//               minFontSize={36}
//             />
//           </div>
//         </motion.div>

//         {/* Tagline */}
//         <motion.p
//           className="mt-8 text-gray-600 text-sm tracking-[0.3em] uppercase text-center"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//         >
//           Code. Teach. Inspire.
//         </motion.p>

//         {/* Horizontal divider line */}
//         <motion.div
//           className="mt-10 flex items-center gap-4 w-full max-w-md"
//           initial={{ opacity: 0, scaleX: 0 }}
//           whileInView={{ opacity: 1, scaleX: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.5 }}
//         >
//           <div className="flex-1 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />
//           <span className="text-orange-500/60 text-xs">◆</span>
//           <div className="flex-1 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />
//         </motion.div>
//       </div>
//     </section>
//   );
// }
