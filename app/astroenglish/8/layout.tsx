import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "AstroEnglish Grade 8 – Plizio",
  description: "Master Grade 8 English: advanced writing, literature, and research!",
  alternates: { canonical: "https://plizio.com/astroenglish/8/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
