import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";

export const metadata: Metadata = {
  alternates: buildHreflangAlternates("/blog/learn-german-online-kids/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
