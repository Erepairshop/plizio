import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "English Test Grade 6 — Free Grammar Quiz | Plizio",
  description:
    "Free English grammar test for Grade 6 (age 11–12). Practice pronoun case, sentence variety, Greek/Latin roots, and clause types. Aligned with Common Core ELA Grade 6.",
  alternates: {
    canonical: "https://plizio.com/english-test/grade-6/",
    languages: {
      en: "https://plizio.com/english-test/grade-6/",
      "x-default": "https://plizio.com/english-test/grade-6/",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
