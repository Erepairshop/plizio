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
  alternates: { canonical: "https://plizio.com/citydrive" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
