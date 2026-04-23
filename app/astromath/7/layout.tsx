import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildCourseSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "AstroMath 7. osztály – Matematika tanulás játékkal | Plizio",
  description: "Tanuld a 7. osztályos matematikát űrkalanddal! Hatványok, algebra, egyenletek, egyenlőtlenségek, háromszögek, Pitagorasz-tétel, kör, statisztika — játékos missziókon át.",
  alternates: buildHreflangAlternates("/astromath/7/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildCourseSchema({ name: "AstroMath 7", description: "Tanuld a 7. osztályos matematikát űrkalanddal! Hatványok, algebra, egyenletek, egyenlőtlenségek, háromszögek, Pitagorasz-tétel, kör, statisztika — játékos missziókon át.", url: "/astromath/7/" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "AstroMath", item: "/astromath/" }, { name: "Grade 7", item: "/astromath/7/" }])} />
      {children}
    </>
  );
}
