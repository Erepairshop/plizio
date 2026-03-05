import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sequence Rush – Memory Pattern Game | Plizio",
  description:
    "Watch the sequence, remember the pattern, then repeat it! 10 expedition levels of increasing memory challenge. Free online memory game.",
  keywords: [
    "sequence memory game", "pattern memory game", "simon says game", "memory challenge",
    "free brain game online", "Gedächtnisspiel kostenlos", "memória játék", "joc memorie gratuit",
  ],
  openGraph: {
    title: "Sequence Rush – Memory Pattern Game | Plizio",
    description:
      "Watch the sequence and repeat it! 10 levels of memory pattern challenge. Free browser game.",
    url: "https://plizio.com/sequencerush/",
    siteName: "Plizio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sequence Rush – Memory Pattern Game | Plizio",
    description: "Can you remember the sequence? Watch, memorize, and repeat! Free online game.",
    images: ["/icon-512.png"],
  },
  alternates: {
    canonical: "https://plizio.com/sequencerush/",
    languages: {
      hu: "https://plizio.com/sequencerush/",
      de: "https://plizio.com/sequencerush/",
      en: "https://plizio.com/sequencerush/",
      ro: "https://plizio.com/sequencerush/",
      "x-default": "https://plizio.com/sequencerush/",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  name: "Sequence Rush",
  description:
    "A memory pattern game where you watch a sequence of moves and repeat them in order. 10 expedition levels with increasingly long sequences.",
  url: "https://plizio.com/sequencerush/",
  genre: ["Puzzle", "Memory", "Brain Training"],
  inLanguage: ["en", "de", "hu", "ro"],
  operatingSystem: "Web Browser",
  applicationCategory: "Game",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function SequenceRushLayout({ children }: { children: React.ReactNode }) {
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
