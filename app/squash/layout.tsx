import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Squash Arcade – Plizio",
  description: "Fast-paced squash arcade game with AI opponents. Test your reflexes against easy, normal, and hard AI in this top-view arcade classic.",
  alternates: {
    canonical: "https://plizio.com/squash/",
  },
  openGraph: {
    title: "Squash Arcade – Plizio",
    description: "Fast-paced squash arcade game. Challenge AI opponents and master the court.",
    url: "https://plizio.com/squash/",
    type: "website",
    images: [
      {
        url: "https://plizio.com/og/squash.png",
        width: 1200,
        height: 630,
        alt: "Squash Arcade Game",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
