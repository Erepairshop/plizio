import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "AstroPhysik Klasse 8 – Atom & Moderne Physik | Plizio",
  description: "Lerne Physik Klasse 8: Elektrizität, Elektromagnetismus, Atomphysik, Relativität und Quantenphysik.",
  alternates: { canonical: "https://plizio.com/astro-physik/8/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
