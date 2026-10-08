"use client";

import { useEffect, useRef, useState } from "react";
import type { Stat } from "@/content/profile";

function CountUp({ value, run }: { value: number; run: boolean }) {
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (!run) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const start = performance.now();
    const duration = 1100;
    // A timer rather than requestAnimationFrame, so the count still finishes in
    // throttled contexts (background tabs, embedded previews).
    const timer = setInterval(() => {
      const t = reduced ? 1 : Math.min(1, (performance.now() - start) / duration);
      setShown(Math.round(value * (1 - Math.pow(1 - t, 3))));
      if (t >= 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [run, value]);

  // Screen readers and crawlers get the real number; the counter is decoration.
  return (
    <>
      <span aria-hidden>{shown.toLocaleString("en-US")}</span>
      <span className="sr-only">{value.toLocaleString("en-US")}</span>
    </>
  );
}

export function Stats({ stats }: { stats: Stat[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setRun(true);
        observer.disconnect();
      }
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-4 sm:px-6 lg:grid-cols-3">
      {stats.map((stat) => (
        <div key={stat.label} className="ticks px-5 py-6 sm:px-7 sm:py-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted">{stat.label}</p>
          <p className="mt-3 text-4xl font-semibold tracking-tight tabular-nums sm:text-5xl">
            <CountUp value={stat.value} run={run} />
            {stat.suffix && <span className="text-accent">{stat.suffix}</span>}
          </p>
        </div>
      ))}
    </div>
  );
}
