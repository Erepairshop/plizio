import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Deutsch Test – Grammatik & Leseverstehen | Klasse 1–8",
  description:
    "Interaktiver Deutsch-Test für Klasse 1–8: Grammatik, Rechtschreibung, Satzglieder, Zeitformen und Lesetest. Mit MCQ und Freitext-Aufgaben.",
  alternates: {
    canonical: "https://plizio.com/deutschtest",
    languages: {
      de: "https://plizio.com/deutschtest",
      "x-default": "https://plizio.com/deutschtest",
    },
  },
  openGraph: {
    title: "Deutsch Test – Klasse 1–8",
    description: "Teste dein Deutsch: Grammatik, Rechtschreibung & Leseverstehen für alle Klassenstufen.",
    url: "https://plizio.com/deutschtest",
    type: "website",
  },
};

export default function DeutschTestLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
