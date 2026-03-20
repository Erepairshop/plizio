import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AstroMagyar – Magyar nyelvtan tanulás | Plizio",
  description: "Tanulj magyar nyelvet és nyelvtant űrkaland formájában! 1. osztályos tananyag szigetekre bontva.",
  alternates: { canonical: "https://plizio.com/astromagyar/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
