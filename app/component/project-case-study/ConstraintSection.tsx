"use client";

import Image from "next/image";
import { Pill } from "@/components/pill";

const items = [
  {
    n: "01",
    title: "Accuracy of body-type detection",
    body: "Users vary widely in height, posture, clothing, camera quality, lighting. False positives or mismatches can undermine trust.",
  },

  {
    n: "02",
    title: "Privacy concerns",
    body: "Users may hesitate to upload photos or scan their body; requires strong privacy messaging and transparent data handling.",
  },

  {
    n: "03",
    title: "Diverse body shapes & inclusivity",
    body: "Designing recommendations that meaningfully cover all body types, skin tones, and proportions without bias.",
  },

  {
    n: "04",
    title: "Fashion inventory limitations",
    body: "Generating tailored outfit suggestions requires access to a robust, inclusive catalog of garments in all sizes and styles.",
  },

  {
    n: "05",
    title: "Performance & loading time",
    body: "Body scan, analysis, and recommendation generation must be fast enough to avoid user frustration.",
  },

  {
    n: "06",
    title: "User preference variability",
    body: "Taste, budget, culture amongst others were hard to model perfectly within AI.",
  },
];

export function ConstraintsSection() {
  return (
    <section className="bg-white px-6 py-24 ">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-5">
          <div className="w-fit">
            <Pill tone="dark">
              <Image
                src="./lock.svg"
                alt="Constraints icon"
                width={24}
                height={24}
                className="rounded-full"
              />

              <span className="px-4 text-lg font-medium md:text-2xl text-[#E4FFF2]">
                Constraints and Challenges
              </span>
            </Pill>
          </div>
          <p className="max-w-105 text-[13px] leading-4.5 text-[#8C8C8C]">
            During design, I faced (and expect to face) several constraints.
            Some of them include the following:
          </p>
        </div>
        <div className="mt-14 grid gap-x-10 gap-y-14 md:mt-20 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-16 lg:gap-y-20">
          {items.map((item) => (
            <article key={item.n} className="max-w-75">
              <p className="text-[72px] font-bold leading-none tracking-[-4px] text-[#A3A3A3]">
                {item.n}
              </p>
              <h3 className="mt-5 text-[34px] font-medium leading-9.5 tracking-[-1.5px] text-[#2B2B2B]">
                {item.title}
              </h3>
              <p className="mt-4 text-[13px] leading-4.5 text-[#9B9B9B]">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
