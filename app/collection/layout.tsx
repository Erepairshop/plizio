import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Card Collection - Collect Game Rewards",
  description:
    "View and manage your card collection on PLIZIO. Earn cards by playing games, collect rare and legendary cards. Build your ultimate collection!",
  robots: { index: false, follow: false },
  keywords: [
    "game card collection",
    "collect game rewards",
    "game achievements",
    "card collector",
  ],
  openGraph: {
    title: "Card Collection | PLIZIO",
    description:
      "Collect rare cards by playing games. Build your ultimate collection!",
    url: "https://plizio.com/collection/",
  },
  twitter: {
    card: "summary",
    title: "Card Collection | PLIZIO",
    description: "Collect rare cards by playing games. Build your ultimate collection!",
    images: ["/icon-512.png"],
  },
  alternates: { canonical: "https://plizio.com/collection/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
