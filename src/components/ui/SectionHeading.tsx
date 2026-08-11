"use client";

import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  /** 1-based stage number along the pipeline. */
  stage: number;
  /** Number of entries in this stage. */
  count: number;
  /** What the entries are — "projects", "systems"… */
  countLabel: string;
  title: string;
  description?: string;
}

export function SectionHeading({
  stage,
  count,
  countLabel,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <header className="mb-10 md:mb-14">
      <Reveal>
        <p className="annotation">
          Stage {String(stage).padStart(2, "0")} /{" "}
          {String(count).padStart(2, "0")} {countLabel}
        </p>
      </Reveal>
      <Reveal delay={0.06}>
        <h2 className="font-display mt-4 max-w-3xl text-3xl leading-tight font-extrabold tracking-tight text-balance md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.12}>
          <p className="mt-4 max-w-2xl text-base text-muted text-pretty">
            {description}
          </p>
        </Reveal>
      )}
    </header>
  );
}
