import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "AstroGeographie Klasse 6 | Plizio",
  description: "Grade 6 geography explorer with earth layers, climate zones and water cycle.",
  alternates: { canonical: "https://plizio.com/astro-geographie/6/" },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
