import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildCourseSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "AstroMath 5. osztály – Matematika tanulás játékkal | Plizio",
  description: "Tanuld az 5. osztályos matematikát űrkalanddal! Nagy számok, törtek, tizedes számok, geometria, mértékegységek — játékos missziókon át.",
  alternates: buildHreflangAlternates("/astromath/5/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildCourseSchema({ name: "AstroMath 5", description: "Tanuld az 5. osztályos matematikát űrkalanddal! Nagy számok, törtek, tizedes számok, geometria, mértékegységek — játékos missziókon át.", url: "/astromath/5/" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "AstroMath", item: "/astromath/" }, { name: "Grade 5", item: "/astromath/5/" }])} />
      {children}
    </>
  );
}
