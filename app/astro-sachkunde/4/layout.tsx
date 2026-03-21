import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AstroSachkunde Klasse 4 – Sachunterricht Abenteuer | Plizio",
  description: "Sachkunde für Klasse 4: Organe, Ökosysteme, Energie, Stromkreis, Geographie und Klima – als Weltraumabenteuer!",
  alternates: { canonical: "https://plizio.com/astro-sachkunde/4/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
