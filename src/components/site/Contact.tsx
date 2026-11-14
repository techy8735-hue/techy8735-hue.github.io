import { useState } from "react";
import { profile } from "@/data/profile";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <Section id="contact" label="Contact">
      <Reveal>
        <p className="max-w-[30rem] text-[1.05rem] leading-relaxed text-muted-foreground">
          Open to internships and junior developer roles. Email is the quickest way to reach me.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="link-rule mt-6 inline-block break-all font-serif text-[clamp(2rem,6.5vw,4.5rem)] italic leading-[1.05] tracking-[-0.01em]"
        >
          {profile.email}
        </a>
        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
          <button
            type="button"
            onClick={copy}
            className="link-draw text-muted-foreground hover:text-foreground"
          >
            {copied ? "Copied to clipboard" : "Copy address"}
          </button>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            className="link-draw text-muted-foreground hover:text-foreground"
          >
            GitHub — {profile.githubHandle} <span aria-hidden>↗</span>
          </a>
          {profile.cvUrl && (
            <a
              href={profile.cvUrl}
              download
              className="link-draw text-muted-foreground hover:text-foreground"
            >
              Download CV
            </a>
          )}
        </div>
        <span className="sr-only" aria-live="polite">
          {copied ? "Email address copied" : ""}
        </span>
      </Reveal>
    </Section>
  );
}