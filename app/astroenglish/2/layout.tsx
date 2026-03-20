import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "AstroEnglish Grade 2 – Words & Grammar",
  description: "Learn Grade 2 English: nouns, verbs, adjectives, sentences, and word meanings through space adventures!",
  alternates: { canonical: "https://plizio.com/astroenglish/2/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
