import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildLearningResourceSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "English Test Grade 4 — Free Grammar Quiz | Plizio",
  description: "Free English grammar test for Grade 4 (age 9–10). Practice relative pronouns, modal verbs, figurative language, and punctuation. Aligned with Common Core ELA Grade 4.",
  alternates: buildHreflangAlternates("/english-test/grade-4/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildLearningResourceSchema({ name: "English Test Grade 4 — Free Grammar Quiz | Plizio", description: "Free English grammar test for Grade 4 (age 9–10). Practice relative pronouns, modal verbs, figurative language, and punctuation. Aligned with Common Core ELA Grade 4.", url: "/english-test/grade-4/", educationalLevel: "Grade 4" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "English Test", item: "/english-test/" }, { name: "Grade 4", item: "/english-test/grade-4/" }])} />
      {children}
    </>
  );
}
