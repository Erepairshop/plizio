import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "5. osztály – AstroMagyar | Plizio",
  description: "Magyar nyelvtan tanulás 5. osztály számára. Hangtani elemzés, szóelemzés, szófajok, mondatrészek és irodalmi ismeretek interaktív játékokon keresztül.",
  alternates: { canonical: "https://plizio.com/astromagyar/5/" },
  openGraph: {
    title: "5. osztály – AstroMagyar",
    description: "Magyar nyelvtan tanulás 5. osztály számára – Hangtani elemzés, szóelemzés, szófajok, mondatrészek",
    url: "https://plizio.com/astromagyar/5/",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
