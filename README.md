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
   `ammar-maqsood.vercel.app`.
3. Build settings are auto-detected (`next build`, output `.next`).
4. **Environment variables**: set `NEXT_PUBLIC_SITE_URL` to the public origin
   (`https://ammar-maqsood.vercel.app`, or the custom domain once attached). It
   drives `metadataBase`, so the Open Graph and Twitter image URLs in link
   previews are absolute. Without it the build falls back to Vercel's
   `VERCEL_PROJECT_PRODUCTION_URL`, which only exists when the project exposes
   system environment variables.

## Link previews and SEO

- `src/app/opengraph-image.png` and `twitter-image.png` (1200×630) are picked
  up by the Next.js file convention and emitted as `og:image` / `twitter:image`
  with size and alt text (`*.alt.txt`). Regenerate them from the scratch HTML
  if the portrait or title changes.
- `src/app/layout.tsx` sets titles, descriptions, the `profile` Open Graph
  type and a Person JSON-LD block. After deploying, paste the URL into
  WhatsApp, Slack or LinkedIn's post composer to confirm the card renders; most
  apps cache previews, so use a fresh link (add `?v=2`) when re-testing.

SEO routes are generated automatically: `/robots.txt`, `/sitemap.xml`.
Security headers are set in `next.config.ts`.
