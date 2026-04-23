import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildCourseSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "AstroPhysik Klasse 7 – Mechanik & Optik | Plizio",
  description: "Lerne Physik Klasse 7: Geschwindigkeit, Newtons Gesetze, Arbeit, Leistung, Optik und Thermodynamik.",
  alternates: buildHreflangAlternates("/astro-physik/7/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildCourseSchema({ name: "AstroPhysik 7", description: "Lerne Physik Klasse 7: Geschwindigkeit, Newtons Gesetze, Arbeit, Leistung, Optik und Thermodynamik.", url: "/astro-physik/7/" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "AstroPhysik", item: "/astro-physik/" }, { name: "Grade 7", item: "/astro-physik/7/" }])} />
      {children}
    </>
  );
}
