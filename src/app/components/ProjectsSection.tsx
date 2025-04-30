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
      className="max-w-6xl mx-auto min-h-screen px-4 py-24"
    >
      {/* Heading */}
      <motion.h2
        className="text-4xl font-bold text-center mb-2 text-[#1e2a38]"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Featured Projects
      </motion.h2>
      <motion.p
        className="text-sm uppercase tracking-wider text-gray-500 text-center mb-10"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Full Stack Builds · SaaS Platforms · Product Innovation
      </motion.p>

      {/* Projects Grid */}
      <motion.div
        className="grid sm:grid-cols-2 gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.015 }}
            className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300"
          >
            {/* Hover background gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 via-transparent to-purple-100 opacity-0 group-hover:opacity-100 transition duration-500 rounded-xl z-0" />

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-3 text-[#1e2a38]">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                {project.desc}
              </p>
              <motion.a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#1e2a38] hover:text-[#0f172a] transition"
                whileHover={{ x: 4 }}
              >
                {project.cta}
                <ArrowRight className="w-4 h-4 mt-0.5" />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
