import type { Metadata, Viewport } from "next";
import { Archivo, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { portfolio } from "@/data/portfolio";
import { siteUrl } from "@/lib/site";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const { name, title } = portfolio.meta;

const description =
  "AI-native full-stack developer. Production AI agents, automations and Node.js / React products, built with Claude Code, Codex and Cursor and shipped with CI.";

const { contact } = portfolio.meta;

/** Person schema for search engines and link previews. */
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name,
  jobTitle: title,
  description,
  url: siteUrl,
  email: `mailto:${contact.email}`,
  sameAs: [contact.linkedin, contact.github].filter(Boolean),
  knowsAbout: [
    "AI agents",
    "n8n",
    "Make.com",
    "Claude Code",
    "Node.js",
    "React",
    "Next.js",
    "TypeScript",
    "PHP",
    "Python",
    "GoHighLevel",
    "WordPress",
  ],
  address: { "@type": "PostalAddress", addressLocality: "Lahore", addressCountry: "PK" },
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${name} — ${title}`,
    template: `%s — ${name}`,
  },
  description,
  alternates: { canonical: "/" },
  keywords: [
    name,
    "AI-native developer",
    "Full-Stack Developer",
    "AI agents",
    "n8n",
    "Make.com",
    "Claude Code",
    "Node.js",
    "React",
    "Next.js",
    "GoHighLevel automation",
    "WordPress Developer",
  ],
  authors: [{ name }],
  openGraph: {
    title: `${name} — ${title}`,
    description,
    url: "/",
    siteName: name,
    type: "profile",
    locale: "en_US",
    firstName: name.split(" ")[0],
    lastName: name.split(" ").slice(1).join(" "),
  },
  twitter: {
    card: "summary_large_image",
    title: `${name} — ${title}`,
    description,
  },
  applicationName: name,
  creator: name,
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#f1521c",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${inter.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-paper text-ink">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
