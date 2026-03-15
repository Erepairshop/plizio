import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AstroMath 7. osztály – Matematika tanulás játékkal | Plizio",
  description:
    "Tanuld a 7. osztályos matematikát űrkalanddal! Hatványok, algebra, egyenletek, egyenlőtlenségek, háromszögek, Pitagorasz-tétel, kör, statisztika — játékos missziókon át.",
  alternates: { canonical: "https://plizio.com/astromath/7/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
