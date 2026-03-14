import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AstroMath 1. osztály – Matematika tanulás játékkal | Plizio",
  description: "Tanuld az 1. osztályos matematikát ûrutazással! Számolás, összeadás, kivonás – 9 sziget, 4 játéktípus, checkpoint tesztek.",
  alternates: { canonical: "https://plizio.com/astromath/1/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
