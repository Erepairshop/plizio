import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "English Test Grade 4 — Free Grammar Quiz | Plizio",
  description:
    "Free English grammar test for Grade 4 (age 9–10). Practice relative pronouns, modal verbs, figurative language, and punctuation. Aligned with Common Core ELA Grade 4.",
  alternates: {
    canonical: "https://plizio.com/english-test/grade-4/",
    languages: {
      en: "https://plizio.com/english-test/grade-4/",
      "x-default": "https://plizio.com/english-test/grade-4/",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
