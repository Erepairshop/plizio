import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AstroSachkunde Klasse 3 – Sachunterricht Abenteuer | Plizio",
  description: "Sachkunde für Klasse 3: Körperaufbau, Tierklassen, Botanik, Wetter, Technik und Navigation – als Weltraumabenteuer!",
  alternates: { canonical: "https://plizio.com/astro-sachkunde/3/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
