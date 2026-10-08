import { ticker } from "@/content/profile";

export function Ticker() {
  // Two copies side by side; the track slides left by half its width and loops.
  const items = [...ticker, ...ticker];
  return (
    <div className="ticker overflow-hidden border-b border-border bg-bg py-2 font-mono text-[11px] tracking-wide text-faint">
      <div className="ticker-track flex w-max">
        {items.map((item, i) => (
          <span key={i} className="flex shrink-0 items-center whitespace-nowrap px-6">
            <span className="mr-6 text-accent/60">/</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
