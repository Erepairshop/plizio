import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "English Test – Grammar & Vocabulary Quiz | Plizio",
  description:
    "Free English grammar and vocabulary test for grades 1–8. Covers Common Core ELA: parts of speech, sentence structure, spelling, punctuation, and more.",
  alternates: {
    canonical: "https://plizio.com/englishtest/",
  },
  openGraph: {
    title: "English Test – Grammar & Vocabulary Quiz | Plizio",
    description:
      "Free English grammar and vocabulary test for grades 1–8. Covers Common Core ELA: parts of speech, sentence structure, spelling, punctuation, and more.",
    images: [{ url: "/og/englishtest.png", width: 1200, height: 630 }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
