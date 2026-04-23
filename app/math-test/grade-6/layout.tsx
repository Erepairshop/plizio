import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildLearningResourceSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Math Test Grade 6 – Free Practice – Plizio",
  description: "Free online math practice for Grade 6: ratios, proportions, negative numbers, area and volume.",
  alternates: buildHreflangAlternates("/math-test/grade-6/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildLearningResourceSchema({ name: "Math Test Grade 6 – Free Practice – Plizio", description: "Free online math practice for Grade 6: ratios, proportions, negative numbers, area and volume.", url: "/math-test/grade-6/", educationalLevel: "Grade 6" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "Math Test", item: "/math-test/" }, { name: "Grade 6", item: "/math-test/grade-6/" }])} />
      {children}
    </>
  );
}
