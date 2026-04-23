import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildCourseSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "AstroMath 4. osztály – Matematika tanulás játékkal | Plizio",
  description: "Tanuld a 4. osztályos matematikát űrkalanddal! Nagy számok, szorzás, osztás, törtek, geometria — játékos missziókon át.",
  alternates: buildHreflangAlternates("/astromath/4/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildCourseSchema({ name: "AstroMath 4", description: "Tanuld a 4. osztályos matematikát űrkalanddal! Nagy számok, szorzás, osztás, törtek, geometria — játékos missziókon át.", url: "/astromath/4/" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "AstroMath", item: "/astromath/" }, { name: "Grade 4", item: "/astromath/4/" }])} />
      {children}
    </>
  );
}
