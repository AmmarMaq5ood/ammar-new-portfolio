"use client";

import { portfolio } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";

const { name, title, contact } = portfolio.meta;

function LinkedInIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

function GitHubIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.4 1.24-3.24-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.24a11.5 11.5 0 0 1 6 0c2.29-1.56 3.3-1.24 3.3-1.24.66 1.66.24 2.88.12 3.18.77.84 1.24 1.92 1.24 3.24 0 4.63-2.81 5.65-5.49 5.95.43.37.82 1.1.82 2.22v3.29c0 .32.21.7.82.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer
      id="contact"
      className="scroll-mt-24 border-t border-line bg-surface px-6 pt-24 pb-10 md:px-10 md:pt-32"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="annotation">Final stage / contact</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="font-display mt-5 max-w-3xl text-4xl leading-[1.02] font-extrabold tracking-tight text-balance md:text-6xl">
            Have a project that needs{" "}
            <span className="text-violet">serious engineering?</span>
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-colors duration-300 hover:bg-violet"
            >
              {contact.email}
            </a>
            {contact.github && (
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3.5 text-sm font-semibold transition-colors duration-300 hover:border-violet hover:text-violet"
              >
                <GitHubIcon className="h-4 w-4" />
                GitHub
              </a>
            )}
            {contact.linkedin && (
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3.5 text-sm font-semibold transition-colors duration-300 hover:border-violet hover:text-violet"
              >
                <LinkedInIcon className="h-4 w-4" />
                LinkedIn
              </a>
            )}
          </div>
        </Reveal>

        {/* Bottom bar — Name | Profession | LinkedIn Logo */}
        <div className="mt-24 flex flex-col items-center justify-center gap-3 border-t border-line pt-8 text-sm text-muted sm:flex-row sm:gap-5">
          <span className="font-display font-semibold text-ink">{name}</span>
          <span aria-hidden className="hidden text-line sm:inline">
            |
          </span>
          <span>{title}</span>
          <span aria-hidden className="hidden text-line sm:inline">
            |
          </span>
          {contact.linkedin && (
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-muted transition-colors hover:text-violet"
            >
              <LinkedInIcon className="h-5 w-5" />
            </a>
          )}
        </div>

        <p className="mt-6 text-center font-mono text-[11px] text-muted/70">
          © {new Date().getFullYear()} {name} · Built with Next.js
        </p>
      </div>
    </footer>
  );
}
