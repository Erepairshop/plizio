import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildCourseSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "AstroKemia – Chemie lernen | Plizio",
  description: "Lerne Chemie spielerisch in Klasse 5 bis 8 mit Inseln, Themenpfaden und Quiz-Training.",
  alternates: buildHreflangAlternates("/astrokemia/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildCourseSchema({ name: "AstroKemia", description: "Lerne Chemie spielerisch in Klasse 5 bis 8 mit Inseln, Themenpfaden und Quiz-Training.", url: "/astrokemia/" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "AstroKemia", item: "/astrokemia/" }])} />
      {children}
    </>
  );
}
