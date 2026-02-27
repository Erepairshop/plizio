import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Word Scramble - Free Online Word Puzzle Game",
  description:
    "Unscramble the letters to find the word! Play Word Scramble - a free online word puzzle game. Test your vocabulary, no download needed.",
  keywords: [
    "word scramble game",
    "word puzzle game",
    "anagram game",
    "unscramble game",
    "free word game",
    "browser word game",
  ],
  openGraph: {
    title: "Word Scramble - Free Word Puzzle Game | PLIZIO",
    description:
      "Unscramble the letters to find the hidden word! Free browser-based word game.",
    url: "https://plizio.com/wordscramble",
  },
  alternates: { canonical: "https://plizio.com/wordscramble" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
