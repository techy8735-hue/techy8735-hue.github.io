import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Skills } from "@/components/site/Skills";
import { Projects } from "@/components/site/Projects";
import { Experience } from "@/components/site/Experience";
import { Education } from "@/components/site/Education";
import { Contact } from "@/components/site/Contact";
import { profile } from "@/data/profile";

const title = "Tejus Krishna | Developer & Data Analytics";
const description =
  "Tejus Krishna K.S. — final-year B.Voc IT student at Christ College, Irinjalakuda, focused on software and web development with a growing interest in data analytics.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: profile.name,
          alternateName: profile.displayName,
          jobTitle: "Software & Web Developer",
          email: `mailto:${profile.email}`,
          sameAs: [profile.github],
          alumniOf: { "@type": "CollegeOrUniversity", name: "Christ College, Irinjalakuda" },
          knowsAbout: ["Python", "Java", "HTML", "SQL", "Web development", "Data analytics"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </>
  );
}