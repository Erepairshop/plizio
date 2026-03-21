import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Sachkunde Test Online – Kostenlos für Klasse 1–4 | PLIZIO",
  description:
    "Kostenloser Online-Sachkundetest für Klasse 1 bis 4. Übe Natur, Tiere, Körper, Technik und Gesellschaft – direkt im Browser, ohne Anmeldung.",
  alternates: { canonical: "https://plizio.com/sachkundetest/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
