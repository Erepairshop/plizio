import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "AstroEnglish Grade 6 – Plizio",
  description: "Master Grade 6 English: pronouns, sentence patterns, analogies, and academic vocabulary!",
  alternates: { canonical: "https://plizio.com/astroenglish/6/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
