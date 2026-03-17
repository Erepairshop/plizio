import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Impressum – Plizio",
  description: "Impressum und Anbieterkennzeichnung für Plizio – das kostenlose Lernspiel-Portal.",
  alternates: { canonical: "https://plizio.com/impressum/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
