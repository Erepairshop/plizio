import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Matematică cu AstroMath – Exerciții gratuite – Plizio",
  description: "Descoperă cum AstroMath ajută elevii din clasele 1–8 să învețe matematica prin jocuri interactive și exerciții gratuite.",
  alternates: { canonical: "https://plizio.com/blog/matematica-astromath/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
