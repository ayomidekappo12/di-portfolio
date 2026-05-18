import { CaseStudyHero } from "@/app/component/project-case-study/CaseStudyHero";
import { LearningsSection } from "@/app/component/project-case-study/LearningsSection";
import { MediaPlaceholder } from "@/app/component/project-case-study/MediaPlaceholder";
import { ResearchDiscovery } from "@/app/component/project-case-study/ResearchDiscovery";
import FooterSection from "@/app/component/landing-page-sections/FooterSection";
import { ConstraintsSection } from "@/app/component/project-case-study/ConstraintSection";
import { ThankYouSection } from "@/app/component/project-case-study/CoffeeSection";

export default function BodyTypeRecognitionCaseStudyPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] py-6 md:py-10">
      <div className="mx-auto flex w-full flex-col gap-6 md:gap-8 px-4 sm:px-6 md:px-10 lg:px-20">
        <CaseStudyHero />
        <MediaPlaceholder />
      </div>

      <ResearchDiscovery />
      <ConstraintsSection />
      <LearningsSection />
      <ThankYouSection />
      <FooterSection />
    </main>
  );
}
