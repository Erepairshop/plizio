import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildCourseSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "AstroBiologie — Klasse 5",
  description: "Biologie lernen mit dem Weltraum-Abenteuer für Klasse 5",
  alternates: buildHreflangAlternates("/astro-biologie/5/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildCourseSchema({ name: "AstroBiologie 5", description: "Biologie lernen mit dem Weltraum-Abenteuer für Klasse 5", url: "/astro-biologie/5/" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "AstroBiologie", item: "/astro-biologie/" }, { name: "Grade 5", item: "/astro-biologie/5/" }])} />
      {children}
    </>
  );
}
