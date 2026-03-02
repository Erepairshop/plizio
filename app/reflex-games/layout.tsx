import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Reflex Games Online – Test Your Reaction Time | PLIZIO",
  description:
    "Challenge your reflexes with free online reaction games. Racing, platformers, spot-the-difference, speed challenges and more – no download, instant play on any device.",
  keywords: [
    "reflex games online", "reaction time games", "speed games", "free action games",
    "racing games browser", "platformer games online", "free reflex training",
    "spot the difference game", "reaction games kids", "fast-paced browser games",
    "arcade games no download", "reflex test online", "speed challenge games",
  ],
  alternates: {
    canonical: "https://plizio.com/reflex-games/",
    languages: { "en": "https://plizio.com/reflex-games/", "x-default": "https://plizio.com/reflex-games/" },
  },
  openGraph: {
    title: "Free Reflex Games Online – Test Your Reactions | PLIZIO",
    description: "Racing, platformers, speed challenges and reflex training – free, no download, instant play.",
    url: "https://plizio.com/reflex-games/",
    images: [{ url: "/icon-512.png", width: 512, height: 512 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Free Reflex Games Online",
  description: "A curated collection of free online reflex and reaction games – racing, platformers, speed challenges and more.",
  url: "https://plizio.com/reflex-games/",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Reflex Rush",           url: "https://plizio.com/reflexrush/" },
      { "@type": "ListItem", position: 2, name: "Sky Climb",             url: "https://plizio.com/skyclimb/" },
      { "@type": "ListItem", position: 3, name: "Racetrack",             url: "https://plizio.com/racetrack/" },
      { "@type": "ListItem", position: 4, name: "City Drive",            url: "https://plizio.com/citydrive/" },
      { "@type": "ListItem", position: 5, name: "Spot the Difference",   url: "https://plizio.com/spotdiff/" },
      { "@type": "ListItem", position: 6, name: "Number Rush",           url: "https://plizio.com/numberrush/" },
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
