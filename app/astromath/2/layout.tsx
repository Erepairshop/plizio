import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildCourseSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "AstroMath 2. osztály – Matematika tanulás játékkal | Plizio",
  description: "Tanuld a 2. osztályos matematikát ûrutazással! Összeadás/kivonás 100-ig, szorzótábla, osztás – 9 sziget, 4 játéktípus, checkpoint tesztek.",
  alternates: buildHreflangAlternates("/astromath/2/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildCourseSchema({ name: "AstroMath 2", description: "Tanuld a 2. osztályos matematikát ûrutazással! Összeadás/kivonás 100-ig, szorzótábla, osztás – 9 sziget, 4 játéktípus, checkpoint tesztek.", url: "/astromath/2/" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "AstroMath", item: "/astromath/" }, { name: "Grade 2", item: "/astromath/2/" }])} />
      {children}
    </>
  );
}
