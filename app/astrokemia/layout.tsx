import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AstroKemia – Chemie lernen | Plizio",
  description: "Lerne Chemie spielerisch in Klasse 5 bis 8 mit Inseln, Themenpfaden und Quiz-Training.",
  alternates: { canonical: "https://plizio.com/astrokemia/" },
  openGraph: {
    title: "AstroKemia – Chemie lernen | Plizio",
    description: "Spielerisch Chemie lernen in Klasse 5 bis 8 mit Inseln, Themenpfaden und Quiz-Training.",
    url: "https://plizio.com/astrokemia/",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "AstroKemia – Chemie lernen | Plizio",
    description: "Chemie für Klasse 5 bis 8 mit Inseln, Explorer und Quiz-Training.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
