import type { Project } from "@/content/projects";
import { ArrowUpRight } from "./icons";
import { ProjectVisual } from "./project-visual";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[14px] border border-border bg-surface transition-colors hover:border-border-strong">
      <ProjectVisual project={project} />
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-center justify-between gap-3">
          <p className="eyebrow">{project.eyebrow}</p>
          {project.status && (
            <span className="rounded-full border border-border-strong px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted">
              {project.status}
            </span>
          )}
        </div>
        <h3 className="mt-3 text-xl font-semibold leading-snug tracking-[-0.015em]">{project.title}</h3>
        <p className="mt-3 text-sm leading-6 text-muted">{project.summary}</p>
        <ul className="mt-4 space-y-1.5 text-sm text-text/85">
          {project.points.map((point) => (
            <li key={point} className="flex gap-2.5">
              <span className="mt-[0.6rem] h-px w-3 shrink-0 bg-accent" />
              {point}
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-5">
          <ul className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <li key={tag} className="rounded-md bg-surface-2 px-2 py-1 font-mono text-[11px] text-muted">
                {tag}
              </li>
            ))}
          </ul>
          {project.links.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-4 border-t border-border pt-4">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-text transition-colors hover:text-accent"
                >
                  {link.label} <ArrowUpRight />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
