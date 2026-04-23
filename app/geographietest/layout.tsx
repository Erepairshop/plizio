import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Geographie Test | Plizio",
  description: "Geographie lernen mit interaktiven Tests und Generatoren.",
  alternates: {
    ...buildHreflangAlternates("https://plizio.com/geographietest/"),
    canonical: "https://plizio.com/geographietest/"
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
