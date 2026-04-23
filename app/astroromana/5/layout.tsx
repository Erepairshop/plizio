import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "AstroRomână Clasa 5 – Plizio",
  description: "Descoperă fonetica și morfologia cu AstroRomână! Joc educativ pentru Clasa 5.",
  alternates: {
    ...buildHreflangAlternates("https://plizio.com/astroromana/5/"),
    canonical: "https://plizio.com/astroromana/5/"
  },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
