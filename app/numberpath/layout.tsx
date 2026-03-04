import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Number Path – Connect Numbers Logic Puzzle | Plizio",
  description: "Draw a path connecting numbers in order and fill the entire grid. 10 expedition levels with increasing challenge. Free logic puzzle game.",
  alternates: {
    canonical: "https://plizio.com/numberpath/",
    languages: {
      "hu": "https://plizio.com/numberpath/",
      "de": "https://plizio.com/numberpath/",
      "en": "https://plizio.com/numberpath/",
      "ro": "https://plizio.com/numberpath/",
      "x-default": "https://plizio.com/numberpath/",
    },
  },
  openGraph: {
    title: "Number Path – Logic Puzzle Game",
    description: "Connect numbers in order and fill every cell. 10 levels of logic challenge.",
    url: "https://plizio.com/numberpath/",
    siteName: "Plizio",
    type: "website",
  },
};

export default function NumberPathLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
