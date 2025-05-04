import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectShowcase from "./components/ProjectShowcase";
import ContactSection from "./components/ContactSection";
import FloatingCTA from "./components/FloatingCTA";
import ExperienceTimeline from "./components/ExperienceTimeline";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frank Camp – Full Stack Developer",
  description:
    "Explore the portfolio of Frank Camp, showcasing modern full stack projects and UI craftsmanship.",
  keywords: [
    "Frank Camp",
    "Software Engineer",
    "Full Stack Developer",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Ruby on Rails",
    "React Developer Portfolio",
    "Senior Web Developer",
    "UI Engineer",
  ],
  alternates: {
    canonical: "https://frankcamp.tech",
  },
  openGraph: {
    title: "Frank Camp – Full Stack Developer",
    description:
      "Explore the portfolio of Frank Camp, showcasing modern full stack projects and UI craftsmanship.",
    url: "https://frankcamp.tech",
    siteName: "Frank Camp Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Frank Camp Portfolio Screenshot",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frank Camp – Full Stack Developer",
    description:
      "Explore the portfolio of Frank Camp, showcasing modern full stack projects and UI craftsmanship.",
    creator: "@FrankCampTech",
    images: ["/og-image.jpg"],
  },
};

export default function Home() {
  return (
    <main className="relative bg-gradient-to-br from-slate-50 to-white text-gray-900 min-h-screen antialiased selection:bg-blue-100 selection:text-blue-900">
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
