import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildLearningResourceSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "English Test Grade 2 — Free Grammar Quiz | Plizio",
  description: "Free English grammar test for Grade 2 (age 7–8). Practice parts of speech, spelling patterns, sentence types, and vocabulary. Aligned with Common Core ELA Grade 2.",
  alternates: buildHreflangAlternates("/english-test/grade-2/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildLearningResourceSchema({ name: "English Test Grade 2 — Free Grammar Quiz | Plizio", description: "Free English grammar test for Grade 2 (age 7–8). Practice parts of speech, spelling patterns, sentence types, and vocabulary. Aligned with Common Core ELA Grade 2.", url: "/english-test/grade-2/", educationalLevel: "Grade 2" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "English Test", item: "/english-test/" }, { name: "Grade 2", item: "/english-test/grade-2/" }])} />
      {children}
    </>
  );
}
