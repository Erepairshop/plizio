import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "8. osztály – Magyar Nyelv Galaxis · AstroMagyar",
  description:
    "8. osztályos magyar nyelvtan játékosan: nyelvtörténet, stíluseszközök, szövegelemzés, helyesírás, vitakultúra. Interaktív szigetekben tanulj haladó szinten!",
  keywords: [
    "8. osztály",
    "magyar nyelv",
    "nyelvtan",
    "nyelvtörténet",
    "stíluseszközök",
    "szövegelemzés",
    "helyesírás",
    "vitakultúra",
    "kozmagyar",
    "argumentáció",
    "szatíra",
    "irónia",
    "irodalmi elemzés",
    "játékos tanulás",
  ],
  alternates: {
    canonical: "https://plizio.com/astromagyar/8/",
  },
  openGraph: {
    title: "8. osztály – Magyar Nyelv Galaxis · AstroMagyar",
    description: "Fedezd fel a magyar nyelvtan haladó szintjét 9 szigeten keresztül!",
    url: "https://plizio.com/astromagyar/8/",
    type: "website",
    images: [
      {
        url: "https://plizio.com/og/astromagyar-8.png",
        width: 1200,
        height: 630,
        alt: "AstroMagyar Grade 8",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
