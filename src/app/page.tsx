"use client";

import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import FloatingCTA from "./components/FloatingCTA";

export default function Home() {
  return (
    <main className="relative z-10 text-gray-900 bg-white min-h-screen">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <FloatingCTA />
    </main>
  );
}
