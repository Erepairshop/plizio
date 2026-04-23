import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildLearningResourceSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Deutsch Test Klasse 2 – Kostenlose Übungen – Plizio",
  description: "Kostenlose Deutsch-Übungen für Klasse 2: Rechtschreibung, Wortarten und einfache Grammatik spielerisch üben.",
  alternates: buildHreflangAlternates("/deutsch-test/klasse-2/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildLearningResourceSchema({ name: "Deutsch Test Klasse 2 – Kostenlose Übungen – Plizio", description: "Kostenlose Deutsch-Übungen für Klasse 2: Rechtschreibung, Wortarten und einfache Grammatik spielerisch üben.", url: "/deutsch-test/klasse-2/", educationalLevel: "Klasse 2" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "Deutsch-Test", item: "/deutsch-test/" }, { name: "Klasse 2", item: "/deutsch-test/klasse-2/" }])} />
      {children}
    </>
  );
}
