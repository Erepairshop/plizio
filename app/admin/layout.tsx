import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin – Plizio",
  robots: { index: false, follow: false },
  alternates: buildHreflangAlternates("/admin/")};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
