import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildLearningResourceSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "English Test Grade 1 — Free Grammar Quiz | Plizio",
  description: "Free English grammar test for Grade 1 (age 6–7). Practice phonics, sight words, nouns, verbs, capitalization, and punctuation. Aligned with Common Core ELA Grade 1.",
  alternates: buildHreflangAlternates("/english-test/grade-1/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildLearningResourceSchema({ name: "English Test Grade 1 — Free Grammar Quiz | Plizio", description: "Free English grammar test for Grade 1 (age 6–7). Practice phonics, sight words, nouns, verbs, capitalization, and punctuation. Aligned with Common Core ELA Grade 1.", url: "/english-test/grade-1/", educationalLevel: "Grade 1" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "English Test", item: "/english-test/" }, { name: "Grade 1", item: "/english-test/grade-1/" }])} />
      {children}
    </>
  );
}
