import Link from "next/link";

const quickMeta = [
  { label: "Timeline", value: "6 weeks" },
  { label: "Role", value: "Product Designer" },
  { label: "Team", value: "PM + 2 Engineers + AI Lead" },
  { label: "Platform", value: "Responsive web" },
];

export function CaseStudyHero() {
  return (
    <header className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-[3px_3px_0_0_rgba(13,13,13,0.08)] md:p-10">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        B2B SaaS · Fashion & Apparel
      </p>

      <h1 className="mt-3 max-w-4xl text-3xl leading-tight md:text-5xl">
        Reducing online shopping using AI body-type recognition
      </h1>

      <p className="mt-4 max-w-3xl text-sm text-muted-foreground md:text-base">
        End-to-end case study page rebuilt to mirror your project flow: context,
        challenge, solution exploration, experience design, and final video
        walkthrough.
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {quickMeta.map((item) => (
          <div key={item.label} className="rounded-2xl border border-black/10 bg-[#faf9f6] p-4">
            <p className="text-xs uppercase tracking-wide text-muted-foreground">{item.label}</p>
            <p className="mt-1 text-sm font-medium">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="#video" className="rounded-full bg-pill px-5 py-2 text-sm font-medium text-pill-foreground">
          Watch case study video
        </Link>
        <Link href="#design" className="rounded-full border border-connect px-5 py-2 text-sm font-medium text-connect">
          Jump to design screens
        </Link>
      </div>
    </header>
  );
}
