"use client";

import type { Project } from "@/lib/types";

interface ProjectRowProps {
  project: Project;
  /** Category ledger code, e.g. "WP" → WP·01. */
  code: string;
  /** 0-based position within the category. */
  index: number;
}

/**
 * One line of the project ledger: index, name, tagline, stack, link.
 * The whole row is the link — no fake preview imagery.
 */
export function ProjectRow({ project, code, index }: ProjectRowProps) {
  const live = project.links?.live;
  const inner = (
    <>
      <span className="font-mono text-xs text-muted transition-colors group-hover:text-accent">
        {code}·{String(index + 1).padStart(2, "0")}
      </span>

      <span className="block">
        <span className="font-display block text-xl leading-snug font-bold uppercase tracking-tight transition-colors group-hover:text-accent md:text-2xl">
          {project.title}
        </span>
        <span className="mt-1 block text-sm text-muted">{project.tagline}</span>
      </span>

      <span className="hidden text-right text-[12px] leading-relaxed text-muted lg:block">
        {project.techStack.join(" · ")}
      </span>

      <span
        aria-hidden
        className={`inline-flex h-7 w-7 items-center justify-center self-center justify-self-end text-sm transition-all duration-300 ${
          live
            ? "bg-tile text-ink group-hover:bg-accent group-hover:text-white"
            : "text-line"
        }`}
      >
        {live ? "↗" : "—"}
      </span>
    </>
  );

  const rowClasses =
    "group grid grid-cols-[3.25rem_minmax(0,1fr)_1.75rem] items-baseline gap-x-3 border-b border-line py-5 transition-colors duration-200 lg:grid-cols-[4rem_minmax(0,1fr)_minmax(0,300px)_1.75rem] lg:gap-x-6";

  if (!live) {
    return <div className={rowClasses}>{inner}</div>;
  }

  return (
    <a
      href={live}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${project.title} — visit live site (opens in new tab)`}
      className={`${rowClasses} hover:bg-surface`}
    >
      {inner}
    </a>
  );
}
