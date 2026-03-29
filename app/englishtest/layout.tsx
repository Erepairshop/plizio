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
    images: [{ url: "/icon-512.png", width: 512, height: 512 }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
