import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AstroKemia Klasse 5 – Stoffe & Teilchen | Plizio",
  description: "Chemie Klasse 5 mit Stoffen, Teilchenmodell, Gemischen, Wasser, Luft und Laborgrundlagen.",
  alternates: { canonical: "https://plizio.com/astrokemia/5/" },
  openGraph: {
    title: "AstroKemia Klasse 5 – Stoffe & Teilchen | Plizio",
    description: "Chemie Klasse 5 mit Stoffen, Teilchenmodell, Gemischen, Wasser, Luft und Laborgrundlagen.",
    url: "https://plizio.com/astrokemia/5/",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
