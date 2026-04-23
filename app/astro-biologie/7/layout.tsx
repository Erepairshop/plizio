import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildCourseSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "AstroBiologie — Klasse 7",
  description: "Biologie lernen mit dem Weltraum-Abenteuer für Klasse 7 — Zellen, Ökologie, Immunsystem",
  alternates: buildHreflangAlternates("/astro-biologie/7/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildCourseSchema({ name: "AstroBiologie 7", description: "Biologie lernen mit dem Weltraum-Abenteuer für Klasse 7 — Zellen, Ökologie, Immunsystem", url: "/astro-biologie/7/" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "AstroBiologie", item: "/astro-biologie/" }, { name: "Grade 7", item: "/astro-biologie/7/" }])} />
      {children}
    </>
  );
}
