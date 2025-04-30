"use client";

import { motion } from "framer-motion";
import { icons } from "lucide-react";

const groupedSkills = [
  {
    title: "Frontend",
    items: [
      { name: "Next.js", icon: "Box", level: "Expert" },
      { name: "React", icon: "Layout", level: "Expert" },
      { name: "Tailwind CSS", icon: "Wind", level: "Advanced" },
      { name: "TypeScript", icon: "Code2", level: "Advanced" },
      { name: "Framer Motion", icon: "ActivitySquare", level: "Proficient" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Ruby on Rails", icon: "Gem", level: "Expert" },
      { name: "PostgreSQL", icon: "Database", level: "Advanced" },
      { name: "Redis", icon: "Zap", level: "Proficient" },
      { name: "Node.js", icon: "TerminalSquare", level: "Proficient" },
    ],
  },
  {
    title: "DevOps",
    items: [
      { name: "Docker", icon: "ServerCog", level: "Advanced" },
      { name: "AWS", icon: "Cloud", level: "Advanced" },
      { name: "CI/CD", icon: "Repeat", level: "Proficient" },
      { name: "Terraform", icon: "Layers", level: "Beginner" },
    ],
  },
  {
    title: "Product & Strategy",
    items: [
      { name: "MVP Scoping", icon: "Target", level: "Expert" },
      { name: "System Design", icon: "CircuitBoard", level: "Advanced" },
      { name: "Agile Delivery", icon: "BarChart4", level: "Advanced" },
      { name: "Team Leadership", icon: "Users", level: "Expert" },
    ],
  },
];

const levelColorMap = {
  Expert: "bg-blue-100 text-blue-800",
  Advanced: "bg-green-100 text-green-800",
  Proficient: "bg-yellow-100 text-yellow-800",
  Beginner: "bg-gray-100 text-gray-600",
};

export default function SkillsSection() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="max-w-5xl mx-auto min-h-screen px-4 py-12"
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-2 text-[#1e2a38]"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Tools & Technologies
      </motion.h2>

      <motion.p
        className="text-sm uppercase tracking-wider text-gray-500 mb-6 text-center"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Full Stack · DevOps · Product Strategy
      </motion.p>

      <div className="grid sm:grid-cols-2 gap-8">
        {groupedSkills.map((group) => (
          <div key={group.title}>
            <h3 className="text-sm font-semibold text-[#334155] mb-3 text-center tracking-wide uppercase">
              {group.title}
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {group.items.map((tech, i) => {
                const badgeClass =
                  levelColorMap[tech.level] || "bg-gray-100 text-gray-600";
                const Icon = icons[tech.icon] || icons["Box"];
                return (
                  <motion.div
                    key={tech.name}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="group bg-white border border-gray-200 rounded-md p-4 shadow-sm hover:shadow-md hover:border-[#1e2a38] transition duration-200 flex flex-col items-center justify-center text-center"
                  >
                    <div className="w-9 h-9 flex items-center justify-center mb-2 rounded-md bg-[#f1f5f9] group-hover:bg-[#1e2a38]/10 transition">
                      <Icon className="w-5 h-5 text-[#1e2a38]" />
                    </div>
                    <span className="text-xs text-gray-800 font-medium">
                      {tech.name}
                    </span>
                    <span
                      className={`mt-1 inline-block text-[10px] px-2 py-0.5 rounded-full font-medium tracking-wide ${badgeClass}`}
                    >
                      {tech.level}
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
