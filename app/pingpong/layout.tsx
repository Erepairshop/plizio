import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Table Tennis – Plizio",
  description: "Play table tennis against AI! Beat your opponent in this classic ping pong game with neon graphics. Choose easy, medium, or hard difficulty.",
  alternates: { canonical: "https://plizio.com/pingpong/" },
  openGraph: {
    title: "Table Tennis – Plizio",
    description: "Play table tennis against AI! Beat your opponent in this classic ping pong game.",
    url: "https://plizio.com/pingpong/",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
