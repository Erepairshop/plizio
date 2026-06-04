import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plizio: Learning, Interactive Maps and City Day Plans",
  description:
    "Explore travel destinations and cities with interactive maps and ready-made day plans. Plus free learning and practice tests for kids. 4 languages, no sign-up.",
  openGraph: {
    title: "Plizio: Learning, Interactive Maps and City Day Plans",
    description:
      "Travel destinations, cities, interactive maps and day plans. Plus free learning and tests for kids. 4 languages.",
    url: "https://plizio.com/en/",
    locale: "en_US",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plizio: Learning, Interactive Maps and City Day Plans",
    description: "Travel destinations, maps and day plans, plus learning for kids. 4 languages, no sign-up.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://plizio.com/en/",
    languages: {
      hu: "https://plizio.com/hu/",
      de: "https://plizio.com/de/",
      en: "https://plizio.com/en/",
      ro: "https://plizio.com/ro/",
      "x-default": "https://plizio.com/",
    },
  },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return children;
}
