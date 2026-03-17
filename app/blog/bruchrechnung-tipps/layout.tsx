import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Bruchrechnung Tipps & Tricks – Einfach erklärt – Plizio",
  description: "Brüche verstehen, kürzen und rechnen – praktische Tipps für Schüler der Klasse 4–6 mit kostenlosen Übungen.",
  alternates: { canonical: "https://plizio.com/blog/bruchrechnung-tipps/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
