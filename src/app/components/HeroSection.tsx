"use client";

import Image from "next/image";
import avatar from "../../../public/avatar.png";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative flex flex-col justify-center items-center text-center max-w-4xl mx-auto min-h-screen px-4 py-24 sm:py-32"
    >
      {/* Soft animated ring behind avatar */}
      <motion.div
        className="absolute top-36 w-[300px] h-[300px] rounded-full bg-[#1e2a38]/10 blur-3xl z-0"
        animate={{ scale: [1, 1.05, 1], opacity: [0.15, 0.2, 0.15] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />

      {/* Avatar */}
      <motion.div
        className="z-10 mb-5"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <Image
          src={avatar}
          alt="Portrait of Frank Camp"
          width={200}
          height={200}
          className="rounded-full border shadow-lg ring-1 ring-gray-200"
          priority
        />
      </motion.div>

      {/* Name */}
      <motion.h1
        className="text-4xl sm:text-5xl font-bold tracking-tight mb-2 text-[#1e2a38] z-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Frank Camp
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-sm uppercase tracking-wider text-gray-500 mb-4 mt-3 z-10"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        role="doc-subtitle"
      >
        Strategic Engineering · Software Architecture · Product Execution
      </motion.p>

      {/* CTAs */}
      <motion.div
        className="mt-3 flex flex-col sm:flex-row items-center gap-4 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <a
          href="#projects"
          className="inline-flex items-center justify-center rounded-md bg-[#1e2a38] text-white px-6 py-3 text-sm font-medium shadow-sm hover:shadow-md hover:bg-[#0f172a] transition"
        >
          View Selected Work
        </a>
        <a
          href="mailto:frank@zerotoone.cloud"
          className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white text-[#1e2a38] px-6 py-3 text-sm font-medium shadow-sm hover:shadow-md hover:bg-gray-50 transition"
        >
          Contact Me
        </a>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-10 z-10 text-[#1e2a38] opacity-50 cursor-pointer"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <a href="#about" aria-label="Scroll down">
          <ChevronDown className="w-6 h-6 animate-bounce-slow" />
        </a>
      </motion.div>

      <style jsx global>{`
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(6px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2.4s infinite;
        }
      `}</style>
    </motion.section>
  );
}
