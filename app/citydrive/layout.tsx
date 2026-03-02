import RelatedGames from "@/components/RelatedGames";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "City Drive - Free Online 3D Driving Game",
  description:
    "Drive through the city in this free 3D driving game! Complete missions, dodge traffic and explore. Play City Drive instantly in your browser - no download needed.",
  keywords: [
    "driving game",
    "3D driving game",
    "free car game",
    "city driving simulator",
    "browser driving game",
    "online car game",
  ],
  openGraph: {
    title: "City Drive - Free 3D Driving Game | PLIZIO",
    description:
      "Drive through the city! Free 3D driving game with missions - play instantly.",
    url: "https://plizio.com/citydrive",
  },
  twitter: {
    card: "summary_large_image",
    title: "City Drive - Free 3D Driving Game | PLIZIO",
    description: "Drive through the city! Free 3D driving game with missions.",
    images: ["/icon-512.png"],
  },
  alternates: { canonical: "https://plizio.com/citydrive" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  name: "City Drive",
  description:
    "A free 3D city driving game. Complete missions, dodge traffic and explore the city. Play instantly in your browser with no download.",
  url: "https://plizio.com/citydrive",
  genre: ["Driving", "Simulation", "Arcade"],
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
      <RelatedGames game="citydrive" />
    </>
  );
}
