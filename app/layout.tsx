import type { Metadata, Viewport } from "next";
import { CursorFollower } from "@/components/cursor-follower";
import { LoadingScreen } from "@/components/loading-screen";
import { Providers } from "@/components/providers";
import { ScrollProgress } from "@/components/scroll-progress";
import { SiteNav } from "@/components/site-nav";
import { profile } from "@/lib/data";
import { siteConfig } from "@/lib/seo";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  keywords: [
    "Nishant Verma",
    "AI ML Engineer",
    "Generative AI Engineer",
    "LLM Engineer",
    "LangGraph",
    "LangChain",
    "RAG",
    "FastAPI",
    "Python Backend Developer"
  ],
  alternates: {
    canonical: siteConfig.url
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Nishant Verma AI/ML Engineer portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/opengraph-image"]
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "dark",
  themeColor: "#030409"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.roles,
    email: profile.email,
    url: siteConfig.url,
    sameAs: [profile.github, profile.linkedin],
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Large Language Models",
      "Retrieval Augmented Generation",
      "LangGraph",
      "LangChain",
      "FastAPI",
      "Python"
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>
          <LoadingScreen />
          <ScrollProgress />
          <CursorFollower />
          <SiteNav />
          {children}
        </Providers>
      </body>
    </html>
  );
}
