import type { ReactNode } from "react";
import { Reveal } from "./reveal";

export function SectionHeading({
  eyebrow,
  title,
  children,
  action,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  action?: ReactNode;
}) {
  return (
    <Reveal className="mb-8 flex flex-wrap items-end justify-between gap-4">
      <div className="max-w-2xl">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.025em] sm:text-[2.1rem]">{title}</h2>
        {children && <p className="mt-3 text-[15px] leading-7 text-muted">{children}</p>}
      </div>
      {action}
    </Reveal>
  );
}
