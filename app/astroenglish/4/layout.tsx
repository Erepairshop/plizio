import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "AstroEnglish Grade 4 – Advanced English",
  description: "Learn Grade 4 English: complex sentences, advanced vocabulary, literature analysis, and writing skills!",
  alternates: { canonical: "https://plizio.com/astroenglish/4/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
