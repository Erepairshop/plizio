import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "AstroRomână Clasa 4 – Plizio",
  description: "Exersează analiza și compunerea cu AstroRomână! Joc educativ pentru Clasa 4.",
  alternates: {
    ...buildHreflangAlternates("https://plizio.com/astroromana/4/"),
    canonical: "https://plizio.com/astroromana/4/"
  },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
