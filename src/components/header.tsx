"use client";

import { useEffect, useState } from "react";
import { profile } from "@/content/profile";
import { Close, GitHub, Mail, Menu } from "./icons";

const NAV = [
  { id: "work", label: "Work" },
  { id: "analytics", label: "Analytics" },
  { id: "path", label: "Path" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

/** "S — K" that briefly shuffles through random letters every few seconds. */
function Monogram() {
  const [first, second] = profile.initials;
  const [letters, setLetters] = useState<[string, string]>([first, second]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame: ReturnType<typeof setInterval> | undefined;
    const shuffle = () => {
      let steps = 0;
      frame = setInterval(() => {
        steps += 1;
        if (steps > 9) {
          clearInterval(frame);
          setLetters([first, second]);
          return;
        }
        const pick = () => LETTERS[Math.floor(Math.random() * LETTERS.length)];
        setLetters([pick(), pick()]);
      }, 55);
    };
    const first_run = setTimeout(shuffle, 900);
    const loop = setInterval(shuffle, 7000);
    return () => {
      clearTimeout(first_run);
      clearInterval(loop);
      if (frame) clearInterval(frame);
    };
  }, [first, second]);

  return (
    <a href="#top" className="flex items-center gap-2 font-mono text-sm font-medium tracking-widest" aria-label={profile.name}>
      <span className="inline-block w-3 text-center">{letters[0]}</span>
      <span className="h-px w-5 bg-muted" />
      <span className="inline-block w-3 text-center">{letters[1]}</span>
    </a>
  );
}

export function Header() {
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = NAV.map((n) => document.getElementById(n.id)).filter((s): s is HTMLElement => !!s);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Monogram />

        <nav className="hidden items-center gap-7 md:flex" aria-label="Sections">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`font-mono text-[11px] uppercase tracking-[0.12em] transition-colors hover:text-text ${
                active === item.id ? "text-text" : "text-muted"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-md p-2 text-muted transition-colors hover:text-text"
            aria-label="GitHub"
          >
            <GitHub />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-md p-2 text-muted transition-colors hover:text-text"
            aria-label="Email"
          >
            <Mail />
          </a>
          <button
            type="button"
            className="rounded-md p-2 text-muted hover:text-text md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border px-4 py-3 md:hidden" aria-label="Sections">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className="block py-2.5 font-mono text-xs uppercase tracking-[0.12em] text-muted hover:text-text"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
