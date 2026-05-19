"use client";

import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  /** Index used for the oversized ghost numeral. */
  index?: number;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  index,
}: SectionHeadingProps) {
  return (
    <div className="relative mb-14 md:mb-20">
      {typeof index === "number" && (
        <span
          aria-hidden
          className="font-display pointer-events-none absolute -top-16 -left-2 select-none text-[7rem] leading-none font-extrabold text-violet/10 md:text-[11rem]"
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      )}

      <Reveal>
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-10 bg-linear-to-r from-pink to-gold" />
          <span className="text-xs font-medium tracking-[0.3em] text-gold uppercase">
            {eyebrow}
          </span>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <h2 className="font-display max-w-4xl text-4xl leading-[1.05] font-bold text-balance md:text-6xl">
          {title}
        </h2>
      </Reveal>

      {description && (
        <Reveal delay={0.16}>
          <p className="text-muted mt-5 max-w-2xl text-base text-pretty md:text-lg">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
