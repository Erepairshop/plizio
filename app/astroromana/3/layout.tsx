import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "AstroRomână Clasa 3 – Plizio",
  description: "Învață cazurile și timpurile verbale cu AstroRomână! Joc educativ pentru Clasa 3.",
  alternates: { canonical: "https://plizio.com/astroromana/3/" },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
