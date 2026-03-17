import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Deutsch Test Klasse 1 – Kostenlose Übungen – Plizio",
  description: "Kostenlose Deutsch-Übungen für Klasse 1: Buchstaben, einfache Wörter und erste Sätze interaktiv üben.",
  alternates: { canonical: "https://plizio.com/deutsch-test/klasse-1/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
