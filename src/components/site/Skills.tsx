import { skillGroups } from "@/data/profile";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Skills() {
  return (
    <Section id="skills" label="Skills" aside="Kept honest: only the first column is on my CV.">
      <div className="grid gap-x-10 gap-y-10 sm:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.06}>
            <h3 className="text-sm font-medium">{group.title}</h3>
            <p className="meta mt-1">{group.note}</p>
            <ul
              className={cn(
                "mt-5 border-t border-border",
                group.kind === "core" && "text-xl tracking-[-0.01em] md:text-2xl",
                group.kind === "learning" && "font-serif text-xl italic md:text-2xl",
                group.kind === "creative" && "text-[0.95rem] text-muted-foreground",
              )}
            >
              {group.items.map((item) => (
                <li key={item} className="border-b border-border py-2.5">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}