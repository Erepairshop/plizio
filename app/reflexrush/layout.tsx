import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reflex Rush - Free Online Reflex Speed Game",
  description:
    "Test your reaction speed with Reflex Rush! Free online reflex game – tap the targets as fast as you can. No download needed, play instantly in your browser.",
  keywords: [
    "reflex game", "reaction speed game", "tap game", "reflex test",
    "free browser game", "speed game online", "Reaktionsspiel kostenlos",
    "reflex játék", "joc reflexe gratuit",
  ],
  openGraph: {
    title: "Reflex Rush - Free Online Reflex Speed Game | PLIZIO",
    description:
      "Test your reaction speed! Free browser reflex game – tap targets as fast as you can.",
    url: "https://plizio.com/reflexrush",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reflex Rush - Free Online Reflex Speed Game | PLIZIO",
    description: "How fast are your reflexes? Tap targets as quickly as possible!",
    images: ["/icon-512.png"],
  },
  alternates: { canonical: "https://plizio.com/reflexrush" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  name: "Reflex Rush",
  description:
    "A fast-paced reflex game where you tap targets as quickly as possible. Test and improve your reaction speed in this free browser game.",
  url: "https://plizio.com/reflexrush",
  genre: ["Arcade", "Reflex", "Action"],
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
