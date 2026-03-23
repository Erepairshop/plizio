import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AstroPhysik – Physik lernen | Plizio",
  description: "Lerne Physik spielerisch! Klasse 5–8 mit interaktiven Inseln und Quizzen.",
  alternates: { canonical: "https://plizio.com/astro-physik/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
