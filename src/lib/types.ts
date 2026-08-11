export interface ProjectLinks {
  live?: string;
  github?: string;
  caseStudy?: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  techStack: string[];
  /** Optional rich fields — present on case-study style projects. */
  client?: string;
  summary?: string;
  keyFeatures?: string[];
  /** Free-form metric label → value pairs, rendered as stat chips. */
  metrics?: Record<string, string>;
  links?: ProjectLinks;
  /** Authoring hint for the themed visual — not rendered. */
  animationHint?: string;
}

export interface Category {
  id: string;
  /** Two-letter ledger code, e.g. "WP" → rows WP·01, WP·02 … */
  code: string;
  /** Short label used in navigation and the hero index. */
  short: string;
  title: string;
  description: string;
  projects: Project[];
}

export interface Contact {
  email: string;
  github?: string;
  linkedin?: string;
}

export interface PortfolioMeta {
  name: string;
  title: string;
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

export interface Portfolio {
  meta: PortfolioMeta;
  categories: Category[];
}

/** True when a project carries enough depth for the expanded case block. */
export function isRichProject(p: Project): boolean {
  return Boolean(p.summary) || (p.keyFeatures?.length ?? 0) > 0;
}
