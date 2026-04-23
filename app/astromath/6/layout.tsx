import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildCourseSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "AstroMath 6. osztály – Matematika tanulás játékkal | Plizio",
  description: "Tanuld a 6. osztályos matematikát űrkalanddal! Negatív számok, törtek, százalékszámítás, algebra, geometria, statisztika — játékos missziókon át.",
  alternates: buildHreflangAlternates("/astromath/6/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildCourseSchema({ name: "AstroMath 6", description: "Tanuld a 6. osztályos matematikát űrkalanddal! Negatív számok, törtek, százalékszámítás, algebra, geometria, statisztika — játékos missziókon át.", url: "/astromath/6/" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "AstroMath", item: "/astromath/" }, { name: "Grade 6", item: "/astromath/6/" }])} />
      {children}
    </>
  );
}
