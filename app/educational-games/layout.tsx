import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Educational Games Online – Learn While You Play | PLIZIO",
  description:
    "Discover the best free educational games for kids and students. Math tests, word games, quiz challenges and more – no download, no sign-up. Play instantly on any device.",
  keywords: [
    "educational games online", "free learning games", "educational games for kids",
    "math games", "word games", "quiz games", "brain training games",
    "educational browser games", "free school games", "learning games no download",
    "kids educational games", "free math test", "vocabulary games",
  ],
  alternates: {
    canonical: "https://plizio.com/educational-games/",
    languages: { "en": "https://plizio.com/educational-games/", "x-default": "https://plizio.com/educational-games/" },
  },
  openGraph: {
    title: "Free Educational Games Online | PLIZIO",
    description: "Learn while you play – free math tests, word games, quiz challenges and more. No download required.",
    url: "https://plizio.com/educational-games/",
    images: [{ url: "/icon-512.png", width: 512, height: 512 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Free Educational Games Online",
  description: "A curated collection of free educational browser games for students and kids – math tests, word games, quiz challenges and more.",
  url: "https://plizio.com/educational-games/",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Math Test",          url: "https://plizio.com/mathtest/" },
      { "@type": "ListItem", position: 2, name: "Kódex Expedíció",    url: "https://plizio.com/kodex/" },
      { "@type": "ListItem", position: 3, name: "Word Scramble",      url: "https://plizio.com/wordscramble/" },
      { "@type": "ListItem", position: 4, name: "Quick Pick",         url: "https://plizio.com/quickpick/" },
      { "@type": "ListItem", position: 5, name: "Ki Nyer Milliót?",   url: "https://plizio.com/milliomos/" },
      { "@type": "ListItem", position: 6, name: "Daily Challenge",    url: "https://plizio.com/daily/" },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
