import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plizio: Învățare gratuită pentru copii, teste, jocuri, hărți",
  description:
    "Învățare gratuită pentru copii: teste de exersare, jocuri interactive pe materii și hărți explorabile. Matematică, științe, istorie, geografie. 4 limbi, fără cont.",
  openGraph: {
    title: "Plizio: Învățare gratuită pentru copii, teste, jocuri, hărți",
    description:
      "Teste de exersare, jocuri interactive și hărți explorabile pentru copii. Matematică, științe, istorie, geografie. 4 limbi.",
    url: "https://plizio.com/ro/",
    locale: "ro_RO",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plizio: Învățare gratuită pentru copii, teste, jocuri, hărți",
    description: "Învățare gratuită pentru copii: teste, jocuri, hărți. 4 limbi, fără cont.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://plizio.com/ro/",
    languages: {
      hu: "https://plizio.com/hu/",
      de: "https://plizio.com/de/",
      en: "https://plizio.com/en/",
      ro: "https://plizio.com/ro/",
      "x-default": "https://plizio.com/",
    },
  },
};

export default function RoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
