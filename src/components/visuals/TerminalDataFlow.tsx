"use client";

import { motion } from "framer-motion";

const LINES = [
  { p: "$", c: "node worker.js --queue=certs" },
  { p: "›", c: "stream.extract(signature) ✓" },
  { p: "›", c: "gateway.validate(asset) ✓" },
  { p: "›", c: "dispatch → mail.send() ✓" },
];

/**
 * MERN / Next.js template flair: an API terminal mock with a glowing
 * data stream flowing from the process into a signature shield.
 */
export function TerminalDataFlow({ active }: { active: boolean }) {
  return (
    <div className="relative h-full min-h-[260px] w-full overflow-hidden rounded-2xl border border-violet/25 bg-ink/70">
      <div className="grid h-full grid-cols-[1.4fr_1fr]">
        {/* Terminal */}
        <div className="border-r border-violet/20 p-4">
          <div className="mb-3 flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-pink/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-gold/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-violet/70" />
          </div>
          <div className="space-y-2 font-mono text-[11px] md:text-xs">
            {LINES.map((l, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 + i * 0.35 }}
                className="flex gap-2"
              >
                <span className="text-gold">{l.p}</span>
                <span className="text-fg/75">{l.c}</span>
              </motion.div>
            ))}
            <motion.span
              className="inline-block h-3.5 w-2 bg-gold"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </div>
        </div>

        {/* Flow → shield */}
        <div className="relative flex items-center justify-center">
          <svg
            viewBox="0 0 120 200"
            className="absolute inset-0 h-full w-full"
            preserveAspectRatio="none"
          >
            {[40, 80, 120, 160].map((y, i) => (
              <motion.line
                key={y}
                x1="-10"
                y1={y}
                x2="70"
                y2="100"
                stroke="url(#flow)"
                strokeWidth="1.5"
                strokeDasharray="6 10"
                animate={{ strokeDashoffset: active ? [0, -64] : [0, -32] }}
                transition={{
                  duration: active ? 0.9 : 2.4,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.15,
                }}
              />
            ))}
            <defs>
              <linearGradient id="flow" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#8c00ff" />
                <stop offset="100%" stopColor="#ff3f7f" />
              </linearGradient>
            </defs>
          </svg>

          <motion.div
            animate={
              active
                ? { scale: [1, 1.08, 1], boxShadow: "0 0 36px -4px #ffc400" }
                : { scale: 1 }
            }
            transition={{ duration: 1.4, repeat: active ? Infinity : 0 }}
            className="relative z-10 flex h-16 w-14 items-center justify-center rounded-b-[28px] rounded-t-lg border border-gold/60 bg-linear-to-b from-gold/25 to-pink/10"
          >
            <svg viewBox="0 0 24 24" className="h-7 w-7 text-gold" fill="none">
              <path
                d="M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5l-8-3Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="m9 12 2 2 4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
