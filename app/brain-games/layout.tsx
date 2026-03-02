import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Brain Games Online – Sharpen Your Mind | PLIZIO",
  description:
    "Train your brain with free online brain games. Memory challenges, word puzzles, logic quizzes and number games – all free, no download, play instantly in your browser.",
  keywords: [
    "brain games online", "free brain training", "memory games", "logic games",
    "puzzle games online", "brain teasers", "word puzzle games", "number games",
    "cognitive games", "brain workout games", "free mind games", "IQ games",
    "brain training no download", "mental agility games",
  ],
  alternates: {
    canonical: "https://plizio.com/brain-games/",
    languages: { "en": "https://plizio.com/brain-games/", "x-default": "https://plizio.com/brain-games/" },
  },
  openGraph: {
    title: "Free Brain Games Online – Sharpen Your Mind | PLIZIO",
    description: "Memory challenges, word puzzles, logic quizzes and number games. Free, no download, instant play.",
    url: "https://plizio.com/brain-games/",
    images: [{ url: "/og/brain-games.png", width: 1200, height: 630 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Free Brain Games Online",
  description: "A curated collection of free online brain games – memory challenges, word puzzles, logic quizzes and number games.",
  url: "https://plizio.com/brain-games/",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Kódex Expedíció",    url: "https://plizio.com/kodex/" },
      { "@type": "ListItem", position: 2, name: "Ki Nyer Milliót?",   url: "https://plizio.com/milliomos/" },
      { "@type": "ListItem", position: 3, name: "Word Scramble",      url: "https://plizio.com/wordscramble/" },
      { "@type": "ListItem", position: 4, name: "Memory Flash",       url: "https://plizio.com/memoryflash/" },
      { "@type": "ListItem", position: 5, name: "Quick Pick",         url: "https://plizio.com/quickpick/" },
      { "@type": "ListItem", position: 6, name: "Number Rush",        url: "https://plizio.com/numberrush/" },
      { "@type": "ListItem", position: 7, name: "Daily Challenge",    url: "https://plizio.com/daily/" },
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
