import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "3. osztály - AstroMagyar · Magyar Nyelv Galaxis",
  description: "3. osztályos magyar nyelvtan tanulása interaktív kalandok közben. Igeidők, főnévragozás, szövegértés, helyesírás és mondatelemzés.",
  alternates: { canonical: "https://plizio.com/astromagyar/3/" },
  openGraph: {
    title: "3. osztály - AstroMagyar · Magyar Nyelv Galaxis",
    description: "Interaktív magyar nyelvtan tanulási módszer 3. osztályosoknak",
    url: "https://plizio.com/astromagyar/3/",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
