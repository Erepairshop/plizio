import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AstroBiologie — Klasse 5",
  description: "Biologie lernen mit dem Weltraum-Abenteuer für Klasse 5",
  alternates: { canonical: "https://plizio.com/astro-biologie/5/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
