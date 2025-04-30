"use client";

import Image from "next/image";
import avatar from "../../../public/avatar.png";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative flex flex-col justify-center items-center text-center max-w-4xl mx-auto min-h-screen px-4"
    >
      {/* Soft radial background */}
      <div className="absolute top-40 w-[300px] h-[300px] rounded-full bg-[#1e2a38]/5 blur-3xl z-0" />

      {/* Animated Avatar */}
      <motion.div
        className="z-10 mb-6"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <Image
          src={avatar}
          alt="Frank Camp Avatar"
          width={220}
          height={220}
          className="rounded-full border shadow-lg ring-1 ring-gray-200"
          priority
        />
      </motion.div>

      {/* Headline */}
      <motion.h1
        className="text-4xl font-bold tracking-tight mb-4 text-[#1e2a38] z-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Frank Camp
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        className="text-lg text-gray-600 max-w-xl z-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        Full Stack Engineer · Systems Architect · Strategic Product Partner
      </motion.p>

      {/* CTAs */}
      <motion.div
        className="mt-8 flex flex-col sm:flex-row items-center gap-4 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <a
          href="#projects"
          className="bg-[#1e2a38] text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-[#0f172a] transition"
        >
          View Selected Work
        </a>
        <a
          href="mailto:frank@zerotoone.cloud"
          className="bg-white border border-gray-300 text-[#1e2a38] px-6 py-3 rounded-md text-sm font-medium hover:bg-gray-50 transition"
        >
          Contact Me
        </a>
      </motion.div>
    </motion.section>
  );
}
