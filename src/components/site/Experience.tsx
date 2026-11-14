import { experience } from "@/data/profile";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section id="experience" label="Experience" aside="Internships, most recent first.">
      <ol className="border-t border-border">
        {experience.map((job, i) => (
          <li key={job.company}>
            <Reveal delay={i * 0.06}>
              <div className="grid gap-x-8 gap-y-2 border-b border-border py-7 md:grid-cols-9">
                <p className="meta md:col-span-2 md:pt-1.5">{job.period}</p>
                <div className="md:col-span-5">
                  <h3 className="text-xl font-medium tracking-[-0.01em] md:text-[1.4rem]">
                    {job.role}
                  </h3>
                  <p className="mt-1 font-serif text-lg italic text-muted-foreground">
                    {job.company}
                  </p>
                  <p className="mt-3 text-[0.98rem] text-muted-foreground">{job.note}</p>
                </div>
                <p className="meta md:col-span-2 md:pt-1.5 md:text-right">
                  {[job.location, job.duration].filter(Boolean).join(" · ")}
                </p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}