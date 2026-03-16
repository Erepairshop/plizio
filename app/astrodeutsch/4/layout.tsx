import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "AstroDeutsch Klasse 4 – Deutsch lernen auf Deutsch",
  description: "Lerne Deutsch spielerisch mit AstroDeutsch für Klasse 4. Kasus, Zeitformen, Satzglieder – interaktiv und motivierend!",
  alternates: { canonical: "https://plizio.com/astrodeutsch/4/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
