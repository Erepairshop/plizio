import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Mathe Test Klasse 2 – Kostenlose Übungsaufgaben – Plizio",
  description: "Kostenlose Mathe-Übungsaufgaben für Klasse 2: Zahlenraum 100, schriftliche Addition und das kleine Einmaleins.",
  alternates: { canonical: "https://plizio.com/mathe-test/klasse-2/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
