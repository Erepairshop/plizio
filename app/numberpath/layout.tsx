import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Number Path – Connect Numbers Logic Puzzle | Plizio",
  description: "Draw a path connecting numbers in order and fill the entire grid. 10 expedition levels with increasing challenge. Free logic puzzle game.",
  keywords: [
    "number path game", "connect numbers puzzle", "logic grid game", "number puzzle online",
    "free logic game", "Zahlen verbinden Spiel", "szám útvonal játék", "joc numere logica",
  ],
  openGraph: {
    title: "Number Path – Logic Puzzle Game | Plizio",
    description: "Connect numbers in order and fill every cell. 10 levels of logic challenge. Free browser game.",
    url: "https://plizio.com/numberpath/",
    siteName: "Plizio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Number Path – Logic Puzzle Game | Plizio",
    description: "Draw a path connecting numbers in order and fill the entire grid. Free online logic puzzle!",
    images: ["/icon-512.png"],
  },
  alternates: {
    canonical: "https://plizio.com/numberpath/",
    languages: {
      hu: "https://plizio.com/numberpath/",
      de: "https://plizio.com/numberpath/",
      en: "https://plizio.com/numberpath/",
      ro: "https://plizio.com/numberpath/",
      "x-default": "https://plizio.com/numberpath/",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  name: "Number Path",
  description:
    "A logic puzzle game where you draw a path connecting numbers in order while filling every cell of the grid. 10 expedition levels with increasing challenge.",
  url: "https://plizio.com/numberpath/",
  genre: ["Puzzle", "Logic", "Brain Training"],
  inLanguage: ["en", "de", "hu", "ro"],
  operatingSystem: "Web Browser",
  applicationCategory: "Game",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function NumberPathLayout({ children }: { children: React.ReactNode }) {
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
