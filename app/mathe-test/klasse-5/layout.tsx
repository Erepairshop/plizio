import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Mathe Test Klasse 5 – Kostenlose Übungsaufgaben – Plizio",
  description: "Kostenlose Mathe-Übungsaufgaben für Klasse 5: Bruchrechnung, Dezimalzahlen, Prozent und Flächenberechnung.",
  alternates: { canonical: "https://plizio.com/mathe-test/klasse-5/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
