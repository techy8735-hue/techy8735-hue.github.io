import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import { profile } from "@/data/profile";
import { navItems } from "./Navbar";

export function Hero() {
  const reduce = useReducedMotion();
  const enter = (delay: number) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, delay, ease: [0.25, 0.1, 0.25, 1] as const },
  });

  return (
    <section id="top" className="container-page pb-16 pt-24 md:pb-28 md:pt-32">
      <motion.div
        {...enter(0)}
        className="meta flex flex-wrap gap-x-6 gap-y-1 border-b border-rule pb-3"
      >
        <span>Portfolio — 2026</span>
        <span>{profile.location}</span>
        <span className="hidden sm:inline">B.Voc IT, class of 2027</span>
      </motion.div>

      <div className="grid gap-y-12 pt-10 md:grid-cols-12 md:gap-x-10 md:pt-16">
        <div className="md:col-span-9">
          <motion.h1
            {...enter(0.08)}
            className="text-[clamp(3.4rem,14vw,10rem)] font-medium leading-[0.86] tracking-[-0.045em]"
          >
            Tejus
            <br />
            <span className="ml-[0.55em] font-serif font-normal italic tracking-[-0.02em]">
              Krishna
            </span>
            <span className="text-accent" aria-hidden>
              .
            </span>
          </motion.h1>

          <motion.p {...enter(0.16)} className="meta mt-8 text-foreground md:mt-10">
            {profile.descriptor}
          </motion.p>

          <motion.p
            {...enter(0.22)}
            className="mt-5 max-w-[34rem] text-[1.35rem] leading-snug tracking-[-0.01em] text-foreground/90 md:text-[1.7rem]"
          >
            {profile.intro}
          </motion.p>

          <motion.div {...enter(0.3)} className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-base">
            <Link to="/" hash="work" className="link-rule">
              Selected work <span aria-hidden>↓</span>
            </Link>
            <a href={`mailto:${profile.email}`} className="link-rule">
              Email me <span aria-hidden>→</span>
            </a>
            {profile.cvUrl && (
              <a href={profile.cvUrl} download className="link-rule">
                CV (PDF)
              </a>
            )}
          </motion.div>
        </div>

        <motion.aside
          {...enter(0.36)}
          aria-label="On this page"
          className="hidden md:col-span-3 md:block md:pt-3"
        >
          <FrameMark />
          <p className="meta mb-3 mt-10">On this page</p>
          <ol className="space-y-2 text-sm">
            {navItems.map((item, i) => (
              <li key={item.id} className="flex gap-4">
                <span className="meta w-5 text-faint">{String(i + 1).padStart(2, "0")}</span>
                <Link
                  to="/"
                  hash={item.id}
                  className="link-draw text-muted-foreground hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ol>
        </motion.aside>
      </div>
    </section>
  );
}

/**
 * A camera-viewfinder frame — crop marks and a rule-of-thirds grid — with a
 * line of code sitting on the lower third. A nod to editing film and writing code.
 */
function FrameMark() {
  return (
    <figure aria-hidden className="select-none">
      <div className="relative aspect-[4/3] w-full">
        {/* crop marks */}
        <span className="absolute left-0 top-0 h-3 w-3 border-l border-t border-foreground/60" />
        <span className="absolute right-0 top-0 h-3 w-3 border-r border-t border-foreground/60" />
        <span className="absolute bottom-0 left-0 h-3 w-3 border-b border-l border-foreground/60" />
        <span className="absolute bottom-0 right-0 h-3 w-3 border-b border-r border-foreground/60" />
        {/* thirds */}
        <span className="absolute inset-x-3 top-1/3 border-t border-dashed border-border" />
        <span className="absolute inset-x-3 top-2/3 border-t border-dashed border-border" />
        <span className="absolute inset-y-3 left-1/3 border-l border-dashed border-border" />
        <span className="absolute inset-y-3 left-2/3 border-l border-dashed border-border" />
        {/* subject on the intersection */}
        <span className="absolute left-2/3 top-1/3 h-2 w-2 -translate-x-1/2 -translate-y-1/2 bg-accent" />
        <span className="absolute bottom-[calc(33.333%-0.55rem)] left-4 font-mono text-[0.68rem] text-muted-foreground">
          {"<cut />"}
          <span className="ml-0.5 inline-block h-3 w-[1px] translate-y-0.5 bg-foreground" />
        </span>
        <span className="absolute right-3 top-2 font-mono text-[0.6rem] text-faint">24 fps</span>
      </div>
    </figure>
  );
}