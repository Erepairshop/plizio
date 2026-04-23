import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildLearningResourceSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  alternates: buildHreflangAlternates("/mathe-test/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildLearningResourceSchema({ name: "Mathe-Test", description: "Mathe-Test", url: "/mathe-test/", educationalLevel: "Grades 1-8" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "Mathe-Test", item: "/mathe-test/" }])} />
      {children}
    </>
  );
}
