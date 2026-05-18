import Image from "next/image";

export function LearningsSection() {
  const learnings = [
    {
      title: "Designing for real people",
      description:
        "Building multiple input paths (AI scan, image upload, manual entry) reinforced the importance of inclusivity, comfort, and user control in sensitive experiences like body profiling.",
    },
    {
      title: "Clarity over complexity",
      description:
        "I learned that simplifying flows by merging screens and reducing steps, significantly improves comprehension, confidence, and completion rates without sacrificing functionality.",
    },
    {
      title: "Trust is designed, not assumed",
      description:
        "Clear feedback states, graceful loading, and transparent explanations helped establish credibility in an AI-driven experience where users need reassurance.",
    },
    {
      title: "Personalization needs structure",
      description:
        "Effective personalization is not just about AI, it requires well-defined inputs, thoughtful defaults, and modular systems that scale across styles, body types, and future features.",
    },
    {
      title: "Progressive disclosure drives engagement:",
      description:
        "Revealing information in stages (scan → profile → preference → recommendation) kept users focused and reduced overwhelm while maintaining curiosity.",
    },
  ];

  return (
    <section className="bg-[#f5f5f2] px-6 py-24 md:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl text-center">
<div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4">
  <Image
    src="./sweet.svg"
    alt="profile"
    width={120}
    height={120}
    className="h-20 w-20 object-cover md:h-30 md:w-30"
  />

  <h2 className="text-3xl font-medium tracking-[-0.04em] text-[#343330] md:text-5xl">
    What I Learned & What&apos;s Next
  </h2>
</div>
        <div className="mx-auto mt-20 max-w-3xl space-y-14">
          {learnings.map((item, index) => (
            <div key={index}>
              <h3 className="text-2xl font-medium tracking-[-0.03em] text-[#343330] md:text-[34px]">
                {item.title}
              </h3>

              <p className="mx-auto mt-3 max-w-2xl text-sm leading-4 font-normal text-[#9A9A9A] md:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}