import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildLearningResourceSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Math Test Grade 7 – Free Practice – Plizio",
  description: "Free online math practice for Grade 7: algebra, linear equations, geometry and probability.",
  alternates: buildHreflangAlternates("/math-test/grade-7/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildLearningResourceSchema({ name: "Math Test Grade 7 – Free Practice – Plizio", description: "Free online math practice for Grade 7: algebra, linear equations, geometry and probability.", url: "/math-test/grade-7/", educationalLevel: "Grade 7" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "Math Test", item: "/math-test/" }, { name: "Grade 7", item: "/math-test/grade-7/" }])} />
      {children}
    </>
  );
}
