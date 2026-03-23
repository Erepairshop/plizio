import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "AstroPhysik Klasse 7 – Mechanik & Optik | Plizio",
  description: "Lerne Physik Klasse 7: Geschwindigkeit, Newtons Gesetze, Arbeit, Leistung, Optik und Thermodynamik.",
  alternates: { canonical: "https://plizio.com/astro-physik/7/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
