import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "AstroDeutsch Klasse 8 – Deutsch lernen auf Deutsch",
  description: "Lerne Deutsch spielerisch mit AstroDeutsch für Klasse 8. Konjunktiv I & II, Passiv, Stilmittel, Literaturepochen – interaktiv und motivierend!",
  alternates: { canonical: "https://plizio.com/astrodeutsch/8/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
