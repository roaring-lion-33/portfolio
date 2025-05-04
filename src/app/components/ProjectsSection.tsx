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
} from "lucide-react";

const projects = [
  {
    title: "DaVinci Reporting Platform",
    desc: "Smart reporting system with form builder, PDF export, and client portals.",
    tech: [
      "Ruby on Rails",
      "Turbo",
      "TailwindCSS",
      "Grover PDF",
      "Stimulus",
      "Stripe",
    ],
    banner: "/images/davinci-banner.png",
    summary:
      "DaVinci transforms complex inspections into beautiful, token-secured reports with dynamic fields, automated PDF generation, and real-time updates.",
    features: [
      {
        icon: <FormInput className="w-5 h-5 text-blue-600" />,
        title: "Dynamic Form Builder",
        desc: "Drag-and-drop interface for building custom inspection forms.",
      },
      {
        icon: <FileText className="w-5 h-5 text-blue-600" />,
        title: "PDF Export",
        desc: "Generate branded, pixel-perfect PDFs using Grover.",
      },
      {
        icon: <Lock className="w-5 h-5 text-blue-600" />,
        title: "Secure Share Links",
        desc: "Token-based links with expiration for external client access.",
      },
    ],
    timeline: [
      { phase: "Q1: Build MVP", detail: "Form builder, PDF, core UI" },
      { phase: "Q2: Add Client Portal", detail: "Token auth + public views" },
      { phase: "Q3: UI Polish", detail: "Tailwind & Turbo refinements" },
    ],
    images: ["/images/davinci-ui-1.png", "/images/davinci-ui-2.png"],
    repo: "https://github.com/yourhandle/davinci-platform",
  },
];

export default function ProjectShowcase() {
  const [open, setOpen] = useState(null);
  const [view, setView] = useState("desktop");

  const toggleView = () => setView(view === "desktop" ? "mobile" : "desktop");

  return (
    <section className="max-w-6xl mx-auto px-4 py-24">
      <h2 className="text-4xl font-bold text-center mb-2 text-[#0f172a]">
        Featured Projects
      </h2>
      <p className="text-sm uppercase tracking-wider text-gray-500 text-center mb-10">
        Explore real full-stack builds and polished product platforms
      </p>

      <div className="grid sm:grid-cols-2 gap-8">
        {projects.map((proj) => (
          <div
            key={proj.title}
            onClick={() => setOpen(proj)}
            className="cursor-pointer rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition"
          >
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
          </div>
        ))}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 bg-white overflow-y-auto px-4 py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="max-w-5xl mx-auto space-y-8">
              <Image
                src={open.banner}
                alt="Project Banner"
                width={1200}
                height={400}
                className="rounded-lg w-full object-cover"
              />
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-[#0f172a] mb-2">
                    {open.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {open.summary}
                  </p>

                  <div className="space-y-4">
                    {open.features.map((f) => (
                      <div key={f.title} className="flex gap-3 items-start">
                        <div className="p-2 bg-blue-100 rounded-md">
                          {f.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm text-[#0f172a]">
                            {f.title}
                          </h4>
                          <p className="text-sm text-gray-600">{f.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <h5 className="text-sm font-semibold text-gray-700 mb-2">
                      Timeline
                    </h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {open.timeline.map((t) => (
                        <li key={t.phase}>
                          <span className="font-medium text-[#0f172a]">
                            {t.phase}:
                          </span>{" "}
                          {t.detail}
                        </li>
                      ))}
                    </ul>
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

                  {view === "desktop" ? (
                    <Image
                      src={open.images[0]}
                      alt="Desktop UI"
                      width={1280}
                      height={800}
                      className="rounded-xl shadow"
                    />
                  ) : (
                    <Image
                      src={open.images[1]}
                      alt="Mobile UI"
                      width={260}
                      height={520}
                      className="rounded-[2rem] shadow"
                    />
                  )}

                  <a
                    href={open.repo}
                    target="_blank"
                    className="mt-6 inline-block text-blue-600 text-sm underline"
                    rel="noopener noreferrer"
                  >
                    View Repository ↗
                  </a>
                </div>
              </div>

              <div className="text-center mt-8">
                <button
                  onClick={() => setOpen(null)}
                  className="text-gray-400 hover:text-gray-600 text-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
