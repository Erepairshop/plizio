import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AstroBiologie — Klasse 7",
  description: "Biologie lernen mit dem Weltraum-Abenteuer für Klasse 7 — Zellen, Ökologie, Immunsystem",
  alternates: { canonical: "https://plizio.com/astro-biologie/7/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
