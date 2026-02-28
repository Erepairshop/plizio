import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Memory Flash - Free Online Memory Game",
  description:
    "Train your brain with Memory Flash! Free online memory game - remember the pattern and repeat it. 5 rounds of increasing difficulty. Play instantly in your browser.",
  keywords: [
    "memory game",
    "brain training game",
    "free memory game",
    "pattern memory",
    "brain game online",
    "memory test",
  ],
  openGraph: {
    title: "Memory Flash - Free Online Memory Game | PLIZIO",
    description:
      "Train your brain! Remember patterns and repeat them in this free memory game.",
    url: "https://plizio.com/memoryflash",
  },
  alternates: { canonical: "https://plizio.com/memoryflash" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
