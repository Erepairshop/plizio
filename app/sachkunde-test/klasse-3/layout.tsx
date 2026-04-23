import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildLearningResourceSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Sachkunde Test Klasse 3 – Kostenlose Übungen – Plizio",
  description: "Kostenlose Sachkunde-Übungen für Klasse 3: Körperaufbau, Tierklassen, Botanik, Wetter und Technik interaktiv üben.",
  alternates: buildHreflangAlternates("/sachkunde-test/klasse-3/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildLearningResourceSchema({ name: "Sachkunde Test Klasse 3 – Kostenlose Übungen – Plizio", description: "Kostenlose Sachkunde-Übungen für Klasse 3: Körperaufbau, Tierklassen, Botanik, Wetter und Technik interaktiv üben.", url: "/sachkunde-test/klasse-3/", educationalLevel: "Klasse 3" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "Sachkunde-Test", item: "/sachkunde-test/" }, { name: "Klasse 3", item: "/sachkunde-test/klasse-3/" }])} />
      {children}
    </>
  );
}
