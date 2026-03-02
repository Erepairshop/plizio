import RelatedGames from "@/components/RelatedGames";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quick Pick - Free Online Quiz Game",
  description:
    "Test your knowledge with Quick Pick! Free online quiz game with 8 themes: General, Music, Football, Anime, Gaming, Geography, Social Media and Movies. Play instantly!",
  keywords: [
    "online quiz game",
    "free quiz",
    "trivia game",
    "music quiz",
    "football quiz",
    "anime quiz",
    "gaming quiz",
    "geography quiz",
    "movie quiz",
    "browser quiz game",
  ],
  openGraph: {
    title: "Quick Pick - Free Online Quiz Game | PLIZIO",
    description:
      "Test your knowledge with Quick Pick! Free quiz game with multiple themes. Play instantly.",
    url: "https://plizio.com/quickpick",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quick Pick - Free Online Quiz Game | PLIZIO",
    description: "Quiz your knowledge across 8 themes – music, football, anime and more!",
    images: ["/icon-512.png"],
  },
  alternates: { canonical: "https://plizio.com/quickpick" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  name: "Quick Pick",
  description:
    "A free online quiz game with 8 themes including General Knowledge, Music, Football, Anime, Gaming, Geography, Social Media and Movies.",
  url: "https://plizio.com/quickpick",
  genre: ["Quiz", "Trivia", "Educational"],
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
      <RelatedGames game="quickpick" />
    </>
  );
}
