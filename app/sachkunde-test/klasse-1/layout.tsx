import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sachkunde Test Klasse 1 – Kostenlose Übungen – Plizio",
  description: "Kostenlose Sachkunde-Übungen für Klasse 1: Körper, Sinne, Tiere, Jahreszeiten und Familie interaktiv üben.",
  alternates: { canonical: "https://plizio.com/sachkunde-test/klasse-1/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
