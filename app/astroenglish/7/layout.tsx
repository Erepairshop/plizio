import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "AstroEnglish Grade 7 – Plizio",
  description: "Master Grade 7 English: argumentation, debate, and rhetorical devices!",
  alternates: {
    ...buildHreflangAlternates("https://plizio.com/astroenglish/7/"),
    canonical: "https://plizio.com/astroenglish/7/"
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
