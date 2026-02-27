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
  alternates: { canonical: "https://plizio.com/spotdiff" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
