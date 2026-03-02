import RelatedGames from "@/components/RelatedGames";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kódex Expedition - Free Online Word Guessing Game",
  description:
    "Decode the secret code in Kódex Expedition! Free online word guessing game with 10 levels. Use badges and hints to reveal hidden words and phrases. No download needed.",
  keywords: [
    "word guessing game", "hangman game", "free word game", "secret code game",
    "kodex game", "letter guessing game", "browser word game", "expedition game",
    "Wörter raten Spiel", "Geheimcode Spiel", "szókirakó játék", "titkos kód játék",
  ],
  openGraph: {
    title: "Kódex Expedition - Free Word Guessing Game | PLIZIO",
    description:
      "Decode the secret code across 10 levels! Free browser-based word guessing game with badges and hints.",
    url: "https://plizio.com/kodex",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kódex Expedition - Free Word Guessing Game | PLIZIO",
    description: "10-level secret code expedition! Guess words and reveal hidden phrases.",
    images: ["/icon-512.png"],
  },
  alternates: { canonical: "https://plizio.com/kodex" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  name: "Kódex Expedition",
  description:
    "A 10-level word guessing game where you decode a secret code by revealing hidden words and phrases. Use badges as power-ups to help you along the way.",
  url: "https://plizio.com/kodex",
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
      <RelatedGames game="kodex" />
    </>
  );
}
