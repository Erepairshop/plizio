import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chemie Test – Klasse 5-8 | Plizio",
  description: "Kostenloser Chemietest für Klasse 5 bis 8. Teste dein Wissen über Stoffe, Teilchen, Reaktionen, Atome, Bindungen und mehr.",
  alternates: {
    canonical: "https://plizio.com/kemiatest/",
  },
  openGraph: {
    title: "Chemie Test – Klasse 5-8 | Plizio",
    description: "Kostenloser Chemietest für Klasse 5 bis 8 mit Generator-Fragen und visuellen Aufgaben.",
    url: "https://plizio.com/kemiatest/",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Chemie Test – Klasse 5-8 | Plizio",
    description: "Chemie testen in Klasse 5 bis 8 mit Generator-Fragen und visuellen Aufgaben.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
