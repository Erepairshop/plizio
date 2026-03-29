import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "AstroRomână Clasa 2 – Plizio",
  description: "Exersează substantivul și verbul cu AstroRomână! Joc educativ pentru Clasa 2.",
  alternates: { canonical: "https://plizio.com/astroromana/2/" },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
