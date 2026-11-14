import { about } from "@/data/profile";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" label="About">
      <div className="grid gap-10 lg:grid-cols-9 lg:gap-x-10">
        <div className="lg:col-span-6">
          <Reveal>
            <p className="text-2xl leading-snug tracking-[-0.01em] md:text-[1.9rem]">
              {about.lead}
            </p>
          </Reveal>
          <div className="mt-8 space-y-5 text-[1.05rem] leading-relaxed text-muted-foreground">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.05 * (i + 1)}>
                <p className="max-w-[36rem]">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal delay={0.1} className="lg:col-span-3">
          <dl className="border-t border-border lg:mt-2">
            {about.facts.map((f) => (
              <div
                key={f.label}
                className="flex justify-between gap-4 border-b border-border py-3 text-sm"
              >
                <dt className="meta">{f.label}</dt>
                <dd className="text-right">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}