import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plizio: Tanulás, interaktív térképek és városi útitervek",
  description:
    "Fedezz fel úti célokat és városokat interaktív térképekkel és kész napi útitervekkel. Mellette ingyenes tanulás és gyakorló tesztek gyerekeknek. 4 nyelv, regisztráció nélkül.",
  openGraph: {
    title: "Plizio: Tanulás, interaktív térképek és városi útitervek",
    description:
      "Úti célok, városok, interaktív térképek és napi útitervek. Mellette ingyenes tanulás és tesztek gyerekeknek. 4 nyelv.",
    url: "https://plizio.com/hu/",
    locale: "hu_HU",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plizio: Tanulás, interaktív térképek és városi útitervek",
    description: "Úti célok, térképek és napi útitervek, mellette tanulás gyerekeknek. 4 nyelv, regisztráció nélkül.",
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
