import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Race Track - Free Online Racing Game",
  description:
    "Race against AI opponents in Race Track! Free online 3D racing game with multiple levels. Build your win streak and unlock new challenges. Play instantly.",
  keywords: [
    "racing game",
    "free racing game",
    "3D racing game",
    "browser racing game",
    "online race game",
    "car racing game free",
  ],
  openGraph: {
    title: "Race Track - Free Online Racing Game | PLIZIO",
    description:
      "Race against AI opponents! Free 3D racing game with multiple levels - play instantly.",
    url: "https://plizio.com/racetrack",
  },
  alternates: { canonical: "https://plizio.com/racetrack" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
