import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildCourseSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "AstroGeographie Klasse 7 | Plizio",
  description: "Grade 7 geography explorer with Asia, monsoon and natural forces.",
  alternates: buildHreflangAlternates("/astro-geographie/7/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildCourseSchema({ name: "AstroGeographie 7", description: "Grade 7 geography explorer with Asia, monsoon and natural forces.", url: "/astro-geographie/7/" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "AstroGeographie", item: "/astro-geographie/" }, { name: "Grade 7", item: "/astro-geographie/7/" }])} />
      {children}
    </>
  );
}
