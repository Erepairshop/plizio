import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PLIZIO - Jocuri Online Gratuite în Browser | Joacă Imediat",
  description:
    "Joacă jocuri online gratuite în browser – fără descărcare! Jocuri de curse, quiz, memorie, reflexe și aventură. Disponibil pe orice dispozitiv.",
  openGraph: {
    title: "PLIZIO - Jocuri Online Gratuite în Browser",
    description:
      "Jocuri online gratuite, fără descărcare, fără înregistrare. Jocuri de curse, quiz, memorie și reflexe.",
    url: "https://plizio.com/ro/",
    locale: "ro_RO",
  },
  twitter: {
    card: "summary_large_image",
    title: "PLIZIO - Jocuri Online Gratuite în Browser",
    description: "Jocuri online gratuite – joacă imediat în browser!",
    images: ["/icon-512.png"],
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
