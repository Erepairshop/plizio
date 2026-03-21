import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AstroSachkunde – Sachunterricht Abenteuer Klasse 1–4 | Plizio",
  description: "Entdecke Sachkunde im Weltraum! Interaktive Übungen zu Natur, Tiere, Körper, Technik und Geographie für Klasse 1 bis 4.",
  alternates: { canonical: "https://plizio.com/astro-sachkunde/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
