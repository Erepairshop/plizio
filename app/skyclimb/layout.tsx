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
  alternates: { canonical: "https://plizio.com/skyclimb" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
