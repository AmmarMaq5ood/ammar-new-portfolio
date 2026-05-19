# Brand Font — Momo Trust Display

Drop the licensed brand font files here so the headings render in the
real typeface. The CSS `@font-face` in `src/app/globals.css` already
points at these exact filenames:

```
public/fonts/momo-trust-display.woff2   (preferred)
public/fonts/momo-trust-display.woff    (fallback)
```

Until the files are added, headings gracefully fall back to **Sora**
(loaded via `next/font`) so the build and design stay intact.

If your font ships as `.otf` / `.ttf`, convert to `woff2` (e.g. with
`fonttools` or an online converter) for best performance, or update the
`src:` URLs in `globals.css` to match your filenames.
