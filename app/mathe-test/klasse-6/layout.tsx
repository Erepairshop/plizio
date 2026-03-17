import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Mathe Test Klasse 6 – Kostenlose Übungsaufgaben – Plizio",
  description: "Kostenlose Mathe-Übungsaufgaben für Klasse 6: negative Zahlen, Verhältnisse, Prozentrechnung und Geometrie.",
  alternates: { canonical: "https://plizio.com/mathe-test/klasse-6/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
