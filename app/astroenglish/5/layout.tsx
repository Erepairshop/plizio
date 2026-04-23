import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "AstroEnglish Grade 5 – Plizio",
  description: "Master Grade 5 English: complex sentences, Greek/Latin roots, and figurative language!",
  alternates: {
    ...buildHreflangAlternates("https://plizio.com/astroenglish/5/"),
    canonical: "https://plizio.com/astroenglish/5/"
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
