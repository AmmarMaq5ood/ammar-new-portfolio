"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { ProjectImage } from "@/lib/types";

interface ScreenshotGalleryProps {
  images: ProjectImage[];
  /** Project name, used for accessible labels. */
  title: string;
}

/**
 * One large screenshot with a row of thumbnails underneath.
 * The active frame keeps its real aspect ratio so nothing is cropped.
 */
export function ScreenshotGallery({ images, title }: ScreenshotGalleryProps) {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion() ?? false;
  const current = images[active];

  return (
    <figure className="m-0">
      <div className="relative overflow-hidden rounded-lg border border-line bg-paper">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={current.src}
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src={current.src}
              alt={current.alt}
              width={current.width}
              height={current.height}
              sizes="(min-width: 1024px) 1100px, 100vw"
              priority={active === 0}
              className="h-auto w-full"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {current.caption && (
        <figcaption className="mt-3 font-mono text-[11px] leading-relaxed text-muted">
          <span className="text-accent">
            {String(active + 1).padStart(2, "0")}/{String(images.length).padStart(2, "0")}
          </span>{" "}
          {current.caption}
        </figcaption>
      )}

      {images.length > 1 && (
        <div
          role="tablist"
          aria-label={`${title} screenshots`}
          className="mt-4 grid grid-cols-4 gap-2"
        >
          {images.map((img, i) => {
            const selected = i === active;
            return (
              <button
                key={img.src}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-label={img.alt}
                onClick={() => setActive(i)}
                className={`relative aspect-[16/10] overflow-hidden rounded-md border bg-paper transition-colors duration-200 ${
                  selected
                    ? "border-accent"
                    : "border-line hover:border-muted"
                }`}
              >
                <Image
                  src={img.src}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 260px, 25vw"
                  className={`object-cover object-top transition-opacity duration-200 ${
                    selected ? "opacity-100" : "opacity-60 hover:opacity-100"
                  }`}
                />
              </button>
            );
          })}
        </div>
      )}
    </figure>
  );
}
