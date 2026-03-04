import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sky Climb - Free Online Platformer Game",
  description:
    "Jump and climb to the sky in Sky Climb! Free 3D platformer game in your browser. Collect power-ups, dodge obstacles and reach new heights. No download needed.",
  keywords: [
    "platformer game",
    "free platformer",
    "jumping game",
    "3D browser game",
    "sky climbing game",
    "free online platformer",
  ],
  openGraph: {
    title: "Sky Climb - Free 3D Platformer Game | PLIZIO",
    description:
      "Jump and climb to the sky! Free 3D platformer game - play instantly in your browser.",
    url: "https://plizio.com/skyclimb",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sky Climb - Free 3D Platformer Game | PLIZIO",
    description: "Jump and climb to the sky! Free 3D platformer – play instantly.",
    images: ["/icon-512.png"],
  },
  alternates: { canonical: "https://plizio.com/skyclimb" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  name: "Sky Climb",
  description:
    "A 3D platformer game where you jump and climb as high as possible, collecting power-ups and dodging obstacles. Play instantly in your browser.",
  url: "https://plizio.com/skyclimb",
  genre: ["Platformer", "Arcade", "Adventure"],
  inLanguage: ["en", "de", "hu", "ro"],
  operatingSystem: "Web Browser",
  applicationCategory: "Game",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
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
