"use client";

import { motion } from "framer-motion";
import { icons } from "lucide-react";

const groupedSkills = [
  {
    title: "Frontend",
    items: [
      { name: "Next.js", icon: "Box" },
      { name: "React", icon: "Layout" },
      { name: "Tailwind CSS", icon: "Wind" },
      { name: "TypeScript", icon: "Code2" },
      { name: "Framer Motion", icon: "ActivitySquare" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Ruby on Rails", icon: "Gem" },
      { name: "PostgreSQL", icon: "Database" },
      { name: "Redis", icon: "Zap" },
      { name: "Node.js", icon: "TerminalSquare" },
    ],
  },
  {
    title: "DevOps",
    items: [
      { name: "Docker", icon: "ServerCog" },
      { name: "AWS", icon: "Cloud" },
      { name: "CI/CD", icon: "Repeat" },
      { name: "Terraform", icon: "Layers" },
    ],
  },
  {
    title: "Product & Strategy",
    items: [
      { name: "MVP Scoping", icon: "Target" },
      { name: "System Design", icon: "CircuitBoard" },
      { name: "Agile Delivery", icon: "BarChart4" },
      { name: "Team Leadership", icon: "Users" },
    ],
  },
];

export default function SkillsSection() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="max-w-5xl mx-auto min-h-screen px-4 py-20"
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-4 text-[#1e2a38]"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Tools & Technologies
      </motion.h2>

      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-base">
        A curated overview of my current technical toolkit — spanning product
        strategy, frontend engineering, backend systems, and scalable DevOps
        infrastructure.
      </p>

      <div className="grid sm:grid-cols-2 gap-12">
        {groupedSkills.map((group) => (
          <div key={group.title}>
            <h3 className="text-lg font-semibold text-[#334155] mb-4 text-center tracking-wide uppercase">
              {group.title}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {group.items.map((tech, i) => {
                const Icon = icons[tech.icon] || icons["Box"];
                return (
                  <motion.div
                    key={tech.name}
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="group bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md hover:border-[#1e2a38] transition duration-200 flex flex-col items-center justify-center text-center"
                  >
                    <div className="w-10 h-10 flex items-center justify-center mb-2 rounded-md bg-[#f1f5f9] group-hover:bg-[#1e2a38]/10 transition">
                      <Icon className="w-6 h-6 text-[#1e2a38]" />
                    </div>
                    <span className="text-sm text-gray-800 font-medium">
                      {tech.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
