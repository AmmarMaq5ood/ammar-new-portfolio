"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import type { Pointer } from "./HeroOrb";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { portfolio } from "@/data/portfolio";

// 3D stage is client-only — never server-rendered.
const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

const { name, title } = portfolio.meta;
const pillars = portfolio.categories.map((c) => c.title);

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};
const lineUp: Variants = {
  hidden: { y: "110%" },
  show: {
    y: "0%",
    transition: { duration: 0.95, ease: [0.16, 1, 0.3, 1] },
  },
};
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const pointer = useRef<Pointer>({ x: 0, y: 0 });
  const reduced = useReducedMotion();

  // Cursor-tracking glow.
  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);
  const gx = useSpring(glowX, { stiffness: 120, damping: 20, mass: 0.6 });
  const gy = useSpring(glowY, { stiffness: 120, damping: 20, mass: 0.6 });

  // Parallax: content drifts up & fades as you scroll past the hero.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : -120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    const lx = e.clientX - rect.left;
    const ly = e.clientY - rect.top;
    glowX.set(lx);
    glowY.set(ly);
    // Normalize to -1..1 for the 3D orb.
    pointer.current = {
      x: (lx / rect.width) * 2 - 1,
      y: (ly / rect.height) * 2 - 1,
    };
  }

  const nameParts = name.split(" ");

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative flex h-screen min-h-[100svh] w-full items-center overflow-hidden"
    >
      {/* ---- Background layers ---- */}
      <div className="absolute inset-0 -z-20 bg-bg" />
      <div
        aria-hidden
        className="animate-aurora absolute -top-1/3 left-1/2 -z-20 h-[90vh] w-[90vw] -translate-x-1/2 rounded-full opacity-70 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, #450693 0%, #8c00ff 45%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="animate-float absolute bottom-[-20%] left-[-10%] -z-20 h-[55vh] w-[55vw] rounded-full opacity-40 blur-[110px]"
        style={{
          background:
            "radial-gradient(circle, #ff3f7f 0%, transparent 65%)",
        }}
      />

      {/* Cursor-tracking glow */}
      {!reduced && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -z-10 h-[420px] w-[420px] rounded-full opacity-60 blur-3xl"
          style={{
            x: gx,
            y: gy,
            translateX: "-50%",
            translateY: "-50%",
            background:
              "radial-gradient(circle, rgba(255,196,0,0.28) 0%, rgba(255,63,127,0.18) 40%, transparent 70%)",
          }}
        />
      )}

      {/* 3D orb */}
      <div className="absolute inset-0 -z-10">
        <HeroScene pointer={pointer} />
      </div>

      {/* Grain + vignette */}
      <div className="grain pointer-events-none absolute inset-0 -z-10 opacity-[0.12] mix-blend-overlay" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(120% 120% at 50% 0%, transparent 55%, rgba(5,1,15,0.85) 100%)",
        }}
      />

      {/* ---- Content ---- */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="mx-auto w-full max-w-7xl px-6 md:px-10"
      >
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={fadeUp} className="mb-6 flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
            </span>
            <span className="text-xs font-medium tracking-[0.32em] text-gold uppercase md:text-sm">
              {title}
            </span>
          </motion.div>

          <h1 className="font-display text-[clamp(2.75rem,9vw,7.5rem)] leading-[0.95] font-extrabold tracking-tight">
            {nameParts.map((part, i) => (
              <span key={part} className="block overflow-hidden pb-[0.08em]">
                <motion.span
                  variants={lineUp}
                  className={
                    i === nameParts.length - 1
                      ? "text-gradient inline-block"
                      : "inline-block text-fg"
                  }
                >
                  {part}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            variants={fadeUp}
            className="text-muted mt-7 max-w-xl text-base text-pretty md:text-lg"
          >
            Engineering high-performance products across the stack — from
            hand-built WordPress cores to MERN / Next.js platforms and
            production CRM automation.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              href="#work"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-ink transition-shadow duration-300 hover:shadow-[0_0_40px_-4px_#ffc400]"
            >
              <span className="relative z-10">Explore Work</span>
              <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                ↓
              </span>
            </MagneticButton>

            <MagneticButton
              href="#contact"
              className="glow-border inline-flex items-center gap-2 rounded-full border border-violet/40 px-7 py-3.5 text-sm font-semibold text-fg backdrop-blur-sm transition-colors duration-300 hover:border-pink"
            >
              Get in touch
            </MagneticButton>
          </motion.div>

          <motion.ul
            variants={fadeUp}
            className="mt-12 flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted md:text-sm"
          >
            {pillars.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-pink" />
                {p}
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#work"
        aria-label="Scroll to work"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted"
      >
        <span className="flex h-10 w-6 items-start justify-center rounded-full border border-violet/50 p-1.5">
          <motion.span
            className="h-2 w-1 rounded-full bg-gold"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.a>
    </section>
  );
}
