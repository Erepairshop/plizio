import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "AstroGeographie – Geo Explorer | Plizio",
  description: "Explore geography with an interactive grade 5 to 8 explorer system.",
  alternates: { canonical: "https://plizio.com/astro-geographie/" },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
