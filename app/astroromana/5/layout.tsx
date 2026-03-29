import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "AstroRomână Clasa 5 – Plizio",
  description: "Descoperă fonetica și morfologia cu AstroRomână! Joc educativ pentru Clasa 5.",
  alternates: { canonical: "https://plizio.com/astroromana/5/" },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
