import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildCourseSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "AstroBiologie — Klasse 8",
  description: "Biologie lernen mit dem Weltraum-Abenteuer für Klasse 8 — Genetik, Hormone, Reproduktion",
  alternates: buildHreflangAlternates("/astro-biologie/8/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildCourseSchema({ name: "AstroBiologie 8", description: "Biologie lernen mit dem Weltraum-Abenteuer für Klasse 8 — Genetik, Hormone, Reproduktion", url: "/astro-biologie/8/" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "AstroBiologie", item: "/astro-biologie/" }, { name: "Grade 8", item: "/astro-biologie/8/" }])} />
      {children}
    </>
  );
}
