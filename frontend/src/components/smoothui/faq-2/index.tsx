"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const ANIMATION_DURATION = 0.6;
const STAGGER_DELAY = 0.1;
const INITIAL_Y_OFFSET = 20;
const HOVER_SCALE = 1.01;
const TAP_SCALE = 0.99;
const ROTATION_OPEN = 180;
const ROTATION_CLOSED = 0;
const CONTENT_DELAY = 0.1;
const INITIAL_CONTENT_Y = -10;

interface Faq {
  question: string;
  answer: string;
}

interface FaqsAccordionProps {
  description?: string;
  faqs?: Faq[];
  title?: string;
}

const defaultFaqs: Faq[] = [
  {
    question: "Who are these courses designed for?",
    answer:
      "These courses are designed for engineering students, beginners, and anyone who wants to build strong programming and software engineering skills from scratch. Whether you are starting your coding journey or preparing for placements, these courses will help you develop practical skills.",
  },
  {
    question: "What courses do you offer?",
    answer:
      "I offer courses in Web Development, Data Structures & Algorithms (DSA), and Artificial Intelligence & Machine Learning. Each course includes concepts, practical implementation, real-world projects, and problem-solving techniques.",
  },
  {
    question: "Do I need prior programming experience?",
    answer:
      "No. The courses start from fundamentals and gradually move towards advanced topics. Every concept is explained step by step so beginners can build strong programming foundations.",
  },
  {
    question: "Will I work on real-world projects?",
    answer:
      "Yes. Along with theory, you will build practical projects that help you understand how technologies are used in real software development environments.",
  },
  {
    question: "How does your teaching approach work?",
    answer:
      "My teaching approach focuses on understanding why concepts work instead of memorizing code. Every topic is explained using examples, visualizations, and hands-on practice.",
  },
  {
    question: "Will these courses help with coding interviews?",
    answer:
      "Yes. The DSA course focuses on problem-solving patterns, algorithms, and interview preparation. Development courses focus on building industry-ready projects.",
  },
  {
    question: "Are the courses self-paced or live?",
    answer:
      "The courses follow a structured roadmap that allows you to learn at your own pace while progressing from beginner concepts to advanced engineering skills.",
  },
  {
    question: "What technologies will I learn?",
    answer:
      "You will learn modern technologies used in software engineering including web development tools, programming languages, data structures, algorithms, AI concepts, and machine learning techniques.",
  },
];

export function FaqsAccordion({
  title = "Frequently Asked Questions",
  description = "Find answers about courses, learning paths, and software engineering journey",
  faqs = defaultFaqs,
}: FaqsAccordionProps) {

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-6">

        {/* Heading */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: INITIAL_Y_OFFSET }}
          transition={{ duration: ANIMATION_DURATION }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-heading text-3xl text-white lg:text-4xl">
            {title}
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-zinc-400">
            {description}
          </p>
        </motion.div>


        {/* FAQ Items */}
        <div className="space-y-4">

          {faqs.map((faq, index) => (

            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: INITIAL_Y_OFFSET }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: ANIMATION_DURATION,
                delay: index * STAGGER_DELAY,
              }}
              className="
                group overflow-hidden rounded-2xl 
                border border-white/10 
                bg-white/5 
                backdrop-blur-xl
              "
            >

              <motion.button
                type="button"
                onClick={() => toggleAccordion(index)}
                whileHover={{ scale: HOVER_SCALE }}
                whileTap={{ scale: TAP_SCALE }}
                className="flex w-full items-center justify-between p-6 text-left"
              >

                <h3 className="pr-4 text-lg font-semibold text-white">
                  {faq.question}
                </h3>


                <motion.div
                  animate={{
                    rotate:
                      openIndex === index
                        ? ROTATION_OPEN
                        : ROTATION_CLOSED,
                  }}
                  transition={{
                    duration: ANIMATION_DURATION,
                  }}
                >

                  <svg
                    className="h-5 w-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >

                    <path
                      d="M19 9l-7 7-7-7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />

                  </svg>

                </motion.div>

              </motion.button>


              <AnimatePresence>

                {openIndex === index && (

                  <motion.div
                    initial={{
                      height:0,
                      opacity:0
                    }}
                    animate={{
                      height:"auto",
                      opacity:1
                    }}
                    exit={{
                      height:0,
                      opacity:0
                    }}
                    transition={{
                      duration:ANIMATION_DURATION
                    }}
                    className="overflow-hidden"
                  >

                    <motion.div
                      initial={{
                        y:INITIAL_CONTENT_Y
                      }}
                      animate={{
                        y:0
                      }}
                      exit={{
                        y:INITIAL_CONTENT_Y
                      }}
                      transition={{
                        duration:ANIMATION_DURATION,
                        delay:CONTENT_DELAY
                      }}
                      className="px-6 pb-6"
                    >

                      <p className="leading-relaxed text-zinc-300">
                        {faq.answer}
                      </p>

                    </motion.div>

                  </motion.div>

                )}

              </AnimatePresence>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default FaqsAccordion;