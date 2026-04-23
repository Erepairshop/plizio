import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildLearningResourceSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Math Test Grade 3 – Free Practice – Plizio",
  description: "Free online math practice for Grade 3: multiplication, division, fractions intro and geometry basics.",
  alternates: buildHreflangAlternates("/math-test/grade-3/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildLearningResourceSchema({ name: "Math Test Grade 3 – Free Practice – Plizio", description: "Free online math practice for Grade 3: multiplication, division, fractions intro and geometry basics.", url: "/math-test/grade-3/", educationalLevel: "Grade 3" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "Math Test", item: "/math-test/" }, { name: "Grade 3", item: "/math-test/grade-3/" }])} />
      {children}
    </>
  );
}
