import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { portfolio } from "@/data/portfolio";

const inter = Inter({
  variable: "--font-body-inter",
  subsets: ["latin"],
  display: "swap",
});

// Premium geometric display face — used as the graceful fallback
// for "Momo Trust Display" until the brand font file is supplied.
const sora = Sora({
  variable: "--font-display-fallback",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const { name, title } = portfolio.meta;

export const metadata: Metadata = {
  title: `${name} — ${title}`,
  description:
    "Full-stack developer & automation expert crafting high-performance WordPress, MERN / Next.js, and Launchpad CRM automation solutions.",
  openGraph: {
    title: `${name} — ${title}`,
    description:
      "High-performance WordPress, MERN / Next.js, and Launchpad automation engineering.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0118",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-bg text-fg selection:bg-pink">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
