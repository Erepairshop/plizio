import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AstroSachkunde Klasse 1 – Sachunterricht Abenteuer | Plizio",
  description: "Sachkunde für Klasse 1: Körper, Sinne, Tiere, Jahreszeiten, Familie und Verkehr – als Weltraumabenteuer!",
  alternates: { canonical: "https://plizio.com/astro-sachkunde/1/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
