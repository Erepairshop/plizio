import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "AstroRomână Clasa 6 – Plizio",
  description: "Explorează stilistica și figurile de stil cu AstroRomână! Joc educativ pentru Clasa 6.",
  alternates: {
    ...buildHreflangAlternates("https://plizio.com/astroromana/6/"),
    canonical: "https://plizio.com/astroromana/6/"
  },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
