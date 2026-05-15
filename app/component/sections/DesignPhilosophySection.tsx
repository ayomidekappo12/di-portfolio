import Image from "next/image";
import { Pill } from "@/components/pill";

export default function DesignPhilosophySection() {
  return (
    <section className="overflow-hidden bg-[#202020] px-3 py-28">
      <div className="mx-auto max-w-6xl">
        <Pill tone="mustard">
          <Image
            src="./idea.svg"
            alt="Design philosophy icon"
            width={16}
            height={16}
            className="rounded-full"
          />
          <span>My Design Philosophy</span>
        </Pill>

        <div className="relative mt-24">
          {/* CURVED SVG LINES */}
          <svg
            className="pointer-events-none absolute left-0 top-0 hidden h-105 w-full md:block"
            viewBox="0 0 1200 420"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* TOP CURVE → CARD 1 TO CARD 2 */}
            <path
              d="M220 120 
             C320 20, 430 20, 540 120"
              stroke="#B6FF00"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />

            {/* TOP CIRCLES */}
            <circle
              cx="220"
              cy="120"
              r="7"
              stroke="#B6FF00"
              strokeWidth="2"
              fill="#202020"
            />

            <circle
              cx="540"
              cy="120"
              r="7"
              stroke="#B6FF00"
              strokeWidth="2"
              fill="#202020"
            />

            {/* BOTTOM CURLY CURVE → CARD 2 TO CARD 3 */}
            {/* BOTTOM CURLY CURVE → CARD 2 TO CARD 3 */}
            <path
              d="
    M700 285
    C760 245, 800 330, 725 338
    C650 346, 655 255, 775 278
    S940 340, 1035 290
  "
              stroke="#B6FF00"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />

            {/* BOTTOM CIRCLES */}
            <circle
              cx="700"
              cy="285"
              r="7"
              stroke="#B6FF00"
              strokeWidth="2"
              fill="#202020"
            />

            <circle
              cx="1035"
              cy="290"
              r="7"
              stroke="#B6FF00"
              strokeWidth="2"
              fill="#202020"
            />
          </svg>

          {/* GRID */}
          <div className="relative grid gap-16 md:grid-cols-3">
            {[
              {
                n: "01",
                title: `Always start with the "WHY"`,
                body: `A lot of people can build products. Very few can clearly explain why those products should exist.
            I'm intentional about my work, I don't design anything unless I can justify the real need behind it.`,
              },
              {
                n: "02",
                title: "Practice Empathy",
                body: `Everyone experiences the world differently. We all see, think, and perceive things in our own way.
            As a designer, my responsibility is to represent those differences, and to speak up for users in the decisions that shape their experiences while building the business goals.`,
              },
              {
                n: "03",
                title: "Be fair and responsible",
                body: `It wasn't until I started writing and reflecting deeply especially on Medium, about how design influences behavior and perception that I truly grasped the power visuals hold.
            That realization shaped how I see my role as a designer: not just to make things look good, but to be intentional, responsible, and aware of how every design choice can influence how people think, feel, and interact with the world.`,
              },
            ].map(({ n, title, body }) => (
              <div
                key={n}
                className="relative flex flex-col items-center text-center"
              >
                {/* NUMBER */}
                <div className="text-[72px] font-bold leading-none tracking-tight text-[#8F8F8F] md:text-[92px]">
                  {n}
                </div>

                {/* TITLE */}
                <h4 className="mt-5 max-w-60 text-[28px] font-medium leading-tight text-white">
                  {title}
                </h4>

                {/* BODY */}
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
