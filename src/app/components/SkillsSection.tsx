"use client";

import { motion } from "framer-motion";
import { icons, Code, Server, Cloud, Target } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills | Frank Camp – Full Stack Developer",
  description:
    "Explore Frank Camp's technical skill set including Next.js, React, Tailwind, Ruby on Rails, AWS, Docker, and product strategy tools for building scalable applications.",
  keywords: [
    "Frank Camp skills",
    "full stack developer",
    "Next.js",
    "React developer",
    "Ruby on Rails",
    "AWS",
    "Docker",
    "DevOps",
    "technical leadership",
    "product engineering",
    "frontend backend stack",
  ],
  openGraph: {
    title: "Frank Camp – Developer Skill Stack",
    description:
      "Frank Camp's full stack expertise includes frontend frameworks, backend systems, DevOps tools, and strategic engineering capabilities.",
    url: "https://frankcamp.tech#skills",
    siteName: "Frank Camp Portfolio",
    images: [
      {
        url: "/og-skills.jpg", // Optional: generate a custom OG image
        width: 1200,
        height: 630,
        alt: "Frank Camp Skill Stack",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frank Camp – Technical Skills",
    description:
      "See what technologies and tools Frank Camp uses across the full stack.",
    images: ["/og-skills.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// --- Types ---
type SkillLevel = "Expert" | "Advanced" | "Proficient" | "Beginner";

type SkillItem = {
  name: string;
  icon: keyof typeof icons;
  level: SkillLevel;
};

type SkillGroup = {
  title: string;
  icon: React.ElementType;
  items: SkillItem[];
};

// --- Data ---
const groupedSkills: SkillGroup[] = [
  {
    title: "Frontend",
    icon: Code,
    items: [
      { name: "Next.js", icon: "Box", level: "Expert" },
      { name: "React", icon: "Code", level: "Expert" },
      { name: "Tailwind CSS", icon: "Wind", level: "Advanced" },
      { name: "TypeScript", icon: "Code", level: "Advanced" },
      { name: "Framer Motion", icon: "Activity", level: "Proficient" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    items: [
      { name: "Ruby on Rails", icon: "Gem", level: "Expert" },
      { name: "PostgreSQL", icon: "Database", level: "Advanced" },
      { name: "Redis", icon: "Zap", level: "Proficient" },
      { name: "Node.js", icon: "Terminal", level: "Proficient" },
    ],
  },
  {
    title: "DevOps",
    icon: Cloud,
    items: [
      { name: "Docker", icon: "ServerCog", level: "Advanced" },
      { name: "AWS", icon: "Cloud", level: "Advanced" },
      { name: "CI/CD", icon: "Repeat", level: "Proficient" },
      { name: "Terraform", icon: "Layers", level: "Beginner" },
    ],
  },
  {
    title: "Product & Strategy",
    icon: Target,
    items: [
      { name: "MVP Scoping", icon: "Target", level: "Expert" },
      { name: "System Design", icon: "CircuitBoard", level: "Advanced" },
      { name: "Agile Delivery", icon: "ChartBar", level: "Advanced" },
      { name: "Team Leadership", icon: "Users", level: "Expert" },
    ],
  },
];

const levelColorMap: Record<SkillLevel, string> = {
  Expert: "bg-blue-100 text-blue-800 border-blue-200",
  Advanced: "bg-green-100 text-green-800 border-green-200",
  Proficient: "bg-yellow-100 text-yellow-800 border-yellow-200",
  Beginner: "bg-gray-100 text-gray-600 border-gray-200",
};

// --- Component ---
export default function SkillsSection() {
  return (
    <motion.section
      id="skills"
      aria-labelledby="skills-heading"
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative max-w-5xl mx-auto min-h-screen px-4 py-24"
    >
      {/* Decorative backdrop */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-[#1e2a38]/5 blur-3xl z-0 pointer-events-none" />

      <motion.h2
        id="skills-heading"
        className="text-4xl font-bold text-center mb-2 text-[#1e2a38] relative z-10 tracking-tight"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Tools & Technologies
      </motion.h2>

      <motion.p
        className="text-sm uppercase tracking-wider text-gray-500 mb-10 text-center relative z-10"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Full Stack · DevOps · Product Strategy
      </motion.p>

      <div className="grid sm:grid-cols-2 gap-8 relative z-10">
        {groupedSkills.map((group, groupIdx) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: groupIdx * 0.2,
              duration: 0.6,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <h3 className="flex items-center justify-center gap-2 text-sm font-semibold text-[#334155] mb-3 text-center tracking-wide uppercase">
              <group.icon className="w-4 h-4 text-[#1e2a38]" />
              {group.title}
            </h3>

            <div className="grid grid-cols-2 gap-3">
              {group.items.map((tech) => {
                const badgeClass = levelColorMap[tech.level];
                const Icon = icons[tech.icon] || icons.Box;
                return (
                  <motion.div
                    key={tech.name}
                    whileHover={{ scale: 1.02 }}
                    className="group bg-white border border-gray-200 rounded-md p-4 shadow-sm hover:shadow-md hover:border-[#1e2a38] transition duration-200 flex flex-col items-center justify-center text-center"
                  >
                    <div
                      className={`w-9 h-9 flex items-center justify-center mb-2 rounded-full border-2 ${badgeClass}`}
                    >
                      <Icon className="w-5 h-5 text-[#1e2a38]" />
                    </div>
                    <span className="text-xs text-gray-800 font-medium">
                      {tech.name}
                    </span>
                    <span
                      title={`Skill level: ${tech.level}`}
                      className={`mt-1 inline-block text-[10px] px-2 py-0.5 rounded-full font-medium tracking-wide ${badgeClass}`}
                    >
                      {tech.level}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-12 text-center relative z-10"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <p className="text-sm text-gray-500">
          Want to see these in action?{" "}
          <a
            href="#projects"
            className="text-blue-600 underline underline-offset-2 hover:text-blue-800 transition"
          >
            Explore featured projects →
          </a>
        </p>
      </motion.div>
    </motion.section>
  );
}
