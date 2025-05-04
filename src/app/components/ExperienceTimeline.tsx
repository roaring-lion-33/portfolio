"use client";

import { motion } from "framer-motion";
import { Briefcase, Code, Rocket, Download } from "lucide-react";

const items = [
  {
    title: "Senior Systems Architect",
    date: "MRI Real Estate Software · Jan 2024 – Dec 2024",
    icon: <Code className="w-4 h-4 text-white" />,
    description:
      "Led systems integration post-acquisition, modernized architecture, and directed a 12-person team to deliver scalable cloud-native infrastructure and robust CI/CD workflows.",
    stack: [
      "PHP",
      "MySQL",
      "SQL Server",
      "AWS",
      "Docker",
      "Azure DevOps",
      "TypeScript",
    ],
  },
  {
    title: "Director of Engineering / Technical Founder",
    date: "eGent, Ltd. · Jan 2023 – Dec 2023",
    icon: <Rocket className="w-4 h-4 text-white" />,
    description:
      "Re-architected eGent’s core platform, improved performance by 40%, and led strategy and development to a successful acquisition.",
    stack: [
      "PHP",
      "CodeIgniter",
      "MySQL",
      "JavaScript",
      "AWS",
      "Docker",
      "Jira",
      "ClickUp",
    ],
  },
  {
    title: "Senior Director of Technology",
    date: "Westwood One / Cumulus Media · Nov 2021 – Oct 2024",
    icon: <Briefcase className="w-4 h-4 text-white" />,
    description:
      "Engineered ultra-reliable systems (99.999% uptime) for national broadcast events, aligning tech strategy with business goals to boost operational efficiency by 30%.",
    stack: [
      "Ruby on Rails",
      "PostgreSQL",
      "MySQL",
      "AWS",
      "Docker",
      "Kubernetes",
      "Vue.js",
      "React",
    ],
  },
  {
    title: "Director of Broadcast Systems Development",
    date: "Westwood One / Cumulus Media · Dec 2013 – Nov 2021",
    icon: <Briefcase className="w-4 h-4 text-white" />,
    description:
      "Built scalable Ruby on Rails apps for national broadcast ops, reducing workload by 60%. Invented and patented an on-air automation system.",
    stack: [
      "Ruby on Rails",
      "PostgreSQL",
      "AWS",
      "Docker",
      "Vue.js",
      "React",
      "Linux",
      "Cisco",
    ],
  },
];

export default function ExperienceTimeline() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative w-full overflow-hidden px-4 py-32"
    >
      {/* Glow background ring */}
      <motion.div
        className="absolute left-1/2 top-12 -translate-x-1/2 w-[480px] h-[480px] rounded-full bg-[#1e2a38]/10 blur-3xl z-0"
        animate={{ scale: [1, 1.04, 1], opacity: [0.12, 0.18, 0.12] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl mx-auto"
      >
        <h2
          id="experience-heading"
          className="text-3xl font-bold text-center text-[#1e2a38] mb-4"
        >
          Experience Timeline
        </h2>

        <motion.p
          className="text-sm uppercase tracking-wider text-gray-500 mb-10 text-center"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          12+ years building resilient systems and leading technical teams
        </motion.p>

        <ul className="relative pl-6 space-y-12">
          {items.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Vertical line */}
              <motion.div
                className="absolute left-[-1px] top-6 w-0.5 bg-[#1e2a38]/50"
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />

              {/* Icon */}
              <div className="absolute -left-3 top-1.5 w-6 h-6 rounded-full bg-[#1e2a38] flex items-center justify-center shadow-md ring-2 ring-white">
                {item.icon}
              </div>

              {/* Content */}
              <div className="ml-6">
                <h3 className="text-lg font-semibold text-[#1e2a38]">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 mb-1">{item.date}</p>
                <p className="text-base text-gray-700 leading-relaxed mb-1 text-balance">
                  {item.description}
                </p>
                {item.stack && (
                  <p className="text-sm text-gray-500">
                    <span className="font-medium text-[#1e2a38]">
                      Tech Stack:
                    </span>{" "}
                    {item.stack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="inline-block mr-2"
                        title={tech}
                      >
                        {tech}
                      </span>
                    ))}
                  </p>
                )}
              </div>
            </motion.li>
          ))}
        </ul>

        {/* Resume CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: items.length * 0.2 + 0.3 }}
        >
          <a
            href="/pdf/Frank-Camp.pdf"
            download
            className="inline-flex items-center gap-2 bg-[#1e2a38] text-white px-6 py-3 rounded-md text-sm font-medium shadow-sm hover:shadow-md hover:bg-[#0f172a] transition"
          >
            <Download className="w-4 h-4" />
            Download Résumé
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
