import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PLIZIO - Free Online Browser Games | Play Instantly",
  description:
    "Play free online browser games instantly – no download needed! Racing, quiz, memory, reflex and adventure games. Play on any device.",
  openGraph: {
    title: "PLIZIO - Free Online Browser Games",
    description:
      "Free online games, no download, no sign-up. Racing, quiz, memory and reflex games for all devices.",
    url: "https://plizio.com/en/",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "PLIZIO - Free Online Browser Games",
    description: "Free online games – play instantly in your browser!",
    images: ["/icon-512.png"],
  },
  alternates: {
    canonical: "https://plizio.com/en/",
    languages: {
      hu: "https://plizio.com/hu/",
      de: "https://plizio.com/de/",
      en: "https://plizio.com/en/",
      ro: "https://plizio.com/ro/",
      "x-default": "https://plizio.com/",
    },
  },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return children;
}
