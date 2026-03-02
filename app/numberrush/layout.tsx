import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Number Rush - Free Online Number Speed Game",
  description:
    "How fast can you count? Play Number Rush - tap numbers 1 to 25 in order as fast as you can! Free online speed game, no download needed.",
  keywords: [
    "number game",
    "speed game",
    "counting game",
    "tap game",
    "free browser game",
    "number rush game",
  ],
  openGraph: {
    title: "Number Rush - Free Number Speed Game | PLIZIO",
    description:
      "Tap numbers 1 to 25 as fast as you can! Free browser-based speed game.",
    url: "https://plizio.com/numberrush",
  },
  twitter: {
    card: "summary_large_image",
    title: "Number Rush - Free Number Speed Game | PLIZIO",
    description: "Tap numbers 1 to 25 as fast as you can! Free browser speed game.",
    images: ["/icon-512.png"],
  },
  alternates: { canonical: "https://plizio.com/numberrush" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  name: "Number Rush",
  description:
    "A free online speed game where you tap numbers 1 to 25 in order as fast as possible. Train your brain and beat your best time.",
  url: "https://plizio.com/numberrush",
  genre: ["Arcade", "Speed", "Brain Game"],
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
