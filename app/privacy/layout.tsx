import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Datenschutz & Privatsphäre – Plizio",
  description: "Datenschutzerklärung und Privatsphäre-Informationen für Plizio. Wir nehmen den Schutz Ihrer Daten ernst.",
  alternates: {
    ...buildHreflangAlternates("https://plizio.com/privacy/"),
    canonical: "https://plizio.com/privacy/"
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
