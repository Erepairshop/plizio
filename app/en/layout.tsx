import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plizio: Free Learning for Kids with Tests, Games and Maps",
  description:
    "Free learning for kids: practice tests, interactive subject games and explorable maps for math, science, history and geography. 4 languages, no sign-up.",
  openGraph: {
    title: "Plizio: Free Learning for Kids with Tests, Games and Maps",
    description:
      "Practice tests, interactive subject games and explorable maps for kids. Math, science, history, geography. 4 languages.",
    url: "https://plizio.com/en/",
    locale: "en_US",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plizio: Free Learning for Kids with Tests, Games and Maps",
    description: "Free learning for kids: tests, games and maps. 4 languages, no sign-up.",
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
