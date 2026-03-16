import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "AstroDeutsch Klasse 1 – Deutsch lernen auf Deutsch",
  description: "Lerne Deutsch spielerisch mit AstroDeutsch für Klasse 1. Buchstaben, Wörter, Sätze – interaktiv und motivierend!",
  alternates: { canonical: "https://plizio.com/astrodeutsch/1/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
