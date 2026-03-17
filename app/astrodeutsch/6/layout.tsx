import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "AstroDeutsch Klasse 6 – Deutsch lernen auf Deutsch",
  description: "Lerne Deutsch spielerisch mit AstroDeutsch für Klasse 6. Passiv, Konjunktiv II, Stilmittel – interaktiv und motivierend!",
  alternates: { canonical: "https://plizio.com/astrodeutsch/6/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
