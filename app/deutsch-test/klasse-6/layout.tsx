import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Deutsch Test Klasse 6 – Kostenlose Übungen – Plizio",
  description: "Kostenlose Deutsch-Übungen für Klasse 6: Zeitformen, Kasus, Satzgefüge und Textanalyse online üben.",
  alternates: { canonical: "https://plizio.com/deutsch-test/klasse-6/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
