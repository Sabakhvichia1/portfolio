import { experience } from "@/content/experience";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Timeline() {
  return (
    <section id="path" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading eyebrow="Experience & education" title="The path so far" />

      <ol className="relative">
        {/* The line: left on phones, centered on large screens. */}
        <span className="absolute top-2 bottom-2 left-[7px] w-px bg-border lg:left-1/2" aria-hidden />

        {experience.map((entry, i) => {
          const right = i % 2 === 1;
          return (
            <li
              key={entry.org}
              className="relative pb-6 pl-9 last:pb-0 lg:grid lg:grid-cols-2 lg:gap-14 lg:pl-0 lg:[&:not(:first-of-type)]:-mt-24"
            >
              <span
                className={`absolute top-7 left-0 size-[15px] rounded-full border-2 bg-bg lg:left-1/2 lg:-translate-x-1/2 ${
                  entry.current ? "border-accent" : "border-border-strong"
                }`}
                aria-hidden
              >
                {entry.current && <span className="absolute inset-[3px] rounded-full bg-accent" />}
              </span>

              <Reveal className={right ? "lg:col-start-2" : "lg:col-start-1"}>
                <article className="rounded-[14px] border border-border bg-surface p-5 sm:p-6">
                  <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
                    {entry.period}
                    {entry.place && <span className="text-faint"> · {entry.place}</span>}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold tracking-[-0.015em]">{entry.org}</h3>
                  <p className="mt-0.5 text-sm text-accent">{entry.role}</p>
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-muted">
                    {entry.points.map((point) => (
                      <li key={point} className="flex gap-2.5">
                        <span className="mt-[0.7rem] h-px w-3 shrink-0 bg-border-strong" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
