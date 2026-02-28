import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop - Skins, Hats & Power-ups",
  description:
    "Customize your gaming experience! Buy skins, hats, trails and power-ups in the PLIZIO shop. Earn rewards by playing games and unlock cool items.",
  keywords: [
    "game shop",
    "game skins",
    "game customization",
    "game power-ups",
    "game rewards shop",
  ],
  openGraph: {
    title: "Shop - Skins & Power-ups | PLIZIO",
    description:
      "Customize your experience with skins, hats, trails and power-ups!",
    url: "https://plizio.com/shop",
  },
  alternates: { canonical: "https://plizio.com/shop" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
