import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "English Test Grade 2 — Free Grammar Quiz | Plizio",
  description:
    "Free English grammar test for Grade 2 (age 7–8). Practice parts of speech, spelling patterns, sentence types, and vocabulary. Aligned with Common Core ELA Grade 2.",
  alternates: {
    canonical: "https://plizio.com/english-test/grade-2/",
    languages: {
      en: "https://plizio.com/english-test/grade-2/",
      "x-default": "https://plizio.com/english-test/grade-2/",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
