import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildCourseSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "AstroBiologie — Klasse 6",
  description: "Biologie lernen mit dem Weltraum-Abenteuer für Klasse 6 — Wirbellose, Ökosystem, Kreislauf",
  alternates: buildHreflangAlternates("/astro-biologie/6/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildCourseSchema({ name: "AstroBiologie 6", description: "Biologie lernen mit dem Weltraum-Abenteuer für Klasse 6 — Wirbellose, Ökosystem, Kreislauf", url: "/astro-biologie/6/" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "AstroBiologie", item: "/astro-biologie/" }, { name: "Grade 6", item: "/astro-biologie/6/" }])} />
      {children}
    </>
  );
}
