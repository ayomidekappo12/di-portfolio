export function CaseStudyVideo() {
  return (
    <section id="video" className="rounded-[2rem] border border-black/10 bg-white p-6 md:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Final walkthrough</p>
      <h2 className="mt-2 text-2xl md:text-3xl">Video case study</h2>
      <p className="mt-3 text-sm text-muted-foreground md:text-base">
        Embedded from <code>public/Video Project 1.mp4</code>. Replace or trim as needed.
      </p>

      <div className="mt-6 overflow-hidden rounded-2xl border border-black/10 bg-black">
        <video className="w-full" controls preload="metadata">
          <source src="/Video Project 1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
