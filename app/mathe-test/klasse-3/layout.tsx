import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildLearningResourceSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Mathe Test Klasse 3 – Kostenlose Übungsaufgaben – Plizio",
  description: "Kostenlose Mathe-Übungsaufgaben für Klasse 3: Einmaleins, schriftliches Rechnen, Sachaufgaben und Geometrie.",
  alternates: buildHreflangAlternates("/mathe-test/klasse-3/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildLearningResourceSchema({ name: "Mathe Test Klasse 3 – Kostenlose Übungsaufgaben – Plizio", description: "Kostenlose Mathe-Übungsaufgaben für Klasse 3: Einmaleins, schriftliches Rechnen, Sachaufgaben und Geometrie.", url: "/mathe-test/klasse-3/", educationalLevel: "Klasse 3" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "Mathe-Test", item: "/mathe-test/" }, { name: "Klasse 3", item: "/mathe-test/klasse-3/" }])} />
      {children}
    </>
  );
}
