import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildLearningResourceSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Mathe Test Klasse 8 – Kostenlose Übungsaufgaben – Plizio",
  description: "Kostenlose Mathe-Übungsaufgaben für Klasse 8: lineare Funktionen, Gleichungssysteme, Wahrscheinlichkeit und Geometrie.",
  alternates: buildHreflangAlternates("/mathe-test/klasse-8/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildLearningResourceSchema({ name: "Mathe Test Klasse 8 – Kostenlose Übungsaufgaben – Plizio", description: "Kostenlose Mathe-Übungsaufgaben für Klasse 8: lineare Funktionen, Gleichungssysteme, Wahrscheinlichkeit und Geometrie.", url: "/mathe-test/klasse-8/", educationalLevel: "Klasse 8" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "Mathe-Test", item: "/mathe-test/" }, { name: "Klasse 8", item: "/mathe-test/klasse-8/" }])} />
      {children}
    </>
  );
}
