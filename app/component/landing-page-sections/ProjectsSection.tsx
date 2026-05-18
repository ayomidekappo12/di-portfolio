import Image from "next/image";
import Link from "next/link";
import { Pill } from "@/components/pill";
import { projects } from "@/components/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="px-6 py-12 md:py-16 bg-[#F2F0E9]">
      <div className="mx-auto max-w-5xl">
        <Pill tone="dark">
          <Image
            src="./briefcase-07.svg"
            alt="Divinefortune's mail Logo"
            width={16}
            height={16}
            className="rounded-full"
          />
          <span className="px-2">Projects</span>
        </Pill>

        <div className="mt-10 space-y-16 md:space-y-24">
          {projects.map((project) => (
            <article
              key={project.title}
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
                  {project.actions.map((action, actionIndex) => (
                    <Link
                      key={action.label}
                      href={action.href}
                      className={`inline-flex justify-center sm:justify-normal items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition md:text-sm ${
                        actionIndex === 1
                          ? "border border-connect bg-transparent text-connect hover:bg-ink/5"
                          : "bg-pill text-pill-foreground hover:opacity-90"
                      }`}
                    >
                      {action.label}
                      {actionIndex === 0 ? (
                        <Image
                          src="./youtube.svg"
                          alt="YouTube icon"
                          width={16}
                          height={16}
                          className="rounded-full"
                        />
                      ) : actionIndex === 1 ? (
                        <Image
                          src="./square.svg"
                          alt="Square icon"
                          width={16}
                          height={16}
                          className="rounded-full"
                        />
                      ) : null}
                    </Link>
                  ))}
                </div>
              </div>

              <div
                className="order-1 md:order-2 aspect-4/3 overflow-hidden rounded-4xl bg-[#FFF] shadow-[2px_2px_0px_0px_rgba(13,13,13,0.10)] bg-cover bg-center"
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
