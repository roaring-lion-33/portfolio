import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectShowcase from "./components/ProjectShowcase";
import ContactSection from "./components/ContactSection";
import FloatingCTA from "./components/FloatingCTA";
import ExperienceTimeline from "./components/ExperienceTimeline";

export const metadata = {
  title: "Home",
  description:
    "Explore the portfolio of Frank Camp, showcasing modern full stack projects and UI craftsmanship.",
};

export default function Home() {
  return (
    <main className="relative z-10 text-gray-900 bg-slate-50 min-h-screen">
      <HeroSection />
      <AboutSection />
      <ExperienceTimeline />
      <SkillsSection />
      <ProjectShowcase />
      <ContactSection />
      <FloatingCTA />
    </main>
  );
}
