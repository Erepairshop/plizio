import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "AstroGeographie Klasse 8 | Plizio",
  description: "Grade 8 geography explorer with globalization, cities and climate.",
  alternates: { canonical: "https://plizio.com/astro-geographie/8/" },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
