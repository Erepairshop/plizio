import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AstroKemia Klasse 8 – Organik & Energie | Plizio",
  description: "Chemie Klasse 8 mit organischer Chemie, Energiethemen, Gleichgewichten und moderner Anwendung.",
  alternates: { canonical: "https://plizio.com/astrokemia/8/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
