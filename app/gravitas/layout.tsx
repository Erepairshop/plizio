import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gravitas | Plizio",
  description: "A private prototype route for the flagship realtime world game concept inside Plizio.",
  alternates: buildHreflangAlternates("/gravitas/")};

export default function GravitasLayout({ children }: { children: React.ReactNode }) {
  return children;
}
