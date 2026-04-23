import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildLearningResourceSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Sachkunde Test Klasse 1 – Kostenlose Übungen – Plizio",
  description: "Kostenlose Sachkunde-Übungen für Klasse 1: Körper, Sinne, Tiere, Jahreszeiten und Familie interaktiv üben.",
  alternates: buildHreflangAlternates("/sachkunde-test/klasse-1/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildLearningResourceSchema({ name: "Sachkunde Test Klasse 1 – Kostenlose Übungen – Plizio", description: "Kostenlose Sachkunde-Übungen für Klasse 1: Körper, Sinne, Tiere, Jahreszeiten und Familie interaktiv üben.", url: "/sachkunde-test/klasse-1/", educationalLevel: "Klasse 1" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "Sachkunde-Test", item: "/sachkunde-test/" }, { name: "Klasse 1", item: "/sachkunde-test/klasse-1/" }])} />
      {children}
    </>
  );
}
