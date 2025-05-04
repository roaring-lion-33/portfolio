"use client";

import { motion } from "framer-motion";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Frank Camp",
  description:
    "Get in touch with Frank Camp — available for freelance, part-time contracts, or technical advising.",
  keywords: [
    "Frank Camp contact",
    "freelance developer",
    "technical advisor",
    "hire full stack engineer",
    "Next.js freelance",
    "Ruby on Rails consulting",
  ],
  openGraph: {
    title: "Contact Frank Camp",
    description:
      "Reach out to Frank Camp for consulting, architecture, or MVP execution support.",
    url: "https://frankcamp.tech/contact",
    siteName: "Frank Camp Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Frank Camp Contact",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Frank Camp",
    description:
      "Get in touch for freelance work, strategic architecture, or MVP delivery.",
    creator: "@FrankCampTech",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactSection() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative w-full px-4 py-24 flex justify-center items-center bg-transparent min-h-screen overflow-hidden"
    >
      {/* Background Glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 bg-[#1e2a38]/10 rounded-full blur-3xl z-0"
        animate={{ scale: [1, 1.04, 1], opacity: [0.12, 0.2, 0.12] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Contact Card */}
      <motion.div
        className="relative max-w-xl w-full bg-white/80 backdrop-blur-lg border border-gray-200 shadow-md rounded-xl px-8 py-10 text-center z-10"
        initial={{ scale: 0.96, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.h2
          className="text-3xl font-bold text-[#1e2a38] mb-4 tracking-tight"
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
      </motion.div>
    </motion.section>
  );
}
