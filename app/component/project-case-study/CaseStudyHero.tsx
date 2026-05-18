import Image from "next/image";

export function CaseStudyHero() {
  return (
    <section className="my-2 flex flex-col items-center justify-center">
      <Image
        src="https://res.cloudinary.com/dxvf9uqwe/image/upload/v1778951021/Desktop_-_7_wruaoa.svg"
        alt="profile"
        width={1300}
        height={873}
        className="w-full rounded-md bg-white object-cover"
      />

      <div className="grid w-full gap-10 py-10 md:gap-14 md:py-16 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="max-w-4xl text-3xl font-medium leading-[1.05] tracking-[-0.04em] text-black sm:text-4xl md:text-5xl">
              Reducing online shopping returns using AI body-type recognition
            </h1>
          </div>
        </div>
        <div className="flex flex-col justify-start lg:pl-10">
          <div className="space-y-5 border-l border-[#D9D9D9] pl-5 md:pl-8">
            {/* TEAM */}
            <div className="grid grid-cols-[90px_1fr] gap-4 md:grid-cols-[120px_1fr]">
              <p className="text-sm text-[#7A7A7A]">Team</p>

              <div className="flex items-start gap-2">
                <div className="relative overflow-hidden rounded-full">
                  <Image
                    src="./divine.svg"
                    alt="profile"
                    width={38}
                    height={38}
                    className="rounded-md bg-white object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-[90px_1fr] gap-4 border-t border-[#D9D9D9] pt-4 md:grid-cols-[120px_1fr]">
              <p className="text-sm text-[#7A7A7A]">My role</p>

              <div className="space-y-1 text-sm leading-6 text-black md:text-[15px] md:leading-7">
                <p>Solo designer</p>
                <p>UX & UI Design</p>
                <p>Design system</p>
                <p>UX Research</p>
              </div>
            </div>
            <div className="grid grid-cols-[90px_1fr] gap-4 border-t border-[#D9D9D9] pt-4 md:grid-cols-[120px_1fr]">
              <p className="text-sm text-[#7A7A7A]">Timeline</p>

              <p className="text-sm text-black md:text-[15px]">
                October - November 2025
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 w-full md:mt-10">
        {/* Pill */}
        <div className="inline-flex items-center gap-3 rounded-full bg-[#003B36] px-5 py-3 md:gap-5 md:px-8 md:py-4.5">
          <div className="flex items-center justify-center">
            <Image
              src="./bug-02.svg"
              alt="profile"
              width={26}
              height={26}
              className="object-cover"
            />
          </div>

          <span className="text-lg font-medium tracking-[-0.03em] text-pill-foreground md:text-2xl">
            Problem and Motivation
          </span>
        </div>
        <div className="mt-8 max-w-4xl space-y-8 py-3 md:pr-24 lg:pr-80">
          <div>
            <h3 className="text-lg font-bold tracking-[-0.03em] text-[#222222] md:text-xl">
              Background
            </h3>

            <p className="mt-4 text-sm font-normal leading-6 text-[#7B7B7B] md:text-base">
              Today, many people struggle to find clothes that truly flatter
              their body shape especially when shopping online. A garment may
              look great on a model, but end up ill-fitting or unflattering in
              real life. That leads to poor fit, low confidence, and high return
              rates.
            </p>

            <p className="mt-6 text-sm font-normal leading-6 text-[#7B7B7B] md:text-base">
              At the same time, existing “style” or “fashion-recommendation”
              apps tend to be generic, they suggest outfits based on trending
              looks or what other people wear, but rarely on your unique body
              shape.
            </p>

            <p className="mt-6 text-sm font-normal leading-6 text-[#7B7B7B] md:text-base">
              I saw a significant opportunity: build an app that uses AI +
              body-type recognition to help users discover outfits tailored to
              their own proportions, style preferences, and color tastes.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold tracking-[-0.03em] text-[#222222] md:text-xl">
              Goal
            </h3>

            <p className="mt-4 text-sm font-normal leading-6 text-[#7B7B7B] md:text-base">
              Create a user-centered mobile app that empowers individuals to
              find clothing that fits their body, boosting confidence, reducing
              guesswork, and making online fashion more inclusive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
