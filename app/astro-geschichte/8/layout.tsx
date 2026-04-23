import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildCourseSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Bellum: Das 20. Jahrhundert – Plizio",
  alternates: buildHreflangAlternates("/astro-geschichte/8/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildCourseSchema({ name: "AstroGeschichte 8", description: "AstroGeschichte grade 8 interactive course route on Plizio.", url: "/astro-geschichte/8/" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "AstroGeschichte", item: "/astro-geschichte/" }, { name: "Grade 8", item: "/astro-geschichte/8/" }])} />
      {children}
    </>
  );
}
