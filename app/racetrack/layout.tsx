import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Race Track - Free Online 3D Racing Game | PLIZIO",
  description:
    "Race against 6 AI opponents on 20 circuit tracks! Free online 3D browser racing game – no download needed. Pályaverseny ingyen | Kostenlos Rennspiel | Joc curse gratuit.",
  keywords: [
    // English
    "racing game", "free racing game online", "3D racing game browser",
    "online race game no download", "car racing game free", "circuit racing game",
    "racing game with AI", "20 levels racing",
    // Magyar
    "pályaverseny játék", "ingyenes versenyautós játék", "online autóverseny",
    "3D versenyautó böngésző", "autóverseny játék ingyen",
    // Deutsch
    "Rennspiel kostenlos online", "3D Rennspiel Browser", "Autorennen online kostenlos",
    "Rennspiel ohne Download", "Rennstrecke Spiel",
    // Română
    "joc curse online gratuit", "joc masini 3D browser", "joc curse fara download",
  ],
  openGraph: {
    title: "Race Track - Free Online 3D Racing Game | PLIZIO",
    description:
      "Race against 6 AI opponents on 20 circuit tracks! Free 3D browser racing – play instantly, no download.",
    url: "https://plizio.com/racetrack",
  },
  alternates: { canonical: "https://plizio.com/racetrack" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
