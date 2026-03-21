import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AstroSachkunde Grade 4 – Plizio",
  description: "Explore 9 islands of environmental science: Human Body, Mammals & Birds, Reptiles, Ecosystems, Weather, Earth & Water, Energy, and Geography. Learn through missions and checkpoint tests.",
  alternates: {
    canonical: "https://plizio.com/astro-sachkunde/4/",
    languages: {
      hu: "https://plizio.com/astro-sachkunde/4/",
      de: "https://plizio.com/astro-sachkunde/4/",
      en: "https://plizio.com/astro-sachkunde/4/",
      ro: "https://plizio.com/astro-sachkunde/4/",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
