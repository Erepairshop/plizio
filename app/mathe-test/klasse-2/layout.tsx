import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildLearningResourceSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Mathe Test Klasse 2 – Kostenlose Übungsaufgaben – Plizio",
  description: "Kostenlose Mathe-Übungsaufgaben für Klasse 2: Zahlenraum 100, schriftliche Addition und das kleine Einmaleins.",
  alternates: buildHreflangAlternates("/mathe-test/klasse-2/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildLearningResourceSchema({ name: "Mathe Test Klasse 2 – Kostenlose Übungsaufgaben – Plizio", description: "Kostenlose Mathe-Übungsaufgaben für Klasse 2: Zahlenraum 100, schriftliche Addition und das kleine Einmaleins.", url: "/mathe-test/klasse-2/", educationalLevel: "Klasse 2" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "Mathe-Test", item: "/mathe-test/" }, { name: "Klasse 2", item: "/mathe-test/klasse-2/" }])} />
      {children}
    </>
  );
}
