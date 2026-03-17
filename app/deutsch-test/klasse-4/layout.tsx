import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Deutsch Test Klasse 4 – Kostenlose Übungen – Plizio",
  description: "Kostenlose Deutsch-Übungen für Klasse 4: Grammatik, Rechtschreibung und Satzanalyse mit sofortigem Feedback.",
  alternates: { canonical: "https://plizio.com/deutsch-test/klasse-4/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
