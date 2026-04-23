import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plizio World – Fedezd fel a zónákat!",
  description: "Utazz Plizio világán keresztül – teljesítsd a zónákat és nyerj jutalmakat!",
  alternates: {
    ...buildHreflangAlternates("https://plizio.com/world/"),
    canonical: "https://plizio.com/world/"
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
