import React from 'react';
import { motion } from 'framer-motion';

const LeaderCard = ({ name, role, image, index }) => {
  // Determine if card comes from left or right based on index
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        x: isEven ? -200 : 200, // Even cards from left, odd from right
        rotate: isEven ? -10 : 10 
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        rotate: 0 
      }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ 
        type: "spring", 
        stiffness: 50, 
        damping: 20,
        duration: 0.8 
      }}
      className="flex flex-col items-center mb-24 last:mb-0"
    >
      <div className="relative group w-72 h-[400px] md:w-96 md:h-[550px] bg-[#1a1a1a] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
        {/* Background Accent */}
        <div className="absolute inset-0 bg-gradient-to-b from-orange-600/20 to-transparent opacity-50" />
        
        {/* Image */}
        <img 
          src={image} 
          alt={name} 
          className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
        />

        {/* Info Overlay */}
        <div className="absolute bottom-0 left-0 p-8 text-white w-full bg-gradient-to-t from-black via-black/60 to-transparent">
          <h3 className="text-2xl font-bold tracking-tight">{name}</h3>
          <p className="text-gray-400 font-medium">{role}</p>
          
          {/* <div className="mt-6 flex justify-end">
             <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                <span className="text-xl">→</span>
             </div>
          </div> */}
        </div>
      </div>
    </motion.div>
  );
};

const LeadersSection = () => {
  const leaders = [
    { name: "Lakshay Yadav", role: "Founder & CEO", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLZlKj57kfs3R3Vt_XFnE_Qdj2po77SycCoQ&s" },
    { name: "Shubham Jakhar", role: "Co-Founder", image: "https://via.placeholder.com/600x800" },
    { name: "Kritika Bhagwani", role: "Head of Operations", image: "https://via.placeholder.com/600x800" },
  ];

  return (
    <section className="bg-black py-20 px-6">
      {/* Header Container */}
      <div className="max-w-4xl mx-auto text-center mb-24">
        <h2 className="text-4xl md:text-6xl text-white font-semibold mb-6 tracking-tight">
          The Leaders Behind the Code
        </h2>
        <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
          Meet the leaders of Rao Coding, passionate creators who turned their vision of 
          accessible, high-impact coding education into reality.
        </p>
      </div>

      {/* Vertical Column of Cards */}
      <div className="flex flex-col items-center">
        {leaders.map((leader, index) => (
          <LeaderCard 
            key={index} 
            index={index} 
            {...leader} 
          />
        ))}
      </div>
    </section>
  );
};

export default LeadersSection;