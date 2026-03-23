import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "AstroPhysik Klasse 5 – Kräfte & Energie | Plizio",
  description: "Lerne Physik Klasse 5: Kräfte, Energie, Wärme, Licht, Schall und Magnetismus.",
  alternates: { canonical: "https://plizio.com/astro-physik/5/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
