import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plizio: Ingyenes tanulás gyerekeknek, tesztek, játékok, térképek",
  description:
    "Ingyenes tanulás gyerekeknek: gyakorló tesztek, interaktív tantárgyi játékok és felfedezhető térképek. Matek, természettudomány, történelem, földrajz. 4 nyelv, regisztráció nélkül.",
  openGraph: {
    title: "Plizio: Ingyenes tanulás gyerekeknek, tesztek, játékok, térképek",
    description:
      "Gyakorló tesztek, interaktív tantárgyi játékok és felfedezhető térképek gyerekeknek. Matek, természettudomány, történelem, földrajz. 4 nyelv.",
    url: "https://plizio.com/hu/",
    locale: "hu_HU",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plizio: Ingyenes tanulás gyerekeknek, tesztek, játékok, térképek",
    description: "Ingyenes tanulás gyerekeknek: tesztek, játékok, térképek. 4 nyelv, regisztráció nélkül.",
    images: ["/logo.png"],
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
