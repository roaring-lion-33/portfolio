"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "DaVinci Reporting Platform",
    desc: "Inspection & annotation platform with smart PDF export, Turbo + Tailwind UI.",
    cta: "Explore Case Study",
  },
  {
    title: "Clarity Recovery App",
    desc: "Mobile-first companion app for recovery with milestone tracking, AI chat, and journal.",
    cta: "See the Product",
  },
  {
    title: "LaunchPad MVP Builder",
    desc: "Founders-focused SaaS builder with drag-and-drop UI, PDF export, and Stripe integration.",
    cta: "View Platform",
  },
  {
    title: "DreamOS Personal System",
    desc: "Second-brain productivity app with modular AI tools, journaling, and task flows.",
    cta: "Preview Concept",
  },
];

export default function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="max-w-5xl mx-auto min-h-screen px-4"
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-16 text-[#1e2a38]"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Featured Projects
      </motion.h2>

      <motion.div
        className="grid sm:grid-cols-2 gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.02 }}
            className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition duration-300"
          >
            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-3 text-[#1e2a38]">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                {project.desc}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#1e2a38] hover:text-[#0f172a] transition"
              >
                {project.cta} <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
