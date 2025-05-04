"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  MonitorSmartphone,
  Smartphone,
  SwitchCamera,
  FormInput,
  FileText,
  Lock,
  X,
} from "lucide-react";

const projects = [
  {
    title: "Rapid Fire Reports Reporting Platform",
    desc: "Smart reporting system with form builder, PDF export, and client portals.",
    tech: [
      "Ruby on Rails",
      "Turbo",
      "TailwindCSS",
      "Grover PDF",
      "Stimulus",
      "Stripe",
    ],
    banner: "/images/banner-rfr.png",
    summary:
      "Rapid Fire Reports transforms inspections into sleek, branded reports with dynamic fields, PDF generation, and secure client sharing.",
    features: [
      {
        icon: <FormInput className="w-5 h-5 text-blue-600" />,
        title: "Dynamic Form Builder",
        desc: "Drag-and-drop custom forms with live preview and autosave.",
      },
      {
        icon: <FileText className="w-5 h-5 text-blue-600" />,
        title: "PDF Export",
        desc: "Grover-powered PDF rendering with branding and layout templates.",
      },
      {
        icon: <Lock className="w-5 h-5 text-blue-600" />,
        title: "Client Portal",
        desc: "Token-secured sharing, read-only reports, and activity tracking.",
      },
    ],
    timeline: [
      { phase: "Q1: MVP Build", detail: "Core UI, forms, and PDF export" },
      { phase: "Q2: Client Portal", detail: "Secure views and role logic" },
      { phase: "Q3: UI Polish", detail: "Responsive design and animations" },
    ],
    images: ["/images/davinci-ui-1.png", "/images/davinci-ui-2.png"],
    repo: "https://github.com/advancedsoftwaresolutions/rapidfirereports",
    live: "http://rapid-fire-reports-alb-1-1565964170.us-east-2.elb.amazonaws.com/",
    tag: "Full-Stack SaaS",
  },
  {
    title: "ZeroToOne Site",
    desc: "Marketing site and component system for MVP launch services.",
    tech: [
      "Next.js",
      "TailwindCSS",
      "Framer Motion",
      "MDX",
      "Vercel",
      "Lucide Icons",
    ],
    banner: "/images/banner-zto.png",
    summary:
      "ZeroToOne helps founders bring bold ideas to life with launch-ready MVPs. The site features interactive timelines, animated build simulators, and scroll-driven storytelling to inspire action.",
    features: [
      {
        icon: <Smartphone className="w-5 h-5 text-blue-600" />,
        title: "Mobile-First Design",
        desc: "Responsive UI with dark mode, swipeable carousels, and polished touch UX.",
      },
      {
        icon: <MonitorSmartphone className="w-5 h-5 text-blue-600" />,
        title: "Framer Motion Animations",
        desc: "Cinematic scroll effects, parallax elements, and animated transitions.",
      },
      {
        icon: <Lock className="w-5 h-5 text-blue-600" />,
        title: "Component System",
        desc: "Modular React components with Tailwind and Storybook documentation.",
      },
    ],
    timeline: [
      { phase: "Week 1", detail: "Design and branding foundation" },
      { phase: "Week 2", detail: "Hero, timeline, and animated CTA" },
      { phase: "Week 3", detail: "Case studies, pricing, and deployment" },
    ],
    images: ["/images/zto-ui-1.png", "/images/zto-ui-2.png"],
    repo: "https://github.com/roaring-lion-33/zero_to_one",
    live: "https://zero-to-one-roan.vercel.app",
    tag: "Marketing Website",
  },
  {
    title: "MileBird – Mileage Tracking App",
    desc: "A modern web and mobile app for tracking trips and calculating deductions.",
    tech: [
      "React Native",
      "Expo",
      "Next.js",
      "TailwindCSS",
      "CSV Export",
      "Secure Storage",
    ],
    banner: "/images/banner-milebird.png",
    summary:
      "MileBird is a sleek replacement for legacy mileage apps, offering an intuitive interface for logging trips, calculating tax deductions, and exporting reports — all built for speed and simplicity.",
    features: [
      {
        icon: <Smartphone className="w-5 h-5 text-blue-600" />,
        title: "Cross-Platform App",
        desc: "Built with Expo and React Native for iOS, Android, and Web.",
      },
      {
        icon: <FileText className="w-5 h-5 text-blue-600" />,
        title: "CSV Yearly Exports",
        desc: "Easily export mileage logs by year for tax and reimbursement needs.",
      },
      {
        icon: <Lock className="w-5 h-5 text-blue-600" />,
        title: "Secure Local Storage",
        desc: "Privacy-first design with offline sync and secure trip history.",
      },
    ],
    timeline: [
      { phase: "Week 1", detail: "Trip logging UI and storage logic" },
      { phase: "Week 2", detail: "Export CSV and yearly breakdowns" },
      { phase: "Week 3", detail: "Mobile polish and testing" },
    ],
    images: ["/images/milebird-ui-1.png", "/images/milebird-ui-2.png"],
    repo: "https://github.com/yourusername/milebird",
    tag: "Mobile App",
  },
  {
    title: "ZeroToOne MVP UI Kit",
    desc: "Component library for building modern MVPs fast with Tailwind, Framer Motion, and Storybook.",
    tech: [
      "React",
      "TailwindCSS",
      "Framer Motion",
      "Storybook",
      "TypeScript",
      "Radix UI",
    ],
    banner: "/images/banner-mvp-kit.png",
    summary:
      "A modular React component library built to help founders and teams rapidly assemble beautiful MVPs. Includes polished UI primitives, motion-enhanced components, and live Storybook documentation.",
    features: [
      {
        icon: <MonitorSmartphone className="w-5 h-5 text-blue-600" />,
        title: "Responsive UI Components",
        desc: "Mobile-first components styled with Tailwind and accessibility baked in.",
      },
      {
        icon: <FormInput className="w-5 h-5 text-blue-600" />,
        title: "Framer Motion Ready",
        desc: "Built-in animations for smooth page transitions and interactive elements.",
      },
      {
        icon: <FileText className="w-5 h-5 text-blue-600" />,
        title: "Storybook Docs",
        desc: "Interactive docs and examples for fast onboarding and usage clarity.",
      },
    ],
    timeline: [
      {
        phase: "Week 1",
        detail: "Core layout, typography, and button components",
      },
      { phase: "Week 2", detail: "Interactive components and motion support" },
      { phase: "Week 3", detail: "Docs, polish, and Vercel deployment" },
    ],
    images: ["/images/mvp-kit-ui-1.png", "/images/mvp-kit-ui-2.png"],
    repo: "https://github.com/ZeroToOne-cloud/mvp-ui-kit",
    tag: "Component Library",
  },
];

