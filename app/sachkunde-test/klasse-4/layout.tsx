import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildLearningResourceSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Sachkunde Test Klasse 4 – Kostenlose Übungen – Plizio",
  description: "Kostenlose Sachkunde-Übungen für Klasse 4: Organe, Ökosysteme, Energie, Geographie und Klima interaktiv üben.",
  alternates: buildHreflangAlternates("/sachkunde-test/klasse-4/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildLearningResourceSchema({ name: "Sachkunde Test Klasse 4 – Kostenlose Übungen – Plizio", description: "Kostenlose Sachkunde-Übungen für Klasse 4: Organe, Ökosysteme, Energie, Geographie und Klima interaktiv üben.", url: "/sachkunde-test/klasse-4/", educationalLevel: "Klasse 4" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "Sachkunde-Test", item: "/sachkunde-test/" }, { name: "Klasse 4", item: "/sachkunde-test/klasse-4/" }])} />
      {children}
    </>
  );
}
