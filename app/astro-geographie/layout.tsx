import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildCourseSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "AstroGeographie – Geo Explorer | Plizio",
  description: "Explore geography with an interactive grade 5 to 8 explorer system.",
  alternates: buildHreflangAlternates("/astro-geographie/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildCourseSchema({ name: "AstroGeographie", description: "Explore geography with an interactive grade 5 to 8 explorer system.", url: "/astro-geographie/" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "AstroGeographie", item: "/astro-geographie/" }])} />
      {children}
    </>
  );
}
