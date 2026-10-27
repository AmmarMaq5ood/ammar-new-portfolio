/** The eight-point asterisk that marks every label in the system. */
export function Asterisk({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden className={className} fill="currentColor">
      <path d="M7.2 0h1.6v5.1l3.6-3.6 1.1 1.1-3.6 3.6H15v1.6H9.9l3.6 3.6-1.1 1.1-3.6-3.6V16H7.2v-5.1l-3.6 3.6-1.1-1.1 3.6-3.6H1V7.2h5.1L2.5 3.6l1.1-1.1 3.6 3.6V0z" />
    </svg>
  );
}

/** Small grey pill: "✳ READY TO START?" */
export function PillLabel({
  children,
  tone = "paper",
}: {
  children: string;
  tone?: "paper" | "dark" | "accent";
}) {
  const tones = {
    paper: "bg-tile text-ink",
    dark: "bg-white/10 text-white",
    accent: "bg-white/15 text-white",
  } as const;
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-sm px-2 py-1 text-[11px] font-semibold tracking-[0.1em] uppercase ${tones[tone]}`}
    >
      <Asterisk className="h-2.5 w-2.5 text-accent" />
      {children}
    </span>
  );
}

/** "BOOK A CALL ↗" — thin label button with the orange square arrow. */
export function ArrowButton({
  href,
  children,
  external = false,
  dark = false,
  className = "",
}: {
  href: string;
  children: string;
  external?: boolean;
  dark?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`group inline-flex items-center gap-3 border-b-2 border-accent pb-1 text-[12px] font-semibold tracking-[0.12em] uppercase transition-colors duration-300 ${
        dark ? "text-white hover:text-accent" : "text-ink hover:text-accent"
      } ${className}`}
    >
      {children}
      <span
        aria-hidden
        className="inline-flex h-6 w-6 items-center justify-center bg-accent text-[13px] leading-none text-white transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      >
        ↗
      </span>
    </a>
  );
}
