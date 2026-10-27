# Ammar Maqsood — Portfolio

Editorial, single-page portfolio: orange hero, case studies with screenshots and
hand-drawn schematics, a "How I build" section on the AI-native workflow, and a
single typed content source.

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 ·
Framer Motion.

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

- [`src/data/portfolio.ts`](src/data/portfolio.ts) — name, title, contact,
  the "How I build" section (`process`: stats, steps, toolbelt, tool strip)
  and every category/project. Types in [`src/lib/types.ts`](src/lib/types.ts).
- Each category's `layout` picks how its projects render:
  `cases` (full case studies), `cards` (dark tile grid), `ledger` (one-line rows).
- A project with `images` shows a screenshot gallery; one with `diagram`
  shows the matching schematic from
  [`src/components/visuals/FlowDiagram.tsx`](src/components/visuals/FlowDiagram.tsx).
- Screenshots live under [`public/projects/`](public/projects/).
- Set `meta.portrait` to a path under `public/` to show a photo in the hero card.

## CV

The CV is an HTML document rendered to PDF with headless Chrome:

- Source: [`cv/Ammar-Maqsood-CV.html`](cv/Ammar-Maqsood-CV.html)
- Build: `powershell -ExecutionPolicy Bypass -File cv/build.ps1`
  (writes `cv/Ammar-Maqsood-CV.pdf` and copies it to `public/` for the
  "Download CV" links).

## Deploy to Vercel

This repo is zero-config for Vercel (framework auto-detected as Next.js).

1. Push the repo to GitHub.
2. On [vercel.com/new](https://vercel.com/new), import the repository, or
   point the existing `ammarmaqsood` project at this repo so the URL stays
   `ammarmaqsood.vercel.app`.
3. Build settings are auto-detected (`next build`, output `.next`).
4. **Environment variables** (optional): `NEXT_PUBLIC_SITE_URL` — leave unset
   to use the Vercel production domain; set it once a custom domain is attached.
   Drives `metadataBase`, Open Graph URLs, `robots.txt` and `sitemap.xml`.

SEO routes are generated automatically: `/robots.txt`, `/sitemap.xml`.
Security headers are set in `next.config.ts`.
