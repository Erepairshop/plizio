import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "AstroPhysik Klasse 6 – Maschinen & Elektrizität | Plizio",
  description: "Lerne Physik Klasse 6: Einfache Maschinen, Druck, Elektrizität, Dichte und Energieübertragung.",
  alternates: { canonical: "https://plizio.com/astro-physik/6/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
