import RelatedGames from "@/components/RelatedGames";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daily Challenge - Free Daily Quiz Game",
  description:
    "Play the Daily Challenge! A new quiz every day - test your knowledge and compete for the best streak. Free online daily quiz game, no download needed.",
  keywords: [
    "daily quiz",
    "daily challenge game",
    "daily trivia",
    "free daily game",
    "quiz of the day",
    "daily brain game",
  ],
  openGraph: {
    title: "Daily Challenge - Free Daily Quiz | PLIZIO",
    description:
      "A new quiz challenge every day! Test your knowledge and build your streak.",
    url: "https://plizio.com/daily",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daily Challenge - Free Daily Quiz | PLIZIO",
    description: "A new quiz challenge every day! Test your knowledge and build your streak.",
    images: ["/icon-512.png"],
  },
  alternates: { canonical: "https://plizio.com/daily" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  name: "Daily Challenge",
  description:
    "A free online daily quiz game with a new challenge every day. Test your knowledge, compete for the best streak, and come back tomorrow for a fresh challenge.",
  url: "https://plizio.com/daily",
  genre: ["Quiz", "Daily", "Trivia"],
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
      <RelatedGames game="daily" />
    </>
  );
}
