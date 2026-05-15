import Image from "next/image";

export default function SkillsSection() {
  const toolsIcons = [
    { src: "./figma.svg", alt: "Figma icon" },
    { src: "./sticky-note-03.svg", alt: "Sticky note icon" },
    { src: "./notion-02.svg", alt: "Notion icon" },
  ];

  const bonusesIcons = [
    { src: "./html-5.svg", alt: "HTML5 icon" },
    { src: "./css-3.svg", alt: "CSS3 icon" },
    { src: "./java-script.svg", alt: "JavaScript icon" },
    { src: "./artificial-intelligence-04.svg", alt: "AI icon" },
  ];

  const skillChips = [
    {
      text: "User-Centered Thinking",
      style: {
        top: "38%",
        left: "18%",
        transform: "translateX(-50%) rotate(-12deg)",
        boxShadow: "2px 2px 0 0 #A5D553",
      },
    },

    {
      text: "AI UX",
      style: {
        top: "30%",
        left: "40%",
        transform: "translateX(-50%) rotate(0deg)",
        boxShadow: "2px 2px 0 0 #A5D553",
      },
    },

    {
      text: "UX Research",
      style: {
        top: "40%",
        left: "58%",
        transform: "translateX(-50%) rotate(-5deg)",
        boxShadow: "2px 2px 0 0 #A5D553",
      },
    },

    {
      text: "Problem Framing",
      style: {
        top: "38%",
        left: "82%",
        transform: "translateX(-50%) rotate(0deg)",
        boxShadow: "2px 2px 0 0 #A5D553",
      },
    },

    {
      text: "Product Strategy",
      style: {
        top: "52%",
        left: "33%",
        transform: "translateX(-50%) rotate(-8deg)",
        boxShadow: "2px 2px 0 0 #A5D553",
      },
    },

    {
      text: "Business-Aware Design",
      style: {
        top: "56%",
        left: "66%",
        transform: "translateX(-50%) rotate(0deg)",
        boxShadow: "2px 2px 0 0 #A5D553",
      },
    },

    {
      text: "Information Architecture",
      style: {
        top: "70%",
        left: "25%",
        transform: "translateX(-50%) rotate(6deg)",
        boxShadow: "2px 2px 0 0 #A5D553",
      },
    },

    {
      text: "Prototyping & Validation",
      style: {
        top: "68%",
        left: "46%",
        transform: "translateX(-50%) rotate(12deg)",
        boxShadow: "2px 2px 0 0 #A5D553",
      },
    },

    {
      text: "Systems Thinking",
      style: {
        top: "70%",
        left: "76%",
        transform: "translateX(-50%) rotate(-7deg)",
        boxShadow: "2px 2px 0 0 #A5D553",
      },
    },
  ];

  return (
    <section
      className="bg-dark px-6 py-16 text-dark-foreground md:py-24"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    >
      <div className="mx-auto max-w-5xl">
        <span className="inline-flex items-center gap-2 rounded-full bg-mustard px-4 py-1.5 text-xs font-semibold text-ink">
          <Image
            src="./briefcase-06.svg"
            alt="Divinefortune's mail Logo"
            width={16}
            height={16}
            className="rounded-full"
          />
          Skills And Tools
        </span>

        <div className="mt-10 grid gap-6 md:grid-cols-[0.70fr_1.10fr]">
          {/* Tools */}
          <div className="rounded-3xl bg-lime p-7 text-ink">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#E4FFF2] bg-dark px-3 py-1 text-xs font-medium text-lime">
              <Image
                src="./pen-tool-01.svg"
                alt="Tools icon"
                width={16}
                height={16}
                className="rounded-full"
              />
              Tools
            </span>

            <div className="mt-6 flex items-center gap-6 text-2xl">
              {toolsIcons.map((icon) => (
                <Image
                  key={icon.src}
                  src={icon.src}
                  alt={icon.alt}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
              ))}
            </div>

            <h4 className="mt-5 font-display text-3xl font-semibold leading-tight md:text-4xl">
              Figma, Figjam,
              <br />
              Notion
            </h4>

            <p className="mt-4 text-base font-normal leading-tight text-[#0B2A17]">
              Here, ideas are explored, challenged and tested to go from rough
              thinking to clear direction. From flows, edge cases, early
              structures, to constraints and possibilities, they all happen
              here.
            </p>
          </div>

          {/* Bonuses */}
          <div className="rounded-3xl bg-pill-foreground p-7 text-ink">
            <span className="inline-flex items-center gap-2 rounded-full bg-dark px-3 py-1 text-xs font-medium text-lime">
              <Image
                src="./gift.svg"
                alt="Bonus icon"
                width={16}
                height={16}
                className="rounded-full"
              />
              Bonuses
            </span>

            <div className="mt-6 flex items-center gap-6 text-2xl">
              {bonusesIcons.map((icon) => (
                <Image
                  key={icon.src}
                  src={icon.src}
                  alt={icon.alt}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
              ))}
            </div>

            <h4 className="mt-5 font-display text-3xl font-semibold leading-tight md:text-4xl">
              HTML, CSS, JavaScript & AI
            </h4>

            <p className="mt-4 text-base font-normal leading-tight text-[#7B7B7B]">
              Who doesn&apos;t like a designer with a developer mindset?I move
              from design thinking in Figma through HTML, CSS, and JavaScript,
              learning frontend frameworks while integrating AI into design
              workflows with empathy for developers and collaborate smoothly
              across cross-functional teams.
            </p>
          </div>
        </div>

        {/* Decorative */}
        <div className="relative mx-auto mt-14 h-105 max-w-7xl gap-4 overflow-hidden">
          <div className="absolute left-1/2 top-0 -translate-x-1/2">
            <Image
              src="./Winking Memoji 2.svg"
              alt="Divinefortune's memoji"
              width={205}
              height={174}
              className="object-contain"
            />
          </div>

          {skillChips.map((skill) => (
            <span
              key={skill.text}
              style={skill.style}
              className="absolute w-auto h-auto md:w-50 md:h-12.5 inline-flex items-center justify-center rounded-full border border-[#1B1B1B] bg-[#F5F5F0] mt-14 px-3 py-3 text-[12px] font-medium text-[#1B1B1B] whitespace-nowrap shadow-[2px_2px_0_0_#A5D553]"
            >
              {skill.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
