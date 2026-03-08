import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Maze Rush – Plizio",
  description: "Navigate through mazes before time runs out! A maze puzzle game with 10 expedition levels.",
  alternates: { canonical: "https://plizio.com/mazerush/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
