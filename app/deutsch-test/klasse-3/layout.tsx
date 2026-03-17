import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Deutsch Test Klasse 3 – Kostenlose Übungen – Plizio",
  description: "Kostenlose Deutsch-Übungen für Klasse 3: Nomen, Verben, Adjektive und Satzglieder interaktiv üben.",
  alternates: { canonical: "https://plizio.com/deutsch-test/klasse-3/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
