"use client";

import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import { MagneticButton } from "@/components/ui/MagneticButton";

const initials = portfolio.meta.name
  .split(" ")
  .map((w) => w[0])
  .join("");

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 40));

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`flex w-full max-w-6xl items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${
          scrolled
            ? "glass shadow-[0_8px_40px_-12px_rgba(140,0,255,0.5)]"
            : "border border-transparent bg-transparent"
        }`}
      >
        <a
          href="#top"
          className="font-display flex items-center gap-2 text-lg font-extrabold tracking-tight"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-violet to-pink text-sm text-white">
            {initials}
          </span>
          <span className="hidden sm:block">{portfolio.meta.name}</span>
        </a>

        <ul className="hidden items-center gap-7 text-sm text-muted md:flex">
          {portfolio.categories.map((c) => (
            <li key={c.id}>
              <a
                href={`#${c.id}`}
                className="relative transition-colors hover:text-fg"
              >
                {c.title.split(" ")[0]}
              </a>
            </li>
          ))}
        </ul>

        <MagneticButton
          href="#contact"
          className="rounded-full bg-gold px-5 py-2.5 text-xs font-semibold text-ink transition-shadow duration-300 hover:shadow-[0_0_28px_-4px_#ffc400]"
        >
          Get in touch
        </MagneticButton>
      </nav>
    </motion.header>
  );
}
