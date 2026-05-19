"use client";

import { AnimatePresence, motion } from "framer-motion";

const CODE = [
  ["add_action", "( 'init', ", "register_blocks ", ");"],
  ["register_block_type", "( 'gwg/product'", ", [ ... ]", " );"],
  ["wp_cache_set", "( $key, ", "$query", ", 'gwg' );"],
  ["return", " new ", "WP_REST_Response", "( $data );"],
];

/**
 * WordPress template flair: raw PHP hook structures on idle that
 * morph into finished UI components on hover ("code → UI" reveal).
 */
export function CodeToUI({ active }: { active: boolean }) {
  return (
    <div className="relative h-full min-h-[260px] w-full overflow-hidden rounded-2xl border border-violet/25 bg-ink/60">
      {/* window chrome */}
      <div className="flex items-center gap-1.5 border-b border-violet/20 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-pink/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-gold/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-violet/70" />
        <span className="ml-3 font-mono text-[10px] text-muted">
          functions.php
        </span>
      </div>

      <div className="relative h-[calc(100%-44px)] p-5">
        <AnimatePresence mode="wait">
          {!active ? (
            <motion.pre
              key="code"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, filter: "blur(6px)" }}
              transition={{ duration: 0.35 }}
              className="space-y-2 font-mono text-[11px] leading-relaxed md:text-xs"
            >
              {CODE.map((tokens, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.12 }}
                >
                  <span className="text-muted/50 select-none">
                    {String(i + 1).padStart(2, "0")}{" "}
                  </span>
                  <span className="text-pink">{tokens[0]}</span>
                  <span className="text-fg/80">{tokens[1]}</span>
                  <span className="text-gold">{tokens[2]}</span>
                  <span className="text-fg/80">{tokens[3]}</span>
                </motion.div>
              ))}
            </motion.pre>
          ) : (
            <motion.div
              key="ui"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="grid h-full grid-cols-2 gap-3"
            >
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.85, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    delay: i * 0.08,
                    duration: 0.45,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="flex flex-col gap-2 rounded-xl border border-violet/30 bg-violet/10 p-3"
                >
                  <div className="h-10 rounded-md bg-linear-to-br from-violet/40 to-pink/30" />
                  <div className="h-2 w-3/4 rounded-full bg-fg/30" />
                  <div className="h-2 w-1/2 rounded-full bg-fg/20" />
                  <div className="mt-auto h-5 w-16 rounded-full bg-gold/80" />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
