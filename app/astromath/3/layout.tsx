import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AstroMath 3. osztály – Matematika tanulás játékkal | Plizio",
  description: "Tanuld a 3. osztályos matematikát űrutazással! Számolás 1000-ig, szorzótábla, osztás, mértékegységek, geometria – 9 sziget, checkpoint tesztek.",
  alternates: { canonical: "https://plizio.com/astromath/3/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
