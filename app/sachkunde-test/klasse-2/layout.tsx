import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sachkunde Test Klasse 2 – Kostenlose Übungen – Plizio",
  description: "Kostenlose Sachkunde-Übungen für Klasse 2: Ernährung, Lebensräume, Pflanzen, Wasser und Berufe interaktiv üben.",
  alternates: { canonical: "https://plizio.com/sachkunde-test/klasse-2/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
