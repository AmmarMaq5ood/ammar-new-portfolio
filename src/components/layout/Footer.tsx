"use client";

import { portfolio } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowButton, PillLabel } from "@/components/ui/Asterisk";

const { name, title, contact } = portfolio.meta;

/** The grey info tile from the reference: label top, value pinned to the bottom. */
function Tile({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-[150px] flex-col justify-between rounded-sm bg-tile p-5 md:min-h-[180px]">
      <span className="text-[12px] text-muted">{label}</span>
      <div className="font-display text-[15px] font-bold uppercase leading-snug tracking-tight text-ink">
        {children}
      </div>
    </div>
  );
}

export function Footer() {
  const navItems = [
    { id: "process", label: portfolio.process.eyebrow },
    ...portfolio.categories.map((c) => ({ id: c.id, label: c.short })),
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      {/* ── Contact ─────────────────────────────────────────────────── */}
      <section
        id="contact"
        className="scroll-mt-24 border-t border-line bg-paper px-4 py-20 md:px-8 md:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="flex items-baseline justify-between gap-4">
              <p className="font-display text-[13px] font-bold uppercase tracking-tight">
                {name}
                <sup className="ml-0.5 text-[8px]">®</sup>
              </p>
              <p className="annotation">©{new Date().getFullYear()} · scroll to explore</p>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="headline mt-6 text-[clamp(3.25rem,12vw,10.5rem)]">
              Contact me
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-10 md:mt-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,560px)] lg:gap-16">
            <div>
              <Reveal>
                <PillLabel>Ready to start?</PillLabel>
              </Reveal>
              <Reveal delay={0.06}>
                <h3 className="headline mt-5 text-[clamp(2.4rem,6vw,4.5rem)]">
                  Get in
                  <br />
                  touch
                </h3>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-5 max-w-md text-base text-muted text-pretty">
                  Remote, async-friendly, used to international clients and
                  small teams that move fast. Send the brief, or just the
                  problem.
                </p>
              </Reveal>
              <Reveal delay={0.14}>
                <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
                  <ArrowButton href={`mailto:${contact.email}`}>Send an email</ArrowButton>
                  {contact.resume && (
                    <ArrowButton href={contact.resume} external>
                      Download CV
                    </ArrowButton>
                  )}
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <div className="grid grid-cols-2 gap-3">
                <Tile label="Based in:">
                  Lahore, Pakistan
                  <br />
                  Remote worldwide
                </Tile>
                <Tile label="Availability:">
                  Open to remote
                  <br />
                  full-time roles
                </Tile>
                <Tile label="Email:">
                  <a href={`mailto:${contact.email}`} className="break-all text-[12px] normal-case hover:text-accent sm:text-[14px]">
                    {contact.email}
                  </a>
                </Tile>
                <Tile label="Elsewhere:">
                  {contact.linkedin && (
                    <a
                      href={contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:text-accent"
                    >
                      LinkedIn ↗
                    </a>
                  )}
                  {contact.github && (
                    <a
                      href={contact.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:text-accent"
                    >
                      GitHub ↗
                    </a>
                  )}
                </Tile>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────── */}
      <footer className="border-t border-line bg-paper px-4 pt-16 pb-8 md:px-8 md:pt-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <div>
              <p className="max-w-sm text-base text-muted text-pretty">
                Focused on shipping AI agents, automations and full-stack
                products that{" "}
                <span className="font-semibold text-ink">
                  hold up in production
                </span>
                , built with coding agents and real engineering around them.
              </p>
              <p className="mt-6 text-sm text-muted">
                <a href={`mailto:${contact.email}`} className="hover:text-accent">
                  {contact.email}
                </a>
              </p>

              <div className="mt-10 grid grid-cols-2 gap-8 text-sm sm:max-w-sm">
                <div>
                  <p className="text-[11px] text-muted">Navigation</p>
                  <ul className="mt-3 space-y-2">
                    {navItems.map((n) => (
                      <li key={n.id}>
                        <a href={`#${n.id}`} className="hover:text-accent">
                          {n.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-[11px] text-muted">Elsewhere</p>
                  <ul className="mt-3 space-y-2">
                    {contact.linkedin && (
                      <li>
                        <a
                          href={contact.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-accent"
                        >
                          LinkedIn <span className="text-muted">↗</span>
                        </a>
                      </li>
                    )}
                    {contact.github && (
                      <li>
                        <a
                          href={contact.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-accent"
                        >
                          GitHub <span className="text-muted">↗</span>
                        </a>
                      </li>
                    )}
                    {contact.resume && (
                      <li>
                        <a
                          href={contact.resume}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-accent"
                        >
                          CV (PDF) <span className="text-muted">↗</span>
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex items-end justify-start lg:justify-end">
              <p className="font-display text-[clamp(3rem,9.5vw,7.5rem)] leading-none font-black tracking-[-0.04em]">
                {name.split(" ")[0]}
                <sup className="ml-1 align-top text-[0.3em] font-semibold">®</sup>
              </p>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-2 border-t border-line pt-6 text-[12px] text-muted sm:flex-row sm:items-center sm:justify-between">
            <span>
              © {new Date().getFullYear()} {name} · {title}
            </span>
            <span>Built with Next.js and Claude Code</span>
          </div>
        </div>
      </footer>
    </>
  );
}
