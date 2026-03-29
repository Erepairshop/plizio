import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teste de Limba Română Online | PLIZIO",
  description:
    "Teste interactive de limba română pentru clasele primare și gimnaziale. Exerciții de alfabet, ortografie, gramatică, lectură și scriere. Gratuit, fără cont.",
  keywords: [
    "test limba română online", "test română gratuit", "test limba română clasa 1–8",
    "exerciții limba română", "teste ortografie română", "gramatică română",
    "lectura și scriere", "test limba română online gratuit",
  ],
  alternates: {
    canonical: "https://plizio.com/teste-romana/",
    languages: {
      "ro": "https://plizio.com/teste-romana/",
      "x-default": "https://plizio.com/teste-romana/",
    },
  },
  openGraph: {
    title: "Teste de Limba Română Online | PLIZIO",
    description: "Exersează limba română online gratuit. Clasele disponibile sunt extinse treptat, cu feedback imediat și acces direct din browser.",
    url: "https://plizio.com/teste-romana/",
    images: [{ url: "/icon-512.png", width: 512, height: 512 }],
  },
};

export default function TesteLimbiiRomaneLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
