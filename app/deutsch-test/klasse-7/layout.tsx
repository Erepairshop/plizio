import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildLearningResourceSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Deutsch Test Klasse 7 – Kostenlose Übungen – Plizio",
  description: "Kostenlose Deutsch-Übungen für Klasse 7: Stilmittel, komplexe Grammatik und Textinterpretation üben.",
  alternates: buildHreflangAlternates("/deutsch-test/klasse-7/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildLearningResourceSchema({ name: "Deutsch Test Klasse 7 – Kostenlose Übungen – Plizio", description: "Kostenlose Deutsch-Übungen für Klasse 7: Stilmittel, komplexe Grammatik und Textinterpretation üben.", url: "/deutsch-test/klasse-7/", educationalLevel: "Klasse 7" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "Deutsch-Test", item: "/deutsch-test/" }, { name: "Klasse 7", item: "/deutsch-test/klasse-7/" }])} />
      {children}
    </>
  );
}
