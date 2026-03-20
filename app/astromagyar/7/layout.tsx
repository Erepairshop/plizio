import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "7. osztály – AstroMagyar | Plizio",
  description: "Magyar nyelvtan 7. osztály: nyelvtörténet, retorika haladó, stilisztika, nyelvváltozatok, szövegalkotás, mondattan haladó, kommunikáció, média és nyelv.",
  alternates: { canonical: "https://plizio.com/astromagyar/7/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
