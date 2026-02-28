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
  alternates: { canonical: "https://plizio.com/daily" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
