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
  alternates: { canonical: "https://plizio.com/quickpick" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
