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
  alternates: { canonical: "https://plizio.com/milliomos" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
