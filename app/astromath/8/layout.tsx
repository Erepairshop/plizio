import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AstroMath 8. osztály – Matematika tanulás játékkal | Plizio",
  description:
    "Tanuld a 8. osztályos matematikát űrkalanddal! Négyzetgyökök, másodfokú egyenletek, egyenletrendszerek, lineáris függvények, valószínűségszámítás, statisztika, transzformációk — játékos missziókon át.",
  alternates: { canonical: "https://plizio.com/astromath/8/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
