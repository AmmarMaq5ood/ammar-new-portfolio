"use client";

import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { portfolio } from "@/data/portfolio";

const { name } = portfolio.meta;

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

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 40));

  return (
    <motion.header
      initial={{ y: -56, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-line bg-paper/90 text-ink backdrop-blur-md"
          : "bg-transparent text-white"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
        <a href="#top" className="font-display text-[15px] font-bold tracking-tight">
          {name}
          <sup className="ml-0.5 text-[9px] font-semibold">®</sup>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {items.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className="link-rule text-[13px] font-medium">
                {item.label}
                {typeof item.count === "number" && (
                  <span className="ml-1 text-[10px] font-normal opacity-60">
                    ({String(item.count).padStart(2, "0")})
                  </span>
                )}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className={`rounded-sm px-4 py-2 text-[11px] font-semibold tracking-[0.12em] uppercase transition-colors duration-300 ${
            scrolled
              ? "bg-ink text-white hover:bg-accent"
              : "bg-black text-white hover:bg-white hover:text-ink"
          }`}
        >
          Let&apos;s talk
        </a>
      </nav>
    </motion.header>
  );
}
