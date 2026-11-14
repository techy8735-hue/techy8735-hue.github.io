import { Link } from "@tanstack/react-router";
import { projects } from "@/data/profile";
import { cn } from "@/lib/utils";
import { ProjectDiagram } from "./diagrams";
import { Reveal } from "./Reveal";

export function Projects() {
  return (
    <section id="work" aria-labelledby="work-label" className="container-page py-16 md:py-24">
      <div className="flex items-baseline justify-between border-t border-rule pt-6">
        <h2 id="work-label" className="font-serif text-2xl italic leading-none md:text-[1.75rem]">
          Selected work
        </h2>
        <p className="meta">Two projects, so far</p>
      </div>

      <div className="mt-6">
        {projects.map((project, i) => {
          const flip = i % 2 === 1;
          return (
            <article
              key={project.slug}
              className="grid gap-y-8 border-b border-border py-12 md:grid-cols-12 md:gap-x-10 md:py-20"
            >
              <Reveal className={cn("md:col-span-7", flip && "md:order-2 md:col-start-6")}>
                <figure className="border border-border bg-card">
                  <ProjectDiagram slug={project.slug} className="block h-auto w-full p-4 md:p-8" />
                  <figcaption className="meta flex justify-between border-t border-border px-4 py-2.5">
                    <span>Concept diagram</span>
                    <span>fig. {project.number}</span>
                  </figcaption>
                </figure>
              </Reveal>

              <Reveal
                delay={0.08}
                className={cn("md:col-span-5", flip && "md:order-1 md:col-start-1 md:row-start-1")}
              >
                <p
                  aria-hidden
                  className="font-serif text-[5.5rem] italic leading-[0.8] text-faint md:text-[8rem]"
                >
                  {project.number}
                </p>
                <p className="meta mt-6">
                  {project.year} · {project.category}
                </p>
                <h3 className="mt-3 text-[1.7rem] font-medium leading-tight tracking-[-0.02em] md:text-[2.1rem]">
                  {project.title}
                </h3>
                <dl className="mt-6 space-y-4 text-[0.98rem] leading-relaxed">
                  <div>
                    <dt className="meta">Problem</dt>
                    <dd className="mt-1 text-muted-foreground">{project.problem}</dd>
                  </div>
                  <div>
                    <dt className="meta">Approach</dt>
                    <dd className="mt-1 text-muted-foreground">
                      {project.approach.map((a) => a.title).join(" → ")}
                    </dd>
                  </div>
                  <div>
                    <dt className="meta">Outcome</dt>
                    <dd className="mt-1 text-muted-foreground">{project.outcomes[0]}</dd>
                  </div>
                </dl>
                <Link
                  to="/projects/$slug"
                  params={{ slug: project.slug }}
                  className="group mt-8 inline-flex items-center gap-2 text-base"
                >
                  <span className="link-rule">Read the case study</span>
                  <span
                    aria-hidden
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </Reveal>
            </article>
          );
        })}
      </div>
    </section>
  );
}