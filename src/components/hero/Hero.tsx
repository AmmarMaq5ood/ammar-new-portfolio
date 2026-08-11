"use client";

import { motion, type Variants } from "framer-motion";
import { portfolio } from "@/data/portfolio";

const { name, title, contact } = portfolio.meta;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const rise: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

/** Dimension line — the schematic annotation under the name. */
function DimensionLine() {
  return (
    <div aria-hidden className="mt-6 flex items-center text-line">
      <span className="h-3 w-px bg-current" />
      <span className="h-px flex-1 bg-current" />
      <span className="mx-4 shrink-0 font-mono text-[11px] tracking-[0.14em] uppercase text-violet">
        {title}
      </span>
      <span className="h-px flex-1 bg-current" />
      <span className="h-3 w-px bg-current" />
    </div>
  );
}

export function Hero() {
  const [first, ...rest] = name.split(" ");

  return (
    <section className="relative overflow-hidden">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto grid max-w-6xl gap-14 px-6 pt-36 pb-20 md:px-10 md:pt-44 md:pb-28 lg:grid-cols-[1fr_minmax(0,340px)] lg:gap-20"
      >
        {/* Name + copy */}
        <div>
          <motion.h1
            variants={rise}
            className="font-display text-[clamp(3.25rem,10vw,7.5rem)] leading-[0.94] font-extrabold tracking-tight text-balance"
          >
            {first}{" "}
            <span className="text-violet">{rest.join(" ")}</span>
          </motion.h1>

          <motion.div variants={rise}>
            <DimensionLine />
          </motion.div>

          <motion.p
            variants={rise}
            className="mt-8 max-w-xl text-base leading-relaxed text-muted text-pretty md:text-lg"
          >
            Engineering high-performance products across the stack — from
            hand-built WordPress cores to MERN / Next.js platforms and
            production CRM automation.
          </motion.p>

          <motion.div
            variants={rise}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-colors duration-300 hover:bg-violet"
            >
              View the work
              <span aria-hidden>↓</span>
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-6 py-3 text-sm font-semibold transition-colors duration-300 hover:border-violet hover:text-violet"
            >
              {contact.email}
            </a>
          </motion.div>
        </div>

        {/* Stage index — table of contents into the pipeline */}
        <motion.nav
          variants={rise}
          aria-label="Work sections"
          className="self-end"
        >
          <p className="annotation mb-4">Index / three stages</p>
          <ul className="border-t border-line">
            {portfolio.categories.map((c, i) => (
              <li key={c.id}>
                <a
                  href={`#${c.id}`}
                  className="group flex items-baseline gap-4 border-b border-line py-4 transition-colors hover:bg-surface"
                >
                  <span className="font-mono text-xs text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 font-display text-lg font-semibold leading-snug transition-colors group-hover:text-violet">
                    {c.short}
                  </span>
                  <span className="font-mono text-xs text-muted">
                    {String(c.projects.length).padStart(2, "0")}
                    <span
                      aria-hidden
                      className="ml-2 inline-block transition-transform duration-300 group-hover:translate-y-0.5"
                    >
                      ↓
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </motion.nav>
      </motion.div>
    </section>
  );
}
