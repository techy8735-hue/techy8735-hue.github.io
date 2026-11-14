import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Props = {
  id: string;
  label: string;
  aside?: ReactNode;
  children: ReactNode;
};

/**
 * Editorial section: a hairline rule, a small italic label in the left margin,
 * content in the wider right column.
 */
export function Section({ id, label, aside, children }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-label`} className="container-page py-16 md:py-24">
      <div className="grid gap-y-8 border-t border-rule pt-6 md:grid-cols-12 md:gap-x-10">
        <Reveal className="md:col-span-3">
          <h2
            id={`${id}-label`}
            className="font-serif text-2xl italic leading-none md:text-[1.75rem]"
          >
            {label}
          </h2>
          {aside && <div className="meta mt-3 max-w-[16rem]">{aside}</div>}
        </Reveal>
        <div className="md:col-span-9">{children}</div>
      </div>
    </section>
  );
}