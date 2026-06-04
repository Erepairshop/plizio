import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plizio: Lernen, interaktive Karten und Tagespläne für Städte",
  description:
    "Entdecke Reiseziele und Städte mit interaktiven Karten und fertigen Tagesplänen. Dazu kostenloses Lernen mit Übungstests für Kinder. 4 Sprachen, ohne Anmeldung.",
  openGraph: {
    title: "Plizio: Lernen, interaktive Karten und Tagespläne für Städte",
    description:
      "Reiseziele, Städte, interaktive Karten und Tagespläne. Dazu kostenloses Lernen und Tests für Kinder. 4 Sprachen.",
    url: "https://plizio.com/de/",
    locale: "de_DE",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plizio: Lernen, interaktive Karten und Tagespläne für Städte",
    description: "Reiseziele, Karten und Tagespläne, dazu Lernen für Kinder. 4 Sprachen, ohne Anmeldung.",
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
