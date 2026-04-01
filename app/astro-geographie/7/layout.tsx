import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "AstroGeographie Klasse 7 | Plizio",
  description: "Grade 7 geography explorer with Asia, monsoon and natural forces.",
  alternates: { canonical: "https://plizio.com/astro-geographie/7/" },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
