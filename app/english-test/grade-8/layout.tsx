import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildLearningResourceSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "English Test Grade 8 — Free Grammar Quiz | Plizio",
  description: "Free English grammar test for Grade 8 (age 13–14). Practice subjunctive mood, passive voice, formal style, and literary terms. Aligned with Common Core ELA Grade 8.",
  alternates: buildHreflangAlternates("/english-test/grade-8/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildLearningResourceSchema({ name: "English Test Grade 8 — Free Grammar Quiz | Plizio", description: "Free English grammar test for Grade 8 (age 13–14). Practice subjunctive mood, passive voice, formal style, and literary terms. Aligned with Common Core ELA Grade 8.", url: "/english-test/grade-8/", educationalLevel: "Grade 8" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "English Test", item: "/english-test/" }, { name: "Grade 8", item: "/english-test/grade-8/" }])} />
      {children}
    </>
  );
}
