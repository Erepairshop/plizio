import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Mathe Test Klasse 3 – Kostenlose Übungsaufgaben – Plizio",
  description: "Kostenlose Mathe-Übungsaufgaben für Klasse 3: Einmaleins, schriftliches Rechnen, Sachaufgaben und Geometrie.",
  alternates: { canonical: "https://plizio.com/mathe-test/klasse-3/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
