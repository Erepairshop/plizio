import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Deutsch Test Klasse 5 – Kostenlose Übungen – Plizio",
  description: "Kostenlose Deutsch-Übungen für Klasse 5: Grammatik, Aufsatz und Textverständnis interaktiv und kostenlos üben.",
  alternates: { canonical: "https://plizio.com/deutsch-test/klasse-5/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
