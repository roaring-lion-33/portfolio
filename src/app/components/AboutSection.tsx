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
    "Beyond code, I help teams align around outcomes, define product priorities, and move from uncertainty to execution with confidence. My leadership style is collaborative, decisive, and laser-focused on real results.",
  ];

  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative w-full mx-auto min-h-screen flex flex-col justify-center px-4 py-24 z-10 overflow-hidden"
    >
      {/* Animated ambient gradient background */}
      <motion.div
        className="absolute inset-0 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1.2 }}
      />

      {/* Glassmorphic Card */}
      <motion.div
        className="z-10 rounded-xl bg-white/60 backdrop-blur-lg border border-white/30 shadow-xl px-8 py-12 max-w-3xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      >
        <motion.h2
          className="text-4xl font-bold mb-3 tracking-tight text-[#1e2a38]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-sm uppercase tracking-wider text-gray-500 mb-6"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Engineering leadership with product focus
        </motion.p>

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
