"use client";

import type { Project } from "@/lib/types";
import { Reveal } from "@/components/ui/Reveal";
import { Asterisk } from "@/components/ui/Asterisk";

interface IntegrationCardProps {
  project: Project;
  code: string;
  index: number;
  dark?: boolean;
}

/** Tile for the automation grid — label, title, what it does, the stack. */
export function IntegrationCard({ project, code, index, dark = false }: IntegrationCardProps) {
  const extra = project.keyFeatures ?? [];

  return (
    <Reveal delay={(index % 3) * 0.05} className="h-full">
      <article
        className={`flex h-full flex-col rounded-lg border p-6 transition-colors duration-300 md:p-7 ${
          dark
            ? "border-white/10 bg-white/[0.04] hover:border-white/40"
            : "border-line bg-surface hover:border-ink"
        }`}
      >
        <p
          className={`flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] uppercase ${
            dark ? "text-white/55" : "text-muted"
          }`}
        >
          <Asterisk className="h-2.5 w-2.5 text-accent" />
          {code}·{String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="font-display mt-4 text-xl leading-[1.05] font-bold uppercase tracking-tight text-balance">
          {project.title}
        </h3>
        <p
          className={`mt-3 text-sm leading-relaxed text-pretty ${
            dark ? "text-white/65" : "text-muted"
          }`}
        >
          {project.tagline}
        </p>
        {extra.length > 0 && (
          <p className="mt-2.5 text-[12px] font-medium leading-relaxed text-accent">
            {extra.join(" · ")}
          </p>
        )}
        <div className="mt-auto flex flex-wrap gap-1.5 pt-6">
          {project.techStack.map((t) => (
            <span
              key={t}
              className={`rounded-sm px-2 py-1 text-[11px] font-medium ${
                dark ? "bg-white/10 text-white/85" : "bg-tile text-ink"
              }`}
            >
              {t}
            </span>
          ))}
        </div>
      </article>
    </Reveal>
  );
}
