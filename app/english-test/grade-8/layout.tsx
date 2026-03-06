import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "English Test Grade 8 — Free Grammar Quiz | Plizio",
  description:
    "Free English grammar test for Grade 8 (age 13–14). Practice subjunctive mood, passive voice, formal style, and literary terms. Aligned with Common Core ELA Grade 8.",
  alternates: {
    canonical: "https://plizio.com/english-test/grade-8/",
    languages: {
      en: "https://plizio.com/english-test/grade-8/",
      "x-default": "https://plizio.com/english-test/grade-8/",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
