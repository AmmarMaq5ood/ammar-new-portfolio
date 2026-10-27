"use client";

import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { portfolio } from "@/data/portfolio";

const { name, contact } = portfolio.meta;

const items = [
  { id: "process", label: portfolio.process.eyebrow, count: undefined as number | undefined },
  ...portfolio.categories.map((c) => ({
    id: c.id,
    label: c.short,
    count: c.projects.length,
  })),
  { id: "contact", label: "Contact", count: undefined },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 40));

  // Over the orange hero the bar is transparent and white; once the page
  // scrolls it becomes a paper bar with ink text.
  const onHero = !scrolled && !open;

  return (
    <motion.header
      initial={{ y: -56, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        onHero
          ? "bg-transparent text-white"
          : "border-b border-line bg-paper/92 text-ink backdrop-blur-md"
      }`}
    >
      {/* Horizontal padding matches the hero's content edge, so the logo and
          the tagline below it sit on the same line. */}
      <nav className="flex h-16 items-center justify-between px-8 md:h-[72px] md:px-[60px]">
        <a href="#top" className="font-display text-[15px] font-bold tracking-tight">
          {name}
          <sup className="ml-0.5 text-[9px] font-semibold">®</sup>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`group inline-flex items-center gap-1.5 px-3 py-2 text-[14px] font-semibold transition-colors duration-200 ${
                  onHero ? "text-white/90 hover:text-white" : "text-ink hover:text-accent"
                }`}
              >
                <span className="border-b border-transparent pb-0.5 transition-colors duration-200 group-hover:border-current">
                  {item.label}
                </span>
                {typeof item.count === "number" && (
                  <span
                    className={`rounded-sm px-1.5 py-0.5 font-mono text-[10px] font-medium tabular-nums ${
                      onHero ? "bg-white/15 text-white" : "bg-tile text-muted"
                    }`}
                  >
                    {String(item.count).padStart(2, "0")}
                  </span>
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className={`hidden rounded-sm px-5 py-2.5 text-[11px] font-bold tracking-[0.12em] uppercase transition-colors duration-300 sm:inline-flex ${
              onHero
                ? "bg-black text-white hover:bg-white hover:text-ink"
                : "bg-ink text-white hover:bg-accent"
            }`}
          >
            Let&apos;s talk
          </a>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-sm transition-colors lg:hidden ${
              onHero ? "text-white hover:bg-white/15" : "text-ink hover:bg-tile"
            }`}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden className="relative block h-3 w-5">
              <span
                className={`absolute left-0 h-0.5 w-5 bg-current transition-transform duration-300 ${
                  open ? "top-[5px] rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-5 bg-current transition-transform duration-300 ${
                  open ? "top-[5px] -rotate-45" : "top-[10px]"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile menu — the dark drawer from the reference, as a dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-line bg-black px-8 pt-4 pb-8 text-white lg:hidden"
          >
            <ul className="divide-y divide-white/10">
              {items.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-3.5 text-[15px] font-semibold"
                  >
                    {item.label}
                    {typeof item.count === "number" && (
                      <span className="font-mono text-[11px] text-white/50">
                        ({String(item.count).padStart(2, "0")})
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex rounded-sm bg-accent px-5 py-2.5 text-[11px] font-bold tracking-[0.12em] uppercase text-white"
              >
                Let&apos;s talk
              </a>
              <a href={`mailto:${contact.email}`} className="text-[13px] text-white/70">
                {contact.email}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
