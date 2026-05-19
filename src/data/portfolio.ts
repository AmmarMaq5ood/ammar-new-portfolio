import type { Portfolio } from "@/lib/types";

/**
 * Single source of truth for portfolio content.
 * Replace / extend `categories[].projects[]` to inject more work —
 * every section renders generically from this structure.
 */
export const portfolio: Portfolio = {
  meta: {
    name: "Ammar Maqsood",
    title: "Full-Stack Developer & Automation Expert",
    branding: {
      primaryFont: "Momo Trust Display",
      colors: {
        background: "#450693",
        accentPrimary: "#8C00FF",
        accentSecondary: "#FF3F7F",
        highlight: "#FFC400",
      },
    },
  },
  categories: [
    {
      id: "wordpress",
      title: "WordPress Theme & Plugin Development",
      description:
        "Custom-built, high-performance themes and tailored plugin architecture with zero bloat.",
      uiTemplate: "code-to-ui-reveal",
      projects: [
        {
          id: "wp-01",
          title: "Custom E-Commerce Engine & Theme Architecture",
          client: "Grow With Go",
          tagline:
            "A lightweight, conversion-focused WooCommerce alternative build.",
          summary:
            "Designed and developed a fully custom, object-oriented WordPress theme and proprietary core plugin to bypass heavy page-builder dependency, resulting in sub-second load times.",
          techStack: [
            "WordPress Core",
            "PHP",
            "JavaScript (ES6)",
            "Tailwind CSS",
            "REST API",
          ],
          keyFeatures: [
            "Custom Gutenberg block registration via PHP metadata structures",
            "Hook-driven dynamic checkout optimization bypasses standard loop delays",
            "Transient API caching for lightning-fast product filtering",
          ],
          metrics: {
            performanceScore: "98%",
            loadTimeReduction: "4.2s to 0.8s",
          },
          links: {
            live: "https://example.com",
            github: "https://github.com/example/wp-project",
            caseStudy: "/case-studies/wp-ecommerce",
          },
          animationHint:
            "On-hover card reveals raw PHP hook structures morphing into finished visual components.",
        },
      ],
    },
    {
      id: "mern-nextjs",
      title: "MERN, Next.js & Custom Solutions",
      description:
        "Production-ready web applications, decoupled architectures, and secure custom middleware solutions.",
      uiTemplate: "terminal-data-flow",
      projects: [
        {
          id: "mern-01",
          title: "Automated Document Cryptography & Certificate Engine",
          client: "Ethos",
          tagline:
            "PHP-based cryptographic extraction layer and automated delivery pipeline.",
          summary:
            "Engineered a custom secure middleware solution that programmatically isolates digital signatures from secure PDFs to dynamically render and dispatch verification certificates via fully automated email workflows.",
          techStack: ["PHP", "Next.js", "Node.js", "OpenSSL", "Tailwind CSS"],
          keyFeatures: [
            "Binary stream tracking for precise digital signature coordinate extraction",
            "Decoupled asynchronous worker queues processing bulk generation requests",
            "Strict API gateway validation securing sensitive client assets during transport",
          ],
          metrics: {
            processingSpeed: "1.2s per asset",
            automationAccuracy: "100%",
          },
          links: {
            live: "",
            github: "",
            caseStudy: "/case-studies/ethos-middleware",
          },
          animationHint:
            "Background glows with visual lines tracking a data stream passing from an input terminal to a stylized digital signature shield.",
        },
      ],
    },
    {
      id: "launchpad-automation",
      title: "Launchpad Automation Expert",
      description:
        "Advanced CRM workflow architectural solutions, third-party API routing, and custom lead-enrichment nodes.",
      uiTemplate: "interactive-node-flowchart",
      projects: [
        {
          id: "launchpad-01",
          title: "ZoomInfo Real-Time Lead Enrichment Integration",
          client: "Crestcom",
          tagline:
            "Dynamic B2B lead generation data syncing and CRM profile routing.",
          summary:
            "Built an advanced API integration node mapping ZoomInfo webhooks directly into the Launchpad CRM environment. Automatically pulls, enriches, and validates enterprise inbound lead profiles on the fly.",
          techStack: [
            "Launchpad Core Workflow API",
            "Node.js",
            "Express",
            "ZoomInfo Enrichment API",
          ],
          keyFeatures: [
            "Real-time webhook listener with strict deduplication payload filtering",
            "Dynamic custom field mapping supporting polymorphic business data fields",
            "Automated fallback routes preventing API exhaustion and managing rate limit pacing",
          ],
          metrics: {
            profileCompleteness: "Increase of 85%",
            manualDataEntrySaved: "40+ hours/week",
          },
          links: {
            live: "",
            github: "",
            caseStudy: "/case-studies/crestcom-zoominfo",
          },
          animationHint:
            "A multi-node workflow visualization where triggering an initial point causes sequential pulses to run along glowing paths through data bubbles.",
        },
      ],
    },
  ],
};
