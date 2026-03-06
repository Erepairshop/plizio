import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Szobám – Plizio",
  description: "Rendezd be a szobádat! Izometrikus szoba bútorokkal, háziállattal és családoddal.",
  alternates: { canonical: "https://plizio.com/room/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
