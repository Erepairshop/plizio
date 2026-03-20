import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "6. osztály – AstroMagyar | Plizio",
  description: "Magyar nyelv és nyelvtan 6. osztály: összetett mondatok, szóképek, szókincs, nyelvtörténet, retorika, szövegértelmezés, helyesírás, fogalmazás.",
  alternates: { canonical: "https://plizio.com/astromagyar/6/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
