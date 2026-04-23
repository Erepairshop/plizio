import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildCourseSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "AstroPhysik Klasse 6 – Maschinen & Elektrizität | Plizio",
  description: "Lerne Physik Klasse 6: Einfache Maschinen, Druck, Elektrizität, Dichte und Energieübertragung.",
  alternates: buildHreflangAlternates("/astro-physik/6/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildCourseSchema({ name: "AstroPhysik 6", description: "Lerne Physik Klasse 6: Einfache Maschinen, Druck, Elektrizität, Dichte und Energieübertragung.", url: "/astro-physik/6/" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "AstroPhysik", item: "/astro-physik/" }, { name: "Grade 6", item: "/astro-physik/6/" }])} />
      {children}
    </>
  );
}
