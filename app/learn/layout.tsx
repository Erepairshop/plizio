import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kostenlos lernen mit interaktiven Übungen | Plizio",
  description:
    "Entdecke kostenlose Lernspiele, Übungen und Tests für Mathematik, Sprachen, Naturwissenschaften und Informatik.",
  alternates: {
    canonical: "https://plizio.com/learn/",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
