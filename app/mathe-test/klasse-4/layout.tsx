import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Mathe Test Klasse 4 – Kostenlose Übungsaufgaben – Plizio",
  description: "Kostenlose Mathe-Übungsaufgaben für Klasse 4: schriftliche Multiplikation, Division, Brüche und Geometrie.",
  alternates: { canonical: "https://plizio.com/mathe-test/klasse-4/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
