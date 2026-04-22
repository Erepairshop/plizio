import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Észak-Macedónia térkép — Plizio | North Macedonia Map",
  description: "Fedezt fel Észak-Macedónia nevezetességeit és városait! / Entdecke Nordmazedonien! / Descoperă Macedonia de Nord! / Discover North Macedonia!",
};

export default function NorthMacedoniaMapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
