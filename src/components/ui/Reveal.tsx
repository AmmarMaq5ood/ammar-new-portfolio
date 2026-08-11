"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "scale";

const offset = 20;

function buildVariants(dir: Direction, reduced: boolean): Variants {
  const hidden =
    dir === "scale"
      ? { opacity: 0, scale: 0.92 }
      : {
          opacity: 0,
          y: dir === "up" ? offset : dir === "down" ? -offset : 0,
          x: dir === "left" ? offset : dir === "right" ? -offset : 0,
        };

  return {
    hidden: reduced ? { opacity: 0 } : hidden,
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
    },
  };
}

interface RevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
  /** Replay every time it enters the viewport instead of once. */
  repeat?: boolean;
}

/**
 * Sections never just "appear" — they fade up / scale in as they
 * cross the viewport. Single shared primitive keeps it consistent
 * and 60fps (transform + opacity only).
 */
export function Reveal({
  children,
  direction = "up",
  delay = 0,
  className,
  repeat = false,
}: RevealProps) {
  const reduced = useReducedMotion() ?? false;

  return (
    <motion.div
      className={className}
      variants={buildVariants(direction, reduced)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: !repeat, amount: 0.25, margin: "0px 0px -10% 0px" }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
