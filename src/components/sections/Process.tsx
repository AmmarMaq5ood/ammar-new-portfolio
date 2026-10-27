"use client";

import { portfolio } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { Asterisk } from "@/components/ui/Asterisk";
import { SectionHeading } from "@/components/ui/SectionHeading";

const { process } = portfolio;

/**
 * "How I build" — the numbers, then the workflow around the agents,
 * then the toolbelt. The section a hiring team reads to see whether
 * the AI work is real.
 */
export function Process() {
  return (
    <section
      id="process"
      className="scroll-mt-24 border-t border-line px-4 py-20 md:px-8 md:py-28"
      aria-labelledby="process-title"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label={process.eyebrow}
          title={process.title}
          muted={process.muted}
          description={process.description}
        />

        {/* Stat tiles */}
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {process.stats.map((s, i) => (
            <li key={s.label}>
              <Reveal delay={i * 0.06} className="h-full">
                <div className="flex h-full flex-col rounded-lg border border-line bg-surface p-6 md:p-7">
                  <p className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] uppercase text-muted">
                    <Asterisk className="h-2.5 w-2.5 text-accent" />
                    {s.label}
                  </p>
                  <p className="font-display mt-8 text-[3.5rem] leading-none font-black tracking-[-0.04em] md:mt-10 md:text-[4.25rem]">
                    {s.value}
                  </p>
                  <p className="mt-5 text-sm leading-relaxed text-muted text-pretty">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>

        {/* Numbered steps — the services-list pattern from the reference */}
        <ol className="mt-20 border-t border-line md:mt-28">
          {process.steps.map((step, i) => (
            <li key={step.title} className="border-b border-line">
              <Reveal>
                <div className="grid gap-5 py-8 md:grid-cols-[110px_minmax(0,1fr)_minmax(0,1.15fr)] md:gap-10 md:py-10">
                  <p className="annotation flex items-center gap-2 self-start text-ink">
                    <span className="text-accent">◦</span>
                    {String(i + 1).padStart(3, "0")}
                  </p>
                  <h3
                    className={`headline text-[2rem] md:text-[2.6rem] ${
                      i % 2 === 0 ? "text-accent" : "text-ink"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <div>
                    <p className="text-[15px] leading-relaxed text-muted text-pretty">
                      {step.body}
                    </p>
                    {step.tools && (
                      <ul className="mt-5 flex flex-wrap gap-1.5">
                        {step.tools.map((t) => (
                          <li
                            key={t}
                            className="rounded-sm bg-tile px-2 py-1 text-[11px] font-medium text-ink"
                          >
                            {t}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        {/* Toolbelt */}
        <div className="mt-16 md:mt-24">
          <Reveal>
            <p className="label text-ink">Toolbelt</p>
          </Reveal>
          <dl className="mt-5 divide-y divide-line border-y border-line">
            {process.toolbelt.map((group, i) => (
              <Reveal key={group.label} delay={i * 0.04}>
                <div className="grid gap-2 py-4 md:grid-cols-[220px_minmax(0,1fr)] md:gap-8">
                  <dt className="font-display text-sm font-bold uppercase tracking-tight text-ink">
                    {group.label}
                  </dt>
                  <dd className="flex flex-wrap gap-x-3 gap-y-1.5 text-[13px] leading-relaxed text-muted">
                    {group.items.map((item, j) => (
                      <span key={item}>
                        {item}
                        {j < group.items.length - 1 && (
                          <span aria-hidden className="ml-3 text-line">
                            ·
                          </span>
                        )}
                      </span>
                    ))}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
