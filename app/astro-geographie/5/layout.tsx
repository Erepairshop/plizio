import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildCourseSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "AstroGeographie Klasse 5 | Plizio",
  description: "Grade 5 geography explorer with maps, directions and rivers.",
  alternates: buildHreflangAlternates("/astro-geographie/5/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildCourseSchema({ name: "AstroGeographie 5", description: "Grade 5 geography explorer with maps, directions and rivers.", url: "/astro-geographie/5/" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "AstroGeographie", item: "/astro-geographie/" }, { name: "Grade 5", item: "/astro-geographie/5/" }])} />
      {children}
    </>
  );
}
