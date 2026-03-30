import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galactic Deduction | Plizio",
  description: "Solve space-themed logic puzzles in this deduction grid game. Match explorers with their discoveries using clues.",
  alternates: {
    canonical: "https://plizio.com/deductiongrid2/",
  },
  openGraph: {
    title: "Galactic Deduction | Plizio",
    description: "Match explorers with their discoveries in this space-themed logic puzzle.",
    url: "https://plizio.com/deductiongrid2/",
    siteName: "Plizio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Galactic Deduction | Plizio",
    description: "Master the galactic logic grid.",
  },
};

export default function DeductionGrid2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
