"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";

/* ---- Inject real contact details here ---- */
const CONTACT_EMAIL = "hello@example.com"; // TODO: replace with real address
const SOCIALS: { label: string; href: string }[] = [
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
];

const { name, title } = portfolio.meta;

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
              href={`mailto:${CONTACT_EMAIL}`}
              className="rounded-full bg-gold px-8 py-4 text-sm font-semibold text-ink transition-shadow duration-300 hover:shadow-[0_0_44px_-4px_#ffc400]"
            >
              {CONTACT_EMAIL}
            </MagneticButton>
            {SOCIALS.map((s) => (
              <MagneticButton
                key={s.label}
                href={s.href}
                strength={14}
                className="glow-border rounded-full border border-violet/40 px-7 py-4 text-sm font-semibold text-fg transition-colors hover:border-pink"
              >
                {s.label}
              </MagneticButton>
            ))}
          </div>
        </Reveal>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mx-auto mt-24 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-violet/15 pt-8 text-xs text-muted md:flex-row"
      >
        <span>
          © {new Date().getFullYear()} {name} — {title}
        </span>
        <span>Built with Next.js · Framer Motion · React Three Fiber</span>
      </motion.div>
    </footer>
  );
}
