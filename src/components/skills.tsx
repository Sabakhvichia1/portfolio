import { profile } from "@/content/profile";
import { skills } from "@/content/skills";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading eyebrow="Toolbox" title="What I work with" />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal key={group.group} delay={i * 60} className="rounded-[14px] border border-border bg-surface p-5 sm:p-6">
            <div className="flex items-center justify-between">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted">{group.group}</h3>
              <span className="font-mono text-[11px] text-faint">0{i + 1}</span>
            </div>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <li key={item} className="rounded-md border border-border bg-surface-2 px-2.5 py-1 text-[13px]">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
        <Reveal delay={skills.length * 60} className="rounded-[14px] border border-border bg-surface p-5 sm:p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted">Spoken languages</h3>
            <span className="font-mono text-[11px] text-faint">0{skills.length + 1}</span>
          </div>
          <ul className="mt-4 space-y-2.5">
            {profile.languages.map((lang) => (
              <li key={lang.name} className="flex items-baseline justify-between border-b border-border pb-2.5 text-sm last:border-0">
                <span>{lang.name}</span>
                <span className="font-mono text-[12px] text-muted">{lang.level}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
