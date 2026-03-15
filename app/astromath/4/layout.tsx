import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AstroMath 4. osztály – Matematika tanulás játékkal | Plizio",
  description:
    "Tanuld a 4. osztályos matematikát űrkalanddal! Nagy számok, szorzás, osztás, törtek, geometria — játékos missziókon át.",
  alternates: { canonical: "https://plizio.com/astromath/4/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
