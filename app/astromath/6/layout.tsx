import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AstroMath 6. osztály – Matematika tanulás játékkal | Plizio",
  description:
    "Tanuld a 6. osztályos matematikát űrkalanddal! Negatív számok, törtek, százalékszámítás, algebra, geometria, statisztika — játékos missziókon át.",
  alternates: { canonical: "https://plizio.com/astromath/6/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
