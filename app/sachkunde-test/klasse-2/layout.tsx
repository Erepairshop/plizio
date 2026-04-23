import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildLearningResourceSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Sachkunde Test Klasse 2 – Kostenlose Übungen – Plizio",
  description: "Kostenlose Sachkunde-Übungen für Klasse 2: Ernährung, Lebensräume, Pflanzen, Wasser und Berufe interaktiv üben.",
  alternates: buildHreflangAlternates("/sachkunde-test/klasse-2/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildLearningResourceSchema({ name: "Sachkunde Test Klasse 2 – Kostenlose Übungen – Plizio", description: "Kostenlose Sachkunde-Übungen für Klasse 2: Ernährung, Lebensräume, Pflanzen, Wasser und Berufe interaktiv üben.", url: "/sachkunde-test/klasse-2/", educationalLevel: "Klasse 2" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "Sachkunde-Test", item: "/sachkunde-test/" }, { name: "Klasse 2", item: "/sachkunde-test/klasse-2/" }])} />
      {children}
    </>
  );
}
