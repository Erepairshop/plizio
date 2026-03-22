import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AstroBiologie — Klasse 8",
  description: "Biologie lernen mit dem Weltraum-Abenteuer für Klasse 8 — Genetik, Hormone, Reproduktion",
  alternates: { canonical: "https://plizio.com/astro-biologie/8/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
