import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s",
    default: "Montenegró térkép — Plizio",
  },
  description: "Interaktív Montenegró térkép. Fedezze fel Montenegró városait, természeti csodáit és történelmi nevezetességeit (Montenegro Karte, Montenegro Map, Harta Muntenegrului).",
};

export default function MontenegroMapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
