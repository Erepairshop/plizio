import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildLearningResourceSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Mathe Test Klasse 6 – Kostenlose Übungsaufgaben – Plizio",
  description: "Kostenlose Mathe-Übungsaufgaben für Klasse 6: negative Zahlen, Verhältnisse, Prozentrechnung und Geometrie.",
  alternates: buildHreflangAlternates("/mathe-test/klasse-6/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildLearningResourceSchema({ name: "Mathe Test Klasse 6 – Kostenlose Übungsaufgaben – Plizio", description: "Kostenlose Mathe-Übungsaufgaben für Klasse 6: negative Zahlen, Verhältnisse, Prozentrechnung und Geometrie.", url: "/mathe-test/klasse-6/", educationalLevel: "Klasse 6" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "Mathe-Test", item: "/mathe-test/" }, { name: "Klasse 6", item: "/mathe-test/klasse-6/" }])} />
      {children}
    </>
  );
}
