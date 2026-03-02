import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PLIZIO - Ingyenes Online Böngészős Játékok | Játssz Azonnal",
  description:
    "Játssz ingyenes online böngészős játékokkal – letöltés nélkül! Versenyautós, kvíz, memória, reflex és kalandjátékok. Bármilyen eszközön játszható.",
  openGraph: {
    title: "PLIZIO - Ingyenes Online Böngészős Játékok",
    description:
      "Ingyenes online játékok, letöltés és regisztráció nélkül. Versenyautós, kvíz, memória és reflex játékok.",
    url: "https://plizio.com/hu/",
    locale: "hu_HU",
  },
  twitter: {
    card: "summary_large_image",
    title: "PLIZIO - Ingyenes Online Böngészős Játékok",
    description: "Ingyenes online játékok – azonnal játszható böngészőben!",
    images: ["/icon-512.png"],
  },
  alternates: {
    canonical: "https://plizio.com/hu/",
    languages: {
      hu: "https://plizio.com/hu/",
      de: "https://plizio.com/de/",
      en: "https://plizio.com/en/",
      ro: "https://plizio.com/ro/",
      "x-default": "https://plizio.com/",
    },
  },
};

export default function HuLayout({ children }: { children: React.ReactNode }) {
  return children;
}
