import type { Portfolio } from "@/lib/types";

/**
 * Single source of truth for portfolio content.
 * Add work by appending to `categories[].projects[]` — sections,
 * navigation, footer and SEO all derive from this structure.
 */
export const portfolio: Portfolio = {
  meta: {
    name: "Ammar Maqsood",
    title: "AI-native full-stack developer",
    intro:
      "Four years building for the web, now working AI-native: I plan in specs, build with Claude Code, Codex and Cursor, and ship Node.js / React products, n8n and Make.com agents, and CRM automations that run in production for real clients.",
    branding: {
      primaryFont: "Archivo",
      colors: {
        background: "#F4F3F0",
        accentPrimary: "#F1521C",
        accentSecondary: "#0F0F0F",
        highlight: "#111111",
      },
      footer: {
        layout: "Name | Profession | LinkedIn Logo",
      },
    },
    contact: {
      email: "ammarmaqsood990@gmail.com",
      github: "https://github.com/AmmarMaq5ood",
      linkedin: "https://www.linkedin.com/in/ammar-maqsood-mirza/",
      resume: "/Ammar-Maqsood-CV.pdf",
    },
  },

  process: {
    eyebrow: "How I build",
    title: "AI does the typing.",
    muted: "I do the engineering.",
    description:
      "Most of what you see below was written with coding agents. The difference between a demo and a product is everything around the prompt: the spec, the context the agent gets, the review, the tests and the deploy.",
    strip: [
      "Claude Code",
      "OpenAI Codex",
      "Cursor",
      "Lovable",
      "n8n",
      "Make.com",
      "OpenAI",
      "Anthropic",
      "Node.js",
      "React",
      "Next.js",
      "PostgreSQL",
      "GitHub Actions",
    ],
    stats: [
      {
        value: "4+",
        label: "Years full-stack",
        body: "Node.js, React, Next.js and PHP across web and mobile, from 2022 to today. Former team lead.",
      },
      {
        value: "72",
        label: "Nodes in one live agent",
        body: "The n8n call processor for a mortgage lender, in production since October 2026 and iterated v2 to v6.",
      },
      {
        value: "30",
        label: "Releases in ten days",
        body: "ProspectIQ went from a PHP port to thirty shipped features on GitHub Actions deploys.",
      },
      {
        value: "$0.37",
        label: "AI cost per hour of video",
        body: "ClipForge meters every API call. Budgets and token limits are a feature, not an afterthought.",
      },
    ],
    steps: [
      {
        title: "Spec first",
        body: "Every build starts as a written brief: goals, data shapes, API contracts, edge cases, what done looks like. Requirements come from calls with the client or the team and go into the repo, not a chat window.",
        tools: ["Requirements briefs", "Data & API contracts", "Docs in the repo"],
      },
      {
        title: "Context engineering",
        body: "Tokens are the budget. Every repo carries a CLAUDE.md / AGENTS.md and a project-context file, so a fresh session starts warm instead of re-reading the codebase. Knowledge graphs and targeted search replace file dumps, big jobs are split into scoped tasks, long explorations go to subagents, and anything I do twice becomes a skill or a slash command.",
        tools: [
          "CLAUDE.md / AGENTS.md",
          "Project-context files",
          "Custom skills & slash commands",
          "Subagents",
          "Plan, then execute",
          "Knowledge graphs (graphify)",
        ],
      },
      {
        title: "Build with agents",
        body: "Claude Code and Codex do the heavy lifting in the terminal, Cursor for in-editor edits, Lovable when a UI needs a fast starting point. I direct, read every diff, and keep the architecture honest. The cheaper model gets the routine work; the strong model gets the hard parts.",
        tools: ["Claude Code", "OpenAI Codex", "Cursor", "Lovable", "ChatGPT / Claude", "MCP servers"],
      },
      {
        title: "Verify like an engineer",
        body: "Typecheck, a test suite that runs with no network, run it locally, read the logs. Agent output is a draft until it passes. Products I build meter their own AI spend, down to the cent per call.",
        tools: ["TypeScript", "Tests without network", "Cost & token metering", "Model routing"],
      },
      {
        title: "Ship, and keep shipping",
        body: "GitHub Actions on every push: install, build, test, then SSH deploy to a VPS behind nginx and pm2, or Vercel. Docs and a changelog line go out with every feature, so the next agent session and the next human both know what changed.",
        tools: ["GitHub Actions", "Docker", "pm2 + nginx", "Vercel", "Changelog per feature"],
      },
    ],
    toolbelt: [
      {
        label: "AI coding",
        items: ["Claude Code", "OpenAI Codex", "Cursor", "Lovable", "ChatGPT", "Claude", "MCP servers"],
      },
      {
        label: "AI & agents",
        items: [
          "OpenAI API (GPT-4o, Whisper)",
          "Anthropic API",
          "n8n",
          "Make.com",
          "Prompt engineering",
          "Structured JSON output",
          "AI chatbots & voice agents",
        ],
      },
      {
        label: "Backend",
        items: ["Node.js", "Express", "TypeScript", "PHP 8", "Python", "REST APIs", "Webhooks", "Cron & schedulers"],
      },
      {
        label: "Frontend",
        items: ["React", "Next.js", "Vite", "Tailwind CSS", "shadcn/ui", "Framer Motion", "Redux", "React Native"],
      },
      {
        label: "Data",
        items: ["PostgreSQL", "Prisma", "Drizzle", "Supabase", "MongoDB", "SQLite", "Zod"],
      },
      {
        label: "Infra & delivery",
        items: [
          "Git & GitHub",
          "GitHub Actions",
          "Docker",
          "Kubernetes",
          "Google Cloud (App Engine, Cloud Functions, Pub/Sub, BigQuery)",
          "Firebase (Auth, Cloud Messaging)",
          "AWS S3",
          "pm2",
          "nginx",
          "VPS",
          "Vercel",
          "Playwright",
          "FFmpeg",
        ],
      },
      {
        label: "CRM & integrations",
        items: [
          "GoHighLevel API & workflows",
          "HubSpot",
          "Salesforce",
          "Follow Up Boss",
          "Pipedrive",
          "Zoho",
          "Microsoft Dynamics",
          "ZoomInfo",
          "Apollo",
          "FedEx API",
          "Smartsheet",
          "Google Places",
          "Apify",
        ],
      },
    ],
  },

  categories: [
    {
      id: "ai-products",
      code: "AI",
      short: "AI products",
      title: "AI products",
      muted: "& agents",
      description:
        "Production systems where a language model does real work: reads requests, listens to calls, writes to the CRM, drafts the follow-up. Each one built with coding agents and shipped with CI.",
      layout: "cases",
      projects: [
        {
          id: "prospectiq",
          title: "ProspectIQ",
          tagline:
            "Plain-words lead research that pushes qualified buyers straight into the CRM.",
          client: "B2B clients of a marketing agency",
          year: "2026",
          status: "live",
          summary:
            "A client types who they want: \"purchasing managers at valve makers in Texas with 100 to 1,000 employees\". ProspectIQ reads the request with GPT, searches a B2B research database, explains why each lead fits, and pushes the ticked ones into the client's GoHighLevel sub-account as companies, contacts, research notes and outreach deals. Multi-client from day one, with an admin panel for connections, credits, costs and usage.",
          keyFeatures: [
            "Scout: natural-language request → structured filters (titles, seniority, industry, location, size, revenue), shown back as \"Understood as\" chips the client can correct",
            "Daily finders: saved searches on a schedule, per-account daily caps, credits that reset in the client's timezone",
            "Targeting: an ideal-customer profile that ranks, tags and prioritises every lead on push",
            "Email waterfall: a second source for missing work emails, inside a time budget",
            "Admin: per-client keys, credits, activity log, cost report, dark mode, docs served in-app",
            "CI/CD: GitHub Actions builds and tests, then SSH-deploys to a VPS behind nginx + pm2",
          ],
          metrics: {
            "Rebuilt from PHP": "1 day to v1",
            "Feature releases": "30 in 10 days",
            Tenancy: "multi-client",
          },
          techStack: [
            "Node.js 20",
            "Express",
            "TypeScript",
            "React",
            "Vite",
            "OpenAI API",
            "GoHighLevel API",
            "Apollo API",
            "Google Places",
            "GitHub Actions",
            "pm2 + nginx",
          ],
          builtWith: ["Claude Code"],
          images: [
            {
              src: "/projects/prospectiq/scout-results.png",
              alt: "ProspectIQ Scout results: the request read into four conditions, each lead with a reason it fits",
              width: 1200,
              height: 1078,
              caption:
                "Scout. The request is read into conditions, every lead carries a reason it fits, nothing is pushed until it is ticked.",
            },
            {
              src: "/projects/prospectiq/scout-landing.png",
              alt: "ProspectIQ Scout landing: a plain-words search box with ready-made templates",
              width: 1200,
              height: 806,
              caption:
                "The client describes buyers in their own words; agency-written templates give a head start.",
            },
            {
              src: "/projects/prospectiq/finders.png",
              alt: "Daily leads finders with schedule, daily cap and run controls",
              width: 1200,
              height: 450,
              caption:
                "Daily finders run saved searches on a schedule, under a per-account daily cap.",
            },
            {
              src: "/projects/prospectiq/admin-overview.png",
              alt: "ProspectIQ admin overview with totals across clients and an activity feed",
              width: 1200,
              height: 806,
              caption:
                "Admin overview: credits, pushes and finder runs across every client, with a filterable activity feed.",
            },
          ],
        },
        {
          id: "call-agent",
          title: "Call Processor Agent",
          tagline:
            "An n8n AI agent that turns every sales call into CRM notes, pipeline updates and ready-to-send follow-ups.",
          client: "Mortgage lender",
          year: "2026",
          status: "live",
          summary:
            "The lender runs its lead-to-funded pipeline in GoHighLevel. After every ISA or loan-officer call, the agent fetches the recording, transcribes it with Whisper (falling back to the CRM's own transcript with timed retries), pulls the lead's full history of calls, SMS and email, and has GPT-4o write the call summary, update the right opportunity's fields across several pipelines, post notes to the contact and draft the personalised follow-up. A second endpoint drafts the nurture emails the CRM's sequences merge in, with draft history and engagement tracked in n8n data tables. Built under a hard constraint from the team lead: n8n workflows only, no custom service.",
          keyFeatures: [
            "72-node workflow with an idempotency gate, so duplicate webhook fires never double-write",
            "Transcript fallback chain: Whisper on the recording → CRM transcription API with 45 s and 60 s retries",
            "Multi-pipeline opportunity updates and nurture tracking tables, shipped as v2 → v6 over six weeks",
            "Kill switches and a pre-launch verification checklist for the live cut-over",
          ],
          metrics: {
            "Live since": "Oct 2026",
            Nodes: "72",
            Versions: "v2 → v6",
          },
          techStack: ["n8n", "OpenAI GPT-4o", "Whisper", "GoHighLevel API", "Webhooks", "n8n Data Tables"],
          builtWith: ["Claude Code", "OpenAI Codex"],
          diagram: "call-agent",
        },
        {
          id: "weekly-analyst",
          title: "Weekly Reporting Analyst",
          tagline:
            "Every Monday, each CRM client gets a plain-English report from their AI analyst. The AI never touches a number.",
          client: "Clients of a marketing agency",
          year: "2026",
          status: "pilot",
          summary:
            "A PHP 8 pipeline that pulls last week's and the prior week's contacts, conversations, appointments and opportunities from each client's GoHighLevel account, computes every delta in code, and hands the finished numbers to Claude or GPT-4o to narrate: what improved, what dipped, one thing to watch, next steps. Reports are stored in SQLite, idempotent per week, and delivered as branded email through the CRM's own workflows.",
          keyFeatures: [
            "Guardrail by design: the model only narrates JSON it is given; all maths happens in PHP",
            "Swappable AI provider (Claude default, OpenAI fallback) behind one interface, with a mock provider for zero-cost runs",
            "API keys encrypted at rest with libsodium, masked in the UI, never logged",
            "Endpoint shapes verified against the CRM's OpenAPI specs; fixtures for good, bad and partial weeks",
          ],
          techStack: ["PHP 8.2", "SQLite", "Anthropic API", "OpenAI API", "GoHighLevel API", "Cron"],
          builtWith: ["Claude Code"],
          diagram: "analyst",
        },
        {
          id: "stale-lead-reviver",
          title: "Stale Lead Reviver",
          tagline:
            "Finds dormant CRM contacts, drafts a personal nudge with AI, and waits for a human to approve.",
          client: "Agency sub-accounts",
          year: "2026",
          summary:
            "A Node.js and React app on Supabase that scans GoHighLevel sub-accounts every morning for contacts that have gone quiet, drafts a re-engagement SMS or email in the client's brand voice with GPT-4o, and queues it for approval. An inbound webhook classifies replies and tags the contact, so the sequence stops the moment a lead answers.",
          keyFeatures: [
            "Rules engine: inactivity window, pipeline stages, channel, brand voice and timezone per sub-account",
            "Human-in-the-loop approval queue; AI drafts clearly labelled, template fallback when no key is set",
            "Encrypted CRM keys, signed inbound webhooks, daily cron at 08:00",
          ],
          techStack: ["Node.js", "Express", "React", "Supabase", "PostgreSQL", "OpenAI API", "GoHighLevel API"],
          builtWith: ["Claude Code"],
          diagram: "reviver",
        },
        {
          id: "clipforge",
          title: "ClipForge",
          tagline:
            "Paste a YouTube link, get reviewed, captioned 9:16 clips ready for Shorts, TikTok and Reels.",
          client: "Personal product",
          year: "2026",
          status: "personal",
          summary:
            "An end-to-end media pipeline: yt-dlp downloads, FFmpeg extracts and chunks audio, Whisper returns word-level timestamps, and GPT scores every candidate moment against a content profile (podcast, business, comedy) with structured JSON output. Candidates are snapped to real word boundaries, deduped and ranked; you review them in a React dashboard, then FFmpeg exports 1080×1920 with burned-in word-by-word karaoke captions. Every API call is metered down to the cent.",
          keyFeatures: [
            "DB-backed job queue with retries, resume and crash recovery; the same video is never processed twice",
            "Usage page: spend by day, model, operation and video, about $0.37 per hour of source video",
            "Settings live in the database with env fallbacks; the Docker image bundles FFmpeg, yt-dlp and fonts",
          ],
          metrics: {
            "AI spend": "≈ $0.37 / hour of video",
            Export: "1080×1920, karaoke captions",
          },
          techStack: [
            "Node.js 20",
            "Express",
            "Prisma",
            "PostgreSQL",
            "React 18",
            "Vite",
            "Tailwind",
            "React Query",
            "FFmpeg",
            "yt-dlp",
            "OpenAI Whisper + GPT",
            "Docker",
          ],
          builtWith: ["Claude Code"],
          diagram: "clipforge",
        },
        {
          id: "review-aggregator",
          title: "Review Aggregator",
          tagline: "Google reviews, scraped through an n8n workflow and analysed in one dashboard.",
          client: "Marketing agency",
          year: "2026",
          status: "live",
          summary:
            "A pnpm monorepo with a React 19 front end and an Express 5 API on Postgres with Drizzle. The scraping itself runs as an n8n workflow that the app calls directly with the user's Apify token, so the web app stays thin while the heavy lifting runs in automation. Zod schemas and API hooks are generated from the OpenAPI spec, so client and server can never drift.",
          keyFeatures: [
            "OpenAPI-first: Orval generates typed hooks and Zod validators",
            "n8n and Apify do the scraping; the app orchestrates and analyses",
            "Runs on a shared VPS under a path prefix, behind nginx with pm2",
          ],
          techStack: ["React 19", "Vite", "Express 5", "PostgreSQL", "Drizzle", "Zod", "Orval", "n8n", "Apify", "pnpm workspaces"],
          builtWith: ["Replit Agent", "Claude Code"],
          diagram: "review-aggregator",
        },
      ],
    },
    {
      id: "automation",
      code: "AU",
      short: "Automation",
      title: "Automation",
      muted: "& integrations",
      description:
        "Glue that runs unattended: webhooks, schedulers, third-party APIs and CRM workflows that move data without a human in the loop.",
      layout: "cards",
      projects: [
        {
          id: "li-engine",
          title: "LinkedIn Outreach Engine",
          tagline:
            "Leads flow in from a CRM smartlist; a Playwright worker on a clean residential IP sends paced connection requests and follow-ups, detects replies and pushes warm leads back into the CRM.",
          keyFeatures: ["IP-drift auto-pause, daily caps, work-hours gating, jittered human pauses"],
          techStack: ["Node.js", "PostgreSQL", "Docker", "Playwright", "GoHighLevel webhooks"],
        },
        {
          id: "fedex-shipping",
          title: "FedEx × CRM shipping",
          tagline:
            "Pulls validated contacts from GoHighLevel, creates FedEx shipments with the right rate and signature options, prints labels and writes the tracking number back onto the contact. No CSVs, no address matching.",
          techStack: ["PHP", "FedEx Ship API (OAuth)", "GoHighLevel API"],
        },
        {
          id: "zoominfo-enrichment",
          title: "ZoomInfo lead enrichment",
          tagline:
            "Search and enrich people and companies across the full ZoomInfo field set, then import straight into the CRM with mapped custom fields, or export to XLSX.",
          techStack: ["PHP", "ZoomInfo API", "GoHighLevel API", "XLSX"],
        },
        {
          id: "make-smartsheet",
          title: "CRM → Smartsheet sync",
          tagline:
            "Make.com scenarios that receive contact data by webhook, search Smartsheet for an existing row and route to create or update, keeping an education programme's launch tracker in step with the CRM.",
          techStack: ["Make.com", "Webhooks", "Smartsheet API", "Router + Aggregator"],
        },
        {
          id: "esign-certificates",
          title: "E-signature → certificate pipeline",
          tagline:
            "A webhook listener that receives signed-document events from the CRM, extracts the data from the signed PDF, generates a watermarked Certificate of Completion and posts the result back into the CRM workflow.",
          techStack: ["PHP", "FPDF", "Webhooks", "GoHighLevel API"],
        },
        {
          id: "revshare-dashboard",
          title: "Affiliate revenue-share dashboard",
          tagline:
            "Tracks loan-officer subscriptions, computes a 65/35 revenue split every month, records payments, exports statements, and shows live per-account usage pulled from the CRM API.",
          techStack: ["PHP 8", "SQLite", "GoHighLevel API", "CSV export"],
        },
        {
          id: "watermark-pipeline",
          title: "Auto-watermark asset pipeline",
          tagline:
            "Upload once, get watermarked assets pushed into the CRM media library through the official OAuth marketplace flow. Built for a small VPS: in-memory processing, no disk churn.",
          techStack: ["Node.js", "Express", "sharp", "GoHighLevel OAuth"],
        },
        {
          id: "student-management",
          title: "Student Management System",
          tagline:
            "Enrollment, lifecycle stages, status tracking and notifications for a training business, built entirely in CRM workflows, custom fields and trigger pipelines.",
          techStack: ["GoHighLevel workflows", "Custom fields", "Trigger pipelines"],
        },
        {
          id: "arrivy-crm-integrations",
          title: "CRM connectors for a field-service platform",
          tagline:
            "At Arrivy: HubSpot, Salesforce, Follow Up Boss, Pipedrive, Zoho and Microsoft Dynamics connectors built as Google Cloud Functions with OAuth 2.0, syncing customers and jobs both ways into the platform's Python APIs.",
          keyFeatures: [
            "Plus Firebase Cloud Messaging push notifications, Pub/Sub and BigQuery jobs, and React / Redux front-end work",
          ],
          techStack: ["Python", "Google Cloud Functions", "OAuth 2.0", "Pub/Sub", "Firebase", "React", "Redux"],
        },
        {
          id: "chat-voice-agents",
          title: "AI chatbots & voice agents",
          tagline:
            "Prompt-engineered conversational agents that qualify leads, assign tags and hand off to a human, in chat and on the phone.",
          techStack: ["Conversation AI", "Voice AI", "Prompt engineering", "Conditional routing"],
        },
      ],
    },
    {
      id: "web-apps",
      code: "AP",
      short: "Web apps",
      title: "Web apps",
      muted: "React, Next.js & custom builds",
      description:
        "Production web applications, decoupled architectures and high-performance front ends, several of them started in Lovable and finished by hand.",
      layout: "ledger",
      projects: [
        {
          id: "fittrack-ai",
          title: "FitTrack AI",
          tagline:
            "Offline-first fitness PWA with a deterministic AI coach. 36 spec documents first, then built phase by phase with coding agents.",
          techStack: ["React", "TypeScript", "PWA", "IndexedDB", "Spec-driven"],
        },
        {
          id: "mern-gogrow",
          title: "Go Grow AI",
          tagline: "AI-powered platform interface",
          techStack: ["Next.js", "React", "Node.js", "Tailwind CSS"],
          links: { live: "https://gogrow.ai/" },
        },
        {
          id: "mern-stonewolf",
          title: "Stone Wolf AI",
          tagline: "Intelligent custom solutions",
          techStack: ["Next.js", "React", "MongoDB", "Express"],
          links: { live: "https://stonewolfai.com/" },
        },
        {
          id: "mern-faasthub",
          title: "Faast Dispatch",
          tagline: "Logistics & dispatch management",
          techStack: ["MERN stack", "Real-time API", "Dashboard UI"],
          links: { live: "https://faasthub.com/faastdispatch" },
        },
        {
          id: "mern-ongeschreven",
          title: "Ongeschreven Leven",
          tagline: "Custom web application",
          techStack: ["Next.js", "React", "Custom backend"],
          links: { live: "https://www.ongeschrevenleven.nl/" },
        },
        {
          id: "mern-tunntunn",
          title: "Tunn Tunn",
          tagline: "Modern front-end architecture, web and mobile",
          techStack: ["React", "Node.js", "API integration"],
          links: { live: "https://tunntunn.com/" },
        },
        {
          id: "tunntunn-app",
          title: "TunnTunn mobile app",
          tagline:
            "Community app on iOS and Android: stories, events, marketplace, chat and leaderboards. Upgraded to React Native 0.83 and the New Architecture; release 1.4.0 on both stores",
          techStack: ["React Native", "Redux Toolkit", "Firebase Auth", "AdMob", "AWS S3", "Codemagic CI"],
          links: {
            appStore: "https://apps.apple.com/us/app/id1574045168",
            playStore: "https://play.google.com/store/apps/details?id=com.yc.tunntunn",
          },
        },
        {
          id: "mern-uran",
          title: "Uran Limited",
          tagline: "Corporate portal & services",
          techStack: ["Next.js", "React", "Tailwind CSS"],
          links: { live: "https://uranlimited.com/" },
        },
      ],
    },
    {
      id: "wordpress",
      code: "WP",
      short: "WordPress",
      title: "WordPress",
      muted: "themes & plugins",
      description:
        "High-performance directory, marketplace and corporate themes built with scalable custom architecture, from two years leading a WordPress product team.",
      layout: "ledger",
      projects: [
        {
          id: "wp-adforest",
          title: "AdForest",
          tagline: "Advanced classified-ads theme, with APIs for the React Native and Flutter apps",
          techStack: ["WordPress", "PHP", "Custom post types", "REST API"],
          links: { live: "https://listing.adforestwp.com/" },
        },
        {
          id: "wp-exertio",
          title: "Exertio",
          tagline: "Freelance marketplace architecture",
          techStack: ["WordPress", "PHP", "WooCommerce", "React"],
          links: { live: "https://marketplace.exertiowp.com/home-8/" },
        },
        {
          id: "wp-dwt",
          title: "DWT Listing",
          tagline: "Directory & listing management",
          techStack: ["WordPress", "PHP", "Google Maps API", "AJAX"],
          links: { live: "https://listing.downtown-directory.com/" },
        },
        {
          id: "wp-carspot",
          title: "Carspot",
          tagline: "Automotive dealership solution",
          techStack: ["WordPress", "PHP", "Advanced search filters"],
          links: { live: "http://carspot.scriptsbundle.com/" },
        },
        {
          id: "wp-growwithgo",
          title: "Grow With Go",
          tagline: "Corporate web presence",
          techStack: ["WordPress", "Custom theme engine"],
          links: { live: "https://www.growwithgo.com/" },
        },
        {
          id: "wp-globalair",
          title: "Global Air Entertainment",
          tagline: "Entertainment platform",
          techStack: ["WordPress", "PHP", "Front-end optimisation"],
          links: { live: "https://globalairentertainment.com/" },
        },
        {
          id: "wp-massinteract",
          title: "Mass Interact",
          tagline: "Interactive digital experience",
          techStack: ["WordPress", "JavaScript", "Custom animations"],
          links: { live: "https://www.massinteract.com/" },
        },
        {
          id: "wp-biznesmarket",
          title: "BiznesMarket",
          tagline:
            "Ukrainian business portal on the AdForest theme: business-for-sale listings, franchises, crypto exchanges and loans, multilingual",
          techStack: ["WordPress", "AdForest child theme", "WPML", "WooCommerce", "Directory listings"],
          links: { live: "https://biznesmarket.com.ua/" },
        },
        {
          id: "wp-inchub",
          title: "IncHub",
          tagline:
            "UAE corporate-services advisory: service pages, a setup-cost calculator, consultation forms, case studies and a guides library",
          techStack: ["WordPress", "Gravity Forms", "Custom forms plugin", "WP Rocket"],
          links: { live: "https://inchub.ae/" },
        },
        {
          id: "wp-decorbox",
          title: "Decor Box Studio",
          tagline:
            "Dubai wedding decor: tiered packages, gallery, FAQs and enquiries, with a custom Elementor widgets plugin",
          techStack: ["WordPress", "Elementor Pro", "Custom widgets plugin", "WhatsApp chat"],
          links: { live: "https://decorboxstudio.com/" },
        },
        {
          id: "wp-bluekryon",
          title: "BlueKryon LLC",
          tagline:
            "Business-setup consultancy in Dubai: company formation, PRO and visa services, consultation funnels",
          techStack: ["WordPress", "BizMaster child theme", "Elementor", "Contact Form 7"],
          links: { live: "https://bluekryonllc.com/" },
        },
        {
          id: "wp-prism",
          title: "PRISM Events & Tours",
          tagline:
            "Event production company in Karachi: services, portfolio, event gallery, proposal requests and newsletter",
          techStack: ["WordPress", "Elementor", "Hello Elementor", "WhatsApp chat"],
          links: { live: "https://prismeventsandtours.com/" },
        },
      ],
    },
  ],
};
