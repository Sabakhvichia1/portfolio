import { profile } from "@/content/profile";
import { ratingByDelay } from "@/content/insights";
import { Download, GitHub, LinkedIn } from "./icons";
import { Reveal } from "./reveal";

const K = ({ children }: { children: string }) => <span className="text-accent">{children}</span>;
const F = ({ children }: { children: string }) => <span className="text-[#c4a7ff]">{children}</span>;
const N = ({ children }: { children: string }) => <span className="text-[#f5b971]">{children}</span>;

/** A query and its result: the code side and the data side in one picture. */
function QueryPanel() {
  return (
    <div className="overflow-hidden rounded-[14px] border border-border bg-surface shadow-2xl shadow-black/40">
      <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-full bg-border-strong" />
          <span className="size-2.5 rounded-full bg-border-strong" />
          <span className="size-2.5 rounded-full bg-border-strong" />
        </div>
        <span className="font-mono text-[11px] text-muted">late_deliveries.sql</span>
        <span className="font-mono text-[11px] text-faint">DuckDB</span>
      </div>

      <pre className="overflow-x-auto border-b border-border px-4 py-4 font-mono text-[12px] leading-[1.7] text-text/90">
        <K>SELECT</K> delay_bucket,{"\n"}
        {"       "}
        <F>round</F>(<F>avg</F>((rating {"<="} <N>2</N>)::<K>INT</K>) * <N>100</N>, <N>1</N>) <K>AS</K> bad_pct{"\n"}
        <K>FROM</K> olist_review_facts{"\n"}
        <K>GROUP BY</K> delay_bucket;
      </pre>

      <Reveal fade={false} className="dot-grid px-4 py-4">
        <div className="mb-3 flex items-baseline justify-between font-mono text-[11px] text-muted">
          <span>1–2 star reviews by delivery timing</span>
          <span>98,096 reviews</span>
        </div>
        <ul className="space-y-1.5">
          {ratingByDelay.map((row, i) => (
            <li key={row.label} className="grid grid-cols-[7.5rem_1fr_2.75rem] items-center gap-3 text-[11px]">
              <span className="truncate font-mono text-muted">{row.label}</span>
              <span className="h-2.5 rounded-sm bg-border/60">
                <span
                  className={`bar block h-full rounded-sm ${row.late ? "bg-bad" : "bg-faint"}`}
                  style={{ width: `${row.pct}%`, transitionDelay: `${150 + i * 70}ms` }}
                />
              </span>
              <span className="text-right font-mono tabular-nums text-text/80">{row.pct.toFixed(0)}%</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 border-t border-border pt-3 text-[12px] text-muted">
          <span className="text-text">→</span> Late or missing orders are 8% of reviews but{" "}
          <span className="font-medium text-text">36% of the bad ones.</span>
        </p>
      </Reveal>
    </div>
  );
}

export function Hero({ hasCv }: { hasCv: boolean }) {
  return (
    <section id="top" className="ticks mx-auto mt-6 max-w-6xl px-4 py-14 sm:px-10 sm:py-20">
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
        <div className="min-w-0">
          <p className="eyebrow">{profile.role}</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-[-0.035em] sm:text-6xl">{profile.name}</h1>
          <div className="mt-6 max-w-xl space-y-4 text-[15px] leading-7 text-muted">
            {profile.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-2.5">
            <a
              href="#contact"
              className="inline-flex h-10 items-center rounded-lg bg-accent px-4 text-sm font-medium text-accent-ink transition hover:brightness-110"
            >
              Get in touch
            </a>
            {hasCv && (
              <a
                href={`/${profile.cvFile}`}
                download
                className="inline-flex h-10 items-center gap-2 rounded-lg border border-border-strong px-4 text-sm font-medium transition-colors hover:bg-surface-2"
              >
                <Download /> Download CV
              </a>
            )}
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex size-10 items-center justify-center rounded-lg border border-border-strong text-muted transition-colors hover:bg-surface-2 hover:text-text"
            >
              <GitHub />
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex size-10 items-center justify-center rounded-lg border border-border-strong text-muted transition-colors hover:bg-surface-2 hover:text-text"
            >
              <LinkedIn />
            </a>
          </div>
        </div>

        <div className="min-w-0">
          <QueryPanel />
        </div>
      </div>
    </section>
  );
}
