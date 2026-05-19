"use client";

import { useRef, useState } from "react";
import {
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

/** Compact, link-first card used in dense category grids. */
export function ProjectTile({
  project,
  template,
  delay = 0,
}: {
  project: Project;
  template: UiTemplate;
  delay?: number;
}) {
  const [hover, setHover] = useState(false);
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 160, damping: 18 });
  const sry = useSpring(ry, { stiffness: 160, damping: 18 });

  function onMove(e: React.MouseEvent) {
    if (reduced || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    ry.set(((e.clientX - r.left) / r.width - 0.5) * 5);
    rx.set(-((e.clientY - r.top) / r.height - 0.5) * 5);
  }
  function onLeave() {
    setHover(false);
    rx.set(0);
    ry.set(0);
  }

  const live = project.links?.live;

  return (
    <Reveal delay={delay}>
      <motion.div
        ref={ref}
        onMouseEnter={() => setHover(true)}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX: srx, rotateY: sry, transformPerspective: 1000 }}
        whileHover={{ y: -6 }}
        className="glow-border glass group relative flex h-full flex-col overflow-hidden rounded-3xl p-5"
      >
        <div className="spotlight pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div style={{ transform: "translateZ(30px)" }}>
          <Visual template={template} active={hover} />
        </div>

        <div className="mt-5 flex flex-1 flex-col">
          <h3 className="font-display text-xl leading-tight font-bold text-balance">
            {project.title}
          </h3>
          <p className="mt-1.5 text-sm font-medium text-gold/90">
            {project.tagline}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.techStack.map((t) => (
              <span
                key={t}
                className="rounded-md border border-violet/30 bg-ink/40 px-2 py-0.5 font-mono text-[10px] text-fg/65"
              >
                {t}
              </span>
            ))}
          </div>

          {live && (
            <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-fg transition-colors group-hover:text-pink">
              Visit Live
              <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">
                ↗
              </span>
            </span>
          )}
        </div>

        {/* Full-card click target (no nested anchors) */}
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${project.title} (opens in new tab)`}
            className="absolute inset-0 z-10"
          />
        )}
      </motion.div>
    </Reveal>
  );
}
