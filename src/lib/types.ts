/** Visual treatment applied to a category's showcase section. */
export type UiTemplate =
  | "code-to-ui-reveal"
  | "terminal-data-flow"
  | "interactive-node-flowchart";

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
  title: string;
  description: string;
  uiTemplate: UiTemplate;
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

/** True when a project carries enough depth for the expandable showcase. */
export function isRichProject(p: Project): boolean {
  return Boolean(p.summary) || (p.keyFeatures?.length ?? 0) > 0;
}