export default function ProjectShowcase() {
  const [open, setOpen] = useState(null);
  const [view, setView] = useState("desktop");

  const toggleView = () => setView(view === "desktop" ? "mobile" : "desktop");

  return (
    <section className="max-w-6xl mx-auto px-4 py-24" id="projects">
      <h2 className="text-4xl font-bold text-center mb-2 text-[#0f172a]">
        Featured Projects
      </h2>
      <p className="text-sm uppercase tracking-wider text-gray-500 text-center mb-10">
        Explore full-stack solutions and product-ready platforms
      </p>

      <div className="grid sm:grid-cols-2 gap-8">
        {projects.map((proj) => (
          <motion.div
            key={proj.title}
            whileHover={{ scale: 1.02 }}
            onClick={() => {
              setOpen(proj);
              setView("desktop");
            }}
            className="cursor-pointer rounded-xl border border-gray-200 bg-white p-6 shadow-md hover:shadow-lg transition"
          >
            <span className="text-xs mb-2 inline-block bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full font-medium">
              {proj.tag}
            </span>
            <h3 className="text-lg font-semibold text-[#0f172a] mb-1">
              {proj.title}
            </h3>
            <p className="text-sm text-gray-600 mb-2">{proj.desc}</p>
            <div className="flex flex-wrap gap-2 text-xs">
              {proj.tech.map((t) => (
                <span
                  key={t}
                  className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* GitHub Highlights Section */}
      <section className="max-w-6xl mx-auto px-4 pt-24" id="github">
        <h2 className="text-3xl font-bold text-center text-[#0f172a] mb-2">
          GitHub Highlights
        </h2>
        <p className="text-sm uppercase tracking-wider text-gray-500 text-center mb-10"></p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-xl border border-gray-200 shadow hover:shadow-md transition"
          >
            <h3 className="font-semibold text-[#0f172a] mb-1 text-sm">
              Top Repo
            </h3>
            <p className="text-sm text-gray-600">ZeroToOne MVP UI Kit</p>
            <p className="text-xs text-gray-400 mt-2">
              ⭐ 72 stars · 🧑‍💻 15 contributors
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-xl border border-gray-200 shadow hover:shadow-md transition"
          >
            <h3 className="font-semibold text-[#0f172a] mb-1 text-sm">
              Contributions
            </h3>
            <p className="text-sm text-gray-600">1,400+ commits this year</p>
            <p className="text-xs text-gray-400 mt-2">
              Always developing and contributing
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-xl border border-gray-200 shadow hover:shadow-md transition"
          >
            <h3 className="font-semibold text-[#0f172a] mb-1 text-sm">
              Languages
            </h3>
            <p className="text-sm text-gray-600">TypeScript, Ruby, Next.js</p>
            <p className="text-xs text-gray-400 mt-2">Full-stack proficiency</p>
          </motion.div>
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm font-medium text-blue-600 hover:underline"
          >
            View Full GitHub Profile →
          </a>
        </div>
      </section>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 bg-gray-900/60 backdrop-blur-sm overflow-y-auto px-4 py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative max-w-5xl mx-auto space-y-10">
              <button
                onClick={() => setOpen(null)}
                className="absolute top-4 right-4 text-gray-300 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>

              <motion.div
                className="grid md:grid-cols-2 gap-12 bg-white p-8 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 30, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <div>
                  <h3 className="text-2xl font-bold text-[#0f172a] mb-2">
                    {open.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {open.summary}
                  </p>
                  <div className="space-y-4">
                    {open.features.map((f, index) => (
                      <motion.div
                        key={f.title}
                        className="flex gap-3 items-start"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="p-2 bg-blue-100 rounded-md">
                          {f.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm text-[#0f172a]">
                            {f.title}
                          </h4>
                          <p className="text-sm text-gray-600">{f.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <h5 className="text-sm font-semibold text-gray-700 mb-4">
                      Timeline
                    </h5>
                    <div className="relative border-l-2 border-blue-200 pl-5 space-y-6">
                      {open.timeline.map((t) => (
                        <div key={t.phase} className="relative">
                          <span className="absolute left-[-11px] top-1 w-4 h-4 bg-blue-500 border-2 border-white rounded-full shadow" />
                          <div className="ml-4">
                            <h6 className="text-sm font-bold text-[#0f172a]">
                              {t.phase}
                            </h6>
                            <p className="text-sm text-gray-600">{t.detail}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <button
                    onClick={toggleView}
                    className="mb-4 text-sm text-blue-600 hover:underline flex items-center gap-1"
                  >
                    <SwitchCamera className="w-4 h-4" />
                    Switch to {view === "desktop" ? "Mobile" : "Desktop"}
                  </button>

                  <div className="relative rounded-xl overflow-hidden shadow-lg">
                    <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] px-2 py-0.5 transform rotate-45 origin-top-right translate-x-4 -translate-y-2 shadow">
                      Built With {open.tech[0]}
                    </div>
                    <div className="absolute inset-0 bg-blue-100 blur-2xl opacity-30 z-[-1]" />
                    <Image
                      src={view === "desktop" ? open.images[0] : open.images[1]}
                      alt={`${view} UI`}
                      width={view === "desktop" ? 1280 : 260}
                      height={view === "desktop" ? 800 : 520}
                      className={`${
                        view === "desktop" ? "rounded-xl" : "rounded-[2rem]"
                      } shadow`}
                    />
                  </div>

                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    {open.live && (
                      <motion.a
                        href={open.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg shadow transition"
                        whileHover={{ scale: 1.05 }}
                      >
                        <MonitorSmartphone className="w-4 h-4" />
                        Live Site
                      </motion.a>
                    )}
                    <motion.a
                      href={open.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg shadow transition"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Lock className="w-4 h-4" />
                      View Repository
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
