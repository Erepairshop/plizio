import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "AstroRomână Clasa 8 – Evaluare Națională – Plizio",
  description: "Pregătire pentru Evaluarea Națională cu AstroRomână! Joc educativ pentru Clasa 8.",
  alternates: {
    ...buildHreflangAlternates("https://plizio.com/astroromana/8/"),
    canonical: "https://plizio.com/astroromana/8/"
  },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
