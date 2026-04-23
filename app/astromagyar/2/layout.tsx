import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "2. osztály · Magyar Nyelv Galaxis | AstroMagyar",
  description: "2. osztályos magyar nyelvtan játékok: szófajok, helyesírás, mondattan, szókincs. Szórakoztatóan tanulj az AstroMagyar interaktív játékrendszerrel!",
  alternates: {
    ...buildHreflangAlternates("https://plizio.com/astromagyar/2/"),
    canonical: "https://plizio.com/astromagyar/2/",
  },
  openGraph: {
    title: "2. osztály · Magyar Nyelv Galaxis",
    description: "Tanulj magyar nyelvtant szórakoztató csillag-szigetes játékokkal!",
    url: "https://plizio.com/astromagyar/2/",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
