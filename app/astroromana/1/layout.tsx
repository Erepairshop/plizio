import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "AstroRomână Clasa 1 – Plizio",
  description: "Descoperă alfabetul și literele cu AstroRomână! Joc educativ pentru Clasa 1.",
  alternates: { canonical: "https://plizio.com/astroromana/1/" },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
