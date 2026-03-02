import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Word Scramble - Free Online Word Puzzle Game",
  description:
    "Unscramble the letters to find the word! Play Word Scramble - a free online word puzzle game. Test your vocabulary, no download needed.",
  keywords: [
    "word scramble game",
    "word puzzle game",
    "anagram game",
    "unscramble game",
    "free word game",
    "browser word game",
  ],
  openGraph: {
    title: "Word Scramble - Free Word Puzzle Game | PLIZIO",
    description:
      "Unscramble the letters to find the hidden word! Free browser-based word game.",
    url: "https://plizio.com/wordscramble",
  },
  twitter: {
    card: "summary_large_image",
    title: "Word Scramble - Free Word Puzzle Game | PLIZIO",
    description: "Unscramble letters to find the word! Free browser word puzzle game.",
    images: ["/icon-512.png"],
  },
  alternates: { canonical: "https://plizio.com/wordscramble" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  name: "Word Scramble",
  description:
    "A free online word puzzle game where you unscramble letters to find the hidden word. Test your vocabulary instantly in your browser.",
  url: "https://plizio.com/wordscramble",
  genre: ["Word Game", "Puzzle", "Educational"],
  inLanguage: ["en", "de", "hu", "ro"],
  operatingSystem: "Web Browser",
  applicationCategory: "Game",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
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
