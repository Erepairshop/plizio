import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Moldova térkép — Plizio | Harta Moldovei | Moldova Map | Moldau Karte",
  description: "Interaktív Moldova térkép városokkal és látnivalókkal. Harta interactivă a Moldovei. Interactive map of Moldova. Interaktive Moldau Karte.",
};

export default function MoldovaMapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
