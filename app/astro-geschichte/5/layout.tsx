import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildCourseSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Chronos: Die Antike – Plizio",
  alternates: buildHreflangAlternates("/astro-geschichte/5/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildCourseSchema({ name: "AstroGeschichte 5", description: "AstroGeschichte grade 5 interactive course route on Plizio.", url: "/astro-geschichte/5/" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "AstroGeschichte", item: "/astro-geschichte/" }, { name: "Grade 5", item: "/astro-geschichte/5/" }])} />
      {children}
    </>
  );
}
