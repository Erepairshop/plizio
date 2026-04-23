import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildCourseSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "AstroMath 3. osztály – Matematika tanulás játékkal | Plizio",
  description: "Tanuld a 3. osztályos matematikát űrutazással! Számolás 1000-ig, szorzótábla, osztás, mértékegységek, geometria – 9 sziget, checkpoint tesztek.",
  alternates: buildHreflangAlternates("/astromath/3/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildCourseSchema({ name: "AstroMath 3", description: "Tanuld a 3. osztályos matematikát űrutazással! Számolás 1000-ig, szorzótábla, osztás, mértékegységek, geometria – 9 sziget, checkpoint tesztek.", url: "/astromath/3/" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "AstroMath", item: "/astromath/" }, { name: "Grade 3", item: "/astromath/3/" }])} />
      {children}
    </>
  );
}
