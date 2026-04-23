import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildCourseSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "AstroInformatika 6 | Plizio",
  description: "AstroInformatika grade 6 interactive course route on Plizio.",
  alternates: buildHreflangAlternates("/astrinformatika/6/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildCourseSchema({ name: "AstroInformatika 6", description: "AstroInformatika grade 6 interactive course route on Plizio.", url: "/astrinformatika/6/" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "AstroInformatika", item: "/astrinformatika/" }, { name: "Grade 6", item: "/astrinformatika/6/" }])} />
      {children}
    </>
  );
}
