import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "AstroDeutsch Klasse 3 – Deutsch lernen auf Deutsch",
  description: "Lerne Deutsch spielerisch mit AstroDeutsch für Klasse 3. Grammatik, Rechtschreibung, Aufsatz – interaktiv und motivierend!",
  alternates: { canonical: "https://plizio.com/astrodeutsch/3/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
