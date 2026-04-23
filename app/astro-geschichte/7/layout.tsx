import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildCourseSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Libertas: Frühe Neuzeit – Plizio",
  alternates: buildHreflangAlternates("/astro-geschichte/7/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildCourseSchema({ name: "AstroGeschichte 7", description: "AstroGeschichte grade 7 interactive course route on Plizio.", url: "/astro-geschichte/7/" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "AstroGeschichte", item: "/astro-geschichte/" }, { name: "Grade 7", item: "/astro-geschichte/7/" }])} />
      {children}
    </>
  );
}
