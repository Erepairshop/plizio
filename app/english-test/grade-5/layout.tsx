import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "English Test Grade 5 — Free Grammar Quiz | Plizio",
  description:
    "Free English grammar test for Grade 5 (age 10–11). Practice perfect tenses, correlative conjunctions, figurative language, and context clues. Aligned with Common Core ELA Grade 5.",
  alternates: {
    canonical: "https://plizio.com/english-test/grade-5/",
    languages: {
      en: "https://plizio.com/english-test/grade-5/",
      "x-default": "https://plizio.com/english-test/grade-5/",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
