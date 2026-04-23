import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "AstroDeutsch – Deutsch lernen wie ein Astronaut",
  description: "Lerne Deutsch spielerisch für Klasse 1–7. AstroDeutsch macht Grammatik, Rechtschreibung und Wortschatz zum Abenteuer!",
  alternates: {
    ...buildHreflangAlternates("https://plizio.com/astrodeutsch/"),
    canonical: "https://plizio.com/astrodeutsch/"
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
