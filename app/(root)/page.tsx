import React from "react";
import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import ExperienceSection from "@/components/sections/experience-section";
import TechStack from "@/components/sections/tech-stack";
import ProjectsSection from "@/components/sections/projects-section";
import FooterSection from "@/components/sections/footer-section";

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-violet-500/20 selection:text-violet-600">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <TechStack />
      <ProjectsSection />
      <FooterSection />
    </main>
  );
}
