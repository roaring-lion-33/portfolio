"use client";
import { motion } from "framer-motion";

export default function FloatingCTA() {
  return (
    <motion.a
      href="#contact"
      className="fixed bottom-6 right-6 bg-black text-white px-4 py-2 rounded-full text-xs font-semibold shadow-lg hover:bg-gray-900"
      animate={{ y: [0, -4, 0] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
    >
      Let's Talk →
    </motion.a>
  );
}
