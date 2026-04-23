import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildCourseSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "AstroInformatika 8 | Plizio",
  description: "AstroInformatika grade 8 interactive course route on Plizio.",
  alternates: buildHreflangAlternates("/astrinformatika/8/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildCourseSchema({ name: "AstroInformatika 8", description: "AstroInformatika grade 8 interactive course route on Plizio.", url: "/astrinformatika/8/" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "AstroInformatika", item: "/astrinformatika/" }, { name: "Grade 8", item: "/astrinformatika/8/" }])} />
      {children}
    </>
  );
}
