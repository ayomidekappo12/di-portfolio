import Image from "next/image";
import { Sparkle } from "@/components/sparkle";

export default function HeroSection() {
  return (
    <section className="px-6 pt-16 pb-12 md:pt-24 md:pb-20 bg-[#FAF9F6]">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center gap-3 text-ink/40">
          <Image
            src="./container.svg"
            alt="Divinefortune's eye Logo"
            width={32}
            height={32}
            className="mr-2 rounded-full"
          />
        </div>

        <h1 className="relative max-w-3xl text-4xl font-medium leading-[1.05] md:text-6xl">
          Hi, I&apos;m Divinefortune
          <span className="hidden relative lg:inline-flex items-start leading-none">
            <Sparkle className="hidden absolute left-1/2 top-0 -translate-x-1/2 -translate-y-full h-10 w-10 text-mustard" />
          </span>
          <br />A Product Designer
        </h1>

        <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
          Mainly working in the UX Design ecosystem, weaving thoughtful
          research, calm interfaces and real solutions into business goals.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-ink drop-shadow-black px-5 py-2.5 text-sm font-medium text-pill-foreground transition hover:opacity-90"
          >
            <Image
              src="./Graphic.svg"
              alt="Divinefortune's mail Logo"
              width={16}
              height={16}
              className="rounded-full"
            />
            <span>Contact me</span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-connect bg-transparent px-5 py-2.5 text-sm font-medium text-connect transition hover:bg-ink/5"
          >
            <Image
              src="./Copy.svg"
              alt="Divinefortune's linkedin Logo"
              width={16}
              height={16}
              className="rounded-full"
            />
            <span>Connect with me</span>
          </a>
        </div>
      </div>
    </section>
  );
}
