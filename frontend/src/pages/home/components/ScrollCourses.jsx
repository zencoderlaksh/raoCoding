import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

import {
  Clock3,
  BadgeCheck,
  Headphones,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";

const cards = [
  {
    title: "AI Powered Full Stack Cohort",
    desc: "Master React, Next.js, Node.js, Gen AI and build scalable production-grade applications.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    gradient: "from-violet-500/20 via-fuchsia-500/10 to-transparent",
    price: "Rs.5999",
    oldPrice: "Rs.11998",
  },
  {
    title: "Data Science & Analytics",
    desc: "Learn Machine Learning, Python, AI workflows and real-world analytics projects.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    gradient: "from-orange-500/20 via-amber-500/10 to-transparent",
    price: "Rs.7999",
    oldPrice: "Rs.15999",
  },
  {
    title: "Modern Web Development",
    desc: "Frontend + Backend + DevOps with premium UI engineering and animations.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    price: "Rs.6999",
    oldPrice: "Rs.13999",
  },
];

const features = [
  {
    icon: <Clock3 size={18} />,
    text: "6+ Months",
  },
  {
    icon: <BadgeCheck size={18} />,
    text: "Certified",
  },
  {
    icon: <Headphones size={18} />,
    text: "24/7 Support",
  },
];

const ScrollCourses = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,

      multiplier: 0.8,
      lerp: 0.07,

      smartphone: {
        smooth: true,
      },

      tablet: {
        smooth: true,
      },
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <main data-scroll-container ref={scrollRef}>
      <section className="relative w-full">
        {cards.map((card, index) => (
          <section
            key={index}
            className="
              sticky
              top-0
              h-screen
              flex
              items-center
              justify-center
              px-4
            "
            style={{
              zIndex: 10 + index,
            }}
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 40,
                scale: 0.98,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: false,
                amount: 0.3,
              }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                h-[82vh]
                w-full
                max-w-7xl
                overflow-hidden
                rounded-[40px]
                border
                border-white/10
                bg-white/[0.06]
                backdrop-blur-3xl
                shadow-[0_10px_80px_rgba(0,0,0,0.45)]
              "
            >
              {/* gradient */}
              <div
                className={`
                  absolute inset-0
                  bg-gradient-to-br
                  ${card.gradient}
                `}
              />

              <div className="absolute inset-0 bg-white/[0.03]" />

              <div
                className="
                  relative
                  grid
                  h-full
                  grid-cols-1
                  items-center
                  gap-14
                  p-8
                  md:p-14
                  lg:grid-cols-2
                "
              >
                {/* LEFT */}
                <div className="flex flex-col justify-center">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="
                      text-4xl
                      md:text-6xl
                      font-bold
                      leading-tight
                      tracking-tight
                      text-white
                    "
                  >
                    {card.title}
                  </motion.h1>

                  <p
                    className="
                      mt-6
                      max-w-xl
                      text-lg
                      leading-relaxed
                      text-white/70
                    "
                  >
                    {card.desc}
                  </p>

                  {/* FEATURES */}
                  <div className="mt-8 flex flex-wrap gap-4">
                    {features.map((item, i) => (
                      <div
                        key={i}
                        className="
                          flex items-center gap-3
                          rounded-2xl
                          border border-white/10
                          bg-white/10
                          px-4 py-3
                          backdrop-blur-xl
                        "
                      >
                        <div className="text-white">{item.icon}</div>

                        <p className="text-sm font-medium text-white">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* PRICE */}
                  <div className="mt-10 flex items-end gap-3 flex-wrap">
                    <h2 className="text-3xl md:text-5xl font-light text-white">
                      Price
                    </h2>

                    <span className="text-4xl md:text-6xl font-semibold text-orange-500">
                      {card.price}
                    </span>

                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl text-white/60 line-through">
                        {card.oldPrice}
                      </span>

                      <span className="text-xl text-white">
                        (+GST)
                      </span>
                    </div>
                  </div>

                  {/* BUTTON */}
                  <Link
                    to="/courses"
                    className="
                      mt-8
                      flex w-fit items-center gap-2
                      rounded-full
                      border border-white/10
                      bg-white/10
                      px-7 py-4
                      text-white
                      backdrop-blur-xl
                      transition-all
                      duration-300
                      hover:bg-white/20
                      hover:scale-105
                    "
                  >
                    Explore Course
                    <ArrowRight size={18} />
                  </Link>
                </div>

                {/* RIGHT IMAGE */}
                <div
                  className="
                    flex
                    h-full
                    items-center
                    justify-center
                  "
                >
                  <motion.div
                    whileHover={{
                      scale: 1.02,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    className="
                      relative
                      h-[320px]
                      md:h-[520px]
                      w-full
                      max-w-[560px]
                      overflow-hidden
                      rounded-[32px]
                      border
                      border-white/10
                      bg-white/10
                      backdrop-blur-2xl
                    "
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      className="
                        h-full
                        w-full
                        object-cover
                      "
                    />

                    <div className="absolute inset-0 bg-black/20" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </section>
        ))}
      </section>
    </main>
  );
};

export default ScrollCourses;