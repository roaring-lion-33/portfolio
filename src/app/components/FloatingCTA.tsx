"use client";
import { motion } from "framer-motion";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Frank Camp – Let’s Talk",
  description:
    "Reach out to Frank Camp for freelance opportunities, technical advising, or collaboration on full stack projects.",
  keywords: [
    "Contact Frank Camp",
    "Hire Frank Camp",
    "Freelance Developer",
    "Technical Advisor",
    "Work with Frank",
    "Full Stack Developer",
  ],
  openGraph: {
    title: "Let’s Talk – Contact Frank Camp",
    description:
      "Interested in working together? Get in touch with Frank Camp for freelance and contract opportunities.",
    url: "https://frankcamp.tech/#contact",
    siteName: "Frank Camp Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Frank Camp Contact Call to Action",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Let’s Talk – Frank Camp",
    description:
      "Explore Frank Camp’s portfolio and get in touch to collaborate on full stack software projects.",
    creator: "@FrankCampTech",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FloatingCTA() {
  return (
    <motion.a
      href="#contact"
      className="fixed bottom-6 right-6 bg-black text-white px-4 py-2 rounded-full text-xs font-semibold shadow-lg hover:bg-gray-900"
      animate={{ y: [0, -4, 0] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
    >
      Let&apos;s Talk →
    </motion.a>
  );
}
