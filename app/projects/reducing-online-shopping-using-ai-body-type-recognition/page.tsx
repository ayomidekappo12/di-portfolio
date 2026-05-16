import { CaseStudyHero } from "@/app/component/project-case-study/CaseStudyHero";
import { CaseStudyVideo } from "@/app/component/project-case-study/CaseStudyVideo";
import { MediaPlaceholder } from "@/app/component/project-case-study/MediaPlaceholder";

export default function BodyTypeRecognitionCaseStudyPage() {
  return (
    <main className="min-h-screen bg-[#F2F0E9] px-6 py-10 md:py-14">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <CaseStudyHero />
        <MediaPlaceholder
          title="Problem and discovery"
          description="Drop in the exact image frames from your video where you explain the model-to-reality gap and user pain points."
        />
        <MediaPlaceholder
          title="Solution and product flow"
          description="Use these placeholders for AI body-type onboarding, fit recommendation logic, and confidence-building checkout states."
        />
        <CaseStudyVideo />
      </div>
    </main>
  );
}
