import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildLearningResourceSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "English Test Grade 6 — Free Grammar Quiz | Plizio",
  description: "Free English grammar test for Grade 6 (age 11–12). Practice pronoun case, sentence variety, Greek/Latin roots, and clause types. Aligned with Common Core ELA Grade 6.",
  alternates: buildHreflangAlternates("/english-test/grade-6/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildLearningResourceSchema({ name: "English Test Grade 6 — Free Grammar Quiz | Plizio", description: "Free English grammar test for Grade 6 (age 11–12). Practice pronoun case, sentence variety, Greek/Latin roots, and clause types. Aligned with Common Core ELA Grade 6.", url: "/english-test/grade-6/", educationalLevel: "Grade 6" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "English Test", item: "/english-test/" }, { name: "Grade 6", item: "/english-test/grade-6/" }])} />
      {children}
    </>
  );
}
