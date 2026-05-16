import { CaseStudyHero } from "@/app/component/project-case-study/CaseStudyHero";
import { CaseStudyVideo } from "@/app/component/project-case-study/CaseStudyVideo";
import { MediaPlaceholder } from "@/app/component/project-case-study/MediaPlaceholder";

const processSteps = [
  "Audited user complaints around model-to-reality mismatch and return reasons.",
  "Mapped where confidence drops in browsing, sizing, and checkout flows.",
  "Introduced AI body-type detection with transparent confidence messaging.",
  "Validated reduced uncertainty with task-based usability sessions.",
];

export default function BodyTypeRecognitionCaseStudyPage() {
  return (
    <main className="min-h-screen bg-[#F2F0E9] px-6 py-10 md:py-14">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <CaseStudyHero />

        <section className="rounded-[2rem] border border-black/10 bg-white p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Problem framing</p>
          <h2 className="mt-2 text-2xl md:text-3xl">Why this project matters</h2>
          <p className="mt-3 text-sm text-muted-foreground md:text-base">
            Shoppers abandon carts when they cannot tell how clothing will sit on their actual body type.
            This case study focuses on reducing guesswork with fit intelligence.
          </p>
          <ul className="mt-5 space-y-3">
            {processSteps.map((step) => (
              <li key={step} className="rounded-xl border border-black/10 bg-[#faf9f6] px-4 py-3 text-sm">
                {step}
              </li>
            ))}
          </ul>
        </section>

        <section id="design" className="grid gap-8">
          <MediaPlaceholder
            sectionLabel="Design sequence 01"
            title="Research, pain points, and insight synthesis"
            description="Add your exact storyboard frames/screens from the video for interview highlights, pain-point clusters, and opportunity mapping."
            placeholders={["Insert research board image", "Insert pain-point affinity map"]}
          />

          <MediaPlaceholder
            sectionLabel="Design sequence 02"
            title="AI body-type detection experience"
            description="Drop in onboarding, scan guidance, confidence score UI, and personalized fit recommendation mockups."
            placeholders={["Insert scan onboarding screen", "Insert personalized fit recommendation"]}
          />

          <MediaPlaceholder
            sectionLabel="Design sequence 03"
            title="Validation, outcomes, and next steps"
            description="Use these slots for usability evidence, return-rate impact visuals, and future roadmap cards shown in your video."
            placeholders={["Insert validation outcomes", "Insert roadmap / iteration board"]}
          />
        </section>

        <CaseStudyVideo />
      </div>
    </main>
  );
}
