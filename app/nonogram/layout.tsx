import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Nonogram – Plizio",
  description: "Solve pixel puzzles by filling in cells based on number clues! A classic nonogram game with 10 expedition levels.",
  alternates: { canonical: "https://plizio.com/nonogram/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
