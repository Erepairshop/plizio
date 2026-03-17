import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Mathe Tipps Klasse 3 – Übungen & Strategien – Plizio",
  description: "Die besten Mathe-Tipps für Klasse 3: Einmaleins, Sachaufgaben und schriftliches Rechnen einfach erklärt mit kostenlosen Aufgaben.",
  alternates: { canonical: "https://plizio.com/blog/mathe-tipps-klasse-3/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
