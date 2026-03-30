import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Topic Sort – Matching & Sorting Logic Game | Plizio",
  description: "Sort cards into Language, Math and Nature groups. 10 expedition levels with increasing challenge. Free sorting puzzle game.",
  keywords: [
    "topic sort game", "sorting puzzle", "matching game", "logic sorting game",
    "language math nature game", "categorization puzzle", "free browser game",
  ],
  openGraph: {
    title: "Topic Sort – Matching & Sorting Game | Plizio",
    description: "Sort cards into language, math and nature groups across 10 expedition levels.",
    url: "https://plizio.com/topicsort/",
    siteName: "Plizio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Topic Sort – Matching & Sorting Game | Plizio",
    description: "Sort cards into language, math and nature groups. Free online logic game.",
    images: ["/icon-512.png"],
  },
  alternates: {
    canonical: "https://plizio.com/topicsort/",
    languages: {
      hu: "https://plizio.com/topicsort/",
      de: "https://plizio.com/topicsort/",
      en: "https://plizio.com/topicsort/",
      ro: "https://plizio.com/topicsort/",
      "x-default": "https://plizio.com/topicsort/",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  name: "Topic Sort",
  description:
    "A sorting logic game where you place cards into language, math and nature groups across 10 expedition levels.",
  url: "https://plizio.com/topicsort/",
  genre: ["Puzzle", "Logic", "Brain Training"],
  inLanguage: ["en", "de", "hu", "ro"],
  operatingSystem: "Web Browser",
  applicationCategory: "Game",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function TopicSortLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
