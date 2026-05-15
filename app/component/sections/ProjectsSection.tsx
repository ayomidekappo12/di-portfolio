import Image from "next/image";
import { Pill } from "@/components/pill";
import { projects } from "@/components/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="px-6 py-12 md:py-16 bg-[#F2F0E9]">
      <div className="mx-auto max-w-5xl">
        <Pill tone="dark">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M5.66602 4.33333C5.66602 3.39703 5.66602 2.92887 5.89072 2.59257C5.988 2.44699 6.113 2.32199 6.25859 2.22471C6.59489 2 7.06302 2 7.99935 2C8.93568 2 9.40382 2 9.74008 2.22471C9.88568 2.32199 10.0107 2.44699 10.1079 2.59257C10.3327 2.92887 10.3327 3.39703 10.3327 4.33333"
              stroke="#E4FFF2"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.6673 9.33337V9.00004C14.6673 6.80017 14.6673 5.70021 13.9839 5.01679C13.3004 4.33337 12.2005 4.33337 10.0007 4.33337H6.00065C3.80076 4.33337 2.70082 4.33337 2.0174 5.01679C1.33398 5.70021 1.33398 6.80017 1.33398 9.00004V9.33337C1.33398 11.5332 1.33398 12.6332 2.0174 13.3166C2.70082 14 3.80076 14 6.00065 14H10.0007C12.2005 14 13.3004 14 13.9839 13.3166C14.6673 12.6332 14.6673 11.5332 14.6673 9.33337Z"
              stroke="#E4FFF2"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.33398 7.33337C1.33398 7.33337 3.08837 10 8.00065 10C12.9129 10 14.6673 7.33337 14.6673 7.33337"
              stroke="#E4FFF2"
              strokeWidth="1.25"
              strokeLinejoin="round"
            />
            <path
              d="M8 8H8.006"
              stroke="#E4FFF2"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Projects</span>
        </Pill>

        <div className="mt-10 space-y-16 md:space-y-24">
          {projects.map((project, index) => (
            <article
              key={index}
              className="grid items-start gap-8 md:grid-cols-[1.1fr_1fr] md:gap-12"
            >
              <div className="order-2 md:order-1">
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {project.tag}
                </p>

                <h3 className="mt-3 text-2xl font-medium leading-tight md:text-4xl">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm leading-tight font-normal text-muted-foreground md:text-base">
                  {project.body}
                </p>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  {project.actions.map((action, index) => (
                    <a
                      key={action}
                      href="#"
                      className={`inline-flex justify-center sm:justify-normal items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition md:text-sm ${
                        index === 1
                          ? "border border-connect bg-transparent text-connect hover:bg-ink/5"
                          : "bg-pill text-pill-foreground hover:opacity-90"
                      }`}
                    >
                      {action}
                      {index === 0 ? (
                        <Image
                          src="./youtube.svg"
                          alt="YouTube icon"
                          width={16}
                          height={16}
                          className="rounded-full"
                        />
                      ) : index === 1 ? (
                        <Image
                          src="./square.svg"
                          alt="Square icon"
                          width={16}
                          height={16}
                          className="rounded-full"
                        />
                      ) : null}
                    </a>
                  ))}
                </div>
              </div>

              <div
                className="order-1 md:order-2 aspect-4/3 w-full rounded-2xl shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)] bg-cover bg-center"
                style={{
                  backgroundImage: `url('${project.img}')`,
                }}
                aria-hidden
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
