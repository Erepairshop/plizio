import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AstroKemia Klasse 6 – Atome & Trennmethoden | Plizio",
  description: "Chemie Klasse 6 mit Stofftrennung, Atomen, Elementen, Reaktionen und ersten Formelsystemen.",
  alternates: { canonical: "https://plizio.com/astrokemia/6/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
