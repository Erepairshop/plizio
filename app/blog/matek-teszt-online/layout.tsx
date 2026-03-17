import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Matek teszt online – Ingyenes feladatok 1–8. osztály – Plizio",
  description: "Ingyenes online matek tesztek általános iskolásoknak. Gyakorolj összeadást, kivonást, törteket és geometriát otthon.",
  alternates: { canonical: "https://plizio.com/blog/matek-teszt-online/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
