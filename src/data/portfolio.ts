import type { Portfolio } from "@/lib/types";

/**
 * Single source of truth for portfolio content.
 * Add work by appending to `categories[].projects[]` — sections,
 * navigation, footer and SEO all derive from this structure.
 */
export const portfolio: Portfolio = {
  meta: {
    name: "Ammar Maqsood",
    title: "Full-Stack Developer & Automation Expert",
    branding: {
      primaryFont: "Bricolage Grotesque",
      colors: {
        background: "#F6F4FA",
        accentPrimary: "#6C16E8",
        accentSecondary: "#191231",
        highlight: "#F2B705",
      },
      footer: {
        layout: "Name | Profession | LinkedIn Logo",
      },
    },
    contact: {
      email: "ammarmaqsood938@gmail.com",
      github: "https://github.com/AmmarMaq5ood",
      linkedin: "https://www.linkedin.com/in/ammar-maqsood-mirza/",
    },
  },
  categories: [
    {
      id: "wordpress",
      code: "WP",
      short: "WordPress",
      title: "WordPress Theme & Plugin Development",
      description:
        "High-performance directory, marketplace, and corporate themes built with scalable custom architecture.",
      projects: [
        {
          id: "wp-adforest",
          title: "AdForest",
          tagline: "Advanced Classified Ads Theme",
          techStack: ["WordPress", "PHP", "Custom Post Types", "JavaScript"],
          links: { live: "https://listing.adforestwp.com/" },
        },
        {
          id: "wp-exertio",
          title: "Exertio Theme",
          tagline: "Freelance Marketplace Architecture",
          techStack: ["WordPress", "PHP", "WooCommerce Integration", "React"],
          links: { live: "https://marketplace.exertiowp.com/home-8/" },
        },
        {
          id: "wp-dwt",
          title: "DWT Listing",
          tagline: "Directory & Listing Management",
          techStack: ["WordPress", "PHP", "Google Maps API", "AJAX"],
          links: { live: "https://listing.downtown-directory.com/" },
        },
        {
          id: "wp-carspot",
          title: "Carspot",
          tagline: "Automotive Dealership Solution",
          techStack: ["WordPress", "PHP", "Advanced Search Filters"],
          links: { live: "http://carspot.scriptsbundle.com/" },
        },
        {
          id: "wp-growwithgo",
          title: "Grow With Go",
          tagline: "Corporate Web Presence",
          techStack: ["WordPress", "Custom Theme Engine"],
          links: { live: "https://www.growwithgo.com/" },
        },
        {
          id: "wp-globalair",
          title: "Global Air Entertainment",
          tagline: "Entertainment Platform",
          techStack: ["WordPress", "PHP", "Frontend Optimization"],
          links: { live: "https://globalairentertainment.com/" },
        },
        {
          id: "wp-massinteract",
          title: "Mass Interact",
          tagline: "Interactive Digital Experience",
          techStack: ["WordPress", "JavaScript", "Custom Animations"],
          links: { live: "https://www.massinteract.com/" },
        },
      ],
    },
    {
      id: "mern-nextjs",
      code: "AP",
      short: "Web Apps",
      title: "MERN, Next.js & Custom Solutions",
      description:
        "Production-ready web applications, decoupled architectures, and high-performance frontends.",
      projects: [
        {
          id: "mern-gogrow",
          title: "Go Grow AI",
          tagline: "AI-Powered Platform Interface",
          techStack: ["Next.js", "React", "Node.js", "Tailwind CSS"],
          links: { live: "https://gogrow.ai/" },
        },
        {
          id: "mern-stonewolf",
          title: "Stone Wolf AI",
          tagline: "Intelligent Custom Solutions",
          techStack: ["Next.js", "React", "MongoDB", "Express"],
          links: { live: "https://stonewolfai.com/" },
        },
        {
          id: "mern-faasthub",
          title: "Faast Dispatch",
          tagline: "Logistics & Dispatch Management",
          techStack: ["MERN Stack", "Real-time API", "Dashboard UI"],
          links: { live: "https://faasthub.com/faastdispatch" },
        },
        {
          id: "mern-ongeschreven",
          title: "Ongeschreven Leven",
          tagline: "Custom Web Application",
          techStack: ["Next.js", "React", "Custom Backend"],
          links: { live: "https://www.ongeschrevenleven.nl/" },
        },
        {
          id: "mern-tunntunn",
          title: "Tunn Tunn",
          tagline: "Modern Frontend Architecture",
          techStack: ["React", "Node.js", "API Integration"],
          links: { live: "https://tunntunn.com/" },
        },
        {
          id: "mern-uran",
          title: "Uran Limited",
          tagline: "Corporate Portal & Services",
          techStack: ["Next.js", "React", "Tailwind CSS"],
          links: { live: "https://uranlimited.com/" },
        },
      ],
    },
    {
      id: "automation-chatbots",
      code: "GH",
      short: "Automation",
      title: "GHL Automation & Chatbot Expert",
      description:
        "Advanced CRM workflow architectures, third-party integrations, and intelligent conversational agents.",
      projects: [
        {
          id: "lp-sms",
          title: "Custom Student Management System",
          tagline:
            "Comprehensive educational tracking built entirely within the CRM.",
          techStack: [
            "GHL Workflow API",
            "Custom Fields",
            "Trigger Pipelines",
          ],
          keyFeatures: [
            "Automated enrollment and onboarding sequences",
            "Dynamic status tracking and notification nodes",
          ],
          animationHint:
            "Node network showing a student profile passing through multiple automated lifecycle stages.",
        },
        {
          id: "lp-zoominfo",
          title: "API Lead Enrichment Integration",
          tagline: "Real-time B2B data syncing and profile routing.",
          techStack: ["GHL Core API", "Node.js", "Webhooks"],
          keyFeatures: [
            "Real-time webhook listeners for inbound data",
            "Automated lead enrichment mapping to custom GHL fields",
          ],
          animationHint:
            "Data packets glowing as they move from an external API cloud directly into CRM database slots.",
        },
        {
          id: "lp-chatbots",
          title: "Intelligent Client-Facing Chatbots",
          tagline: "Automated conversational routing and qualification.",
          techStack: [
            "GHL AI Studio",
            "Conversational Logic",
            "Conditional Routing",
          ],
          keyFeatures: [
            "Multi-step lead qualification and dynamic tag assignment",
            "Seamless handover protocols to human agents",
          ],
          animationHint:
            "A chat bubble interface generating automated responses based on a branching logic tree.",
        },
      ],
    },
  ],
};
