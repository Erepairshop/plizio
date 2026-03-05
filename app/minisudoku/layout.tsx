import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mini Sudoku – 4×4 & 6×6 Sudoku Puzzle Game | Plizio",
  description: "Play Mini Sudoku with 10 expedition levels! Start with easy 4×4 grids and master challenging 6×6 puzzles. Free online sudoku for all ages.",
  keywords: [
    "mini sudoku", "4x4 sudoku", "6x6 sudoku", "sudoku puzzle online", "sudoku for kids",
    "free sudoku game", "Mini Sudoku kostenlos", "mini sudoku játék", "sudoku gratuit",
  ],
  openGraph: {
    title: "Mini Sudoku – Expedition Puzzle Game | Plizio",
    description: "10 levels of mini sudoku — from easy 4×4 to expert 6×6. Earn cards, use hints, climb the expedition!",
    url: "https://plizio.com/minisudoku/",
    siteName: "Plizio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mini Sudoku – Expedition Puzzle Game | Plizio",
    description: "Start with easy 4×4 grids and work your way up to expert 6×6 sudoku puzzles. Free online!",
    images: ["/icon-512.png"],
  },
  alternates: {
    canonical: "https://plizio.com/minisudoku/",
    languages: {
      hu: "https://plizio.com/minisudoku/",
      de: "https://plizio.com/minisudoku/",
      en: "https://plizio.com/minisudoku/",
      ro: "https://plizio.com/minisudoku/",
      "x-default": "https://plizio.com/minisudoku/",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  name: "Mini Sudoku",
  description:
    "A mini sudoku puzzle game with 10 expedition levels. Start with easy 4×4 grids and progress to challenging 6×6 sudoku. Free online sudoku for all ages.",
  url: "https://plizio.com/minisudoku/",
  genre: ["Puzzle", "Logic", "Sudoku"],
  inLanguage: ["en", "de", "hu", "ro"],
  operatingSystem: "Web Browser",
  applicationCategory: "Game",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function MiniSudokuLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
