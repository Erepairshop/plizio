import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AstroKemia Klasse 7 – Reaktionen & Bindungen | Plizio",
  description: "Chemie Klasse 7 mit chemischen Bindungen, Säuren, Basen, Salzen und Reaktionsmustern.",
  alternates: { canonical: "https://plizio.com/astrokemia/7/" },
  openGraph: {
    title: "AstroKemia Klasse 7 – Reaktionen & Bindungen | Plizio",
    description: "Chemie Klasse 7 mit chemischen Bindungen, Säuren, Basen, Salzen und Reaktionsmustern.",
    url: "https://plizio.com/astrokemia/7/",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
