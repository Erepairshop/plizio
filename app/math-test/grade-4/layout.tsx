import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildLearningResourceSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Math Test Grade 4 – Free Practice – Plizio",
  description: "Free online math practice for Grade 4: long multiplication, division, fractions and area calculations.",
  alternates: buildHreflangAlternates("/math-test/grade-4/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildLearningResourceSchema({ name: "Math Test Grade 4 – Free Practice – Plizio", description: "Free online math practice for Grade 4: long multiplication, division, fractions and area calculations.", url: "/math-test/grade-4/", educationalLevel: "Grade 4" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "Math Test", item: "/math-test/" }, { name: "Grade 4", item: "/math-test/grade-4/" }])} />
      {children}
    </>
  );
}
