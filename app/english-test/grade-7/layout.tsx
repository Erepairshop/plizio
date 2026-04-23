import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildLearningResourceSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "English Test Grade 7 — Free Grammar Quiz | Plizio",
  description: "Free English grammar test for Grade 7 (age 12–13). Practice verbals, clause types, semicolons, and vocabulary. Aligned with Common Core ELA Grade 7.",
  alternates: buildHreflangAlternates("/english-test/grade-7/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildLearningResourceSchema({ name: "English Test Grade 7 — Free Grammar Quiz | Plizio", description: "Free English grammar test for Grade 7 (age 12–13). Practice verbals, clause types, semicolons, and vocabulary. Aligned with Common Core ELA Grade 7.", url: "/english-test/grade-7/", educationalLevel: "Grade 7" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "English Test", item: "/english-test/" }, { name: "Grade 7", item: "/english-test/grade-7/" }])} />
      {children}
    </>
  );
}
