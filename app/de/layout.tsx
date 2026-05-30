import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plizio: Kostenlos Lernen für Kinder mit Tests, Spielen und Karten",
  description:
    "Kostenloses Lernen für Kinder: Übungstests, interaktive Lernspiele und entdeckbare Karten für Mathe, Naturwissenschaften, Geschichte und Geografie. 4 Sprachen, ohne Anmeldung.",
  openGraph: {
    title: "Plizio: Kostenlos Lernen für Kinder mit Tests, Spielen und Karten",
    description:
      "Übungstests, interaktive Lernspiele und entdeckbare Karten für Kinder. Mathe, Naturwissenschaften, Geschichte, Geografie. 4 Sprachen.",
    url: "https://plizio.com/de/",
    locale: "de_DE",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plizio: Kostenlos Lernen für Kinder mit Tests, Spielen und Karten",
    description: "Kostenloses Lernen für Kinder: Tests, Lernspiele und Karten. 4 Sprachen, ohne Anmeldung.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://plizio.com/de/",
    languages: {
      hu: "https://plizio.com/hu/",
      de: "https://plizio.com/de/",
      en: "https://plizio.com/en/",
      ro: "https://plizio.com/ro/",
      "x-default": "https://plizio.com/",
    },
  },
};

export default function DeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
