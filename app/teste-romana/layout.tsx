import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Test Limba Română Online – Gratuit pentru Clasa I–VIII | PLIZIO",
  description:
    "Test interactiv de limba română pentru clasele I–VIII. Exerciții de alfabet, ortografie, gramatică, lectură și scriere. Gratuit, fără cont!",
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
    title: "Test Limba Română Online – Gratuit pentru Clasa I–VIII | PLIZIO",
    description: "Exersează limba română online gratuit. Fără înregistrare, pentru toate clasele. Începe acum!",
    url: "https://plizio.com/teste-romana/",
    images: [{ url: "/og/teste-romana.png", width: 1200, height: 630 }],
  },
};

export default function TesteLimbiiRomaneLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
