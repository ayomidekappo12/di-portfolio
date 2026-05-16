export function CaseStudyVideo() {
  return (
    <section id="video" className="rounded-3xl border border-black/10 bg-white p-6 md:p-8">
      <h2 className="text-2xl">Video walkthrough</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        This uses your provided <code>public/Video Project 1.mp4</code> asset as a
        ready-to-play project walkthrough.
      </p>
      <video
        className="mt-5 w-full rounded-2xl border border-black/10 bg-black"
        controls
        preload="metadata"
      >
        <source src="/Video Project 1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}
