import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildLearningResourceSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "English Test Grade 3 — Free Grammar Quiz | Plizio",
  description: "Free English grammar test for Grade 3 (age 8–9). Practice noun forms, verb tenses, conjunctions, and prefixes/suffixes. Aligned with Common Core ELA Grade 3.",
  alternates: buildHreflangAlternates("/english-test/grade-3/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildLearningResourceSchema({ name: "English Test Grade 3 — Free Grammar Quiz | Plizio", description: "Free English grammar test for Grade 3 (age 8–9). Practice noun forms, verb tenses, conjunctions, and prefixes/suffixes. Aligned with Common Core ELA Grade 3.", url: "/english-test/grade-3/", educationalLevel: "Grade 3" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "English Test", item: "/english-test/" }, { name: "Grade 3", item: "/english-test/grade-3/" }])} />
      {children}
    </>
  );
}
