import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "English Test Grade 1 — Free Grammar Quiz | Plizio",
  description:
    "Free English grammar test for Grade 1 (age 6–7). Practice phonics, sight words, nouns, verbs, capitalization, and punctuation. Aligned with Common Core ELA Grade 1.",
  alternates: {
    canonical: "https://plizio.com/english-test/grade-1/",
    languages: {
      en: "https://plizio.com/english-test/grade-1/",
      "x-default": "https://plizio.com/english-test/grade-1/",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
