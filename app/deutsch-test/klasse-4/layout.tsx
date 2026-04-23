import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildLearningResourceSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Deutsch Test Klasse 4 – Kostenlose Übungen – Plizio",
  description: "Kostenlose Deutsch-Übungen für Klasse 4: Grammatik, Rechtschreibung und Satzanalyse mit sofortigem Feedback.",
  alternates: buildHreflangAlternates("/deutsch-test/klasse-4/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildLearningResourceSchema({ name: "Deutsch Test Klasse 4 – Kostenlose Übungen – Plizio", description: "Kostenlose Deutsch-Übungen für Klasse 4: Grammatik, Rechtschreibung und Satzanalyse mit sofortigem Feedback.", url: "/deutsch-test/klasse-4/", educationalLevel: "Klasse 4" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "Deutsch-Test", item: "/deutsch-test/" }, { name: "Klasse 4", item: "/deutsch-test/klasse-4/" }])} />
      {children}
    </>
  );
}
