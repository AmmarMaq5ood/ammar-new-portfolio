/**
 * Canonical site origin, resolved in priority order:
 *  1. NEXT_PUBLIC_SITE_URL        — explicit override (custom domain)
 *  2. VERCEL_PROJECT_PRODUCTION_URL — Vercel production domain (auto)
 *  3. localhost                   — local dev
 *
 * Used for metadataBase, robots and sitemap so social cards and SEO
 * URLs are absolute and correct in every environment.
 */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");

  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;

  return "http://localhost:3000";
}

export const siteUrl = resolveSiteUrl();
