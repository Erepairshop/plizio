import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AstroEnglish – Plizio",
  description: "Learn English grammar, vocabulary, and reading through space adventures! Grades 1-8.",
  alternates: {
    ...buildHreflangAlternates("https://plizio.com/astroenglish/"),
    canonical: "https://plizio.com/astroenglish/"
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
