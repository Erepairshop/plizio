import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reflex Grid - Free Online Reaction Speed Game",
  description:
    "How fast are your reflexes? Play Reflex Grid - a free online reaction speed game. Tap the highlighted tiles as fast as you can! No download, play instantly.",
  keywords: [
    "reaction game",
    "reflex game",
    "speed test game",
    "reaction time test",
    "free reflex game",
    "browser reaction game",
  ],
  openGraph: {
    title: "Reflex Grid - Free Reaction Speed Game | PLIZIO",
    description:
      "Test your reflexes! Tap highlighted tiles as fast as you can in this free browser game.",
    url: "https://plizio.com/reflexgrid",
  },
  alternates: { canonical: "https://plizio.com/reflexgrid" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
