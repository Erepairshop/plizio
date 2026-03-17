import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "AstroDeutsch Klasse 2 – Deutsch lernen auf Deutsch",
  description: "Lerne Deutsch spielerisch mit AstroDeutsch für Klasse 2. Nomen, Verben, Adjektive – interaktiv und motivierend!",
  alternates: { canonical: "https://plizio.com/astrodeutsch/2/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
