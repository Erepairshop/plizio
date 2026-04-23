import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildLearningResourceSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Deutsch Test Klasse 8 – Kostenlose Übungen – Plizio",
  description: "Kostenlose Deutsch-Übungen für Klasse 8: Erörterung, Textanalyse und erweiterte Grammatik online testen.",
  alternates: buildHreflangAlternates("/deutsch-test/klasse-8/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildLearningResourceSchema({ name: "Deutsch Test Klasse 8 – Kostenlose Übungen – Plizio", description: "Kostenlose Deutsch-Übungen für Klasse 8: Erörterung, Textanalyse und erweiterte Grammatik online testen.", url: "/deutsch-test/klasse-8/", educationalLevel: "Klasse 8" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "Deutsch-Test", item: "/deutsch-test/" }, { name: "Klasse 8", item: "/deutsch-test/klasse-8/" }])} />
      {children}
    </>
  );
}
