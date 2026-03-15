import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AstroMath 5. osztály – Matematika tanulás játékkal | Plizio",
  description:
    "Tanuld az 5. osztályos matematikát űrkalanddal! Nagy számok, törtek, tizedes számok, geometria, mértékegységek — játékos missziókon át.",
  alternates: { canonical: "https://plizio.com/astromath/5/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
