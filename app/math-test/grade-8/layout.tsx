import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildLearningResourceSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Math Test Grade 8 – Free Practice – Plizio",
  description: "Free online math practice for Grade 8: systems of equations, functions, Pythagorean theorem and statistics.",
  alternates: buildHreflangAlternates("/math-test/grade-8/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildLearningResourceSchema({ name: "Math Test Grade 8 – Free Practice – Plizio", description: "Free online math practice for Grade 8: systems of equations, functions, Pythagorean theorem and statistics.", url: "/math-test/grade-8/", educationalLevel: "Grade 8" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "Math Test", item: "/math-test/" }, { name: "Grade 8", item: "/math-test/grade-8/" }])} />
      {children}
    </>
  );
}
