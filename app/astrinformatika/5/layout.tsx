import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildCourseSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "AstroInformatika 5 | Plizio",
  description: "AstroInformatika grade 5 interactive course route on Plizio.",
  alternates: buildHreflangAlternates("/astrinformatika/5/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildCourseSchema({ name: "AstroInformatika 5", description: "AstroInformatika grade 5 interactive course route on Plizio.", url: "/astrinformatika/5/" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "AstroInformatika", item: "/astrinformatika/" }, { name: "Grade 5", item: "/astrinformatika/5/" }])} />
      {children}
    </>
  );
}
