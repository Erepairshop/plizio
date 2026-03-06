import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "English Test Grade 7 — Free Grammar Quiz | Plizio",
  description:
    "Free English grammar test for Grade 7 (age 12–13). Practice verbals, clause types, semicolons, and vocabulary. Aligned with Common Core ELA Grade 7.",
  alternates: {
    canonical: "https://plizio.com/english-test/grade-7/",
    languages: {
      en: "https://plizio.com/english-test/grade-7/",
      "x-default": "https://plizio.com/english-test/grade-7/",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
