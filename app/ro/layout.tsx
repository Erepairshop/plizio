import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plizio: Învățare, hărți interactive și itinerarii de oraș",
  description:
    "Descoperă destinații și orașe cu hărți interactive și itinerarii gata făcute. În plus, învățare gratuită și teste pentru copii. 4 limbi, fără cont.",
  openGraph: {
    title: "Plizio: Învățare, hărți interactive și itinerarii de oraș",
    description:
      "Destinații, orașe, hărți interactive și itinerarii. În plus, învățare gratuită și teste pentru copii. 4 limbi.",
    url: "https://plizio.com/ro/",
    locale: "ro_RO",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plizio: Învățare, hărți interactive și itinerarii de oraș",
    description: "Destinații, hărți și itinerarii, plus învățare pentru copii. 4 limbi, fără cont.",
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
