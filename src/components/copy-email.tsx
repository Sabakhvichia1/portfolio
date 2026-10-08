"use client";

import { useState } from "react";
import { Check, Copy } from "./icons";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex h-10 items-center gap-2 rounded-lg border border-border-strong px-4 text-sm font-medium transition-colors hover:bg-surface-2"
    >
      {copied ? <Check className="text-accent" /> : <Copy />}
      {copied ? "Copied" : "Copy email"}
    </button>
  );
}
