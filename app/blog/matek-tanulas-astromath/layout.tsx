import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Matek tanulás AstroMath-tal – Tippek szülőknek – Plizio",
  description: "Hogyan segítheti az AstroMath a gyerekek matematikatanulását? Tippek szülőknek és pedagógusoknak 1–8. osztályig.",
  alternates: { canonical: "https://plizio.com/blog/matek-tanulas-astromath/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
