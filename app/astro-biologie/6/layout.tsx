import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AstroBiologie — Klasse 6",
  description: "Biologie lernen mit dem Weltraum-Abenteuer für Klasse 6 — Wirbellose, Ökosystem, Kreislauf",
  alternates: { canonical: "https://plizio.com/astro-biologie/6/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
