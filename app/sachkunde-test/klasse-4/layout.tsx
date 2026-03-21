import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sachkunde Test Klasse 4 – Kostenlose Übungen – Plizio",
  description: "Kostenlose Sachkunde-Übungen für Klasse 4: Organe, Ökosysteme, Energie, Geographie und Klima interaktiv üben.",
  alternates: { canonical: "https://plizio.com/sachkunde-test/klasse-4/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
