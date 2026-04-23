import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildLearningResourceSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Testpapier Preview - SVG Library | Plizio",
  description: "Preview page for printable and interactive testpapier assets, SVG libraries, and classroom-ready question types.",
  alternates: buildHreflangAlternates("/testpapier-preview/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildLearningResourceSchema({ name: "Testpapier Preview", description: "Preview page for printable and interactive testpapier assets, SVG libraries, and classroom-ready question types.", url: "/testpapier-preview/", educationalLevel: "Grades K1-K8" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "Testpapier Preview", item: "/testpapier-preview/" }])} />
      {children}
    </>
  );
}
