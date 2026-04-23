import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildLearningResourceSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Math Test Grade 5 – Free Practice – Plizio",
  description: "Free online math practice for Grade 5: fractions, decimals, percentages, ratios and geometry.",
  alternates: buildHreflangAlternates("/math-test/grade-5/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildLearningResourceSchema({ name: "Math Test Grade 5 – Free Practice – Plizio", description: "Free online math practice for Grade 5: fractions, decimals, percentages, ratios and geometry.", url: "/math-test/grade-5/", educationalLevel: "Grade 5" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "Math Test", item: "/math-test/" }, { name: "Grade 5", item: "/math-test/grade-5/" }])} />
      {children}
    </>
  );
}
