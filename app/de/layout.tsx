import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PLIZIO - Kostenlose Online Browser-Spiele | Sofort Spielen",
  description:
    "Spiele kostenlose Online Browser-Spiele – kein Download nötig! Rennspiele, Quiz, Gedächtnisspiele, Reaktionsspiele und mehr. Auf jedem Gerät spielbar.",
  openGraph: {
    title: "PLIZIO - Kostenlose Online Browser-Spiele",
    description:
      "Kostenlose Online-Spiele ohne Download und Anmeldung. Rennspiele, Quiz, Gedächtnis- und Reaktionsspiele.",
    url: "https://plizio.com/de/",
    locale: "de_DE",
  },
  twitter: {
    card: "summary_large_image",
    title: "PLIZIO - Kostenlose Online Browser-Spiele",
    description: "Kostenlose Online-Spiele – sofort im Browser spielen!",
    images: ["/icon-512.png"],
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
