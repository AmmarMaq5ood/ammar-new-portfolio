# Ammar Maqsood — Portfolio

High-performance, animated portfolio. Interactive WebGL hero, scroll-reveal
showcase sections, and a single typed content source.

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 ·
Framer Motion · React Three Fiber / drei · Lenis smooth scroll.

## Local development

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
npm start            # serve the production build
npm run lint
```

Node **>= 20** is required (see `.nvmrc` / `package.json` → `engines`).

## Editing content

All content lives in one typed file — no component edits needed to add work:

- [`src/data/portfolio.ts`](src/data/portfolio.ts) — name, title, branding, and
  every category/project. Types in [`src/lib/types.ts`](src/lib/types.ts).
- Each category's `uiTemplate` (`code-to-ui-reveal` | `terminal-data-flow` |
  `interactive-node-flowchart`) selects its themed visual automatically.

### Brand font

Headings use **Momo Trust Display**, falling back to **Sora** until the font
file is supplied. Drop `momo-trust-display.woff2` / `.woff` into
[`public/fonts/`](public/fonts/) — the `@font-face` is already wired.

### Contact details

Email, GitHub and LinkedIn live in `meta.contact` in
[`src/data/portfolio.ts`](src/data/portfolio.ts); the footer renders them.

## Deploy to Vercel

This repo is zero-config for Vercel (framework auto-detected as Next.js).

1. Push the repo to GitHub/GitLab/Bitbucket.
2. On [vercel.com/new](https://vercel.com/new), import the repository.
3. Build settings are auto-detected — no overrides needed:
   - Build command: `next build`
   - Output: `.next`
   - Install: `npm install`
4. **Environment variables** (Project → Settings → Environment Variables):
   - `NEXT_PUBLIC_SITE_URL` — *optional*. Leave unset to auto-use the Vercel
     production domain; set it to your custom domain once attached
     (e.g. `https://ammarmaqsood.com`). Drives `metadataBase`, Open Graph
     URLs, `robots.txt`, and `sitemap.xml`.
5. Deploy. Production builds run from the default branch (`master`).

### Or deploy from the CLI

```bash
npm i -g vercel
vercel          # preview deployment
vercel --prod   # production deployment
```

SEO routes are generated automatically: `/robots.txt`, `/sitemap.xml`.
Security headers (`X-Content-Type-Options`, `X-Frame-Options`,
`Referrer-Policy`, `Permissions-Policy`) are set in `next.config.ts`.
