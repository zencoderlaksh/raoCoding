// "use client";

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

interface FaqsAccordionProps {
  description?: string;
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
  title?: string;
}

export function FaqsAccordion({
  title = "Frequently Asked Questions",
  description = "Find answers to common questions about our product and services",
  // faqs = [
  //   {
  //     question: "What is Smoothui?",
  //     answer:
  //       "Smoothui is a modern UI component library that provides beautiful, animated components for building stunning user interfaces. It includes pre-built components with smooth animations and customizable themes.",
  //   },
  //   {
  //     question: "How do I get started?",
  //     answer:
  //       "Getting started is easy! Simply install the package via npm or yarn, import the components you need, and start building. We provide comprehensive documentation and examples to help you get up and running quickly.",
  //   },
  //   {
  //     question: "Is it free to use?",
  //     answer:
  //       "Yes! Smoothui is completely free and open source. You can use it in both personal and commercial projects without any restrictions. We believe in making beautiful UI components accessible to everyone.",
  //   },
  //   {
  //     question: "Can I customize the components?",
  //     answer:
  //       "Absolutely! All components are fully customizable. You can modify colors, spacing, animations, and more using CSS variables or by extending the component classes. We also provide a theming system for easy customization.",
  //   },
  //   {
  //     question: "What frameworks are supported?",
  //     answer:
  //       "Currently, Smoothui supports React and Next.js. We're working on expanding support to other popular frameworks like Vue, Svelte, and Angular in the coming months.",
  //   },
  //   {
  //     question: "How often do you release updates?",
  //     answer:
  //       "We release updates regularly, typically every 2-3 weeks. This includes new components, bug fixes, performance improvements, and new features. You can follow our changelog to stay updated on the latest releases.",
  //   },
  // ],

  faqs = [
    {
      question: "Who are these courses designed for?",
      answer:
        "These courses are designed for engineering students, beginners, and anyone who wants to build strong programming and software engineering skills from scratch. Whether you are starting your coding journey or preparing for placements, these courses will help you develop practical skills.",
    },
    {
      question: "What courses do you offer?",
      answer:
        "I offer courses in Web Development, Data Structures & Algorithms (DSA), and Artificial Intelligence & Machine Learning. Each course is structured with concepts, practical implementation, real-world projects, and problem-solving techniques.",
    },
    {
      question: "Do I need prior programming experience?",
      answer:
        "No. The courses start from the fundamentals and gradually move towards advanced topics. I focus on building strong foundations so that even beginners can understand concepts clearly and confidently.",
    },
    {
      question: "Will I work on real-world projects?",
      answer:
        "Yes! Along with theoretical concepts, you will build practical projects that help you understand how technologies are used in real software development environments.",
    },
    {
      question: "How does your teaching approach work?",
      answer:
        "My teaching approach focuses on understanding the 'why' behind every concept instead of just memorizing code. I explain concepts step by step with examples, visualizations, and hands-on practice so you can apply them confidently.",
    },
    {
      question:
        "Will these courses help with coding interviews and placements?",
      answer:
        "Yes. The DSA course focuses on problem-solving patterns, algorithms, and interview preparation. The development courses help you build projects and practical skills required for software engineering roles.",
    },
    {
      question: "Are the courses self-paced or live?",
      answer:
        "The learning format is designed to give you flexibility while maintaining a structured roadmap. You can learn at your own pace while following a clear path from beginner concepts to advanced engineering skills.",
    },
    {
      question: "What technologies will I learn?",
      answer:
        "Depending on the course, you will learn technologies used in the industry including modern web development tools, programming languages, data structures, algorithms, machine learning concepts, and AI technologies.",
    },
  ],
}: FaqsAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-center"
            initial={{ opacity: 0, y: INITIAL_Y_OFFSET }}
            transition={{ duration: ANIMATION_DURATION }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="mb-4 font-heading text-3xl text-white lg:text-4xl">
              {title}
            </h2>

            <p className="mx-auto max-w-2xl text-lg text-zinc-400">
              {description}
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all"
                key={faq.question}
                transition={{
                  duration: ANIMATION_DURATION,
                  delay: index * STAGGER_DELAY,
                }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <motion.button
                  className="flex w-full items-center justify-between p-6 text-left"
                  onClick={() => toggleAccordion(index)}
                  type="button"
                  whileHover={{ scale: HOVER_SCALE }}
                  whileTap={{ scale: TAP_SCALE }}
                >
                  <h3 className="pr-4 font-semibold text-lg">{faq.question}</h3>
                  <motion.div
                    animate={{
                      rotate:
                        openIndex === index ? ROTATION_OPEN : ROTATION_CLOSED,
                    }}
                    className="flex-shrink-0"
                    transition={{
                      duration: ANIMATION_DURATION,
                      ease: "easeInOut",
                    }}
                  >
                    <svg
                      aria-hidden="true"
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
                      animate={{ height: "auto", opacity: 1 }}
                      className="overflow-hidden"
                      exit={{ height: 0, opacity: 0 }}
                      initial={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: ANIMATION_DURATION,
                        ease: "easeInOut",
                      }}
                    >
                      <motion.div
                        animate={{ y: 0 }}
                        className="px-6 pb-6"
                        exit={{ y: INITIAL_CONTENT_Y }}
                        initial={{ y: INITIAL_CONTENT_Y }}
                        transition={{
                          duration: ANIMATION_DURATION,
                          delay: CONTENT_DELAY,
                        }}
                      >
                        <p className="text-zinc-300 leading-relaxed">
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
    </>
  );
}

export default FaqsAccordion;
