import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/seo/hreflang";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildLearningResourceSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Sachkunde Test Online – Kostenlos für Klasse 1–4 | PLIZIO",
  description: "Kostenloser Online-Sachkundetest für Klasse 1 bis 4. Übe Natur, Tiere, Körper, Technik und Gesellschaft – direkt im Browser, ohne Anmeldung.",
  alternates: buildHreflangAlternates("/sachkunde-test/"),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildLearningResourceSchema({ name: "Sachkunde-Test", description: "Kostenloser Online-Sachkundetest für Klasse 1 bis 4. Übe Natur, Tiere, Körper, Technik und Gesellschaft – direkt im Browser, ohne Anmeldung.", url: "/sachkunde-test/", educationalLevel: "Grades 1-4" })} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "Sachkunde-Test", item: "/sachkunde-test/" }])} />
      {children}
    </>
  );
}
