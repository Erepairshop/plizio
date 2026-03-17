import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "AstroDeutsch Klasse 5 – Deutsch lernen auf Deutsch",
  description: "Lerne Deutsch spielerisch mit AstroDeutsch für Klasse 5. Adjektive, Pronomen, Passiv – interaktiv und motivierend!",
  alternates: { canonical: "https://plizio.com/astrodeutsch/5/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
