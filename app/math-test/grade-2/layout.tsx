import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildLearningResourceSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Math Test Grade 2 – Free Practice – Plizio",
  description: "Free online math practice for Grade 2: addition, subtraction up to 100, multiplication intro and word problems.",
  alternates: buildHreflangAlternates("/math-test/grade-2/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildLearningResourceSchema({ name: "Math Test Grade 2 – Free Practice – Plizio", description: "Free online math practice for Grade 2: addition, subtraction up to 100, multiplication intro and word problems.", url: "/math-test/grade-2/", educationalLevel: "Grade 2" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "Math Test", item: "/math-test/" }, { name: "Grade 2", item: "/math-test/grade-2/" }])} />
      {children}
    </>
  );
}
