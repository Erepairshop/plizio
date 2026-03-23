import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Physik Test – Klasse 5-8 | Plizio",
  description: "Kostenloser Physiktest für Klasse 5–8. Teste dein Wissen in Mechanik, Optik, Thermodynamik, Elektrizität und mehr.",
  alternates: { canonical: "https://plizio.com/physiktest/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
