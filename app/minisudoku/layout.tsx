import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mini Sudoku – 4×4 & 6×6 Sudoku Puzzle Game | Plizio",
  description: "Play Mini Sudoku with 10 expedition levels! Start with easy 4×4 grids and master challenging 6×6 puzzles. Free online sudoku for all ages.",
  alternates: {
    canonical: "https://plizio.com/minisudoku/",
    languages: {
      "hu": "https://plizio.com/minisudoku/",
      "de": "https://plizio.com/minisudoku/",
      "en": "https://plizio.com/minisudoku/",
      "ro": "https://plizio.com/minisudoku/",
      "x-default": "https://plizio.com/minisudoku/",
    },
  },
  openGraph: {
    title: "Mini Sudoku – Expedition Puzzle Game",
    description: "10 levels of mini sudoku — from easy 4×4 to expert 6×6. Earn cards, use hints, climb the expedition!",
    url: "https://plizio.com/minisudoku/",
    siteName: "Plizio",
    type: "website",
  },
};

export default function MiniSudokuLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
