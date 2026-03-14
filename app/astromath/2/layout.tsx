import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AstroMath 2. osztály – Matematika tanulás játékkal | Plizio",
  description: "Tanuld a 2. osztályos matematikát ûrutazással! Összeadás/kivonás 100-ig, szorzótábla, osztás – 9 sziget, 4 játéktípus, checkpoint tesztek.",
  alternates: { canonical: "https://plizio.com/astromath/2/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
