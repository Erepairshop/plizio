import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildCourseSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "AstroGeschichte – Plizio",
  alternates: buildHreflangAlternates("/astro-geschichte/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildCourseSchema({ name: "AstroGeschichte", description: "AstroGeschichte", url: "/astro-geschichte/" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "AstroGeschichte", item: "/astro-geschichte/" }])} />
      {children}
    </>
  );
}
