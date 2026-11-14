import { education } from "@/data/profile";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Education() {
  return (
    <Section id="education" label="Education">
      <div className="border-t border-border">
        {education.map((ed) => (
          <Reveal key={ed.degree}>
            <div className="grid gap-x-8 gap-y-2 border-b border-border py-7 md:grid-cols-9">
              <p className="meta md:col-span-2 md:pt-1.5">{ed.period}</p>
              <div className="md:col-span-5">
                <h3 className="text-xl font-medium tracking-[-0.01em] md:text-[1.4rem]">
                  {ed.degree}
                </h3>
                <p className="mt-1 font-serif text-lg italic text-muted-foreground">
                  {ed.institution}
                </p>
              </div>
              <p className="meta md:col-span-2 md:pt-1.5 md:text-right">{ed.note}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}