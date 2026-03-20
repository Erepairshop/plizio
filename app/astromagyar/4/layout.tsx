import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "4. osztály – AstroMagyar | Plizio",
  description: "Magyar nyelvtan 4. osztály: igeragozás, névmások, határozók, összetett mondatok, szóalkotás, helyesírás, fogalmazás, nyelvtan.",
  alternates: { canonical: "https://plizio.com/astromagyar/4/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
