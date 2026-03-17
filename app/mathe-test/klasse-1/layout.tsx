import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Mathe Test Klasse 1 – Kostenlose Übungsaufgaben – Plizio",
  description: "Kostenlose Mathe-Übungsaufgaben für Klasse 1: Zahlen bis 20, Addition, Subtraktion und Vergleiche interaktiv üben.",
  alternates: { canonical: "https://plizio.com/mathe-test/klasse-1/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
