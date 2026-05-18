import React from "react";

type Tone = "dark" | "lime" | "mustard" | "outline";

interface PillProps {
  children: React.ReactNode;
  tone?: Tone;
}

export function Pill({ children, tone = "dark" }: PillProps) {
  const styles: Record<Tone, string> = {
    dark: "bg-pill text-pill-foreground",
    lime: "bg-lime text-ink",
    mustard: "bg-mustard text-ink",
    outline: "border border-ink/20 text-ink bg-transparent",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.2 rounded-full px-4 py-2.5 text-xs font-medium ${styles[tone]}`}
    >
      {children}
    </span>
  );
}
