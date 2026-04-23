import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildLearningResourceSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "English Test — Free Grammar Quiz Grades 1–8 | Plizio",
  description: "Free online English grammar test for grades 1–8. Practice Common Core ELA: parts of speech, sentence structure, spelling, punctuation, vocabulary and more. No login required.",
  alternates: buildHreflangAlternates("/english-test/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildLearningResourceSchema({ name: "English Test", description: "Free online English grammar test for grades 1–8. Practice Common Core ELA: parts of speech, sentence structure, spelling, punctuation, vocabulary and more. No login required.", url: "/english-test/", educationalLevel: "Grades 1-8" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "English Test", item: "/english-test/" }])} />
      {children}
    </>
  );
}
