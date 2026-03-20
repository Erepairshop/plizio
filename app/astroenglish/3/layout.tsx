import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "AstroEnglish Grade 3 – Reading & Writing",
  description: "Learn Grade 3 English: reading strategies, writing skills, and advanced vocabulary through space adventures!",
  alternates: { canonical: "https://plizio.com/astroenglish/3/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
