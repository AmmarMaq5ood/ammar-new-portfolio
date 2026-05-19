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
  client: string;
  tagline: string;
  summary: string;
  techStack: string[];
  keyFeatures: string[];
  /** Free-form metric label → value pairs, rendered as stat chips. */
  metrics: Record<string, string>;
  links: ProjectLinks;
  animationHint: string;
}

export interface Category {
  id: string;
  title: string;
  description: string;
  uiTemplate: UiTemplate;
  projects: Project[];
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
  };
}

export interface Portfolio {
  meta: PortfolioMeta;
  categories: Category[];
}
