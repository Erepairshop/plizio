import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "AstroRomână Clasa 7 – Plizio",
  description: "Aprofundează sintaxa și comentariul literar cu AstroRomână! Joc educativ pentru Clasa 7.",
  alternates: { canonical: "https://plizio.com/astroromana/7/" },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
