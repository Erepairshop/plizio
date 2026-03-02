import RelatedGames from "@/components/RelatedGames";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Milliomos - Free Online Millionaire Quiz Game",
  description:
    "Can you win $1,000,000? Play Milliomos - a free online Millionaire-style quiz game with lifelines. 15 questions, escalating prizes! No download needed.",
  keywords: [
    "millionaire game",
    "quiz game",
    "trivia game",
    "who wants to be a millionaire",
    "free quiz game",
    "browser quiz game",
  ],
  openGraph: {
    title: "Milliomos - Free Millionaire Quiz Game | PLIZIO",
    description:
      "Answer 15 questions to win $1,000,000! Free browser-based Millionaire quiz game with lifelines.",
    url: "https://plizio.com/milliomos",
  },
  twitter: {
    card: "summary_large_image",
    title: "Milliomos - Free Millionaire Quiz Game | PLIZIO",
    description: "Answer 15 questions to win $1,000,000! Free Millionaire quiz with lifelines.",
    images: ["/icon-512.png"],
  },
  alternates: { canonical: "https://plizio.com/milliomos" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  name: "Milliomos",
  description:
    "A free online Millionaire-style quiz game with 15 questions and lifelines. Answer correctly to win $1,000,000!",
  url: "https://plizio.com/milliomos",
  genre: ["Quiz", "Trivia"],
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
      <RelatedGames game="milliomos" />
    </>
  );
}
