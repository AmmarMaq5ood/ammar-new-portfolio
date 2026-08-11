"use client";

import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { portfolio } from "@/data/portfolio";

const { name } = portfolio.meta;

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

  return (
    <motion.header
      initial={{ y: -56, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-line bg-paper/85 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-10">
        <a href="#top" className="font-display text-base font-bold tracking-tight">
          {name}
          <span className="text-violet">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {portfolio.categories.map((c, i) => (
            <li key={c.id}>
              <a
                href={`#${c.id}`}
                className="group flex items-baseline gap-1.5 text-sm font-medium text-muted transition-colors hover:text-ink"
              >
                <span className="font-mono text-[10px] text-violet">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {c.short}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="rounded-full bg-ink px-5 py-2 text-xs font-semibold text-paper transition-colors duration-300 hover:bg-violet"
        >
          Get in touch
        </a>
      </nav>
    </motion.header>
  );
}
