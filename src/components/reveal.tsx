"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

/**
 * Marks its children visible once they scroll into view (once).
 * With `fade` (default) the block also fades up; charts inside animate their bars
 * through the same data-visible attribute.
 */
export function Reveal({
  children,
  className = "",
  fade = true,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  fade?: boolean;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const style: CSSProperties | undefined = delay ? { transitionDelay: `${delay}ms` } : undefined;

  return (
    <div ref={ref} data-visible={visible} className={`min-w-0 ${fade ? "reveal" : ""} ${className}`} style={style}>
      {children}
    </div>
  );
}
