import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildLearningResourceSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Math Test Grade 1 – Free Practice – Plizio",
  description: "Free online math practice for Grade 1: counting, addition, subtraction and number recognition with instant feedback.",
  alternates: buildHreflangAlternates("/math-test/grade-1/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildLearningResourceSchema({ name: "Math Test Grade 1 – Free Practice – Plizio", description: "Free online math practice for Grade 1: counting, addition, subtraction and number recognition with instant feedback.", url: "/math-test/grade-1/", educationalLevel: "Grade 1" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "Math Test", item: "/math-test/" }, { name: "Grade 1", item: "/math-test/grade-1/" }])} />
      {children}
    </>
  );
}
