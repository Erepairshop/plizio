import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildCourseSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "AstroGeographie Klasse 6 | Plizio",
  description: "Grade 6 geography explorer with earth layers, climate zones and water cycle.",
  alternates: buildHreflangAlternates("/astro-geographie/6/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildCourseSchema({ name: "AstroGeographie 6", description: "Grade 6 geography explorer with earth layers, climate zones and water cycle.", url: "/astro-geographie/6/" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "AstroGeographie", item: "/astro-geographie/" }, { name: "Grade 6", item: "/astro-geographie/6/" }])} />
      {children}
    </>
  );
}
