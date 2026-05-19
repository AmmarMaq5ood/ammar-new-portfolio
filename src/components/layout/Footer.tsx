"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";

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
      className="relative scroll-mt-24 overflow-hidden border-t border-violet/20 px-6 py-28 md:px-10 md:py-40"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 -bottom-1/3 -z-10 mx-auto h-[60vh] w-[80vw] rounded-full opacity-40 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, #8c00ff 0%, #ff3f7f 45%, transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-5xl text-center">
        <Reveal>
          <span className="text-xs font-medium tracking-[0.3em] text-gold uppercase">
            Let&apos;s build something
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display mx-auto mt-5 max-w-3xl text-4xl leading-[1.05] font-extrabold text-balance md:text-7xl">
            Have a project that needs{" "}
            <span className="text-gradient">serious engineering?</span>
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <MagneticButton
              href={`mailto:${contact.email}`}
              className="rounded-full bg-gold px-8 py-4 text-sm font-semibold text-ink transition-shadow duration-300 hover:shadow-[0_0_44px_-4px_#ffc400]"
            >
              {contact.email}
            </MagneticButton>

            {contact.github && (
              <MagneticButton
                href={contact.github}
                strength={14}
                aria-label="GitHub profile"
                className="glow-border inline-flex items-center gap-2 rounded-full border border-violet/40 px-7 py-4 text-sm font-semibold text-fg transition-colors hover:border-pink"
              >
                <GitHubIcon className="h-4 w-4" />
                GitHub
              </MagneticButton>
            )}

            {contact.linkedin && (
              <MagneticButton
                href={contact.linkedin}
                strength={14}
                aria-label="LinkedIn profile"
                className="glow-border inline-flex items-center gap-2 rounded-full border border-violet/40 px-7 py-4 text-sm font-semibold text-fg transition-colors hover:border-pink"
              >
                <LinkedInIcon className="h-4 w-4" />
                LinkedIn
              </MagneticButton>
            )}
          </div>
        </Reveal>
      </div>

      {/* Bottom bar — Name | Profession | LinkedIn Logo */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mx-auto mt-24 flex max-w-7xl flex-col items-center justify-center gap-3 border-t border-violet/15 pt-8 text-sm text-muted sm:flex-row sm:gap-5"
      >
        <span className="font-display font-semibold text-fg">{name}</span>
        <span aria-hidden className="hidden text-violet/50 sm:inline">
          |
        </span>
        <span>{title}</span>
        <span aria-hidden className="hidden text-violet/50 sm:inline">
          |
        </span>
        {contact.linkedin && (
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-muted transition-colors hover:text-pink"
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
        )}
      </motion.div>

      <p className="mt-6 text-center text-xs text-muted/60">
        © {new Date().getFullYear()} {name}. Built with Next.js · Framer Motion
        · React Three Fiber
      </p>
    </footer>
  );
}
