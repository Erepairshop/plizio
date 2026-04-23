import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "AstroEnglish Grade 1 – English Adventure",
  description: "Learn Grade 1 English: phonics, letters, sight words, and sentences through space adventures!",
  alternates: {
    ...buildHreflangAlternates("https://plizio.com/astroenglish/1/"),
    canonical: "https://plizio.com/astroenglish/1/"
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
