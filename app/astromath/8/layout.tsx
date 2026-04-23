import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildCourseSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "AstroMath 8. osztály – Matematika tanulás játékkal | Plizio",
  description: "Tanuld a 8. osztályos matematikát űrkalanddal! Négyzetgyökök, másodfokú egyenletek, egyenletrendszerek, lineáris függvények, valószínűségszámítás, statisztika, transzformációk — játékos missziókon át.",
  alternates: buildHreflangAlternates("/astromath/8/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildCourseSchema({ name: "AstroMath 8", description: "Tanuld a 8. osztályos matematikát űrkalanddal! Négyzetgyökök, másodfokú egyenletek, egyenletrendszerek, lineáris függvények, valószínűségszámítás, statisztika, transzformációk — játékos missziókon át.", url: "/astromath/8/" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "AstroMath", item: "/astromath/" }, { name: "Grade 8", item: "/astromath/8/" }])} />
      {children}
    </>
  );
}
