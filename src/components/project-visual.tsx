import Image from "next/image";
import type { JSX, ReactNode } from "react";
import { complaintMix } from "@/content/insights";
import type { Project } from "@/content/projects";

/** Skeleton line used to sketch interfaces without inventing their content. */
function Line({ w, className = "" }: { w: string; className?: string }) {
  return <span className={`block h-1.5 rounded-full bg-border-strong ${className}`} style={{ width: w }} />;
}

function BrowserFrame({ url, children }: { url: string; children: ReactNode }) {
  return (
    <div className="w-[86%] overflow-hidden rounded-lg border border-border-strong bg-bg shadow-xl shadow-black/50 transition-transform duration-500 group-hover:-translate-y-1">
      <div className="flex items-center gap-2 border-b border-border px-3 py-2">
        <span className="size-1.5 rounded-full bg-border-strong" />
        <span className="size-1.5 rounded-full bg-border-strong" />
        <span className="size-1.5 rounded-full bg-border-strong" />
        <span className="ml-2 rounded bg-surface-2 px-2 py-0.5 font-mono text-[10px] text-muted">{url}</span>
      </div>
      {children}
    </div>
  );
}

function VolooVisual() {
  return (
    <BrowserFrame url="voloostore.ge/admin">
      <div className="grid grid-cols-[4.5rem_1fr] gap-3 p-3">
        <div className="space-y-2 border-r border-border pr-3">
          {["Store", "Admin", "Gallery"].map((app, i) => (
            <span
              key={app}
              className={`block rounded px-1.5 py-1 font-mono text-[9px] ${i === 1 ? "bg-accent/15 text-accent" : "text-faint"}`}
            >
              {app}
            </span>
          ))}
          <span className="mt-3 inline-flex rounded border border-border font-mono text-[9px]">
            <span className="bg-surface-2 px-1.5 py-0.5 text-text">EN</span>
            <span className="px-1.5 py-0.5 text-faint">KA</span>
          </span>
        </div>
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-2">
            {["Orders", "Sales", "Stock"].map((k) => (
              <div key={k} className="rounded border border-border p-2">
                <span className="font-mono text-[9px] text-faint">{k}</span>
                <Line w="70%" className="mt-2 h-2 bg-text/25" />
              </div>
            ))}
          </div>
          <svg viewBox="0 0 200 50" className="h-14 w-full" aria-hidden>
            <polyline
              points="0,42 20,38 40,40 60,30 80,33 100,24 120,27 140,18 160,20 180,10 200,13"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="1.5"
            />
            <polyline
              points="0,42 20,38 40,40 60,30 80,33 100,24 120,27 140,18 160,20 180,10 200,13 200,50 0,50"
              fill="var(--accent)"
              opacity="0.08"
            />
          </svg>
          <div className="space-y-1.5">
            <Line w="92%" />
            <Line w="78%" />
            <Line w="85%" />
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

function InsightsVisual() {
  const rows = complaintMix.slice(0, 4);
  return (
    <div className="w-[86%] rounded-lg border border-border-strong bg-bg p-4 shadow-xl shadow-black/50 transition-transform duration-500 group-hover:-translate-y-1">
      <div className="mb-3 flex items-center justify-between font-mono text-[10px] text-muted">
        <span>Why 1–2 star reviews happen</span>
        <span className="flex gap-3">
          <span className="flex items-center gap-1">
            <span className="size-2 rounded-sm bg-accent" />
            Olist
          </span>
          <span className="flex items-center gap-1">
            <span className="size-2 rounded-sm bg-[#f5b971]" />
            Amazon
          </span>
        </span>
      </div>
      <ul className="space-y-2.5">
        {rows.map((r) => (
          <li key={r.label} className="text-[10px]">
            <span className="font-mono text-faint">{r.label}</span>
            <span className="mt-1 block h-1.5 rounded-sm bg-accent" style={{ width: `${r.olist}%` }} />
            <span className="mt-0.5 block h-1.5 rounded-sm bg-[#f5b971]" style={{ width: `${Math.max(r.amazon, 0.8)}%` }} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function ChatbotVisual() {
  return (
    <div className="w-[70%] space-y-2.5 transition-transform duration-500 group-hover:-translate-y-1">
      <div className="ml-auto w-[62%] rounded-xl rounded-br-sm bg-accent/15 p-3">
        <Line w="90%" className="bg-accent/50" />
        <Line w="55%" className="mt-1.5 bg-accent/50" />
      </div>
      <div className="w-[78%] rounded-xl rounded-bl-sm border border-border-strong bg-bg p-3">
        <Line w="95%" />
        <Line w="88%" className="mt-1.5" />
        <Line w="60%" className="mt-1.5" />
      </div>
      <div className="ml-auto w-[45%] rounded-xl rounded-br-sm bg-accent/15 p-3">
        <Line w="80%" className="bg-accent/50" />
      </div>
      <div className="flex w-fit gap-1 rounded-xl rounded-bl-sm border border-border-strong bg-bg px-3 py-2.5">
        {[0, 150, 300].map((d) => (
          <span key={d} className="size-1.5 animate-pulse rounded-full bg-muted" style={{ animationDelay: `${d}ms` }} />
        ))}
      </div>
    </div>
  );
}

function PortfolioVisual() {
  return (
    <BrowserFrame url="portfolio builder">
      <div className="grid grid-cols-3 gap-2 p-3">
        <div className="col-span-3 flex items-center gap-2 pb-1">
          <span className="size-6 rounded-full bg-border-strong" />
          <div className="flex-1 space-y-1">
            <Line w="40%" className="bg-text/25" />
            <Line w="25%" />
          </div>
        </div>
        {[16, 10, 13, 11, 15, 9].map((h, i) => (
          <div key={i} className="rounded border border-border bg-surface-2" style={{ height: `${h * 4}px` }} />
        ))}
      </div>
    </BrowserFrame>
  );
}

const VISUALS = {
  voloo: VolooVisual,
  insights: InsightsVisual,
  chatbot: ChatbotVisual,
  portfolio: PortfolioVisual,
} satisfies Record<Project["visual"], () => JSX.Element>;

export function ProjectVisual({ project }: { project: Project }) {
  if (project.image) {
    return (
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-surface-2">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 560px, 100vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>
    );
  }
  const Visual = VISUALS[project.visual];
  return (
    <div className="dot-grid relative flex aspect-[16/10] items-center justify-center overflow-hidden border-b border-border bg-surface-2">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-surface-2 to-transparent" />
      <Visual />
    </div>
  );
}
