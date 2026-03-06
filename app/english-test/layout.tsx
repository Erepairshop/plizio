import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "English Test — Free Grammar Quiz Grades 1–8 | Plizio",
  description:
    "Free online English grammar test for grades 1–8. Practice Common Core ELA: parts of speech, sentence structure, spelling, punctuation, vocabulary and more. No login required.",
  alternates: {
    canonical: "https://plizio.com/english-test/",
    languages: {
      en: "https://plizio.com/english-test/",
      "x-default": "https://plizio.com/english-test/",
    },
  },
  openGraph: {
    title: "English Test — Free Grammar Quiz Grades 1–8 | Plizio",
    description:
      "Free online English grammar test for grades 1–8. Practice Common Core ELA: parts of speech, sentence structure, spelling, punctuation, vocabulary and more.",
    images: [{ url: "/og/englishtest.png", width: 1200, height: 630 }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
