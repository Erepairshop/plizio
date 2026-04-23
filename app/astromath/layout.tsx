import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildCourseSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "AstroMath – Mathe lernen mit Raketenreise | Plizio",
  description: "Lerne Mathematik der 1. Klasse spielerisch: Addition, Subtraktion, Vergleichen und fehlende Zahlen – auf einer spannenden Weltraumreise!",
  alternates: buildHreflangAlternates("/astromath/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildCourseSchema({ name: "AstroMath", description: "Lerne Mathematik der 1. Klasse spielerisch: Addition, Subtraktion, Vergleichen und fehlende Zahlen – auf einer spannenden Weltraumreise!", url: "/astromath/" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "AstroMath", item: "/astromath/" }])} />
      {children}
    </>
  );
}
