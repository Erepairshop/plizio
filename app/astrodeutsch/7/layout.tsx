import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "AstroDeutsch Klasse 7 – Deutsch lernen auf Deutsch",
  description: "Lerne Deutsch spielerisch mit AstroDeutsch für Klasse 7. Konjunktiv I, Passiv, Stilmittel – interaktiv und motivierend!",
  alternates: { canonical: "https://plizio.com/astrodeutsch/7/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
