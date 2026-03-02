import RelatedGames from "@/components/RelatedGames";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spot the Diff - Free Online Spot the Difference Game",
  description:
    "Can you spot the difference? Play Spot the Diff - a free online emoji-based observation game. Find the one emoji that's different! No download, play instantly.",
  keywords: [
    "spot the difference game",
    "find the difference",
    "observation game",
    "emoji game",
    "free browser game",
    "visual puzzle game",
  ],
  openGraph: {
    title: "Spot the Diff - Free Observation Game | PLIZIO",
    description:
      "Find the one emoji that's different! Free browser-based spot the difference game.",
    url: "https://plizio.com/spotdiff",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spot the Diff - Free Observation Game | PLIZIO",
    description: "Find the one emoji that's different! Free spot the difference game.",
    images: ["/icon-512.png"],
  },
  alternates: { canonical: "https://plizio.com/spotdiff" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  name: "Spot the Diff",
  description:
    "A free online emoji-based observation game. Find the one emoji that's different among a grid of similar emojis.",
  url: "https://plizio.com/spotdiff",
  genre: ["Puzzle", "Observation", "Brain Game"],
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
      <RelatedGames game="spotdiff" />
    </>
  );
}
