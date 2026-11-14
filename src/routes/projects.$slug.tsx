import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import { ProjectDiagram } from "@/components/site/diagrams";
import { Reveal } from "@/components/site/Reveal";
import { projects } from "@/data/profile";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Project not found | Tejus Krishna" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { project } = loaderData;
    const title = `${project.title} — Case Study | Tejus Krishna`;
    return {
      meta: [
        { title },
        { name: "description", content: project.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: project.summary },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: ProjectNotFound,
  component: CaseStudy,
});

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <Reveal>
      <div className="grid gap-y-3 border-t border-border py-8 md:grid-cols-12 md:gap-x-10 md:py-10">
        <h2 className="font-serif text-xl italic md:col-span-3 md:text-2xl">{label}</h2>
        <div className="md:col-span-9 lg:col-span-7">{children}</div>
      </div>
    </Reveal>
  );
}

function CaseStudy() {
  const { project } = Route.useLoaderData();
  const reduce = useReducedMotion();
  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];
  const enter = (delay: number) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] as const },
  });

  return (
    <article className="container-page pb-16 pt-24 md:pt-32">
      <motion.div
        {...enter(0)}
        className="meta flex flex-wrap justify-between gap-3 border-b border-rule pb-3"
      >
        <Link to="/" hash="work" className="link-draw hover:text-foreground">
          ← Selected work
        </Link>
        <span>
          Case study {project.number} · {project.year}
        </span>
      </motion.div>

      <header className="grid gap-y-6 pt-10 md:grid-cols-12 md:gap-x-10 md:pt-16">
        <motion.p
          {...enter(0.06)}
          aria-hidden
          className="font-serif text-[6rem] italic leading-[0.8] text-faint md:col-span-3 md:text-[10rem]"
        >
          {project.number}
        </motion.p>
        <div className="md:col-span-9">
          <motion.p {...enter(0.1)} className="meta">
            {project.category}
          </motion.p>
          <motion.h1
            {...enter(0.14)}
            className="mt-3 text-[clamp(2.3rem,6vw,4.6rem)] font-medium leading-[0.98] tracking-[-0.035em]"
          >
            {project.title}
          </motion.h1>
          <motion.p
            {...enter(0.2)}
            className="mt-6 max-w-[36rem] text-xl leading-snug text-foreground/85 md:text-2xl"
          >
            {project.summary}
          </motion.p>
        </div>
      </header>

      <motion.figure {...enter(0.26)} className="mt-12 border border-border bg-card md:mt-16">
        <ProjectDiagram
          slug={project.slug}
          className="mx-auto block h-auto w-full max-w-4xl p-5 md:p-12"
        />
        <figcaption className="meta flex flex-wrap justify-between gap-2 border-t border-border px-4 py-2.5">
          <span>Concept diagram — explains the idea, not a photo of the build.</span>
          <span>fig. {project.number}</span>
        </figcaption>
      </motion.figure>

      <div className="mt-12 md:mt-16">
        <Row label="Context">
          <p className="text-lg leading-relaxed text-muted-foreground">{project.context}</p>
        </Row>
        <Row label="Problem">
          <p className="text-[1.35rem] leading-snug tracking-[-0.01em] md:text-[1.6rem]">
            {project.problem}
          </p>
        </Row>
        <Row label="Approach">
          <ol className="border-t border-border">
            {project.approach.map((step, i) => (
              <li
                key={step.title}
                className="grid grid-cols-[2.5rem_1fr] border-b border-border py-5"
              >
                <span className="meta pt-1">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-lg font-medium">{step.title}</h3>
                  <p className="mt-1 text-muted-foreground">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Row>
        <Row label="Outcome">
          <ul className="space-y-2 text-lg text-muted-foreground">
            {project.outcomes.map((o) => (
              <li key={o} className="flex gap-3">
                <span aria-hidden className="text-accent">
                  —
                </span>
                {o}
              </li>
            ))}
          </ul>
          <p className="meta mt-8">Topics: {project.tags.join(", ")}</p>
          {(project.liveUrl || project.repoUrl) && (
            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link-rule"
                >
                  View live ↗
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link-rule"
                >
                  Source code ↗
                </a>
              )}
            </div>
          )}
        </Row>
      </div>

      {next && (
        <Reveal>
          <Link
            to="/projects/$slug"
            params={{ slug: next.slug }}
            className="group mt-8 grid gap-y-2 border-y border-rule py-10 md:grid-cols-12 md:gap-x-10"
          >
            <span className="meta md:col-span-3 md:pt-3">Next — {next.number}</span>
            <span className="text-2xl font-medium tracking-[-0.02em] md:col-span-9 md:text-4xl">
              <span className="link-draw">{next.title}</span>
              <span
                aria-hidden
                className="ml-3 inline-block transition-transform duration-300 group-hover:translate-x-1.5"
              >
                →
              </span>
            </span>
          </Link>
        </Reveal>
      )}
    </article>
  );
}

function ProjectNotFound() {
  return (
    <div className="container-page flex min-h-[70vh] flex-col justify-center pt-24">
      <p className="meta">404</p>
      <h1 className="mt-3 font-serif text-5xl italic">That case study doesn't exist.</h1>
      <Link to="/" hash="work" className="link-rule mt-8 self-start">
        ← Back to selected work
      </Link>
    </div>
  );
}