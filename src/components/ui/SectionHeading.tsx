"use client";

import { Reveal } from "./Reveal";
import { PillLabel } from "./Asterisk";

interface SectionHeadingProps {
  /** The pill label: "✳ SELECTED WORK" */
  label: string;
  /** First, black part of the headline. */
  title: string;
  /** Trailing grey part of the headline. */
  muted?: string;
  description?: string;
  /** Right-aligned count, e.g. "06 systems". */
  count?: string;
  dark?: boolean;
}

export function SectionHeading({
  label,
  title,
  muted,
  description,
  count,
  dark = false,
}: SectionHeadingProps) {
  return (
    <header className="mb-10 md:mb-14">
      <Reveal>
        <div className="flex items-center justify-between gap-4">
          <PillLabel tone={dark ? "dark" : "paper"}>{label}</PillLabel>
          {count && (
            <span className={`annotation ${dark ? "text-white/60" : ""}`}>{count}</span>
          )}
        </div>
      </Reveal>
      <Reveal delay={0.06}>
        <h2
          className={`headline mt-5 max-w-4xl text-[clamp(2.4rem,6.5vw,5.25rem)] text-balance ${
            dark ? "text-white" : "text-ink"
          }`}
        >
          {title}
          {muted && (
            <>
              {" "}
              <span className={dark ? "text-white/45" : "text-faint"}>{muted}</span>
            </>
          )}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.12}>
          <p
            className={`mt-5 max-w-2xl text-base text-pretty md:text-[17px] ${
              dark ? "text-white/70" : "text-muted"
            }`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </header>
  );
}
