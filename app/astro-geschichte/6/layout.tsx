import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildCourseSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Medievia: Das Mittelalter – Plizio",
  alternates: buildHreflangAlternates("/astro-geschichte/6/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildCourseSchema({ name: "AstroGeschichte 6", description: "AstroGeschichte grade 6 interactive course route on Plizio.", url: "/astro-geschichte/6/" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "AstroGeschichte", item: "/astro-geschichte/" }, { name: "Grade 6", item: "/astro-geschichte/6/" }])} />
      {children}
    </>
  );
}
