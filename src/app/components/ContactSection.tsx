"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative w-full px-4 py-24 flex justify-center items-center bg-white min-h-screen overflow-hidden"
    >
      {/* Background accent blur */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-50 via-white to-gray-100 opacity-70 pointer-events-none" />

      {/* Contact Card */}
      <div className="max-w-xl w-full bg-white/80 backdrop-blur-lg border border-gray-200 shadow-md rounded-xl px-8 py-10 text-center">
        <motion.h2
          className="text-3xl font-bold text-[#1e2a38] mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Let’s Work Together
        </motion.h2>

        <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">
          Consulting · Architecture · MVP Delivery
        </p>

        <p className="text-gray-700 text-base leading-relaxed mb-8">
          I’m available for strategic consulting, technical leadership, or MVP
          execution. If you’re building something ambitious, let’s connect and
          explore how I can support your vision.
        </p>

        <a
          href="mailto:frank@zerotoone.cloud"
          className="inline-block bg-[#1e2a38] text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-[#0f172a] transition"
        >
          Schedule a Conversation
        </a>

        <p className="text-sm text-gray-500 mt-4">
          Reply guaranteed within 1 business day.
        </p>
      </div>
    </motion.section>
  );
}
