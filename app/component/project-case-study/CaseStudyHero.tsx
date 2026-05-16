import Link from "next/link";

export function CaseStudyHero() {
  return (
    <header className="rounded-4xl border border-black/10 bg-white p-6 md:p-10">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        B2B SaaS · Fashion & Apparel
      </p>
      <h1 className="mt-3 text-3xl leading-tight md:text-5xl">
        Reducing online shopping using AI body-type recognition
      </h1>
      <p className="mt-4 max-w-3xl text-sm text-muted-foreground md:text-base">
        A modular case study page scaffolded from your video brief with reusable
        sections and placeholder media slots, ready for your final visuals and
        copy refinements.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="#video"
          className="rounded-full bg-pill px-5 py-2 text-sm font-medium text-pill-foreground"
        >
          Jump to video
        </Link>
        <Link
          href="/"
          className="rounded-full border border-connect px-5 py-2 text-sm font-medium text-connect"
        >
          Back to home
        </Link>
      </div>
    </header>
  );
}
