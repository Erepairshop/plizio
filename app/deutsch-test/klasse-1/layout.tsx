import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildLearningResourceSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Deutsch Test Klasse 1 – Kostenlose Übungen – Plizio",
  description: "Kostenlose Deutsch-Übungen für Klasse 1: Buchstaben, einfache Wörter und erste Sätze interaktiv üben.",
  alternates: buildHreflangAlternates("/deutsch-test/klasse-1/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildLearningResourceSchema({ name: "Deutsch Test Klasse 1 – Kostenlose Übungen – Plizio", description: "Kostenlose Deutsch-Übungen für Klasse 1: Buchstaben, einfache Wörter und erste Sätze interaktiv üben.", url: "/deutsch-test/klasse-1/", educationalLevel: "Klasse 1" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "Deutsch-Test", item: "/deutsch-test/" }, { name: "Klasse 1", item: "/deutsch-test/klasse-1/" }])} />
      {children}
    </>
  );
}
