import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "AstroRomână – Plizio",
  description: "Explorează gramatica și literatura română cu AstroRomână! Exerciții interactive pentru clasele 1–8.",
  alternates: { canonical: "https://plizio.com/astroromana/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
