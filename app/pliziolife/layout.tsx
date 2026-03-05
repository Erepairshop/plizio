import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plizio Life – Virtual Home Simulator | Plizio",
  description:
    "Build and decorate your dream home in Plizio Life! Manage your avatar's needs, buy furniture, unlock new rooms, and create the ultimate cozy space. Earn stars from other Plizio games to expand your home.",
  alternates: { canonical: "https://plizio.com/pliziolife/" },
  openGraph: {
    title: "Plizio Life – Virtual Home Simulator",
    description: "Build your dream home, manage needs, and decorate rooms in this Sims-inspired virtual life game!",
    url: "https://plizio.com/pliziolife/",
    type: "website",
  },
};

export default function PlizioLifeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
