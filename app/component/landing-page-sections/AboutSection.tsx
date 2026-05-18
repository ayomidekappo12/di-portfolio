import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto grid max-w-6xl items-start gap-14 md:grid-cols-[320px_1fr]">
        <div className="relative">
          <h2 className="text-[48px] font-semibold leading-[0.95] tracking-[-2px] text-black">
            Hello.
            <br />
            I&apos;m Divinefortune
          </h2>

          <div className="relative mt-8 h-75 w-75 rotate-[-5deg] overflow-hidden rounded-4xl bg-[#FFF] shadow-[2px_2px_0px_0px_rgba(13,13,13,0.10)]">
            <Image
              src="https://res.cloudinary.com/dxvf9uqwe/image/upload/v1778841215/Variant_1_6ZCFq2oDqFpYGI9m864833Gzft8.jpg_vuujuq.svg"
              alt="Divinefortune"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="max-w-155">
          <div className="space-y-6 text-[15px] leading-[1.9] text-[#6F6F6F]">
            <p>
              I&apos;m a product designer who&apos;s spent the past few years
              building and shipping products across startups, freelance
              projects, and growing teams. I didn&apos;t start in design
              straight away, I came in from a background that trained me to
              think structurally and intentionally, and that still shows in
              how I approach problems today. I naturally zoom out to
              understand the whole system, then zoom back in to shape the
              details that make it work.
            </p>

            <p>
              A lot of my growth has come from working independently.
              I&apos;ve taken projects from idea to execution on my own, which
              pushed me to learn motion, product design, and how to take real
              ownership of outcomes. That experience made me both self-driven
              and comfortable making decisions, while still being thoughtful
              about trade-offs.
            </p>

            <p>
              I&apos;m deeply curious by nature. I enjoy sitting with complex
              problems, asking "why" until things make sense, and designing
              solutions that feel both logical and human. I&apos;m always
              learning, whether that&apos;s exploring new tools, refining my
              thinking, or challenging my own assumptions.
            </p>

            <p>
              I&apos;ve collaborated with people across different countries
              and cultures, and that&apos;s shaped how I communicate and work
              with teams. I value spaces where people feel safe to speak up,
              and I tend to communicate openly and clearly to keep everyone
              aligned.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-pill md:bg-[#1F1F1F] px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
            >
              <Image
                src="./clip.svg"
                alt="Email icon"
                width={14}
                height={14}
              />
              <span>Copy email</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-[#BDBDBD] bg-transparent px-5 py-3 text-sm font-medium text-[#4D4D4D] transition hover:bg-black/5"
            >
              <Image
                src="./linkedin.svg"
                alt="LinkedIn icon"
                width={14}
                height={14}
              />
              <span>Connect with me</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
