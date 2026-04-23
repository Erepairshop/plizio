import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  alternates: buildHreflangAlternates("/norway-map/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "Norway Map", item: "/norway-map/" }])} />
      {children}
    </>
  );
}
