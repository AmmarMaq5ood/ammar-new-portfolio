export interface ProjectLinks {
  live?: string;
  github?: string;
  caseStudy?: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

/** How the project exists in the world today. */
export type ProjectStatus = "live" | "pilot" | "personal" | "poc";

export interface Project {
  id: string;
  title: string;
  tagline: string;
  techStack: string[];
  /** Who it was built for — kept generic, never a client name. */
  client?: string;
  year?: string;
  status?: ProjectStatus;
  /** Optional rich fields — present on case-study style projects. */
  summary?: string;
  keyFeatures?: string[];
  /** Free-form metric label → value pairs, rendered as stat chips. */
  metrics?: Record<string, string>;
  /** AI tools that did the heavy lifting on this build. */
  builtWith?: string[];
  /** Screenshots — when present, the case shows a gallery instead of a diagram. */
  images?: ProjectImage[];
  /** Key into FlowDiagram for the hand-drawn schematic. */
  diagram?: string;
  links?: ProjectLinks;
}

/** cases: full case studies · cards: compact grid · ledger: one-line rows */
export type CategoryLayout = "cases" | "cards" | "ledger";

export interface Category {
  id: string;
  /** Two-letter ledger code, e.g. "WP" → rows WP·01, WP·02 … */
  code: string;
  /** Short label used in navigation and the hero index. */
  short: string;
  title: string;
  /** Trailing grey part of the headline. */
  muted?: string;
  description: string;
  layout: CategoryLayout;
  projects: Project[];
}

export interface Contact {
  email: string;
  github?: string;
  linkedin?: string;
  /** Path (under /public) or URL of the downloadable CV. */
  resume?: string;
}

export interface PortfolioMeta {
  name: string;
  title: string;
  /** One-line positioning shown under the name. */
  intro: string;
  /** Optional portrait (path under /public) for the hero card. */
  portrait?: string;
  branding: {
    primaryFont: string;
    colors: {
      background: string;
      accentPrimary: string;
      accentSecondary: string;
      highlight: string;
    };
    footer?: {
      layout?: string;
    };
  };
  contact: Contact;
}

export interface ProcessStep {
  title: string;
  body: string;
  /** Tools that belong to this step — rendered as chips. */
  tools?: string[];
}

export interface ToolGroup {
  label: string;
  items: string[];
}

export interface Stat {
  value: string;
  label: string;
  body: string;
}

export interface Process {
  eyebrow: string;
  title: string;
  /** Trailing grey part of the headline. */
  muted?: string;
  description: string;
  /** The logo-strip replacement: tools the work is built with. */
  strip: string[];
  stats: Stat[];
  steps: ProcessStep[];
  toolbelt: ToolGroup[];
}

export interface Portfolio {
  meta: PortfolioMeta;
  process: Process;
  categories: Category[];
}
