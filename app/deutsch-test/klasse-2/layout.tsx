import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Deutsch Test Klasse 2 – Kostenlose Übungen – Plizio",
  description: "Kostenlose Deutsch-Übungen für Klasse 2: Rechtschreibung, Wortarten und einfache Grammatik spielerisch üben.",
  alternates: { canonical: "https://plizio.com/deutsch-test/klasse-2/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
