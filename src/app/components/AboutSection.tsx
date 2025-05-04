"use client";

import { motion } from "framer-motion";

export const metadata = {
  title: "About",
  description:
    "Meet Frank Camp – a senior software engineer focused on scalable, high-performance full stack applications.",
};

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
      className="relative w-full min-h-screen flex items-center justify-center px-4 py-24 overflow-hidden bg-transparent"
    >
      {/* Animated glow background ring */}
      <motion.div
        className="absolute w-[480px] h-[480px] rounded-full bg-[#1e2a38]/10 blur-3xl z-0"
        animate={{ scale: [1, 1.04, 1], opacity: [0.15, 0.22, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Glassmorphic content card */}
      <motion.div
        className="relative z-10 max-w-3xl w-full rounded-xl bg-white/70 backdrop-blur-md ring-1 ring-white/20 shadow-2xl px-8 py-12 selection:bg-blue-100 selection:text-blue-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      >
        <motion.h2
          className="text-4xl font-bold mb-3 tracking-tight text-[#1e2a38] text-balance"
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
            className="text-gray-800 text-base leading-relaxed mb-5 last:mb-0 text-balance"
            variants={paragraphVariants}
            custom={i}
          >
            {text}
          </motion.p>
        ))}

        <motion.div
          className="mt-10 border-t pt-6 border-gray-200"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: paragraphs.length * 0.15 + 0.8,
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          <p className="italic text-gray-600 text-base leading-relaxed text-balance">
            “Great software isn’t just built — it’s architected, refined, and
            delivered with purpose.”
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
