import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Mathe Test Klasse 8 – Kostenlose Übungsaufgaben – Plizio",
  description: "Kostenlose Mathe-Übungsaufgaben für Klasse 8: lineare Funktionen, Gleichungssysteme, Wahrscheinlichkeit und Geometrie.",
  alternates: { canonical: "https://plizio.com/mathe-test/klasse-8/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
