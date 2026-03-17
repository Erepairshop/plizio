import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Deutsch Test Klasse 8 – Kostenlose Übungen – Plizio",
  description: "Kostenlose Deutsch-Übungen für Klasse 8: Erörterung, Textanalyse und erweiterte Grammatik online testen.",
  alternates: { canonical: "https://plizio.com/deutsch-test/klasse-8/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
