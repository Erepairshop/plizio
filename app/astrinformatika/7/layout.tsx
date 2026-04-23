import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildCourseSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "AstroInformatika 7 | Plizio",
  description: "AstroInformatika grade 7 interactive course route on Plizio.",
  alternates: buildHreflangAlternates("/astrinformatika/7/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildCourseSchema({ name: "AstroInformatika 7", description: "AstroInformatika grade 7 interactive course route on Plizio.", url: "/astrinformatika/7/" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "AstroInformatika", item: "/astrinformatika/" }, { name: "Grade 7", item: "/astrinformatika/7/" }])} />
      {children}
    </>
  );
}
