import { profile } from "@/content/profile";
import { CopyEmail } from "./copy-email";
import { ArrowUpRight, GitHub, LinkedIn, Mail } from "./icons";
import { Reveal } from "./reveal";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <Reveal className="ticks dot-grid px-6 py-14 text-center sm:px-12 sm:py-20">
        <p className="eyebrow">Work together</p>
        <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.03em] sm:text-5xl">
          Have data to make sense of, or a product to build?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-muted">
          {profile.openTo}. {profile.location}, working in Georgian and English.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex h-10 items-center gap-2 rounded-lg bg-accent px-4 text-sm font-medium text-accent-ink transition hover:brightness-110"
          >
            <Mail /> {profile.email}
          </a>
          <CopyEmail email={profile.email} />
        </div>
        <div className="mt-6 flex items-center justify-center gap-5 text-sm">
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-text"
          >
            <LinkedIn /> LinkedIn <ArrowUpRight className="opacity-60" />
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-text"
          >
            <GitHub /> GitHub <ArrowUpRight className="opacity-60" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
