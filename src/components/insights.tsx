import type { ReactNode } from "react";
import { complaintMix, llmCheck, orderTypes, ratingByDelay } from "@/content/insights";
import { ArrowUpRight } from "./icons";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const AMAZON = "#f5b971";

function Figure({
  title,
  note,
  className = "",
  children,
}: {
  title: string;
  note: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Reveal className={`flex flex-col rounded-[14px] border border-border bg-surface p-5 sm:p-6 ${className}`}>
      <h3 className="text-lg font-semibold leading-snug tracking-[-0.01em]">{title}</h3>
      <p className="mt-1.5 text-sm leading-6 text-muted">{note}</p>
      <div className="mt-6 flex-1">{children}</div>
    </Reveal>
  );
}

function DelayChart() {
  return (
    <div>
      <div className="flex h-56 items-end gap-2 border-b border-border sm:gap-3">
        {ratingByDelay.map((row, i) => (
          <div key={row.label} className="flex h-full flex-1 flex-col items-center justify-end gap-1.5">
            <span className={`font-mono text-[11px] tabular-nums ${row.late ? "text-text" : "text-muted"}`}>
              {row.pct.toFixed(0)}%
            </span>
            <span
              className={`bar-v w-3/5 max-w-14 rounded-t-[3px] ${row.late ? "bg-bad/85" : "bg-faint/70"}`}
              style={{ height: `${row.pct * 0.82}%`, transitionDelay: `${i * 70}ms` }}
              title={`${row.label}: ${row.pct}% of reviews were 1-2 stars`}
            />
          </div>
        ))}
      </div>
      <div className="mt-2 flex gap-2 sm:gap-3">
        {ratingByDelay.map((row) => (
          <span key={row.label} className="flex-1 text-center font-mono text-[10px] leading-tight text-faint">
            {row.label}
          </span>
        ))}
      </div>
    </div>
  );
}

function OrderTypeChart() {
  return (
    <ul className="space-y-5">
      {orderTypes.map((row, i) => (
        <li key={row.label}>
          <div className="flex items-baseline justify-between text-sm">
            <span className="text-text/85">{row.label}</span>
            <span className="font-mono tabular-nums">{row.pct}%</span>
          </div>
          <span className="mt-2 block h-2.5 rounded-sm bg-border/60">
            <span
              className="bar block h-full rounded-sm bg-accent"
              style={{ width: `${(row.pct / 50) * 100}%`, opacity: 0.45 + i * 0.27, transitionDelay: `${i * 120}ms` }}
            />
          </span>
        </li>
      ))}
    </ul>
  );
}

function ComplaintChart() {
  return (
    <div>
      <div className="mb-4 flex gap-4 font-mono text-[11px] text-muted">
        <span className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-sm bg-accent" /> Olist (Brazil)
        </span>
        <span className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-sm" style={{ background: AMAZON }} /> Amazon Beauty (US)
        </span>
      </div>
      <ul className="space-y-3">
        {complaintMix.map((row, i) => (
          <li key={row.label} className="grid grid-cols-[8.5rem_1fr] items-center gap-3 text-[12px] sm:grid-cols-[10rem_1fr]">
            <span className="text-text/80">{row.label}</span>
            <span className="space-y-1">
              {(["olist", "amazon"] as const).map((src) => (
                <span key={src} className="flex items-center gap-2">
                  <span
                    className="bar block h-2 rounded-sm"
                    style={{
                      width: `${Math.max(row[src], 0.6) * 0.82}%`,
                      background: src === "olist" ? "var(--accent)" : AMAZON,
                      transitionDelay: `${i * 60}ms`,
                    }}
                  />
                  <span className="font-mono text-[10px] tabular-nums text-faint">{row[src].toFixed(0)}%</span>
                </span>
              ))}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Insights() {
  return (
    <section id="analytics" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading
        eyebrow="Data & AI analytics"
        title="What 98,000 orders say about bad reviews"
        action={
          <a
            href="https://github.com/Sabakhvichia1/review-insights/blob/main/notebooks/analysis.ipynb"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-border-strong px-3.5 text-sm font-medium transition-colors hover:bg-surface-2"
          >
            Read the analysis <ArrowUpRight />
          </a>
        }
      >
        From my Review Insights project: Olist, a Brazilian marketplace, compared with Amazon. SQL in DuckDB for the
        orders, Gemini for the review text, and a hand-labeled check of the AI before trusting it.
      </SectionHeading>

      <div className="grid gap-3 lg:grid-cols-2">
        <Figure
          className="lg:col-span-2"
          title="Once an order is late, most reviews turn negative"
          note="Share of 1–2 star reviews by when the order arrived, compared with the date promised at checkout. Arriving early earns nothing extra; the first late day costs a lot."
        >
          <DelayChart />
        </Figure>

        <Figure
          title="Orders split across sellers look incomplete"
          note="1–2 star rate among orders delivered on time. Each seller ships separately, so the first parcel can make the order look incomplete."
        >
          <OrderTypeChart />
        </Figure>

        <Figure
          title="Two marketplaces, two different problems"
          note="Main complaint in 400 sampled 1–2 star reviews per marketplace, labeled by Gemini. Olist fails on delivery; Amazon on the product."
        >
          <ComplaintChart />
        </Figure>

        <Figure
          className="lg:col-span-2"
          title="Checking the AI before trusting it"
          note="I labeled reviews by hand without seeing Gemini's answers, then judged every disagreement blind, with the two labels shown as A and B."
        >
          <dl className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {llmCheck.map((item) => (
              <div key={item.label} className="ticks p-4">
                <dt className="sr-only">{item.label}</dt>
                <dd className="text-3xl font-semibold tracking-tight">{item.value}</dd>
                <dd className="mt-2 text-[13px] leading-5 text-muted">{item.label}</dd>
              </div>
            ))}
          </dl>
        </Figure>
      </div>
    </section>
  );
}
