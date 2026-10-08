import { existsSync } from "node:fs";
import path from "node:path";
import { Contact } from "@/components/contact";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Insights } from "@/components/insights";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Skills } from "@/components/skills";
import { Stats } from "@/components/stats";
import { Ticker } from "@/components/ticker";
import { Timeline } from "@/components/timeline";
import { profile, stats } from "@/content/profile";
import { projects } from "@/content/projects";

// The "Download CV" button only shows once the PDF is in public/.
const hasCv = existsSync(path.join(process.cwd(), "public", profile.cvFile));

const FOOTER_LINKS = [
  { href: "#work", label: "Work" },
  { href: "#analytics", label: "Analytics" },
  { href: "#path", label: "Path" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

// Cached so the page can stay fully static; it refreshes on every deploy.
async function Year() {
  "use cache";
  return <>{new Date().getFullYear()}</>;
}

export default function Home() {
  return (
    <>
      <Ticker />
      <Header />
      <main>
        <Hero hasCv={hasCv} />

        <div className="mt-6">
          <Stats stats={stats} />
        </div>

        <section id="work" className="mx-auto max-w-6xl px-4 pt-24 pb-4 sm:px-6">
          <SectionHeading eyebrow="Selected work" title="Things I've built and analyzed">
            Production web apps from my time at Voloo Store, and data projects where the goal is an answer, not an app.
          </SectionHeading>
          <div className="grid gap-3 md:grid-cols-2">
            {projects.map((project, i) => (
              <Reveal key={project.id} delay={(i % 2) * 80}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </section>

        <Insights />
        <Timeline />
        <Skills />
        <Contact />
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-8 font-mono text-[11px] uppercase tracking-[0.1em] text-faint sm:px-6">
          <span>
            © <Year /> {profile.name}
          </span>
          <nav className="flex flex-wrap gap-5" aria-label="Footer">
            {FOOTER_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="transition-colors hover:text-text">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </>
  );
}
