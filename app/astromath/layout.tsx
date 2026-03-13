import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AstroMath – Mathe lernen mit Raketenreise | Plizio",
  description: "Lerne Mathematik der 1. Klasse spielerisch: Addition, Subtraktion, Vergleichen und fehlende Zahlen – auf einer spannenden Weltraumreise!",
  alternates: { canonical: "https://plizio.com/astromath/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
