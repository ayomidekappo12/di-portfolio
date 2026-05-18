import Image from "next/image";
import { Pill } from "@/components/pill";

export default function DesignPhilosophySection() {
  return (
    <section className="overflow-hidden bg-[#202020] px-3 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex justify-center md:justify-start">
          <Pill tone="mustard">
          <Image
            src="./idea.svg"
            alt="Design philosophy icon"
            width={16}
            height={16}
            className="rounded-full"
          />

          <span className="px-2">My Design Philosophy</span>
        </Pill></div>

        <div className="relative mt-24">
          <svg
            className="pointer-events-none absolute left-0 top-0 hidden h-105 w-full md:block"
            viewBox="0 0 1200 420"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="
                M285 180
                C390 40, 505 55, 610 205
              "
              stroke="#B6FF00"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />

            /* START CIRCLE */
            <circle
              cx="285"
              cy="180"
              r="7"
              stroke="#B6FF00"
              strokeWidth="2"
              fill="#202020"
            />

            /* END CIRCLE */
            <circle
              cx="610"
              cy="205"
              r="7"
              stroke="#B6FF00"
              strokeWidth="2"
              fill="#202020"
            />
            <path
              d="
                M700 255
                C760 215, 805 315, 730 330
                C650 345, 675 235, 815 270
                S930 335, 980 290
              "
              stroke="#B6FF00"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />

            /* START CIRCLE */
            <circle
              cx="700"
              cy="255"
              r="7"
              stroke="#B6FF00"
              strokeWidth="2"
              fill="#202020"
            />

            /* END CIRCLE */
            <circle
              cx="980"
              cy="290"
              r="7"
              stroke="#B6FF00"
              strokeWidth="2"
              fill="#202020"
            />
          </svg>

          <div className="relative grid gap-10 md:grid-cols-3">
            {[
              {
                n: "01",
                title: `Always start with the "WHY"`,

                body: `A lot of people can build products. Very few can clearly explain why those products should exist.
I'm intentional about my work, I don't design anything unless I can justify the real need behind it.`,

                rotate: "rotate-[6deg]",
              },

              {
                n: "02",

                title: "Practice Empathy",

                body: `Everyone experiences the world differently. We all see, think, and perceive things in our own way.
As a designer, my responsibility is to represent those differences, and to speak up for users in the decisions that shape their experiences while building the business goals.`,

                rotate: "-rotate-[5deg]",
              },

              {
                n: "03",

                title: "Be fair and responsible",

                body: `It wasn't until I started writing and reflecting deeply especially on Medium, about how design influences behavior and perception that I truly grasped the power visuals hold.
That realization shaped how I see my role as a designer: not just to make things look good, but to be intentional, responsible, and aware of how every design choice can influence how people think, feel, and interact with the world.`,

                rotate: "rotate-[12deg]",
              },
            ].map(({ n, title, body, rotate }) => (
              <div
                key={n}
                className={`
                  relative
                  mx-auto
                  flex
                  max-w-[320px]
                  flex-col
                  items-center
                  justify-center
                  text-center
                  ${rotate}
                `}
              >
                <div className="text-[72px] font-bold leading-none tracking-tight text-[#8F8F8F] md:text-[92px]">
                  {n}
                </div>

                <h4 className="mt-5 max-w-65 text-[28px] font-medium leading-tight text-white">
                  {title}
                </h4>

                <p className="mt-4 max-w-72.5 text-sm leading-6 text-[#9A9A9A]">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
