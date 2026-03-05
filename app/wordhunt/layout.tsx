import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Word Hunt – Find Hidden Words Puzzle Game | Plizio",
  description:
    "Search for hidden words in a letter grid before time runs out! 10 expedition levels with increasing difficulty. Free word puzzle game for all ages.",
  keywords: [
    "word hunt game", "word search puzzle", "find hidden words", "letter grid game",
    "free word game online", "Wörter suchen Spiel", "szókeresős játék", "joc cuvinte ascunse",
  ],
  openGraph: {
    title: "Word Hunt – Find Hidden Words | Plizio",
    description:
      "Hunt for hidden words in a letter grid! 10 levels of word search challenge. Free browser game.",
    url: "https://plizio.com/wordhunt/",
    siteName: "Plizio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Word Hunt – Find Hidden Words | Plizio",
    description: "Find all the hidden words before time runs out! Free online word search game.",
    images: ["/icon-512.png"],
  },
  alternates: {
    canonical: "https://plizio.com/wordhunt/",
    languages: {
      hu: "https://plizio.com/wordhunt/",
      de: "https://plizio.com/wordhunt/",
      en: "https://plizio.com/wordhunt/",
      ro: "https://plizio.com/wordhunt/",
      "x-default": "https://plizio.com/wordhunt/",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  name: "Word Hunt",
  description:
    "A word search puzzle game where you find hidden words in a letter grid before time runs out. 10 expedition levels with increasing difficulty.",
  url: "https://plizio.com/wordhunt/",
  genre: ["Puzzle", "Word Game", "Educational"],
  inLanguage: ["en", "de", "hu", "ro"],
  operatingSystem: "Web Browser",
  applicationCategory: "Game",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function WordHuntLayout({ children }: { children: React.ReactNode }) {
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
