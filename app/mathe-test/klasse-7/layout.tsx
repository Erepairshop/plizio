import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Mathe Test Klasse 7 – Kostenlose Übungsaufgaben – Plizio",
  description: "Kostenlose Mathe-Übungsaufgaben für Klasse 7: Algebra, lineare Gleichungen, Pythagoras und Statistik.",
  alternates: { canonical: "https://plizio.com/mathe-test/klasse-7/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
