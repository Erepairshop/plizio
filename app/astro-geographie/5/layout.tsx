import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "AstroGeographie Klasse 5 | Plizio",
  description: "Grade 5 geography explorer with maps, directions and rivers.",
  alternates: { canonical: "https://plizio.com/astro-geographie/5/" },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
