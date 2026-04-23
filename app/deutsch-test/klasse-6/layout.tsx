import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildLearningResourceSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Deutsch Test Klasse 6 – Kostenlose Übungen – Plizio",
  description: "Kostenlose Deutsch-Übungen für Klasse 6: Zeitformen, Kasus, Satzgefüge und Textanalyse online üben.",
  alternates: buildHreflangAlternates("/deutsch-test/klasse-6/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildLearningResourceSchema({ name: "Deutsch Test Klasse 6 – Kostenlose Übungen – Plizio", description: "Kostenlose Deutsch-Übungen für Klasse 6: Zeitformen, Kasus, Satzgefüge und Textanalyse online üben.", url: "/deutsch-test/klasse-6/", educationalLevel: "Klasse 6" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "Deutsch-Test", item: "/deutsch-test/" }, { name: "Klasse 6", item: "/deutsch-test/klasse-6/" }])} />
      {children}
    </>
  );
}
