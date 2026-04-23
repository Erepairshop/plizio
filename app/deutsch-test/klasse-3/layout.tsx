import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildLearningResourceSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Deutsch Test Klasse 3 – Kostenlose Übungen – Plizio",
  description: "Kostenlose Deutsch-Übungen für Klasse 3: Nomen, Verben, Adjektive und Satzglieder interaktiv üben.",
  alternates: buildHreflangAlternates("/deutsch-test/klasse-3/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildLearningResourceSchema({ name: "Deutsch Test Klasse 3 – Kostenlose Übungen – Plizio", description: "Kostenlose Deutsch-Übungen für Klasse 3: Nomen, Verben, Adjektive und Satzglieder interaktiv üben.", url: "/deutsch-test/klasse-3/", educationalLevel: "Klasse 3" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "Deutsch-Test", item: "/deutsch-test/" }, { name: "Klasse 3", item: "/deutsch-test/klasse-3/" }])} />
      {children}
    </>
  );
}
