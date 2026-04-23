import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "6. osztály – AstroMagyar | Plizio",
  description: "Magyar nyelv és nyelvtan 6. osztály: összetett mondatok, szóképek, szókincs, nyelvtörténet, retorika, szövegértelmezés, helyesírás, fogalmazás.",
  alternates: {
    ...buildHreflangAlternates("https://plizio.com/astromagyar/6/"),
    canonical: "https://plizio.com/astromagyar/6/"
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
