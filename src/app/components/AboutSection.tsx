"use client";

import { motion } from "framer-motion";

const paragraphVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function AboutSection() {
  const paragraphs = [
    "I'm a hands-on engineer and founder who transforms bold ideas into practical, scalable software. With over 12 years of experience, I specialize in React, Ruby on Rails, cloud-native architecture, and system design.",
    "I’ve led cross-functional engineering teams, architected full-stack platforms, and delivered enterprise-grade solutions for startups and growth-stage companies alike. My approach is grounded in clarity, scalability, and technical precision.",
    "Whether helping a founder go from idea to MVP or optimizing a SaaS product for growth, I deliver structure, velocity, and craftsmanship—built for long-term success.",
  ];

  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative w-full mx-auto min-h-screen flex flex-col justify-center px-4 py-20 text-left z-10 overflow-hidden"
    >
      {/* Glass Card with Text */}
      <motion.div
        className="z-10 rounded-xl bg-white/50 backdrop-blur-xl border border-white/30 shadow-lg px-8 py-10 max-w-3xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      >
        <motion.h2
          className="text-4xl font-bold mb-8 tracking-tight text-[#1e2a38]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        {paragraphs.map((text, i) => (
          <motion.p
            key={i}
            className="text-gray-800 text-base leading-relaxed mb-5 last:mb-0"
            variants={paragraphVariants}
            custom={i}
          >
            {text}
          </motion.p>
        ))}
      </motion.div>
    </motion.section>
  );
}
