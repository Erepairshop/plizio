import RelatedGames from "@/components/RelatedGames";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Memory Flash - Free Online Memory Game",
  description:
    "Train your brain with Memory Flash! Free online memory game - remember the pattern and repeat it. 5 rounds of increasing difficulty. Play instantly in your browser.",
  keywords: [
    "memory game",
    "brain training game",
    "free memory game",
    "pattern memory",
    "brain game online",
    "memory test",
  ],
  openGraph: {
    title: "Memory Flash - Free Online Memory Game | PLIZIO",
    description:
      "Train your brain! Remember patterns and repeat them in this free memory game.",
    url: "https://plizio.com/memoryflash",
  },
  twitter: {
    card: "summary_large_image",
    title: "Memory Flash - Free Online Memory Game | PLIZIO",
    description: "Remember the pattern and repeat it! Free brain training memory game.",
    images: ["/icon-512.png"],
  },
  alternates: { canonical: "https://plizio.com/memoryflash" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  name: "Memory Flash",
  description:
    "A free online memory game where you memorize flashing patterns and repeat them. 5 rounds of increasing difficulty to train your brain.",
  url: "https://plizio.com/memoryflash",
  genre: ["Memory", "Brain Game", "Puzzle"],
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
      <RelatedGames game="memoryflash" />
    </>
  );
}
