import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AstroKemia – Chemie lernen | Plizio",
  description: "Lerne Chemie spielerisch in Klasse 5 bis 8 mit Inseln, Themenpfaden und Quiz-Training.",
  alternates: { canonical: "https://plizio.com/astrokemia/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
