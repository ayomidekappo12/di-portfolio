"use client";

import HeroSection from "@/app/component/landing-page-sections/HeroSection";
import ProjectsSection from "@/app/component/landing-page-sections/ProjectsSection";
import SkillsSection from "@/app/component/landing-page-sections/SkillsSection";
import DesignPhilosophySection from "@/app/component/landing-page-sections/DesignPhilosophySection";
import TestimonialsSection from "@/app/component/landing-page-sections/TestimonialsSection";
import AboutSection from "@/app/component/landing-page-sections/AboutSection";
import FooterSection from "@/app/component/landing-page-sections/FooterSection";

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
