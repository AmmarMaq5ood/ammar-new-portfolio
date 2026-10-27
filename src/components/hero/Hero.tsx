"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import { Asterisk } from "@/components/ui/Asterisk";

const { name, title, contact, portrait } = portfolio.meta;
const [first, ...rest] = name.split(" ");
const surname = rest.join(" ");
const initials = name
  .split(" ")
  .map((n) => n[0])
  .join("")
  .slice(0, 2);

/** The featured project in the hero polaroid: first case with screenshots. */
const featured = portfolio.categories
  .flatMap((c) => c.projects)
  .find((p) => (p.images?.length ?? 0) > 0);

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};
const rise: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

/**
 * The schematic grid from the reference: three vertical lines that start
 * below the nav row, two horizontal lines, and "+" marks at every line end
 * and crossing. Drawn as elements so the marks always sit on the lines.
 */
const V = [25, 50, 75];
const H = [34, 62];
const TOP = 9;
const BOTTOM = 96;
const LEFT = 2;
const RIGHT = 98;

function HeroGrid() {
  const marks: Array<[number, number]> = [];
  for (const x of V) for (const y of [TOP, ...H, BOTTOM]) marks.push([x, y]);
  for (const y of H) for (const x of [LEFT, RIGHT]) marks.push([x, y]);
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {V.map((x) => (
        <span
          key={`v${x}`}
          className="absolute w-px bg-white/20"
          style={{ left: `${x}%`, top: `${TOP}%`, bottom: `${100 - BOTTOM}%` }}
        />
      ))}
      {H.map((y) => (
        <span
          key={`h${y}`}
          className="absolute h-px bg-white/20"
          style={{ top: `${y}%`, left: `${LEFT}%`, right: `${100 - RIGHT}%` }}
        />
      ))}
      {marks.map(([x, y]) => (
        <span
          key={`${x}-${y}`}
          className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 text-white/80"
          style={{ left: `${x}%`, top: `${y}%` }}
        >
          <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-current" />
          <span className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-current" />
        </span>
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section className="px-3 pt-3 md:px-5 md:pt-4">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative flex min-h-[min(calc(100svh-1.5rem),980px)] flex-col overflow-hidden rounded-md bg-accent text-white"
      >
        <HeroGrid />

        {/* Ghost surname — the watermark behind everything */}
        <div
          aria-hidden
          className="name-wide pointer-events-none absolute inset-x-0 top-[11%] select-none text-center text-[12.5vw] whitespace-nowrap text-white/[0.09] md:top-[9%] md:text-[clamp(6rem,14.5vw,14.5rem)]"
        >
          {surname}
        </div>

        {/* The portrait: a cut-out PNG, large and centre-right, behind the
            name and the cards but in front of the watermark. */}
        {portrait && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-[18%] bottom-0 z-[5] sm:top-[12%] md:left-[6%] md:right-[12%] md:top-[7%] lg:left-[16%] lg:right-[22%]"
          >
            <Image
              src={portrait}
              alt=""
              fill
              priority
              sizes="(min-width: 1024px) 62vw, (min-width: 768px) 82vw, 100vw"
              className="object-cover object-top sm:object-contain sm:object-bottom"
            />
            {/* Fade the shirt into the orange so the name always sits on colour */}
            <div className="absolute inset-x-0 bottom-0 h-[44%] bg-gradient-to-t from-accent via-accent/75 to-transparent sm:h-[36%]" />
          </div>
        )}

        {/* Top row: tagline + featured card */}
        <div className="relative z-10 flex flex-col gap-8 px-5 pt-28 sm:flex-row sm:items-start sm:justify-between md:px-10 md:pt-36">
          <motion.p
            variants={rise}
            className="max-w-[280px] text-[13px] font-medium leading-[1.5] tracking-[0.04em] uppercase md:max-w-[300px] md:text-sm"
          >
            I build AI agents, automations and full-stack products, with coding
            agents doing the typing and real engineering around them.
          </motion.p>

          {featured && featured.images && (
            <motion.a
              variants={rise}
              href={`#${featured.id}`}
              className="group hidden w-[220px] shrink-0 rounded-sm bg-white p-2 text-ink shadow-[0_20px_50px_rgba(0,0,0,0.18)] transition-transform duration-500 hover:-translate-y-1 sm:block sm:w-[240px] md:w-[270px]"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2px] bg-paper">
                <Image
                  src={featured.images[0].src}
                  alt={featured.images[0].alt}
                  fill
                  priority
                  sizes="270px"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex items-center justify-between gap-3 px-1 pt-2.5 pb-1 text-[11px]">
                <span className="inline-flex items-center gap-1.5 font-semibold tracking-[0.08em] uppercase text-muted">
                  <Asterisk className="h-2.5 w-2.5 text-accent" />
                  {featured.title}
                </span>
                <span className="text-muted">/AI lead research</span>
              </div>
            </motion.a>
          )}
        </div>

        {/* Bottom row: name + the "let's talk" card */}
        <div className="relative z-10 mt-auto flex flex-col gap-8 px-5 pt-16 pb-6 md:px-10 md:pb-9 xl:flex-row xl:items-end xl:justify-between">
          <div className="min-w-0">
            <motion.p variants={rise} className="font-display text-sm font-semibold">
              ©{new Date().getFullYear()}
            </motion.p>
            <motion.h1
              variants={rise}
              className="name-wide -ml-[0.04em] mt-3 text-[clamp(3.4rem,17vw,9rem)] xl:text-[clamp(9rem,13.5vw,13.5rem)]"
            >
              {first}
            </motion.h1>
            <span className="sr-only">{surname}</span>
          </div>

          <motion.div
            variants={rise}
            className="flex w-full max-w-[340px] items-center gap-3 rounded-sm bg-black p-3 text-white md:w-[340px] md:self-end xl:self-auto"
          >
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-[3px] bg-accent">
              {portrait ? (
                <Image src={portrait} alt={name} fill sizes="56px" className="object-cover" />
              ) : (
                <span className="font-display flex h-full w-full items-center justify-center text-lg font-black">
                  {initials}
                </span>
              )}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[11px] text-white/60">Let&apos;s talk</p>
              <p className="font-display mt-0.5 truncate text-[15px] font-bold">{name}</p>
              <p className="truncate text-[12px] text-white/60">{title}</p>
            </div>
            <a
              href={`mailto:${contact.email}`}
              aria-label={`Email ${name}`}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[3px] bg-white text-ink transition-colors duration-300 hover:bg-accent hover:text-white"
            >
              ↗
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Works-with strip — the "trusted by" row, honest version */}
      <div className="mx-auto flex max-w-7xl items-center gap-8 overflow-x-auto px-2 py-7 md:gap-10 md:px-5 md:py-9 [scrollbar-width:none]">
        <p className="label shrink-0 leading-snug text-ink">
          Built
          <br />
          with
        </p>
        <ul className="flex items-center gap-7 md:flex-wrap md:gap-x-9 md:gap-y-2">
          {portfolio.process.strip.map((t) => (
            <li
              key={t}
              className="font-display shrink-0 text-[15px] font-bold whitespace-nowrap text-muted/80 md:text-base"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
