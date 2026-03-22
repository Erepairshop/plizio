import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AstroBiologie — Biologie Lernspiel Klasse 5-8 | Plizio",
  description: "Interaktives Biologie-Lernspiel für Klasse 5-8. Erkunde Planeten und entdecke Wirbeltiere, Pflanzen, Ökosysteme, Genetik und mehr!",
  alternates: { canonical: "https://plizio.com/astro-biologie/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
