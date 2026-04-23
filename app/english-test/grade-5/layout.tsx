import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildLearningResourceSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "English Test Grade 5 — Free Grammar Quiz | Plizio",
  description: "Free English grammar test for Grade 5 (age 10–11). Practice perfect tenses, correlative conjunctions, figurative language, and context clues. Aligned with Common Core ELA Grade 5.",
  alternates: buildHreflangAlternates("/english-test/grade-5/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildLearningResourceSchema({ name: "English Test Grade 5 — Free Grammar Quiz | Plizio", description: "Free English grammar test for Grade 5 (age 10–11). Practice perfect tenses, correlative conjunctions, figurative language, and context clues. Aligned with Common Core ELA Grade 5.", url: "/english-test/grade-5/", educationalLevel: "Grade 5" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "English Test", item: "/english-test/" }, { name: "Grade 5", item: "/english-test/grade-5/" }])} />
      {children}
    </>
  );
}
