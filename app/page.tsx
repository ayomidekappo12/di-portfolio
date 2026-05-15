"use client";

import HeroSection from "@/app/component/sections/HeroSection";
import ProjectsSection from "@/app/component/sections/ProjectsSection";
import SkillsSection from "@/app/component/sections/SkillsSection";
import DesignPhilosophySection from "@/app/component/sections/DesignPhilosophySection";
import TestimonialsSection from "@/app/component/sections/TestimonialsSection";
import AboutSection from "@/app/component/sections/AboutSection";
import FooterSection from "@/app/component/sections/FooterSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <DesignPhilosophySection />
      <TestimonialsSection />
      <AboutSection />
      <FooterSection />
    </main>
  );
}
