import { Pill } from "@/components/pill";
import Image from "next/image";

export function ResearchDiscovery() {
  return (
    <section className="mt-8 w-full bg-[#202020] px-4 py-10 md:p-6">
      <div className="grid gap-12 md:m-6 lg:m-12 lg:grid-cols-[0.8fr_1.2fr]">

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-5">
            <Pill tone="mustard">
              <Image
                src="./test-tube-01.svg"
                alt="profile"
                width={18}
                height={16}
                className="object-cover"
              />
              <span className="px-3 text-lg font-medium tracking-[-0.03em] text-black md:text-2xl">
                Research & Discovery
              </span>
            </Pill>
          </div>

          <div className="space-y-8 py-3 md:ml-4">
            <div>
              <h3 className="text-lg font-bold tracking-[-0.03em] text-[#DCDCDC] md:text-xl">
                To validate the idea and better understand user needs, I began
                with:
              </h3>

              <p className="mt-4 text-sm leading-6 text-[#9A9A9A] md:text-base">
                User interviews & surveys — talking to people about their pain
                with online shopping.
              </p>

              <p className="mt-6 text-sm leading-6 text-[#9A9A9A] md:text-base">
                Competitive & market analysis — evaluating existing fashion apps
                and style services.
              </p>

              <p className="mt-6 text-sm leading-6 text-[#9A9A9A] md:text-base">
                Body-type research — studying common body shape classifications.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold tracking-[-0.03em] text-[#DCDCDC] md:text-xl">
                Key findings:
              </h3>

              <ol className="mt-4 list-decimal space-y-3 pl-6">
                <li className="text-sm leading-6 text-[#9A9A9A] md:text-base">
                  Users often don&apos;t know their body type.
                </li>

                <li className="text-sm leading-6 text-[#9A9A9A] md:text-base">
                  Users dislike returns and want confidence.
                </li>

                <li className="text-sm leading-6 text-[#9A9A9A] md:text-base">
                  Flexible experiences increase trust.
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center lg:justify-end">
          <Image
            src="./Memoji.svg"
            alt="profile"
            width={350}
            height={405}
            className="w-60 object-cover md:w-75 lg:w-87.5"
          />
        </div>
      </div>
    </section>
  );
}