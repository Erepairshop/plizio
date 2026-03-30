import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Path Builder – Route Logic Puzzle | Plizio",
  description: "Build a path through checkpoints in order and reach the finish. 10 expedition levels with increasing challenge. Free logic puzzle game.",
  keywords: [
    "path builder game", "route puzzle", "logic grid game", "path puzzle online",
    "free logic game", "Pfad bauen Spiel", "útvonalépítő játék", "joc traseu logic",
  ],
  openGraph: {
    title: "Path Builder – Logic Puzzle Game | Plizio",
    description: "Build a route through checkpoints and reach the finish. 10 levels of logic challenge. Free browser game.",
    url: "https://plizio.com/pathbuilder/",
    siteName: "Plizio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Path Builder – Logic Puzzle Game | Plizio",
    description: "Build a route through checkpoints and reach the finish. Free online logic puzzle!",
    images: ["/icon-512.png"],
  },
  alternates: {
    canonical: "https://plizio.com/pathbuilder/",
    languages: {
      hu: "https://plizio.com/pathbuilder/",
      de: "https://plizio.com/pathbuilder/",
      en: "https://plizio.com/pathbuilder/",
      ro: "https://plizio.com/pathbuilder/",
      "x-default": "https://plizio.com/pathbuilder/",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  name: "Path Builder",
  description:
    "A logic puzzle game where you build a route through checkpoints in order and reach the finish. 10 expedition levels with increasing challenge.",
  url: "https://plizio.com/pathbuilder/",
  genre: ["Puzzle", "Logic", "Brain Training"],
  inLanguage: ["en", "de", "hu", "ro"],
  operatingSystem: "Web Browser",
  applicationCategory: "Game",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function PathBuilderLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
