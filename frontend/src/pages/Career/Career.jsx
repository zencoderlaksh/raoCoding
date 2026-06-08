import React from "react";
import {
  GraduationCap,
  BookOpen,
  Briefcase,
  Target,
  ArrowRight,
} from "lucide-react";

const Career = () => {
  const cards = [
    {
      icon: <BookOpen size={28} />,
      title: "10th Students",
      points: [
        "Stream Selection (Science, Commerce, Arts)",
        "Career Exploration",
        "Future Education Planning",
      ],
    },
    {
      icon: <GraduationCap size={28} />,
      title: "12th Students",
      points: [
        "College & Course Selection",
        "Entrance Exam Guidance",
        "Career Roadmap Planning",
        "Higher Education Counseling",
      ],
    },
    {
      icon: <Briefcase size={28} />,
      title: "B.Tech Students",
      points: [
        "Internship Guidance",
        "Skill Development Roadmap",
        "Placement Preparation",
        "Tech & Non-Tech Career Paths",
      ],
    },
    {
      icon: <Target size={28} />,
      title: "Diploma Students",
      points: [
        "Higher Education Options",
        "Job-Oriented Career Planning",
        "Industry Skill Recommendations",
        "Lateral Entry Guidance",
      ],
    },
  ];

  return (
    <section className="relative py-32 px-6 bg-black overflow-hidden">

      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-500/10 blur-[150px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-orange-500 uppercase tracking-[6px] font-semibold mb-4">
            Career Guidance
          </p>

          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
            Find The Right
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Career Path
            </span>
          </h1>

          <p className="max-w-3xl mx-auto mt-8 text-gray-400 text-lg">
            Whether you're a student planning your future or a professional
            looking for a career change, get personalized guidance to make
            informed decisions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {cards.map((card, index) => (
            <div
              key={index}
              className="
                group
                bg-[#111]
                border border-[#2a2a2a]
                rounded-3xl
                p-8
                transition-all
                duration-500
                hover:border-orange-500
                hover:-translate-y-3
                relative
                overflow-hidden
              "
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 mb-6">
                  {card.icon}
                </div>

                <h3 className="text-2xl font-bold text-white mb-5">
                  {card.title}
                </h3>

                <ul className="space-y-3">
                  {card.points.map((point, i) => (
                    <li
                      key={i}
                      className="text-gray-400 text-sm leading-relaxed"
                    >
                      • {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Free Consultation CTA */}
        <div className="mt-24">

          <div
            className="
              bg-[#111]
              border border-orange-500/20
              rounded-[40px]
              p-10 md:p-16
              text-center
              relative
              overflow-hidden
            "
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-orange-500/5"></div>

            <div className="relative z-10">
              

              <h2 className="text-4xl md:text-6xl font-black text-white mt-4">
                FREE 30-MINUTE
                <span className="block text-orange-500">
                  CAREER CONSULTATION
                </span>
              </h2>

              <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
                Get one-on-one guidance from experienced mentors and discover
                the best academic and career opportunities based on your goals.
              </p>

              <button
                className="
                  mt-10
                  bg-orange-500
                  hover:bg-orange-600
                  text-white
                  px-8
                  py-4
                  rounded-full
                  font-semibold
                  inline-flex
                  items-center
                  gap-3
                  transition-all
                  duration-300
                  hover:scale-105
                "
              >
                Book Free Consultation
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Career;