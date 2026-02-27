import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quick Pick - Free Online Quiz Game",
  description:
    "Test your knowledge with Quick Pick! Free online quiz game with General, K-Pop, Football and Anime themes. Play instantly in your browser - no download needed.",
  keywords: [
    "online quiz game",
    "free quiz",
    "trivia game",
    "k-pop quiz",
    "football quiz",
    "anime quiz",
    "browser quiz game",
  ],
  openGraph: {
    title: "Quick Pick - Free Online Quiz Game | PLIZIO",
    description:
      "Test your knowledge with Quick Pick! Free quiz game with multiple themes. Play instantly.",
    url: "https://plizio.com/quickpick",
  },
  alternates: { canonical: "https://plizio.com/quickpick" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
