"use client";

import { motion } from "framer-motion";

const NODES = [
  { id: "trigger", x: 38, y: 110, label: "Webhook", accent: "#ffc400" },
  { id: "enrich", x: 130, y: 56, label: "Enrich", accent: "#ff3f7f" },
  { id: "dedupe", x: 130, y: 164, label: "Dedupe", accent: "#ff3f7f" },
  { id: "map", x: 222, y: 110, label: "Map Fields", accent: "#8c00ff" },
  { id: "crm", x: 300, y: 110, label: "CRM", accent: "#ffc400" },
];

const EDGES = [
  ["trigger", "enrich"],
  ["trigger", "dedupe"],
  ["enrich", "map"],
  ["dedupe", "map"],
  ["map", "crm"],
] as const;

const byId = (id: string) => NODES.find((n) => n.id === id)!;

/**
 * Launchpad template flair: a multi-node automation graph. Triggering
 * the entry point sends sequential light pulses racing along the
 * glowing paths through each data node.
 */
export function NodeFlowchart({ active }: { active: boolean }) {
  const cycle = active ? 2.4 : 4.2;

  return (
    <div className="relative h-full min-h-[260px] w-full overflow-hidden rounded-2xl border border-violet/25 bg-ink/60">
      <svg
        viewBox="0 0 340 220"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* connectors */}
        {EDGES.map(([from, to], i) => {
          const a = byId(from);
          const b = byId(to);
          return (
            <g key={`${from}-${to}`}>
              <line
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                stroke="#8c00ff"
                strokeOpacity="0.25"
                strokeWidth="1.5"
              />
              <motion.line
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                stroke="#ffc400"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="10 220"
                initial={{ strokeDashoffset: 230 }}
                animate={{ strokeDashoffset: [230, 0] }}
                transition={{
                  duration: cycle,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * (cycle / EDGES.length),
                }}
              />
            </g>
          );
        })}

        {/* nodes */}
        {NODES.map((n, i) => (
          <g key={n.id}>
            <motion.circle
              cx={n.x}
              cy={n.y}
              r="16"
              fill={n.accent}
              fillOpacity="0.14"
              stroke={n.accent}
              strokeWidth="1.5"
              animate={{
                r: [16, 20, 16],
                fillOpacity: [0.14, 0.4, 0.14],
              }}
              transition={{
                duration: cycle,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * (cycle / NODES.length),
              }}
            />
            <circle cx={n.x} cy={n.y} r="4" fill={n.accent} />
            <text
              x={n.x}
              y={n.y + 32}
              textAnchor="middle"
              className="fill-[#a99fc4] font-mono"
              fontSize="9"
            >
              {n.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
