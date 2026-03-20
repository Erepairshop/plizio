import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "1. osztály – AstroMagyar | Plizio",
  description: "Magyar nyelv és nyelvtan 1. osztály: betűk, hangok, szótagolás, szavak, mondatok.",
  alternates: { canonical: "https://plizio.com/astromagyar/1/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
