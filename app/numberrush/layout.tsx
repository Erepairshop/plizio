import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Number Rush - Free Online Number Speed Game",
  description:
    "How fast can you count? Play Number Rush - tap numbers 1 to 25 in order as fast as you can! Free online speed game, no download needed.",
  keywords: [
    "number game",
    "speed game",
    "counting game",
    "tap game",
    "free browser game",
    "number rush game",
  ],
  openGraph: {
    title: "Number Rush - Free Number Speed Game | PLIZIO",
    description:
      "Tap numbers 1 to 25 as fast as you can! Free browser-based speed game.",
    url: "https://plizio.com/numberrush",
  },
  alternates: { canonical: "https://plizio.com/numberrush" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
