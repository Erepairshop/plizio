import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildCourseSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "AstroGeographie Klasse 8 | Plizio",
  description: "Grade 8 geography explorer with globalization, cities and climate.",
  alternates: buildHreflangAlternates("/astro-geographie/8/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildCourseSchema({ name: "AstroGeographie 8", description: "Grade 8 geography explorer with globalization, cities and climate.", url: "/astro-geographie/8/" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "AstroGeographie", item: "/astro-geographie/" }, { name: "Grade 8", item: "/astro-geographie/8/" }])} />
      {children}
    </>
  );
}
