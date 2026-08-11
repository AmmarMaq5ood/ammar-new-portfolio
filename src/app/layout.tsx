import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Instrument_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { portfolio } from "@/data/portfolio";
import { siteUrl } from "@/lib/site";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
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
  "Full-stack developer & automation expert crafting high-performance WordPress, MERN / Next.js, and GHL CRM automation solutions.";

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
    "Full-Stack Developer",
    "WordPress Developer",
    "Next.js",
    "MERN",
    "GHL Automation",
    "CRM Automation",
  ],
  authors: [{ name }],
  openGraph: {
    title: `${name} — ${title}`,
    description:
      "High-performance WordPress, MERN / Next.js, and GHL automation engineering.",
    url: "/",
    siteName: name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${name} — ${title}`,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#f6f4fa",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${instrument.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-paper text-ink">{children}</body>
    </html>
  );
}
