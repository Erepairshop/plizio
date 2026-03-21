import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AstroSachkunde Klasse 2 – Sachunterricht Abenteuer | Plizio",
  description: "Sachkunde für Klasse 2: Ernährung, Lebensräume, Pflanzen, Wasser, Berufe und Sicherheit – als Weltraumabenteuer!",
  alternates: { canonical: "https://plizio.com/astro-sachkunde/2/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
