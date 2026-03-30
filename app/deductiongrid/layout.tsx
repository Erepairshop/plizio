import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Deduction Grid – Logic Puzzle Game | Plizio",
  description: "Use clues, compare suspects and solve 10 deduction grid levels in your browser.",
  alternates: {
    canonical: "https://plizio.com/deductiongrid/",
  },
  openGraph: {
    title: "Deduction Grid – Logic Puzzle Game | Plizio",
    description: "A clean deduction puzzle with clue-based matching and 10 browser levels.",
    url: "https://plizio.com/deductiongrid/",
    siteName: "Plizio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deduction Grid – Logic Puzzle Game | Plizio",
    description: "Solve deduction puzzles and match every clue correctly across 10 levels.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  name: "Deduction Grid",
  description: "Use logic clues to match suspects and locations across 10 browser-based levels.",
  url: "https://plizio.com/deductiongrid/",
  genre: ["Puzzle", "Logic", "Deduction"],
  inLanguage: ["en", "de", "hu", "ro"],
  operatingSystem: "Web Browser",
  applicationCategory: "Game",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
