import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sachkunde Test Klasse 3 – Kostenlose Übungen – Plizio",
  description: "Kostenlose Sachkunde-Übungen für Klasse 3: Körperaufbau, Tierklassen, Botanik, Wetter und Technik interaktiv üben.",
  alternates: { canonical: "https://plizio.com/sachkunde-test/klasse-3/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
