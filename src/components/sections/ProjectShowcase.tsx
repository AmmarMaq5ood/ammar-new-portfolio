"use client";

import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import type { Project, UiTemplate } from "@/lib/types";
import { CodeToUI } from "@/components/visuals/CodeToUI";
import { TerminalDataFlow } from "@/components/visuals/TerminalDataFlow";
import { NodeFlowchart } from "@/components/visuals/NodeFlowchart";
import { Reveal } from "@/components/ui/Reveal";

function humanize(key: string) {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (c) => c.toUpperCase())
    .trim();
}

function Visual({
  template,
  active,
}: {
  template: UiTemplate;
  active: boolean;
}) {
  if (template === "code-to-ui-reveal") return <CodeToUI active={active} />;
  if (template === "terminal-data-flow")
    return <TerminalDataFlow active={active} />;
  return <NodeFlowchart active={active} />;
}

interface Props {
  project: Project;
  template: UiTemplate;
  index: number;
}

export function ProjectShowcase({ project, template, index }: Props) {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const reduced = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);

  // Subtle pointer tilt for depth.
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 150, damping: 18 });
  const sry = useSpring(ry, { stiffness: 150, damping: 18 });

  function onMove(e: React.MouseEvent) {
    if (reduced || !cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ry.set(px * 6);
    rx.set(-py * 6);
  }
  function onLeave() {
    setHover(false);
    rx.set(0);
    ry.set(0);
  }

  const visualLeft = index % 2 === 0;
  const links = [
    project.links.live && { label: "Live", href: project.links.live },
    project.links.github && { label: "GitHub", href: project.links.github },
    project.links.caseStudy && {
      label: "Case Study",
      href: project.links.caseStudy,
    },
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <Reveal>
      <motion.div
        ref={cardRef}
        onMouseEnter={() => setHover(true)}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX: srx, rotateY: sry, transformPerspective: 1200 }}
        className="glow-border glass group relative overflow-hidden rounded-3xl p-6 md:p-9"
      >
        {/* hover spotlight */}
        <div className="spotlight pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div
          className={`relative grid items-center gap-8 lg:grid-cols-2 ${
            visualLeft ? "" : "lg:[&>*:first-child]:order-2"
          }`}
        >
          {/* themed visual */}
          <div style={{ transform: "translateZ(40px)" }}>
            <Visual template={template} active={hover || open} />
          </div>

          {/* content */}
          <div>
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-pink/40 px-3 py-1 text-[11px] font-medium tracking-wide text-pink uppercase">
                {project.client}
              </span>
              {Object.entries(project.metrics).map(([k, v]) => (
                <span
                  key={k}
                  className="rounded-full bg-violet/15 px-3 py-1 text-[11px] text-muted"
                >
                  <span className="font-semibold text-gold">{v}</span>{" "}
                  {humanize(k)}
                </span>
              ))}
            </div>

            <h3 className="font-display text-2xl leading-tight font-bold text-balance md:text-3xl">
              {project.title}
            </h3>
            <p className="mt-2 text-sm font-medium text-gold/90">
              {project.tagline}
            </p>
            <p className="text-muted mt-4 text-sm leading-relaxed text-pretty">
              {project.summary}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.techStack.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-violet/30 bg-ink/40 px-2.5 py-1 font-mono text-[11px] text-fg/70"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setOpen((o) => !o)}
                aria-expanded={open}
                className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-xs font-semibold text-ink transition-shadow duration-300 hover:shadow-[0_0_28px_-4px_#ffc400]"
              >
                {open ? "Hide details" : "Key features"}
                <motion.span animate={{ rotate: open ? 180 : 0 }}>
                  ↓
                </motion.span>
              </button>
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-xs font-medium text-muted underline-offset-4 transition-colors hover:text-pink hover:underline"
                >
                  {l.label} ↗
                </a>
              ))}
            </div>

            <AnimatePresence initial={false}>
              {open && (
                <motion.ul
                  key="features"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-5 space-y-3 overflow-hidden"
                >
                  {project.keyFeatures.map((f, i) => (
                    <motion.li
                      key={f}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.07 }}
                      className="flex gap-3 text-sm text-fg/80"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-linear-to-r from-pink to-gold" />
                      {f}
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </Reveal>
  );
}
