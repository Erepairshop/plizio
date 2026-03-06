import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "English Test Grade 3 — Free Grammar Quiz | Plizio",
  description:
    "Free English grammar test for Grade 3 (age 8–9). Practice noun forms, verb tenses, conjunctions, and prefixes/suffixes. Aligned with Common Core ELA Grade 3.",
  alternates: {
    canonical: "https://plizio.com/english-test/grade-3/",
    languages: {
      en: "https://plizio.com/english-test/grade-3/",
      "x-default": "https://plizio.com/english-test/grade-3/",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
