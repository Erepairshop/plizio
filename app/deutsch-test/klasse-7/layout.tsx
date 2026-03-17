import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Deutsch Test Klasse 7 – Kostenlose Übungen – Plizio",
  description: "Kostenlose Deutsch-Übungen für Klasse 7: Stilmittel, komplexe Grammatik und Textinterpretation üben.",
  alternates: { canonical: "https://plizio.com/deutsch-test/klasse-7/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
